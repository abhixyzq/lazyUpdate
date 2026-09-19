'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';
import { CourseSyllabus, SyllabusPaper } from '@/types';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  Info,
} from 'lucide-react';
import { formatUnitTopics } from '@/utils/syllabusTopicParser';
import { TopicActionModal } from './TopicActionModal';

interface SemesterDetailViewProps {
  course: CourseSyllabus;
  semesterNumber: number;
}

const getOrdinal = (n: number) => {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

interface TopicItemProps {
  topic: string;
  topicKey: string;
  isCompleted: boolean;
  onToggleComplete: () => void;
  onLongPress: () => void;
}

const TopicItem: React.FC<TopicItemProps> = ({
  topic,
  isCompleted,
  onToggleComplete,
  onLongPress,
}) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const lastTapRef = useRef<number>(0);
  const isLongPressActiveRef = useRef<boolean>(false);

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    isLongPressActiveRef.current = false;
    const touch = e.touches[0];
    startPosRef.current = { x: touch.clientX, y: touch.clientY };

    // 450ms long press timer
    timerRef.current = setTimeout(() => {
      isLongPressActiveRef.current = true;
      if (typeof window !== 'undefined' && window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate(35);
      }
      onLongPress();
    }, 450);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    const dx = Math.abs(touch.clientX - startPosRef.current.x);
    const dy = Math.abs(touch.clientY - startPosRef.current.y);
    if (dx > 8 || dy > 8) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    }
  };

  const handleTouchEnd = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    if (isLongPressActiveRef.current) {
      return;
    }

    // Detect double tap
    const now = Date.now();
    const timeSinceLast = now - lastTapRef.current;
    if (timeSinceLast < 320 && timeSinceLast > 40) {
      if (typeof window !== 'undefined' && window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate([25, 25]);
      }
      onToggleComplete();
      lastTapRef.current = 0;
    } else {
      lastTapRef.current = now;
    }
  };

  // Mouse handlers for desktop
  const handleMouseDown = () => {
    isLongPressActiveRef.current = false;
    timerRef.current = setTimeout(() => {
      isLongPressActiveRef.current = true;
      onLongPress();
    }, 450);
  };

  const handleMouseUp = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onDoubleClick={onToggleComplete}
      onContextMenu={(e) => {
        e.preventDefault();
        onLongPress();
      }}
      className={`group relative flex items-start justify-between gap-2.5 rounded-xl p-2 sm:p-2.5 select-none cursor-pointer transition-all duration-150 ${
        isCompleted
          ? 'bg-emerald-50/70 border border-emerald-200/90 shadow-2xs'
          : 'hover:bg-slate-50 border border-transparent hover:border-slate-200/80'
      }`}
      title="Double-tap to mark complete • Long-press for YouTube & AI"
    >
      <div className="flex items-start gap-2.5 min-w-0 flex-1">
        {isCompleted ? (
          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
        ) : (
          <span className="text-slate-400 font-bold text-sm shrink-0 mt-0.5 leading-none">◦</span>
        )}
        <span
          className={`text-xs leading-relaxed transition-all ${
            isCompleted
              ? 'text-emerald-950 font-semibold line-through decoration-emerald-500/70'
              : 'text-slate-800 font-medium'
          }`}
        >
          {topic}
        </span>
      </div>

      {isCompleted && (
        <span className="rounded-full bg-emerald-100 px-1.5 py-0.2 text-[9px] font-black text-emerald-800 shrink-0 self-center border border-emerald-200">
          Done ✓
        </span>
      )}
    </div>
  );
};

