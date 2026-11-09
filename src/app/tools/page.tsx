'use client';

import React, { useState } from 'react';
import { SubpageHeader } from '@/components/SubpageHeader';
import { BottomNav } from '@/components/BottomNav';
import { QrCodeTool } from '@/components/tools/QrCodeTool';
import { ImageResizerTool } from '@/components/tools/ImageResizerTool';
import { PdfMakerTool } from '@/components/tools/PdfMakerTool';
import {
  QrCode,
  Image as ImageIcon,
  FileText,
  Sparkles,
  ShieldCheck,
  Zap,
} from 'lucide-react';

type ToolTab = 'qrcode' | 'resizer' | 'pdf';

export default function ToolsPage() {
  const [activeTab, setActiveTab] = useState<ToolTab>('qrcode');

  const tools = [
    {
      id: 'qrcode' as ToolTab,
      label: 'QR Code Maker',
      tag: 'Custom Design',
      icon: QrCode,
      desc: 'Create styled QR codes with colors, UPI & free PNG/JPG/SVG download',
    },
    {
      id: 'resizer' as ToolTab,
      label: 'Image Resizer',
      tag: 'Exam Presets',
      icon: ImageIcon,
      desc: 'Resize by px/cm, convert JPG ↔ PNG, & compress to under 50KB / 20KB',
    },
    {
      id: 'pdf' as ToolTab,
      label: 'PDF Document Maker',
      tag: 'Live Preview',
      icon: FileText,
      desc: 'Convert multiple photos into customized A4 PDFs with headers & page numbers',
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#faf5ea] text-slate-900 pb-28 sm:pb-24 overflow-x-hidden">
      {/* Top Universal Header */}
      <SubpageHeader title="Student Tools" />

      <main className="mx-auto max-w-4xl px-4 pt-4 sm:pt-6 space-y-6">
        
        {/* Header Hero Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0a2558] via-[#0d2f70] to-[#0a2558] text-white p-5 sm:p-7 shadow-sm relative overflow-hidden">
          <div className="relative z-10 space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-yellow-400/20 border border-yellow-300/30 px-3 py-0.5 text-[11px] font-bold text-[#fde047]">
              <Sparkles className="h-3 w-3" />
              <span>100% Free &amp; Offline Private</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black tracking-tight">
              Essential Student Utilities
            </h1>
            <p className="text-xs sm:text-[13px] text-blue-100/90 leading-relaxed">
              Designed specifically for Patna University students. Resize admit card photos, make exam PDFs, and generate customized QR codes directly in your browser.
            </p>
          </div>

          {/* Decorative Corner Icon */}
          <div className="absolute -right-4 -bottom-4 h-36 w-36 rounded-full bg-white/5 flex items-center justify-center pointer-events-none">
            <Zap className="h-20 w-20 text-yellow-300/10 stroke-[1.5]" />
          </div>
        </div>

        {/* Tool Selection Tabs Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {tools.map((t) => {
            const Icon = t.icon;
            const isActive = activeTab === t.id;

            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveTab(t.id)}
                className={`flex items-start gap-3 rounded-2xl p-3.5 text-left transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-white border-[#0a2558] shadow-md ring-2 ring-[#0a2558]/10'
                    : 'bg-white/70 hover:bg-white border-slate-200/80 hover:shadow-2xs'
                }`}
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition ${
                    isActive
                      ? 'bg-[#0a2558] text-[#fde047] shadow-xs'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  <Icon className="h-5 w-5 stroke-[2.2]" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <h2
                      className={`text-xs sm:text-sm font-bold truncate ${
                        isActive ? 'text-[#0a2558]' : 'text-slate-900'
                      }`}
                    >
                      {t.label}
                    </h2>
                    <span
                      className={`text-[9px] font-bold px-1.5 py-0.2 rounded-md shrink-0 ${
                        isActive
                          ? 'bg-yellow-100 text-amber-900 border border-yellow-300'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {t.tag}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-0.5 line-clamp-2 leading-snug">
                    {t.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Tool Dynamic Container */}
        <div className="transition-all duration-200">
          {activeTab === 'qrcode' && <QrCodeTool />}
          {activeTab === 'resizer' && <ImageResizerTool />}
          {activeTab === 'pdf' && <PdfMakerTool />}
        </div>

        {/* Security & Privacy Guarantee */}
        <div className="rounded-2xl border border-slate-200/80 bg-white/60 p-3.5 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
            <span className="text-[11px] font-medium">
              <strong>100% Client-Side Privacy:</strong> All images, QR codes, and PDFs are processed right on your device. Nothing is uploaded to any server.
            </span>
          </div>
        </div>

      </main>

      {/* Persistent Bottom Nav / AdMob Banner */}
      <BottomNav />
    </div>
  );
}
