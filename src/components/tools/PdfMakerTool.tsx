'use client';

import React, { useState, useRef } from 'react';
import { jsPDF } from 'jspdf';
import {
  Upload,
  Download,
  FileText,
  RotateCw,
  Trash2,
  ArrowUp,
  ArrowDown,
  Eye,
  Sparkles,
  Settings,
  Plus,
  RefreshCw,
  Layers,
  FileCheck,
} from 'lucide-react';

interface PdfPageItem {
  id: string;
  name: string;
  dataUrl: string;
  width: number;
  height: number;
  rotation: number; // 0, 90, 180, 270
}

type PageSize = 'a4' | 'letter' | 'legal';
type Orientation = 'portrait' | 'landscape' | 'auto';
type MarginType = 'none' | 'compact' | 'normal';

export const PdfMakerTool: React.FC = () => {
  const [pages, setPages] = useState<PdfPageItem[]>([]);
  const [activePreviewIndex, setActivePreviewIndex] = useState<number>(0);
  
  // Customization Options
  const [documentTitle, setDocumentTitle] = useState<string>('My Document');
  const [studentInfo, setStudentInfo] = useState<string>('');
  const [pageSize, setPageSize] = useState<PageSize>('a4');
  const [orientation, setOrientation] = useState<Orientation>('portrait');
  const [margin, setMargin] = useState<MarginType>('compact');
  const [fitMode, setFitMode] = useState<'fit' | 'fill'>('fit');
  const [includePageNumbers, setIncludePageNumbers] = useState<boolean>(true);
  const [compressionQuality, setCompressionQuality] = useState<'high' | 'medium' | 'low'>('medium');

  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Handle Image Uploads (Multi-file)
  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const newPages: Promise<PdfPageItem>[] = Array.from(files).map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const dataUrl = e.target?.result as string;
          const img = new Image();
          img.onload = () => {
            resolve({
              id: `${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
              name: file.name,
              dataUrl,
              width: img.width,
              height: img.height,
              rotation: 0,
            });
          };
          img.src = dataUrl;
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(newPages).then((loaded) => {
      setPages((prev) => [...prev, ...loaded]);
      if (pages.length === 0) {
        setActivePreviewIndex(0);
      }
    });
  };

  // Reorder Pages
  const movePage = (index: number, direction: 'up' | 'down') => {
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= pages.length) return;

    const updated = [...pages];
    const [moved] = updated.splice(index, 1);
    updated.splice(targetIndex, 0, moved);
    setPages(updated);
    setActivePreviewIndex(targetIndex);
  };

  // Rotate Page
  const rotatePage = (index: number) => {
    setPages((prev) =>
      prev.map((p, idx) => {
        if (idx !== index) return p;
        return {
          ...p,
          rotation: (p.rotation + 90) % 360,
        };
      })
    );
  };

  // Remove Page
  const removePage = (index: number) => {
    setPages((prev) => prev.filter((_, idx) => idx !== index));
    if (activePreviewIndex >= pages.length - 1) {
      setActivePreviewIndex(Math.max(0, pages.length - 2));
    }
  };

  // Generate and Download PDF using jsPDF
  const generatePdf = async () => {
    if (pages.length === 0) return;
    setIsGenerating(true);

    try {
      // Dimensions in mm
      const dimensionsMap: Record<PageSize, { w: number; h: number }> = {
        a4: { w: 210, h: 297 },
        letter: { w: 215.9, h: 279.4 },
        legal: { w: 215.9, h: 355.6 },
      };

      const baseDim = dimensionsMap[pageSize];
      const marginMm = margin === 'none' ? 0 : margin === 'compact' ? 6 : 15;

      const doc = new jsPDF({
        orientation: orientation === 'landscape' ? 'landscape' : 'portrait',
        unit: 'mm',
        format: pageSize,
        compress: true,
      });

      for (let i = 0; i < pages.length; i++) {
        if (i > 0) {
          doc.addPage(
            pageSize,
            orientation === 'landscape' ? 'landscape' : 'portrait'
          );
        }

        const page = pages[i];
        const pageW = doc.internal.pageSize.getWidth();
        const pageH = doc.internal.pageSize.getHeight();

        // Calculate printable area
        const printableW = pageW - marginMm * 2;
        const printableH = pageH - marginMm * 2 - (documentTitle || studentInfo ? 12 : 0) - (includePageNumbers ? 10 : 0);
        const startY = marginMm + (documentTitle || studentInfo ? 10 : 0);

        // Header
        if (documentTitle || studentInfo) {
          doc.setFontSize(9);
          doc.setTextColor(100, 116, 139);
          if (documentTitle) {
            doc.text(documentTitle, marginMm, marginMm + 5);
          }
          if (studentInfo) {
            doc.text(studentInfo, pageW - marginMm, marginMm + 5, { align: 'right' });
          }
          doc.setDrawColor(226, 232, 240);
          doc.line(marginMm, marginMm + 7, pageW - marginMm, marginMm + 7);
        }

        // Prepare Rotated Image via Canvas if needed
        let finalDataUrl = page.dataUrl;
        let imgW = page.width;
        let imgH = page.height;

        if (page.rotation !== 0) {
          const offCanvas = document.createElement('canvas');
          const isSideways = page.rotation === 90 || page.rotation === 270;
          offCanvas.width = isSideways ? page.height : page.width;
          offCanvas.height = isSideways ? page.width : page.height;
          const ctx = offCanvas.getContext('2d');
          if (ctx) {
            ctx.translate(offCanvas.width / 2, offCanvas.height / 2);
            ctx.rotate((page.rotation * Math.PI) / 180);
            const tempImg = new Image();
            tempImg.src = page.dataUrl;
            await new Promise((resolve) => {
              if (tempImg.complete) resolve(null);
              else tempImg.onload = () => resolve(null);
            });
            ctx.drawImage(tempImg, -page.width / 2, -page.height / 2);
            finalDataUrl = offCanvas.toDataURL('image/jpeg', compressionQuality === 'high' ? 0.95 : compressionQuality === 'medium' ? 0.8 : 0.6);
            imgW = offCanvas.width;
            imgH = offCanvas.height;
          }
        }

        // Calculate Image Placement
        let renderW = printableW;
        let renderH = printableH;
        let renderX = marginMm;
        let renderY = startY;

        if (fitMode === 'fit') {
          const imgRatio = imgW / imgH;
          const printableRatio = printableW / printableH;

          if (imgRatio > printableRatio) {
            renderW = printableW;
            renderH = printableW / imgRatio;
            renderY = startY + (printableH - renderH) / 2;
          } else {
            renderH = printableH;
            renderW = printableH * imgRatio;
            renderX = marginMm + (printableW - renderW) / 2;
          }
        }

        const formatType = finalDataUrl.startsWith('data:image/png') ? 'PNG' : 'JPEG';
        doc.addImage(finalDataUrl, formatType, renderX, renderY, renderW, renderH, undefined, 'FAST');

        // Footer with Page Number
        if (includePageNumbers) {
          doc.setFontSize(8);
          doc.setTextColor(148, 163, 184);
          doc.text(
            `Page ${i + 1} of ${pages.length}`,
            pageW / 2,
            pageH - Math.max(4, marginMm / 2),
            { align: 'center' }
          );
        }
      }

      const cleanTitle = (documentTitle || 'Lazy-PU-Document').replace(/[^a-zA-Z0-9_-]/g, '_');
      doc.save(`${cleanTitle}-${Date.now()}.pdf`);
    } catch (err) {
      console.error('PDF Generation Error:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  const activePage = pages[activePreviewIndex];

  return (
    <div className="space-y-6">
      {pages.length === 0 ? (
        /* Empty Upload State */
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            handleFiles(e.dataTransfer.files);
          }}
          onClick={() => fileInputRef.current?.click()}
          className="rounded-3xl border-2 border-dashed border-blue-200 bg-white p-8 sm:p-12 text-center hover:border-[#0a2558] hover:bg-blue-50/20 transition cursor-pointer shadow-xs flex flex-col items-center justify-center group"
        >
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => handleFiles(e.target.files)}
            className="hidden"
          />
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0a2558] text-[#fde047] shadow-sm group-hover:scale-105 transition mb-4">
            <Layers className="h-8 w-8 stroke-[2.2]" />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Select or Drop Document Photos / Scans
          </h3>
          <p className="mt-1 text-xs text-slate-500 max-w-sm">
            Upload multiple pages, reorder, rotate, add header & page numbers, and generate high-quality customized PDFs instantly.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-600">
              ⚡ Multi-page Notes to PDF
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-600">
              ⚡ Assignment Submissions
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-600">
              ⚡ Custom Header & Numbers
            </span>
          </div>
        </div>
      ) : (
        /* Active Workspace */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Pages List & PDF Settings */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Top Toolbar: Add More & Summary */}
            <div className="rounded-2xl bg-white p-3.5 border border-slate-200/90 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileCheck className="h-4 w-4 text-[#0a2558]" />
                <span className="text-xs font-bold text-slate-900">
                  {pages.length} {pages.length === 1 ? 'Page' : 'Pages'} Added
                </span>
              </div>

              <div className="flex items-center gap-2">
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={(e) => handleFiles(e.target.files)}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center gap-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#0a2558] font-bold px-3 py-1.5 text-xs transition active:scale-95 cursor-pointer"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>Add Pages</span>
                </button>
              </div>
            </div>

            {/* Thumbnail Horizontal Scroller */}
            <div className="rounded-3xl bg-white p-4 border border-slate-200/90 shadow-xs space-y-2">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                Page Sequence (Click to Preview or Reorder):
              </span>
              <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-none pt-1">
                {pages.map((p, idx) => (
                  <div
                    key={p.id}
                    onClick={() => setActivePreviewIndex(idx)}
                    className={`relative rounded-xl border-2 p-1 shrink-0 w-20 h-24 bg-slate-50 cursor-pointer transition-all flex flex-col items-center justify-center overflow-hidden ${
                      activePreviewIndex === idx
                        ? 'border-[#0a2558] ring-2 ring-[#0a2558]/20 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span className="absolute top-1 left-1 bg-[#0a2558] text-white text-[9px] font-bold px-1.5 py-0.2 rounded-md shadow-2xs z-10">
                      #{idx + 1}
                    </span>
                    <img
                      src={p.dataUrl}
                      alt={p.name}
                      style={{ transform: `rotate(${p.rotation}deg)` }}
                      className="max-h-full max-w-full object-contain transition-transform"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Document Header & Metadata Settings */}
            <div className="rounded-3xl bg-white p-5 border border-slate-200/90 shadow-xs space-y-3.5">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2.5">
                <FileText className="h-4 w-4 text-[#0a2558]" />
                <h3 className="text-xs sm:text-sm font-bold text-slate-900">Document Information</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-700">
                    Document Title (Printed on Top Left)
                  </label>
                  <input
                    type="text"
                    value={documentTitle}
                    onChange={(e) => setDocumentTitle(e.target.value)}
                    placeholder="e.g. Physics Assignment 2026"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 outline-none focus:border-[#0a2558] transition"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-700">
                    Student Name / Roll (Top Right)
                  </label>
                  <input
                    type="text"
                    value={studentInfo}
                    onChange={(e) => setStudentInfo(e.target.value)}
                    placeholder="e.g. Rahul Sharma - Roll 42"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 outline-none focus:border-[#0a2558] transition"
                  />
                </div>
              </div>
            </div>

            {/* Page Layout & Margins Customization */}
            <div className="rounded-3xl bg-white p-5 border border-slate-200/90 shadow-xs space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2.5">
                <Settings className="h-4 w-4 text-[#0a2558]" />
                <h3 className="text-xs sm:text-sm font-bold text-slate-900">Layout & Page Format</h3>
              </div>

              {/* Page Size & Orientation */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-700">
                    Standard Page Size
                  </label>
                  <select
                    value={pageSize}
                    onChange={(e) => setPageSize(e.target.value as PageSize)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 font-bold outline-none focus:border-[#0a2558] transition"
                  >
                    <option value="a4">A4 (Standard 210 × 297 mm)</option>
                    <option value="letter">Letter (8.5 × 11 in)</option>
                    <option value="legal">Legal (8.5 × 14 in)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-700">
                    Orientation
                  </label>
                  <select
                    value={orientation}
                    onChange={(e) => setOrientation(e.target.value as Orientation)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 font-bold outline-none focus:border-[#0a2558] transition"
                  >
                    <option value="portrait">Portrait (Vertical)</option>
                    <option value="landscape">Landscape (Horizontal)</option>
                  </select>
                </div>
              </div>

              {/* Margins & Image Fit */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-700">
                    Page Margins
                  </label>
                  <div className="grid grid-cols-3 gap-1">
                    {(['none', 'compact', 'normal'] as MarginType[]).map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => setMargin(m)}
                        className={`py-1.5 text-xs font-bold rounded-lg border capitalize transition ${
                          margin === m
                            ? 'bg-[#0a2558] text-white border-[#0a2558]'
                            : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-700">
                    Image Fit
                  </label>
                  <div className="grid grid-cols-2 gap-1">
                    <button
                      type="button"
                      onClick={() => setFitMode('fit')}
                      className={`py-1.5 text-xs font-bold rounded-lg border transition ${
                        fitMode === 'fit'
                          ? 'bg-[#0a2558] text-white border-[#0a2558]'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      Fit (Keep Ratio)
                    </button>
                    <button
                      type="button"
                      onClick={() => setFitMode('fill')}
                      className={`py-1.5 text-xs font-bold rounded-lg border transition ${
                        fitMode === 'fill'
                          ? 'bg-[#0a2558] text-white border-[#0a2558]'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      Fill Entire Page
                    </button>
                  </div>
                </div>
              </div>

              {/* Page Numbering & Compression */}
              <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                <label className="flex items-center gap-2 cursor-pointer font-semibold text-slate-700">
                  <input
                    type="checkbox"
                    checked={includePageNumbers}
                    onChange={(e) => setIncludePageNumbers(e.target.checked)}
                    className="h-4 w-4 accent-[#0a2558] rounded"
                  />
                  <span>Include "Page X of Y" Footer</span>
                </label>

                <div className="flex items-center gap-1.5">
                  <span className="text-slate-500 font-medium">Compression:</span>
                  {(['high', 'medium', 'low'] as const).map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => setCompressionQuality(q)}
                      className={`px-2 py-0.5 text-xs rounded-lg font-bold border capitalize transition ${
                        compressionQuality === q
                          ? 'bg-amber-100 text-amber-900 border-amber-300'
                          : 'border-slate-200 text-slate-500'
                      }`}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Preview & Per-Page Controls */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-4">
            <div className="rounded-3xl bg-white p-5 sm:p-6 border border-slate-200/90 shadow-sm flex flex-col items-center text-center">
              
              <div className="w-full flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
                <span className="text-xs font-bold text-slate-800">
                  Page {activePreviewIndex + 1} of {pages.length}
                </span>

                {/* Per-Page Actions (Rotate, Move Up, Move Down, Delete) */}
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => rotatePage(activePreviewIndex)}
                    title="Rotate 90 degrees"
                    className="p-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 transition cursor-pointer"
                  >
                    <RotateCw className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => movePage(activePreviewIndex, 'up')}
                    disabled={activePreviewIndex === 0}
                    title="Move Page Earlier"
                    className="p-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 disabled:opacity-40 transition cursor-pointer"
                  >
                    <ArrowUp className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => movePage(activePreviewIndex, 'down')}
                    disabled={activePreviewIndex === pages.length - 1}
                    title="Move Page Later"
                    className="p-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 disabled:opacity-40 transition cursor-pointer"
                  >
                    <ArrowDown className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => removePage(activePreviewIndex)}
                    title="Delete Page"
                    className="p-1.5 rounded-lg border border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-600 transition cursor-pointer"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Simulated Sheet of Paper Preview */}
              <div className="w-full flex justify-center p-3 bg-slate-100/60 rounded-2xl border border-slate-200/80 shadow-inner">
                <div
                  className="bg-white rounded-lg shadow-md border border-slate-300/80 p-3 flex flex-col justify-between overflow-hidden transition-all"
                  style={{
                    width: orientation === 'landscape' ? '300px' : '210px',
                    height: orientation === 'landscape' ? '210px' : '297px',
                  }}
                >
                  {/* Simulated Header */}
                  {(documentTitle || studentInfo) && (
                    <div className="flex justify-between border-b border-slate-200 pb-1 text-[7px] text-slate-400 font-mono">
                      <span className="truncate max-w-[100px]">{documentTitle}</span>
                      <span className="truncate max-w-[80px]">{studentInfo}</span>
                    </div>
                  )}

                  {/* Active Page Image */}
                  <div className="flex-1 flex items-center justify-center overflow-hidden my-1">
                    {activePage && (
                      <img
                        src={activePage.dataUrl}
                        alt={activePage.name}
                        style={{ transform: `rotate(${activePage.rotation}deg)` }}
                        className="max-h-full max-w-full object-contain transition-transform"
                      />
                    )}
                  </div>

                  {/* Simulated Footer */}
                  {includePageNumbers && (
                    <div className="text-center text-[7px] text-slate-400 font-mono pt-1">
                      Page {activePreviewIndex + 1} of {pages.length}
                    </div>
                  )}
                </div>
              </div>

              {/* Export Button */}
              <div className="mt-5 w-full">
                <button
                  type="button"
                  onClick={generatePdf}
                  disabled={isGenerating || pages.length === 0}
                  className="w-full flex items-center justify-center gap-2 rounded-2xl bg-[#0a2558] hover:bg-[#071d47] text-white text-xs sm:text-sm font-bold py-3.5 px-4 transition active:scale-98 shadow-sm cursor-pointer disabled:opacity-50"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin" />
                      <span>Compiling PDF Document...</span>
                    </>
                  ) : (
                    <>
                      <Download className="h-4 w-4" />
                      <span>Download PDF ({pages.length} Pages)</span>
                    </>
                  )}
                </button>
              </div>

              <p className="mt-3 text-[10px] text-slate-400">
                Processed locally in your browser • 100% Free & Secure
              </p>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

