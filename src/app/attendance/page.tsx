'use client';

import React, { useState, useEffect } from 'react';
import { SubpageHeader } from '@/components/SubpageHeader';
import {
  Calendar as CalendarIcon,
  CheckCircle2,
  AlertTriangle,
  Plus,
  Settings,
  Sparkles,
  BarChart3,
  CalendarDays,
  Layers,
  RotateCcw,
  Download,
  Upload,
  BookOpen,
  HelpCircle,
} from 'lucide-react';
import {
  AttendanceProfile,
  SubjectItem,
  AttendanceStatus,
  SubjectStats,
} from '@/types/attendance';
import {
  loadAttendanceProfile,
  saveAttendanceProfile,
  calculateStats,
  formatDateKey,
  createDefaultProfile,
} from '@/utils/attendanceStorage';

import { DailyAttendanceLogger } from '@/components/attendance/DailyAttendanceLogger';
import { AttendanceStatsOverview } from '@/components/attendance/AttendanceStatsOverview';
import { SubjectAttendanceCard } from '@/components/attendance/SubjectAttendanceCard';
import { AttendanceCalendarView } from '@/components/attendance/AttendanceCalendarView';
import { AttendanceSetupModal } from '@/components/attendance/AttendanceSetupModal';
import { SubjectFormModal } from '@/components/attendance/SubjectFormModal';
import { AttendanceSimulatorModal } from '@/components/attendance/AttendanceSimulatorModal';

type ActiveTab = 'daily' | 'subjects' | 'calendar';

