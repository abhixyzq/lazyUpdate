'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  Upload,
  Download,
  Image as ImageIcon,
  Lock,
  Unlock,
  RefreshCw,
  Sparkles,
  FileCheck,
  Sliders,
  Maximize2,
  Trash2,
  AlertCircle,
} from 'lucide-react';

type UnitType = 'px' | 'cm' | 'mm' | 'in' | '%';
type FormatType = 'image/jpeg' | 'image/png' | 'image/webp';

export const ImageResizerTool: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [originalWidth, setOriginalWidth] = useState<number>(0);
  const [originalHeight, setOriginalHeight] = useState<number>(0);
  const [originalFileSize, setOriginalFileSize] = useState<number>(0);
  const [fileName, setFileName] = useState<string>('image');

  // Dimension Controls
  const [width, setWidth] = useState<number>(300);
  const [height, setHeight] = useState<number>(300);
  const [unit, setUnit] = useState<UnitType>('px');
  const [dpi, setDpi] = useState<number>(300); // 300 DPI standard for government/exam portals
  const [lockAspectRatio, setLockAspectRatio] = useState<boolean>(true);
  const [aspectRatio, setAspectRatio] = useState<number>(1);

  // Format & Quality Controls
  const [outputFormat, setOutputFormat] = useState<FormatType>('image/jpeg');
  const [quality, setQuality] = useState<number>(85); // 1 - 100
  const [resizedDataUrl, setResizedDataUrl] = useState<string | null>(null);
  const [resizedFileSize, setResizedFileSize] = useState<number>(0);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const imgElementRef = useRef<HTMLImageElement | null>(null);

  // Convert unit to pixels
  const toPixels = (val: number, u: UnitType): number => {
    switch (u) {
      case 'cm':
        return Math.round((val / 2.54) * dpi);
      case 'mm':
        return Math.round((val / 25.4) * dpi);
      case 'in':
        return Math.round(val * dpi);
      case '%':
        return Math.round((val / 100) * originalWidth);
      case 'px':
      default:
        return Math.round(val);
    }
  };

  // Convert pixels to unit
  const fromPixels = (px: number, u: UnitType): number => {
    switch (u) {
      case 'cm':
        return Number(((px / dpi) * 2.54).toFixed(2));
      case 'mm':
        return Number(((px / dpi) * 25.4).toFixed(1));
      case 'in':
        return Number((px / dpi).toFixed(2));
      case '%':
        return originalWidth > 0 ? Number(((px / originalWidth) * 100).toFixed(0)) : 100;
      case 'px':
      default:
        return Math.round(px);
    }
  };

  // Handle Image Upload
  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    setOriginalFileSize(file.size);
    setFileName(file.name.replace(/\.[^/.]+$/, ''));

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setImageSrc(result);

      const img = new Image();
      img.onload = () => {
        imgElementRef.current = img;
        setOriginalWidth(img.width);
        setOriginalHeight(img.height);
        const ratio = img.width / img.height;
        setAspectRatio(ratio);

        if (unit === 'px') {
          setWidth(img.width);
          setHeight(img.height);
        } else {
          setWidth(fromPixels(img.width, unit));
          setHeight(fromPixels(img.height, unit));
        }
      };
      img.src = result;
    };
    reader.readAsDataURL(file);
  };

  // Handle Drag & Drop
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  // Width change handler with aspect ratio lock
  const handleWidthChange = (val: number) => {
    setWidth(val);
    if (lockAspectRatio && aspectRatio > 0) {
      if (unit === 'px') {
        setHeight(Math.round(val / aspectRatio));
      } else {
        const pxW = toPixels(val, unit);
        const pxH = Math.round(pxW / aspectRatio);
        setHeight(fromPixels(pxH, unit));
      }
    }
  };

  // Height change handler with aspect ratio lock
  const handleHeightChange = (val: number) => {
    setHeight(val);
    if (lockAspectRatio && aspectRatio > 0) {
      if (unit === 'px') {
        setWidth(Math.round(val * aspectRatio));
      } else {
        const pxH = toPixels(val, unit);
        const pxW = Math.round(pxH * aspectRatio);
        setWidth(fromPixels(pxW, unit));
      }
    }
  };

  // Switch Unit
  const handleUnitChange = (newUnit: UnitType) => {
    const currentPxW = toPixels(width, unit);
    const currentPxH = toPixels(height, unit);
    setUnit(newUnit);
    setWidth(fromPixels(currentPxW, newUnit));
    setHeight(fromPixels(currentPxH, newUnit));
  };

  // Process Resize using Offscreen Canvas
  useEffect(() => {
    if (!imageSrc || !imgElementRef.current) return;

    const process = () => {
      setIsProcessing(true);
      const targetPxW = Math.max(1, toPixels(width, unit));
      const targetPxH = Math.max(1, toPixels(height, unit));

      const canvas = document.createElement('canvas');
      canvas.width = targetPxW;
      canvas.height = targetPxH;
      const ctx = canvas.getContext('2d');

      if (!ctx) return;

      // Better image smoothing
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      // For JPEG format, fill solid white background to avoid transparent black artifacts
      if (outputFormat === 'image/jpeg') {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, targetPxW, targetPxH);
      }

      ctx.drawImage(imgElementRef.current!, 0, 0, targetPxW, targetPxH);

      const q = quality / 100;
      const dataUrl = canvas.toDataURL(outputFormat, q);
      setResizedDataUrl(dataUrl);

      // Estimate output file size from base64 string
      const stringLength = dataUrl.length - 'data:image/png;base64,'.length;
      const sizeInBytes = 4 * Math.ceil(stringLength / 3) * 0.5624896334383615;
      setResizedFileSize(Math.round(sizeInBytes));
      setIsProcessing(false);
    };

    const timer = setTimeout(process, 120);
    return () => clearTimeout(timer);
  }, [imageSrc, width, height, unit, dpi, outputFormat, quality]);

  // Apply Quick Presets
  const applyPreset = (preset: {
    w: number;
    h: number;
    u: UnitType;
    fmt: FormatType;
    q: number;
    lock: boolean;
  }) => {
    setUnit(preset.u);
    setLockAspectRatio(preset.lock);
    setWidth(preset.w);
    setHeight(preset.h);
    setOutputFormat(preset.fmt);
    setQuality(preset.q);
    setAspectRatio(preset.w / preset.h);
  };

  // Format Helper
  const formatBytes = (bytes: number): string => {
    if (!bytes || bytes === 0) return '0 KB';
    const k = 1024;
    if (bytes < k) return `${bytes} B`;
    if (bytes < k * k) return `${(bytes / k).toFixed(1)} KB`;
    return `${(bytes / (k * k)).toFixed(2)} MB`;
  };

  // Download Output
  const handleDownload = () => {
    if (!resizedDataUrl) return;
    const ext = outputFormat === 'image/png' ? 'png' : outputFormat === 'image/webp' ? 'webp' : 'jpg';
    const link = document.createElement('a');
    link.href = resizedDataUrl;
    link.download = `${fileName}-resized-${Date.now()}.${ext}`;
    link.click();
  };

  // Reset Image
  const handleReset = () => {
    setImageSrc(null);
    setResizedDataUrl(null);
    setOriginalWidth(0);
    setOriginalHeight(0);
    setOriginalFileSize(0);
  };

  return (
    <div className="space-y-6">
      {!imageSrc ? (
        /* Upload Area */
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className="rounded-3xl border-2 border-dashed border-blue-200 bg-white p-8 sm:p-12 text-center hover:border-[#0a2558] hover:bg-blue-50/20 transition cursor-pointer shadow-xs flex flex-col items-center justify-center group"
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
            className="hidden"
          />
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0a2558] text-[#fde047] shadow-sm group-hover:scale-105 transition mb-4">
            <Upload className="h-8 w-8 stroke-[2.2]" />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Select or Drop Image to Resize
          </h3>
          <p className="mt-1 text-xs text-slate-500 max-w-sm">
            Supports JPG, PNG, WEBP. Fast, client-side, 100% private with instant compression for university & exam forms.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-600">
              ⚡ PU Exam Form Photos
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-600">
              ⚡ Signature Uploads (&lt; 20KB)
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-600">
              ⚡ JPG ↔ PNG ↔ WEBP
            </span>
          </div>
        </div>
      ) : (
        /* Active Editing Workspace */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Quick Presets for University & Exams */}
            <div className="rounded-3xl bg-white p-4 sm:p-5 border border-slate-200/90 shadow-xs space-y-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                ⚡ University Exam & Portal Presets:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() =>
                    applyPreset({
                      w: 3.5,
                      h: 4.5,
                      u: 'cm',
                      fmt: 'image/jpeg',
                      q: 80,
                      lock: true,
                    })
                  }
                  className="rounded-xl border border-blue-100 bg-blue-50/50 p-2.5 text-left hover:bg-blue-100/60 transition cursor-pointer"
                >
                  <div className="text-xs font-bold text-[#0a2558]">PU Exam Photo</div>
                  <div className="text-[10px] text-slate-500">3.5 × 4.5 cm (≈ 50KB)</div>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    applyPreset({
                      w: 3.5,
                      h: 1.5,
                      u: 'cm',
                      fmt: 'image/jpeg',
                      q: 75,
                      lock: false,
                    })
                  }
                  className="rounded-xl border border-amber-100 bg-amber-50/50 p-2.5 text-left hover:bg-amber-100/60 transition cursor-pointer"
                >
                  <div className="text-xs font-bold text-amber-900">Exam Signature</div>
                  <div className="text-[10px] text-slate-500">3.5 × 1.5 cm (&lt; 20KB)</div>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    applyPreset({
                      w: 200,
                      h: 230,
                      u: 'px',
                      fmt: 'image/jpeg',
                      q: 80,
                      lock: false,
                    })
                  }
                  className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-2.5 text-left hover:bg-emerald-100/60 transition cursor-pointer"
                >
                  <div className="text-xs font-bold text-emerald-900">Portal Standard</div>
                  <div className="text-[10px] text-slate-500">200 × 230 px (Samarth)</div>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    applyPreset({
                      w: 500,
                      h: 500,
                      u: 'px',
                      fmt: 'image/png',
                      q: 90,
                      lock: true,
                    })
                  }
                  className="rounded-xl border border-slate-200 bg-slate-50/60 p-2.5 text-left hover:bg-slate-100 transition cursor-pointer"
                >
                  <div className="text-xs font-bold text-slate-800">1:1 Square Avatar</div>
                  <div className="text-[10px] text-slate-500">500 × 500 px (PNG)</div>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    applyPreset({
                      w: 800,
                      h: 600,
                      u: 'px',
                      fmt: 'image/jpeg',
                      q: 85,
                      lock: false,
                    })
                  }
                  className="rounded-xl border border-slate-200 bg-slate-50/60 p-2.5 text-left hover:bg-slate-100 transition cursor-pointer"
                >
                  <div className="text-xs font-bold text-slate-800">4:3 Document</div>
                  <div className="text-[10px] text-slate-500">800 × 600 px</div>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    applyPreset({
                      w: 50,
                      h: 50,
                      u: '%',
                      fmt: outputFormat,
                      q: quality,
                      lock: true,
                    })
                  }
                  className="rounded-xl border border-slate-200 bg-slate-50/60 p-2.5 text-left hover:bg-slate-100 transition cursor-pointer"
                >
                  <div className="text-xs font-bold text-slate-800">50% Scale Down</div>
                  <div className="text-[10px] text-slate-500">Half original size</div>
                </button>
              </div>
            </div>

            {/* Custom Dimensions Card */}
            <div className="rounded-3xl bg-white p-5 sm:p-6 border border-slate-200/90 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <Maximize2 className="h-4 w-4 text-[#0a2558]" />
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">Custom Dimensions</h3>
                </div>

                {/* Unit Switcher */}
                <div className="flex items-center gap-1 rounded-xl bg-slate-100 p-1">
                  {(['px', 'cm', 'mm', 'in', '%'] as UnitType[]).map((u) => (
                    <button
                      key={u}
                      type="button"
                      onClick={() => handleUnitChange(u)}
                      className={`px-2 py-0.5 text-xs font-bold rounded-lg transition cursor-pointer ${
                        unit === u
                          ? 'bg-white text-[#0a2558] shadow-2xs'
                          : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      {u}
                    </button>
                  ))}
                </div>
              </div>

              {/* Width / Height Inputs */}
              <div className="grid grid-cols-11 gap-2 items-center">
                <div className="col-span-5 space-y-1">
                  <label className="text-[11px] font-semibold text-slate-600">
                    Width ({unit})
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={width}
                    onChange={(e) => handleWidthChange(Number(e.target.value))}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs sm:text-sm font-bold text-slate-900 outline-none focus:border-[#0a2558] transition"
                  />
                </div>

                {/* Aspect Ratio Lock Toggle */}
                <div className="col-span-1 flex justify-center pt-5">
                  <button
                    type="button"
                    onClick={() => setLockAspectRatio(!lockAspectRatio)}
                    title={lockAspectRatio ? 'Aspect ratio locked' : 'Aspect ratio unlocked'}
                    className={`p-2 rounded-xl border transition cursor-pointer ${
                      lockAspectRatio
                        ? 'bg-blue-50 border-blue-200 text-[#0a2558]'
                        : 'bg-slate-50 border-slate-200 text-slate-400'
                    }`}
                  >
                    {lockAspectRatio ? (
                      <Lock className="h-3.5 w-3.5" />
                    ) : (
                      <Unlock className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>

                <div className="col-span-5 space-y-1">
                  <label className="text-[11px] font-semibold text-slate-600">
                    Height ({unit})
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={height}
                    onChange={(e) => handleHeightChange(Number(e.target.value))}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs sm:text-sm font-bold text-slate-900 outline-none focus:border-[#0a2558] transition"
                  />
                </div>
              </div>

              {/* DPI Selector (Only for cm / mm / in) */}
              {(unit === 'cm' || unit === 'mm' || unit === 'in') && (
                <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                  <span className="text-slate-500 font-medium">Print Resolution (DPI):</span>
                  <div className="flex gap-1.5">
                    {[72, 150, 200, 300].map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setDpi(d)}
                        className={`px-2 py-1 text-xs rounded-lg font-bold border transition ${
                          dpi === d
                            ? 'bg-[#0a2558] text-white border-[#0a2558]'
                            : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        {d} DPI
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Format & Compression Card */}
            <div className="rounded-3xl bg-white p-5 sm:p-6 border border-slate-200/90 shadow-xs space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <Sliders className="h-4 w-4 text-[#0a2558]" />
                <h3 className="text-xs sm:text-sm font-bold text-slate-900">Format & Quality</h3>
              </div>

              {/* Format Switcher */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold text-slate-600">
                  Target File Format
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: 'JPG / JPEG', value: 'image/jpeg' },
                    { label: 'PNG (Lossless)', value: 'image/png' },
                    { label: 'WEBP (Modern)', value: 'image/webp' },
                  ].map((fmt) => (
                    <button
                      key={fmt.value}
                      type="button"
                      onClick={() => setOutputFormat(fmt.value as FormatType)}
                      className={`py-2 px-3 text-xs font-bold rounded-xl border transition cursor-pointer ${
                        outputFormat === fmt.value
                          ? 'bg-[#0a2558] text-white border-[#0a2558] shadow-xs'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      {fmt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quality Slider (For JPG / WEBP) */}
              {outputFormat !== 'image/png' && (
                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between text-xs font-semibold text-slate-700">
                    <span>Compression & Quality</span>
                    <span className="text-[#0a2558] font-bold">{quality}%</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={100}
                    value={quality}
                    onChange={(e) => setQuality(Number(e.target.value))}
                    className="w-full accent-[#0a2558] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>Smallest File Size</span>
                    <span>Best Quality</span>
                  </div>
                </div>
              )}
            </div>

            {/* Reset / Pick Another */}
            <div className="flex justify-between items-center pt-1">
              <button
                type="button"
                onClick={handleReset}
                className="flex items-center gap-1.5 text-xs font-semibold text-rose-600 hover:text-rose-700 transition cursor-pointer"
              >
                <Trash2 className="h-3.5 w-3.5" />
                <span>Choose Another Image</span>
              </button>
            </div>
          </div>

          {/* Preview & Download Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-4">
            <div className="rounded-3xl bg-white p-5 sm:p-6 border border-slate-200/90 shadow-sm flex flex-col items-center text-center">
              
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-600 mb-4">
                <Sparkles className="h-3 w-3 text-amber-500" />
                Live Preview
              </span>

              {/* Preview Image Container */}
              <div className="relative w-full max-h-[280px] min-h-[160px] rounded-2xl border border-slate-200/80 bg-slate-50/50 flex items-center justify-center p-2 overflow-hidden shadow-inner">
                {resizedDataUrl ? (
                  <img
                    src={resizedDataUrl}
                    alt="Resized Preview"
                    className="max-h-[260px] max-w-full object-contain rounded-lg transition-all"
                  />
                ) : (
                  <div className="flex flex-col items-center text-slate-400 text-xs gap-2">
                    <RefreshCw className="h-5 w-5 animate-spin" />
                    <span>Processing Image...</span>
                  </div>
                )}
              </div>

              {/* Before vs After Comparison Badge */}
              <div className="mt-4 w-full grid grid-cols-2 gap-2 text-left">
                <div className="rounded-xl border border-slate-200/60 bg-slate-50 p-2.5">
                  <div className="text-[10px] font-bold text-slate-400 uppercase">Original</div>
                  <div className="text-xs font-bold text-slate-800">
                    {originalWidth} × {originalHeight} px
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    {formatBytes(originalFileSize)}
                  </div>
                </div>

                <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-2.5">
                  <div className="text-[10px] font-bold text-emerald-600 uppercase">Resized Output</div>
                  <div className="text-xs font-bold text-emerald-950">
                    {toPixels(width, unit)} × {toPixels(height, unit)} px
                  </div>
                  <div className="text-[11px] text-emerald-700 font-bold">
                    {formatBytes(resizedFileSize)}
                  </div>
                </div>
              </div>

              {/* Download Button */}
              <div className="mt-5 w-full space-y-2">
                <button
                  type="button"
                  onClick={handleDownload}
                  disabled={!resizedDataUrl || isProcessing}
                  className="w-full flex items-center justify-center gap-2 rounded-2xl bg-[#0a2558] hover:bg-[#071d47] text-white text-xs sm:text-sm font-bold py-3.5 px-4 transition active:scale-98 shadow-sm cursor-pointer disabled:opacity-50"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Resized Image</span>
                </button>
              </div>

              <p className="mt-3 text-[10px] text-slate-400">
                100% Private in Browser • No uploads to servers
              </p>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