export const SemesterDetailView: React.FC<SemesterDetailViewProps> = ({
  course,
  semesterNumber,
}) => {
  const semesterData = useMemo(() => {
    return (
      course.semesters.find((s) => s.semester === semesterNumber) ||
      course.semesters[0]
    );
  }, [course, semesterNumber]);

  const [activePaperId, setActivePaperId] = useState<string>(
    semesterData.papers[0]?.id || ''
  );

  // Active Paper
  const activePaper: SyllabusPaper | undefined = useMemo(() => {
    return (
      semesterData.papers.find((p) => p.id === activePaperId) ||
      semesterData.papers[0]
    );
  }, [semesterData, activePaperId]);

  // Completed Topics State (persisted in localStorage)
  const [completedTopicKeys, setCompletedTopicKeys] = useState<Set<string>>(new Set());

  // Action modal state
  const [modalTopic, setModalTopic] = useState<string | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('lazy_pu_completed_syllabus_topics');
      if (stored) {
        const arr = JSON.parse(stored);
        if (Array.isArray(arr)) {
          setCompletedTopicKeys(new Set(arr));
        }
      }
    } catch {
      // LocalStorage fallback
    }
  }, []);

  const toggleTopicCompletion = (key: string) => {
    setCompletedTopicKeys((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      try {
        localStorage.setItem(
          'lazy_pu_completed_syllabus_topics',
          JSON.stringify(Array.from(next))
        );
      } catch {
        // Fallback
      }
      return next;
    });
  };

  // Helper to generate unique key for each topic
  const getTopicKey = (unitNumber: number, topicIndex: number, topicText: string) => {
    return `${course.id}_sem${semesterNumber}_${activePaper?.id || 'paper'}_u${unitNumber}_${topicIndex}_${topicText.slice(0, 30)}`;
  };

  const prevSem = semesterNumber > 1 ? semesterNumber - 1 : null;
  const nextSem = semesterNumber < course.totalSemesters ? semesterNumber + 1 : null;

  return (
    <div className="min-h-screen bg-transparent text-slate-900 pb-28 sm:pb-16">
      {/* 1. Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200/90 bg-white/95 backdrop-blur-md px-3 py-3">
        <div className="mx-auto flex max-w-xl items-center justify-between gap-3">
          <Link
            href={`/syllabus/${course.id}`}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200 hover:text-slate-900 transition active:scale-95 shrink-0"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div className="text-center min-w-0 flex-1">
            <h1 className="text-sm font-black text-slate-900 truncate">
              {course.shortCode} • {getOrdinal(semesterNumber)} Sem
            </h1>
            <p className="text-[10px] font-bold text-blue-600 truncate">
              {course.name}
            </p>
          </div>
          <Link
            href={`/syllabus/${course.id}`}
            className="rounded-xl border border-slate-200 bg-slate-100 px-2.5 py-1.5 text-[11px] font-bold text-slate-700 hover:bg-slate-200 hover:text-slate-900 transition shrink-0"
          >
            Semesters
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-xl px-3 pt-3 space-y-3.5">
        {/* Top Banner Card: Course & Semester */}
        <div className="rounded-2xl border border-blue-200/80 bg-blue-50/60 p-3 sm:p-3.5 text-center shadow-xs">
          <h2 className="text-xs sm:text-sm font-black text-blue-950 uppercase tracking-wide">
            {course.name.replace(/\s*\((?:CBCS\s*)?(?:4-Year\s*)?(?:FYUGP\s*)?[^)]*\)/gi, '').trim()}
          </h2>
          <p className="text-[11px] font-bold text-blue-700 mt-0.5">
            {getOrdinal(semesterNumber)} Semester Syllabus
          </p>
        </div>

        {/* Section Heading */}
        <div className="text-center pt-1">
          <span className="text-xs font-black tracking-widest text-blue-600 uppercase">
            Select Paper in this Semester
          </span>
        </div>

        {/* Linear Vertical Button List of Papers */}
        <div className="flex flex-col gap-2">
          {semesterData.papers.map((paper) => {
            const isSelected = activePaper?.id === paper.id;

            return (
              <button
                key={paper.id}
                type="button"
                onClick={() => setActivePaperId(paper.id)}
                className={`w-full rounded-2xl py-2.5 sm:py-3 px-4 text-center transition-all duration-150 active:scale-98 border text-xs sm:text-sm ${
                  isSelected
                    ? 'bg-amber-400 border-amber-500 text-slate-950 font-black shadow-md ring-2 ring-amber-400/40'
                    : 'bg-white border-slate-200/90 text-slate-800 font-bold hover:bg-slate-50 hover:border-slate-300 shadow-2xs'
                }`}
              >
                <span>
                  {paper.code ? `${paper.code} : ` : ''}{paper.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Paper Detailed View */}
        {activePaper ? (
          <div className="rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-sm space-y-3.5 animate-in fade-in duration-150 mt-2">
            
            {/* Paper Title Header */}
            <div className="text-center pb-2 border-b border-slate-100">
              <h3 className="text-sm sm:text-base font-black text-blue-600 uppercase tracking-wide">
                {activePaper.code ? `${activePaper.code} : ` : ''}{activePaper.name}
              </h3>
            </div>

            {/* Gesture Hint Strip */}
            <div className="rounded-xl border border-amber-200/80 bg-amber-50/60 py-1.5 px-3 flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-amber-900">
              <Sparkles className="h-3 w-3 text-amber-600 shrink-0" />
              <span>Double-tap topic to mark complete • Long-press for YouTube & AI</span>
            </div>

            {/* Units & Topics List */}
            {activePaper.units && activePaper.units.length > 0 ? (
              <div className="space-y-4 pt-1">
                {activePaper.units.map((unit) => {
                  const topics = formatUnitTopics(unit.topics);
                  return (
                    <div key={unit.unitNumber} className="space-y-2">
                      {/* Unit Title with Bullet */}
                      <div className="flex items-center gap-2 font-black text-xs sm:text-sm text-amber-800">
                        <span className="h-2 w-2 rounded-full bg-amber-500 shrink-0" />
                        <span>
                          Unit {unit.unitNumber}: {unit.title}
                        </span>
                      </div>

                      {/* Sub-topics interactive list */}
                      {topics && topics.length > 0 && (
                        <div className="pl-2 sm:pl-3 space-y-1">
                          {topics.map((topic, tIdx) => {
                            const key = getTopicKey(unit.unitNumber, tIdx, topic);
                            const isCompleted = completedTopicKeys.has(key);

                            return (
                              <TopicItem
                                key={key}
                                topic={topic}
                                topicKey={key}
                                isCompleted={isCompleted}
                                onToggleComplete={() => toggleTopicCompletion(key)}
                                onLongPress={() => setModalTopic(topic)}
                              />
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center text-xs text-slate-500 font-medium">
                {activePaper.paperType === 'Internship'
                  ? 'Summer Internship Paper — Practical evaluation & viva.'
                  : activePaper.paperType === 'Research Project'
                  ? 'Research Project / Dissertation — Supervision & thesis viva.'
                  : 'Syllabus content to be selected from University Academic Basket.'}
              </div>
            )}

            {/* Recommended Reference Books (Clean Minimal List) */}
            {activePaper.recommendedBooks && activePaper.recommendedBooks.length > 0 && (
              <div className="pt-3 border-t border-slate-100 space-y-1.5">
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 block">
                  Reference Books:
                </span>
                <ul className="space-y-1 text-xs text-slate-700 pl-4 list-disc marker:text-amber-500">
                  {activePaper.recommendedBooks.map((book, bIdx) => (
                    <li key={bIdx}>{book}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center text-xs text-slate-500">
            No papers found for this semester.
          </div>
        )}

        {/* Quick Prev / Next Semester Switcher */}
        <div className="flex items-center justify-between gap-3 pt-2">
          {prevSem ? (
            <Link
              href={`/syllabus/${course.id}/sem-${prevSem}`}
              className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-slate-900 hover:border-slate-300 shadow-xs transition"
            >
              <ChevronLeft className="h-3.5 w-3.5 text-blue-600" />
              <span>{getOrdinal(prevSem)} Semester</span>
            </Link>
          ) : (
            <div />
          )}

          {nextSem ? (
            <Link
              href={`/syllabus/${course.id}/sem-${nextSem}`}
              className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-slate-900 hover:border-slate-300 shadow-xs transition"
            >
              <span>{getOrdinal(nextSem)} Semester</span>
              <ChevronRight className="h-3.5 w-3.5 text-blue-600" />
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* Back Link */}
        <div className="pt-2 text-center">
          <Link
            href={`/syllabus/${course.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 transition"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to {course.shortCode} Semesters
          </Link>
        </div>
      </main>

      {/* Long-Press Action Modal (YouTube / Ask AI / Mark Done) */}
      {modalTopic && (
        <TopicActionModal
          isOpen={Boolean(modalTopic)}
          onClose={() => setModalTopic(null)}
          topic={modalTopic}
          courseName={course.name.replace(/\s*\((?:CBCS\s*)?(?:4-Year\s*)?(?:FYUGP\s*)?[^)]*\)/gi, '').trim()}
          paperName={activePaper?.name || 'Syllabus Paper'}
          isCompleted={(() => {
            // Check if active topic is completed
            for (const key of completedTopicKeys) {
              if (key.includes(modalTopic.slice(0, 30))) return true;
            }
            return false;
          })()}
          onToggleComplete={() => {
            // Find key and toggle
            let targetKey = '';
            activePaper?.units?.forEach((unit) => {
              const topics = formatUnitTopics(unit.topics);
              topics.forEach((t, idx) => {
                if (t === modalTopic) {
                  targetKey = getTopicKey(unit.unitNumber, idx, t);
                }
              });
            });
            if (targetKey) {
              toggleTopicCompletion(targetKey);
            }
          }}
        />
      )}
    </div>
  );
};