export default function AttendancePage() {
  const [profile, setProfile] = useState<AttendanceProfile | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<ActiveTab>('daily');
  const [currentDateKey, setCurrentDateKey] = useState<string>(() => formatDateKey(new Date()));

  // Modals
  const [isSetupOpen, setIsSetupOpen] = useState(false);
  const [isSubjectModalOpen, setIsSubjectModalOpen] = useState(false);
  const [editingSubject, setEditingSubject] = useState<SubjectItem | null>(null);
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    const saved = loadAttendanceProfile();
    if (saved) {
      setProfile(saved);
    } else {
      // Auto-initialize with default B.Sc Physics Sem 1, but prompt setup
      const initial = createDefaultProfile('B.Sc Physics', 1);
      setProfile(initial);
      saveAttendanceProfile(initial);
      setIsSetupOpen(true);
    }
    setIsLoaded(true);
  }, []);

  if (!isLoaded || !profile) {
    return (
      <div className="min-h-screen bg-transparent text-slate-900 pb-12">
        <SubpageHeader title="Attendance" />
        <div className="mx-auto max-w-xl px-3 pt-8 text-center text-xs font-bold text-slate-400">
          Loading your attendance tracker...
        </div>
      </div>
    );
  }

  // Calculate live statistics
  const stats = calculateStats(profile);
  const subjectStatsMap: Record<string, SubjectStats> = {};
  stats.subjectStats.forEach((s) => {
    subjectStatsMap[s.subject.id] = s;
  });

  const currentDayLog = profile.dailyLogs[currentDateKey] || {};

  // Handlers
  const handleMarkStatus = (subjectId: string, status: AttendanceStatus | null) => {
    const updatedDailyLogs = { ...profile.dailyLogs };
    const dayRecords = { ...(updatedDailyLogs[currentDateKey] || {}) };

    if (status === null) {
      delete dayRecords[subjectId];
    } else {
      dayRecords[subjectId] = status;
    }

    if (Object.keys(dayRecords).length === 0) {
      delete updatedDailyLogs[currentDateKey];
    } else {
      updatedDailyLogs[currentDateKey] = dayRecords;
    }

    const updatedProfile: AttendanceProfile = {
      ...profile,
      dailyLogs: updatedDailyLogs,
    };

    setProfile(updatedProfile);
    saveAttendanceProfile(updatedProfile);
  };

  const handleMarkAll = (status: AttendanceStatus) => {
    const updatedDailyLogs = { ...profile.dailyLogs };
    const dayRecords: Record<string, AttendanceStatus> = {};

    profile.subjects.forEach((sub) => {
      dayRecords[sub.id] = status;
    });

    updatedDailyLogs[currentDateKey] = dayRecords;

    const updatedProfile: AttendanceProfile = {
      ...profile,
      dailyLogs: updatedDailyLogs,
    };

    setProfile(updatedProfile);
    saveAttendanceProfile(updatedProfile);
  };

  const handleClearDay = () => {
    const updatedDailyLogs = { ...profile.dailyLogs };
    delete updatedDailyLogs[currentDateKey];

    const updatedProfile: AttendanceProfile = {
      ...profile,
      dailyLogs: updatedDailyLogs,
    };

    setProfile(updatedProfile);
    saveAttendanceProfile(updatedProfile);
  };

  const handleQuickAdd = (subjectId: string, type: 'present' | 'absent') => {
    // Quick mark on today's date
    const today = formatDateKey(new Date());
    const updatedDailyLogs = { ...profile.dailyLogs };
    const dayRecords = { ...(updatedDailyLogs[today] || {}) };

    dayRecords[subjectId] = type;
    updatedDailyLogs[today] = dayRecords;

    const updatedProfile: AttendanceProfile = {
      ...profile,
      dailyLogs: updatedDailyLogs,
    };

    setProfile(updatedProfile);
    saveAttendanceProfile(updatedProfile);
  };

  const handleSaveSetup = (newConfig: {
    courseName: string;
    semester: number;
    targetPercentage: number;
    subjects: SubjectItem[];
  }) => {
    const updatedProfile: AttendanceProfile = {
      ...profile,
      courseName: newConfig.courseName,
      semester: newConfig.semester,
      targetPercentage: newConfig.targetPercentage,
      subjects: newConfig.subjects,
    };

    setProfile(updatedProfile);
    saveAttendanceProfile(updatedProfile);
  };

  const handleSaveSubject = (savedSubject: SubjectItem) => {
    let updatedSubjects: SubjectItem[];
    const exists = profile.subjects.some((s) => s.id === savedSubject.id);

    if (exists) {
      updatedSubjects = profile.subjects.map((s) =>
        s.id === savedSubject.id ? savedSubject : s
      );
    } else {
      updatedSubjects = [...profile.subjects, savedSubject];
    }

    const updatedProfile: AttendanceProfile = {
      ...profile,
      subjects: updatedSubjects,
    };

    setProfile(updatedProfile);
    saveAttendanceProfile(updatedProfile);
  };

  const handleDeleteSubject = (subjectId: string) => {
    if (profile.subjects.length <= 1) {
      alert('You must keep at least one subject in your attendance tracker.');
      return;
    }

    if (confirm('Are you sure you want to delete this subject?')) {
      const updatedSubjects = profile.subjects.filter((s) => s.id !== subjectId);
      const updatedProfile: AttendanceProfile = {
        ...profile,
        subjects: updatedSubjects,
      };
      setProfile(updatedProfile);
      saveAttendanceProfile(updatedProfile);
    }
  };

  const handleResetAttendance = () => {
    if (confirm('Reset all attendance data? This will clear all logged days and start fresh.')) {
      const fresh = createDefaultProfile(profile.courseName, profile.semester);
      setProfile(fresh);
      saveAttendanceProfile(fresh);
    }
  };

  return (
    <div className="min-h-screen bg-transparent text-slate-900 pb-16">
      {/* Header */}
      <SubpageHeader title="Attendance Tracker" />

      <main className="mx-auto max-w-xl px-3 pt-3 space-y-3.5">
        
        {/* Top Overall Status Card */}
        <AttendanceStatsOverview
          stats={stats}
          targetPercentage={profile.targetPercentage}
          courseName={profile.courseName}
          semester={profile.semester}
        />

        {/* Navigation Tabs Bar */}
        <div className="flex items-center justify-between rounded-2xl bg-slate-100 p-1 text-xs font-black shadow-inner">
          <button
            type="button"
            onClick={() => setActiveTab('daily')}
            className={`flex-1 flex items-center justify-center gap-1.5 rounded-xl py-2 transition ${
              activeTab === 'daily'
                ? 'bg-white text-blue-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <CalendarIcon className="h-3.5 w-3.5" />
            <span>Daily Log</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('subjects')}
            className={`flex-1 flex items-center justify-center gap-1.5 rounded-xl py-2 transition ${
              activeTab === 'subjects'
                ? 'bg-white text-blue-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="h-3.5 w-3.5" />
            <span>Subjects ({profile.subjects.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('calendar')}
            className={`flex-1 flex items-center justify-center gap-1.5 rounded-xl py-2 transition ${
              activeTab === 'calendar'
                ? 'bg-white text-blue-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <CalendarDays className="h-3.5 w-3.5" />
            <span>Calendar</span>
          </button>
        </div>

        {/* Tab 1: Daily Attendance Marking */}
        {activeTab === 'daily' && (
          <DailyAttendanceLogger
            currentDateKey={currentDateKey}
            onDateChange={setCurrentDateKey}
            subjects={profile.subjects}
            dayLog={currentDayLog}
            onMarkStatus={handleMarkStatus}
            onMarkAll={handleMarkAll}
            onClearDay={handleClearDay}
            subjectStatsMap={subjectStatsMap}
          />
        )}

        {/* Tab 2: Subject-wise Breakdown */}
        {activeTab === 'subjects' && (
          <div className="space-y-3">
            {/* Header with Add Subject Button */}
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-black uppercase tracking-wider text-slate-600">
                All Subjects Status
              </span>
              <button
                type="button"
                onClick={() => {
                  setEditingSubject(null);
                  setIsSubjectModalOpen(true);
                }}
                className="flex items-center gap-1 rounded-xl bg-blue-600 px-2.5 py-1 text-xs font-black text-white hover:bg-blue-700 active:scale-95 transition shadow-2xs"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Add Subject</span>
              </button>
            </div>

            <div className="space-y-2.5">
              {stats.subjectStats.map((subStat) => (
                <SubjectAttendanceCard
                  key={subStat.subject.id}
                  stats={subStat}
                  targetPercentage={profile.targetPercentage}
                  onQuickAdd={handleQuickAdd}
                  onEdit={(item) => {
                    setEditingSubject(item.subject);
                    setIsSubjectModalOpen(true);
                  }}
                  onDelete={handleDeleteSubject}
                />
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Monthly Calendar View */}
        {activeTab === 'calendar' && (
          <AttendanceCalendarView
            profile={profile}
            selectedDateKey={currentDateKey}
            onSelectDate={(dateKey) => {
              setCurrentDateKey(dateKey);
              setActiveTab('daily');
            }}
          />
        )}

        {/* Bottom Utility Tools & Simulator Trigger */}
        <div className="pt-2 flex items-center justify-between flex-wrap gap-2 text-xs">
          <button
            type="button"
            onClick={() => setIsSimulatorOpen(true)}
            className="flex items-center gap-1.5 rounded-2xl border border-amber-200 bg-amber-50/80 px-3 py-2 font-black text-amber-900 hover:bg-amber-100 active:scale-95 transition shadow-2xs"
          >
            <Sparkles className="h-3.5 w-3.5 text-amber-600" />
            <span>What-If Simulator</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsSetupOpen(true)}
              className="flex items-center gap-1 rounded-2xl border border-slate-200 bg-white px-3 py-2 font-bold text-slate-700 hover:bg-slate-50 transition shadow-2xs"
            >
              <Settings className="h-3.5 w-3.5 text-slate-500" />
              <span>Course Settings</span>
            </button>

            <button
              type="button"
              onClick={handleResetAttendance}
              className="flex items-center gap-1 rounded-2xl border border-slate-200 bg-white px-2.5 py-2 font-bold text-slate-500 hover:text-rose-600 transition shadow-2xs"
              title="Reset all attendance"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Patna University Attendance Policy Banner */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-4 text-xs text-slate-600 space-y-1.5 leading-relaxed shadow-xs">
          <div className="flex items-center gap-1.5 font-black text-slate-900 text-xs">
            <HelpCircle className="h-3.5 w-3.5 text-blue-600" />
            <span>Patna University 75% Rule Guide:</span>
          </div>
          <p>
            • Minimum <b>75% attendance</b> in both lectures and practicals is compulsory to fill semester examination forms under Patna University regulations.
          </p>
          <p>
            • All data is safely stored <b>100% locally on your device</b>. You do not need internet to mark or check your attendance.
          </p>
        </div>

      </main>

      {/* Modals */}
      <AttendanceSetupModal
        isOpen={isSetupOpen}
        onClose={() => setIsSetupOpen(false)}
        onSave={handleSaveSetup}
        initialProfile={profile}
      />

      <SubjectFormModal
        isOpen={isSubjectModalOpen}
        onClose={() => {
          setIsSubjectModalOpen(false);
          setEditingSubject(null);
        }}
        onSave={handleSaveSubject}
        initialSubject={editingSubject}
      />

      <AttendanceSimulatorModal
        isOpen={isSimulatorOpen}
        onClose={() => setIsSimulatorOpen(false)}
        stats={stats}
        targetPercentage={profile.targetPercentage}
      />
    </div>
  );
}
