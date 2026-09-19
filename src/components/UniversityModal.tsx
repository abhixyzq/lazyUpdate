'use client';

import React from 'react';
import { X, GraduationCap, CheckCircle2, Clock, MapPin, Sparkles } from 'lucide-react';
import { universitiesData } from '@/data/universities';

interface UniversityModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUniversitySlug: string;
  onSelectUniversity: (slug: string) => void;
}

export const UniversityModal: React.FC<UniversityModalProps> = ({
  isOpen,
  onClose,
  currentUniversitySlug,
  onSelectUniversity,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 pb-20 sm:p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-2xl text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Title */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-200">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base font-black text-slate-900">
              Select Your University
            </h3>
            <p className="text-[11px] text-slate-500">
              Personalized exam, result & syllabus alerts
            </p>
          </div>
        </div>

        {/* Universities List */}
        <div className="mt-4 space-y-2">
          {universitiesData.map((univ) => {
            const isSelected = univ.slug === currentUniversitySlug;
            return (
              <div
                key={univ.id}
                onClick={() => {
                  if (univ.isActive) {
                    onSelectUniversity(univ.slug);
                    onClose();
                  }
                }}
                className={`flex items-center justify-between rounded-xl border p-3 transition ${
                  univ.isActive
                    ? 'cursor-pointer hover:border-slate-300 hover:bg-slate-50'
                    : 'opacity-70 cursor-not-allowed bg-slate-50'
                } ${
                  isSelected
                    ? 'border-slate-900 bg-slate-50/80 shadow-xs'
                    : 'border-slate-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 font-bold text-xs text-slate-700 border border-slate-200">
                    {univ.shortName.substring(0, 3)}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                        {univ.name}
                      </h4>
                      {isSelected && (
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-slate-500">
                      <MapPin className="h-3 w-3" />
                      <span>{univ.location}</span>
                    </div>
                  </div>
                </div>

                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-bold border ${
                    univ.isActive
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                      : 'bg-slate-100 text-slate-600 border-slate-200'
                  }`}
                >
                  {univ.badgeText}
                </span>
              </div>
            );
          })}
        </div>

        {/* Suggest / Coming Soon Note */}
        <div className="mt-4 rounded-xl bg-slate-50 p-3 text-center text-xs text-slate-500 border border-slate-200">
          <Sparkles className="mx-auto h-4 w-4 text-amber-500 mb-1" />
          <span>More Bihar & National universities are being activated soon!</span>
        </div>

      </div>
    </div>
  );
};
