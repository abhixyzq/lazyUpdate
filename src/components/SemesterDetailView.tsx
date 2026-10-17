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
  ExternalLink,
  BookOpen,
  Circle,
  Layers,
} from 'lucide-react';
import { formatUnitTopics, stripHindiTranslations } from '@/utils/syllabusTopicParser';
import { TopicActionModal } from './TopicActionModal';
import { getAmazonSearchUrl } from '@/utils/amazon';
import { BottomNav } from '@/components/BottomNav';

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
      className={`group relative flex items-start justify-between gap-2.5 rounded-xl p-2 select-none cursor-pointer transition-all duration-150 ${
        isCompleted
          ? 'bg-emerald-50/60 border border-emerald-200/80'
          : 'hover:bg-slate-50 border border-transparent hover:border-slate-200/60'
      }`}
      title="Double-tap to mark complete • Long-press for YouTube & AI"
    >
      <div className="flex items-start gap-2.5 min-w-0 flex-1">
        {isCompleted ? (
          <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5 stroke-[2.2]" />
        ) : (
          <Circle className="h-4 w-4 text-slate-300 shrink-0 mt-0.5 stroke-[1.5] group-hover:text-slate-400" />
        )}
        <span
          className={`text-xs leading-relaxed transition-all ${
            isCompleted
              ? 'text-emerald-950 font-medium line-through decoration-emerald-600/60'
              : 'text-slate-700 font-normal'
          }`}
        >
          {topic}
        </span>
      </div>

      {isCompleted && (
        <span className="rounded-full bg-emerald-100/80 px-2 py-0.2 text-[9px] font-semibold text-emerald-800 shrink-0 self-center border border-emerald-200">
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
    <div className="min-h-screen bg-[#fafbfc] text-slate-900 pb-28 sm:pb-20">
      {/* 1. Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-md px-4 py-2.5">
        <div className="mx-auto flex max-w-xl items-center justify-between gap-3">
          <Link
            href={`/syllabus/${course.id}`}
            className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-slate-600 border border-slate-200/80 hover:border-emerald-300 hover:text-emerald-700 transition active:scale-95 shrink-0"
            title={`Back to ${course.shortCode} Semesters`}
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div className="text-center min-w-0 flex-1">
            <h1 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
              {course.shortCode} • {getOrdinal(semesterNumber)} Sem
            </h1>
            <p className="text-[11px] font-medium text-emerald-700 truncate">
              {stripHindiTranslations(course.name)}
            </p>
          </div>
          <Link
            href={`/syllabus/${course.id}`}
            className="rounded-xl border border-slate-200/80 bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-600 hover:border-emerald-300 hover:text-emerald-700 transition shrink-0"
          >
            Semesters
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-xl px-4 pt-4 space-y-4">
        {/* Top Header Card */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-3.5 shadow-2xs">
          <div className="flex items-center justify-between gap-2">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                {getOrdinal(semesterNumber)} Semester
              </span>
              <h2 className="text-sm font-bold text-slate-900 mt-1">
                {stripHindiTranslations(course.name).replace(/\s*\((?:CBCS\s*)?(?:4-Year\s*)?(?:FYUGP\s*)?[^)]*\)/gi, '').trim()}
              </h2>
            </div>
            <span className="text-[11px] font-medium text-slate-400 bg-slate-50 px-2.5 py-1 rounded-xl border border-slate-100 shrink-0">
              {semesterData.papers.length} Papers
            </span>
          </div>
        </div>

        {/* Paper Tabs Selector (Clean Horizontal Scroll) */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between px-1">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Select Paper / Course
            </span>
            <span className="text-[11px] text-emerald-700 font-medium">
              {activePaper?.code || ''}
            </span>
          </div>

          <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {semesterData.papers.map((paper) => {
              const isSelected = activePaper?.id === paper.id;

              return (
                <button
                  key={paper.id}
                  type="button"
                  onClick={() => setActivePaperId(paper.id)}
                  className={`whitespace-nowrap rounded-xl px-3.5 py-2 text-xs font-semibold transition-all duration-150 shrink-0 ${
                    isSelected
                      ? 'bg-emerald-700 text-white shadow-2xs'
                      : 'bg-white border border-slate-200/80 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <span>{paper.code || stripHindiTranslations(paper.name)}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Paper Detailed View */}
        {activePaper ? (
          <div className="rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-2xs space-y-4 animate-in fade-in duration-150">
            {/* Paper Header */}
            <div className="border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                {activePaper.code && (
                  <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-800 border border-emerald-200/60">
                    {activePaper.code}
                  </span>
                )}
                {activePaper.credits && (
                  <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600">
                    {activePaper.credits} Credits
                  </span>
                )}
                {activePaper.paperType && (
                  <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600">
                    {activePaper.paperType}
                  </span>
                )}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                {stripHindiTranslations(activePaper.name)}
              </h3>
            </div>

            {/* Gesture Hint Strip (Lightweight) */}
            <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 py-2 px-3 flex items-center gap-2 text-[11px] font-medium text-emerald-900">
              <Sparkles className="h-3.5 w-3.5 text-emerald-700 shrink-0" />
              <span>Double-tap any topic to mark complete • Long-press for AI explainer</span>
            </div>

            {/* Units & Topics List */}
            {activePaper.units && activePaper.units.length > 0 ? (
              <div className="space-y-4 pt-1">
                {activePaper.units.map((unit) => {
                  const topics = formatUnitTopics(unit.topics);
                  return (
                    <div key={unit.unitNumber} className="space-y-2">
                      {/* Unit Title Header */}
                      <div className="flex items-center gap-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded-md bg-emerald-50 text-emerald-800 text-[10px] font-bold border border-emerald-200/50 shrink-0">
                          {unit.unitNumber}
                        </span>
                        <h4 className="font-semibold text-xs sm:text-sm text-slate-900">
                          Unit {unit.unitNumber}: {stripHindiTranslations(unit.title)}
                        </h4>
                      </div>

                      {/* Sub-topics interactive list */}
                      {topics && topics.length > 0 && (
                        <div className="pl-2 space-y-0.5">
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
              <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-4 text-center text-xs text-slate-500 font-normal">
                {activePaper.paperType === 'Internship'
                  ? 'Summer Internship Paper — Practical evaluation & viva.'
                  : activePaper.paperType === 'Research Project'
                  ? 'Research Project / Dissertation — Supervision & thesis viva.'
                  : 'Syllabus content to be selected from University Academic Basket.'}
              </div>
            )}

            {/* Recommended Reference Books */}
            {activePaper.recommendedBooks && activePaper.recommendedBooks.length > 0 && (
              <div className="pt-3 border-t border-slate-100 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Recommended Textbooks:
                  </span>
                  <span className="text-[10px] text-slate-400 font-normal hidden sm:inline">
                    Direct Amazon search
                  </span>
                </div>
                <div className="space-y-1.5">
                  {activePaper.recommendedBooks.map((book, bIdx) => (
                    <div
                      key={bIdx}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 rounded-xl bg-slate-50/60 hover:bg-slate-50 border border-slate-200/60 transition group"
                    >
                      <div className="flex items-start gap-2 text-xs text-slate-800 min-w-0">
                        <BookOpen className="h-3.5 w-3.5 text-slate-400 shrink-0 mt-0.5" />
                        <span className="leading-snug font-medium truncate">{book}</span>
                      </div>
                      <a
                        href={getAmazonSearchUrl(book)}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="inline-flex items-center gap-1 shrink-0 self-start sm:self-center rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 px-2.5 py-1 text-[11px] font-medium shadow-2xs transition active:scale-95"
                        title="Search & buy on Amazon India"
                      >
                        <span>Buy on Amazon</span>
                        <ExternalLink className="h-2.5 w-2.5 text-slate-400" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center text-xs text-slate-500">
            No papers found for this semester.
          </div>
        )}

        {/* Quick Prev / Next Semester Switcher */}
        <div className="flex items-center justify-between gap-3 pt-1">
          {prevSem ? (
            <Link
              href={`/syllabus/${course.id}/sem-${prevSem}`}
              className="flex items-center gap-1.5 rounded-xl border border-slate-200/80 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-emerald-700 hover:border-emerald-300 shadow-2xs transition"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              <span>{getOrdinal(prevSem)} Semester</span>
            </Link>
          ) : (
            <div />
          )}

          {nextSem ? (
            <Link
              href={`/syllabus/${course.id}/sem-${nextSem}`}
              className="flex items-center gap-1.5 rounded-xl border border-slate-200/80 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-emerald-700 hover:border-emerald-300 shadow-2xs transition"
            >
              <span>{getOrdinal(nextSem)} Semester</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* Back Link */}
        <div className="pt-2 text-center">
          <Link
            href={`/syllabus/${course.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-emerald-700 transition"
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
          topic={stripHindiTranslations(modalTopic)}
          courseName={stripHindiTranslations(course.name).replace(/\s*\((?:CBCS\s*)?(?:4-Year\s*)?(?:FYUGP\s*)?[^)]*\)/gi, '').trim()}
          paperName={stripHindiTranslations(activePaper?.name || 'Syllabus Paper')}
          isCompleted={(() => {
            for (const key of completedTopicKeys) {
              if (key.includes(modalTopic.slice(0, 30))) return true;
            }
            return false;
          })()}
          onToggleComplete={() => {
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

      {/* Persistent Bottom Nav */}
      <BottomNav />
    </div>
  );
};
