'use client';

import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import {
  Download,
  Share2,
  Copy,
  Check,
  Sparkles,
  RefreshCw,
  Palette,
  Sliders,
  Link as LinkIcon,
  FileText,
  CreditCard,
  Wifi,
} from 'lucide-react';

export const QrCodeTool: React.FC = () => {
  const [text, setText] = useState('https://lazyupdate.tech');
  const [mode, setMode] = useState<'url' | 'text' | 'upi' | 'wifi'>('url');
  
  // Customization state
  const [fgColor, setFgColor] = useState('#0a2558');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [size, setSize] = useState<number>(360);
  const [errorCorrectionLevel, setErrorCorrectionLevel] = useState<'L' | 'M' | 'Q' | 'H'>('M');
  const [margin, setMargin] = useState<number>(2);

  // UPI Specific state
  const [upiId, setUpiId] = useState('');
  const [upiName, setUpiName] = useState('');
  const [upiAmount, setUpiAmount] = useState('');

  // Wi-Fi Specific state
  const [wifiSsid, setWifiSsid] = useState('');
  const [wifiPassword, setWifiPassword] = useState('');
  const [wifiEncryption, setWifiEncryption] = useState<'WPA' | 'WEP' | 'nopass'>('WPA');

  // Preview & Status state
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [svgString, setSvgString] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  // Compute final QR content based on active mode
  const getQrContent = (): string => {
    if (mode === 'url') {
      const trimmed = text.trim();
      if (!trimmed) return 'https://lazyupdate.tech';
      if (!trimmed.startsWith('http://') && !trimmed.startsWith('https://')) {
        return `https://${trimmed}`;
      }
      return trimmed;
    }
    if (mode === 'upi') {
      if (!upiId) return 'upi://pay?pa=student@upi&pn=Student';
      let url = `upi://pay?pa=${encodeURIComponent(upiId.trim())}`;
      if (upiName) url += `&pn=${encodeURIComponent(upiName.trim())}`;
      if (upiAmount) url += `&am=${encodeURIComponent(upiAmount.trim())}&cu=INR`;
      return url;
    }
    if (mode === 'wifi') {
      if (!wifiSsid) return 'WIFI:S:Campus_WiFi;T:WPA;P:;;';
      return `WIFI:S:${wifiSsid};T:${wifiEncryption};P:${wifiPassword};;`;
    }
    return text.trim() || 'Lazy PU';
  };

  // Generate QR Code on Canvas & SVG
  useEffect(() => {
    const generate = async () => {
      setIsGenerating(true);
      const content = getQrContent();
      const options = {
        errorCorrectionLevel,
        margin,
        color: {
          dark: fgColor,
          light: bgColor,
        },
        width: size,
      };

      try {
        if (canvasRef.current) {
          await QRCode.toCanvas(canvasRef.current, content, options);
        }
        const svg = await QRCode.toString(content, {
          ...options,
          type: 'svg',
        });
        setSvgString(svg);
      } catch (err) {
        console.warn('QR Code generation error:', err);
      } finally {
        setIsGenerating(false);
      }
    };

    generate();
  }, [text, mode, fgColor, bgColor, size, errorCorrectionLevel, margin, upiId, upiName, upiAmount, wifiSsid, wifiPassword, wifiEncryption]);

  // Download Handler (PNG, JPG, SVG)
  const handleDownload = (format: 'png' | 'jpg' | 'svg') => {
    if (format === 'svg') {
      if (!svgString) return;
      const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `lazy-pu-qr-${Date.now()}.svg`;
      link.click();
      URL.revokeObjectURL(url);
      return;
    }

    if (!canvasRef.current) return;
    const canvas = canvasRef.current;

    if (format === 'png') {
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = `lazy-pu-qr-${Date.now()}.png`;
      link.click();
    } else if (format === 'jpg') {
      // Create offscreen canvas with solid background to prevent black JPG artifacts
      const offscreen = document.createElement('canvas');
      offscreen.width = canvas.width;
      offscreen.height = canvas.height;
      const ctx = offscreen.getContext('2d');
      if (ctx) {
        ctx.fillStyle = bgColor || '#ffffff';
        ctx.fillRect(0, 0, offscreen.width, offscreen.height);
        ctx.drawImage(canvas, 0, 0);
        const dataUrl = offscreen.toDataURL('image/jpeg', 0.95);
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = `lazy-pu-qr-${Date.now()}.jpg`;
        link.click();
      }
    }
  };

  // Share Handler (Web Share API for Android/Mobile)
  const handleShare = async () => {
    if (!canvasRef.current) return;
    try {
      if (navigator.share) {
        canvasRef.current.toBlob(async (blob) => {
          if (!blob) return;
          const file = new File([blob], 'lazy-pu-qrcode.png', { type: 'image/png' });
          if (navigator.canShare && navigator.canShare({ files: [file] })) {
            await navigator.share({
              title: 'Generated QR Code',
              text: 'Scan with any QR scanner',
              files: [file],
            });
          } else {
            await navigator.share({
              title: 'Generated QR Code',
              text: getQrContent(),
            });
          }
        });
      } else {
        handleCopy();
      }
    } catch {
      // User dismissed share
    }
  };

  // Copy to Clipboard
  const handleCopy = async () => {
    if (!canvasRef.current) return;
    try {
      canvasRef.current.toBlob(async (blob) => {
        if (!blob || !navigator.clipboard) return;
        await navigator.clipboard.write([
          new ClipboardItem({ 'image/png': blob }),
        ]);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    } catch {
      // Fallback
    }
  };

  // Preset Color Palettes
  const palettes = [
    { name: 'PU Navy', fg: '#0a2558', bg: '#ffffff' },
    { name: 'Emerald', fg: '#047857', bg: '#ffffff' },
    { name: 'Crimson', fg: '#b91c1c', bg: '#ffffff' },
    { name: 'Classic Dark', fg: '#0f172a', bg: '#ffffff' },
    { name: 'Warm Cream', fg: '#0a2558', bg: '#faf5ea' },
    { name: 'Golden Glow', fg: '#854d0e', bg: '#fef9c3' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      {/* Left Column: Controls & Inputs */}
      <div className="lg:col-span-7 space-y-5">
        
        {/* Mode Selector Tabs */}
        <div className="rounded-2xl bg-white p-2 border border-slate-200/90 shadow-xs flex items-center gap-1.5 overflow-x-auto scrollbar-none">
          <button
            type="button"
            onClick={() => setMode('url')}
            className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold transition cursor-pointer shrink-0 ${
              mode === 'url'
                ? 'bg-[#0a2558] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <LinkIcon className="h-3.5 w-3.5" />
            <span>Web Link</span>
          </button>

          <button
            type="button"
            onClick={() => setMode('text')}
            className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold transition cursor-pointer shrink-0 ${
              mode === 'text'
                ? 'bg-[#0a2558] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Free Text</span>
          </button>

          <button
            type="button"
            onClick={() => setMode('upi')}
            className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold transition cursor-pointer shrink-0 ${
              mode === 'upi'
                ? 'bg-[#0a2558] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <CreditCard className="h-3.5 w-3.5" />
            <span>UPI Payment</span>
          </button>

          <button
            type="button"
            onClick={() => setMode('wifi')}
            className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold transition cursor-pointer shrink-0 ${
              mode === 'wifi'
                ? 'bg-[#0a2558] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Wifi className="h-3.5 w-3.5" />
            <span>Wi-Fi Connect</span>
          </button>
        </div>

        {/* Input Form Fields */}
        <div className="rounded-3xl bg-white p-5 sm:p-6 border border-slate-200/90 shadow-xs space-y-4">
          {mode === 'url' && (
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-800">
                Website or Portal Link
              </label>
              <input
                type="url"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="https://pupadm.samarth.edu.in"
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#0a2558] focus:ring-2 focus:ring-[#0a2558]/10 outline-none transition"
              />
              <p className="text-[11px] text-slate-400">
                Students scanning this will open the website directly in their browser.
              </p>
            </div>
          )}

          {mode === 'text' && (
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-800">
                Plain Text or Notice Content
              </label>
              <textarea
                rows={3}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter assignment topic, roll number, or classroom notice..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#0a2558] focus:ring-2 focus:ring-[#0a2558]/10 outline-none transition"
              />
            </div>
          )}

          {mode === 'upi' && (
            <div className="space-y-3">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800">
                  UPI ID (VPA) <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  placeholder="name@okaxis or 9876543210@paytm"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#0a2558] focus:ring-2 focus:ring-[#0a2558]/10 outline-none transition"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-700">
                    Payee Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={upiName}
                    onChange={(e) => setUpiName(e.target.value)}
                    placeholder="e.g. Student Council"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs text-slate-900 outline-none focus:border-[#0a2558] transition"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-700">
                    Fixed Amount (₹ Optional)
                  </label>
                  <input
                    type="number"
                    value={upiAmount}
                    onChange={(e) => setUpiAmount(e.target.value)}
                    placeholder="e.g. 50"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs text-slate-900 outline-none focus:border-[#0a2558] transition"
                  />
                </div>
              </div>
            </div>
          )}

          {mode === 'wifi' && (
            <div className="space-y-3">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800">
                  Network SSID (Wi-Fi Name)
                </label>
                <input
                  type="text"
                  value={wifiSsid}
                  onChange={(e) => setWifiSsid(e.target.value)}
                  placeholder="Campus_Library_WiFi"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 outline-none focus:border-[#0a2558] transition"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-700">
                    Password
                  </label>
                  <input
                    type="text"
                    value={wifiPassword}
                    onChange={(e) => setWifiPassword(e.target.value)}
                    placeholder="WiFi Password"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs text-slate-900 outline-none focus:border-[#0a2558] transition"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-700">
                    Security
                  </label>
                  <select
                    value={wifiEncryption}
                    onChange={(e) => setWifiEncryption(e.target.value as any)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs text-slate-900 outline-none focus:border-[#0a2558] transition"
                  >
                    <option value="WPA">WPA / WPA2</option>
                    <option value="WEP">WEP</option>
                    <option value="nopass">None (Open)</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Color Palette & Design Customization */}
        <div className="rounded-3xl bg-white p-5 sm:p-6 border border-slate-200/90 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm border-b border-slate-100 pb-2.5">
            <Palette className="h-4 w-4 text-[#0a2558]" />
            <h3>Custom Design & Colors</h3>
          </div>

          {/* Quick Palettes */}
          <div className="space-y-2">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
              Popular Student Themes:
            </span>
            <div className="flex flex-wrap gap-2">
              {palettes.map((p) => (
                <button
                  key={p.name}
                  type="button"
                  onClick={() => {
                    setFgColor(p.fg);
                    setBgColor(p.bg);
                  }}
                  className={`flex items-center gap-1.5 rounded-xl border px-2.5 py-1.5 text-xs font-semibold transition cursor-pointer ${
                    fgColor === p.fg && bgColor === p.bg
                      ? 'border-[#0a2558] bg-[#0a2558]/5 text-[#0a2558] shadow-2xs'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <span
                    className="h-3 w-3 rounded-full border border-black/10 shrink-0"
                    style={{ backgroundColor: p.fg }}
                  />
                  <span>{p.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Color Pickers */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="space-y-1.5">
              <label className="text-[11px] font-semibold text-slate-700">
                Pattern Color
              </label>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-1.5">
                <input
                  type="color"
                  value={fgColor}
                  onChange={(e) => setFgColor(e.target.value)}
                  className="h-7 w-8 rounded-lg cursor-pointer border-0 bg-transparent"
                />
                <span className="text-xs font-mono text-slate-700 uppercase font-bold">
                  {fgColor}
                </span>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-semibold text-slate-700">
                Background
              </label>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-1.5">
                <input
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="h-7 w-8 rounded-lg cursor-pointer border-0 bg-transparent"
                />
                <span className="text-xs font-mono text-slate-700 uppercase font-bold">
                  {bgColor}
                </span>
              </div>
            </div>
          </div>

          {/* Advanced Sliders */}
          <div className="pt-2 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="space-y-1">
              <div className="flex justify-between text-[11px] font-semibold text-slate-700">
                <span>Error Correction</span>
                <span className="text-[#0a2558] font-bold">Level {errorCorrectionLevel}</span>
              </div>
              <div className="grid grid-cols-4 gap-1 pt-1">
                {(['L', 'M', 'Q', 'H'] as const).map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setErrorCorrectionLevel(lvl)}
                    className={`py-1 text-xs rounded-lg font-bold border transition ${
                      errorCorrectionLevel === lvl
                        ? 'bg-[#0a2558] text-white border-[#0a2558]'
                        : 'border-slate-200 hover:bg-slate-100 text-slate-600'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-[11px] font-semibold text-slate-700">
                <span>Quiet Margin</span>
                <span className="text-[#0a2558] font-bold">{margin} blocks</span>
              </div>
              <input
                type="range"
                min={0}
                max={4}
                value={margin}
                onChange={(e) => setMargin(Number(e.target.value))}
                className="w-full accent-[#0a2558] cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Live Sticky Preview & Actions */}
      <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-4">
        <div className="rounded-3xl bg-white p-6 border border-slate-200/90 shadow-sm flex flex-col items-center justify-center text-center">
          
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-600 mb-4">
            <Sparkles className="h-3 w-3 text-amber-500" />
            Live Vector Preview
          </span>

          {/* The Canvas QR Container */}
          <div
            className="p-4 rounded-2xl border border-slate-200/80 shadow-inner flex items-center justify-center transition-all overflow-hidden max-w-[280px] max-h-[280px]"
            style={{ backgroundColor: bgColor }}
          >
            <canvas
              ref={canvasRef}
              className="max-w-full h-auto object-contain rounded-lg"
            />
          </div>

          {/* Live Content Hint */}
          <div className="mt-3.5 max-w-[260px] text-[11px] text-slate-400 font-mono truncate">
            {getQrContent()}
          </div>

          {/* Action Export Buttons */}
          <div className="mt-5 w-full space-y-2">
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => handleDownload('png')}
                className="flex items-center justify-center gap-1.5 rounded-xl bg-[#0a2558] hover:bg-[#071d47] text-white text-xs font-bold py-2.5 px-3 transition active:scale-95 shadow-2xs cursor-pointer"
              >
                <Download className="h-3.5 w-3.5" />
                <span>PNG</span>
              </button>

              <button
                type="button"
                onClick={() => handleDownload('jpg')}
                className="flex items-center justify-center gap-1.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold py-2.5 px-3 transition active:scale-95 shadow-2xs cursor-pointer"
              >
                <Download className="h-3.5 w-3.5" />
                <span>JPG</span>
              </button>

              <button
                type="button"
                onClick={() => handleDownload('svg')}
                className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold py-2.5 px-3 transition active:scale-95 shadow-2xs cursor-pointer"
              >
                <Download className="h-3.5 w-3.5" />
                <span>SVG</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                type="button"
                onClick={handleShare}
                className="flex items-center justify-center gap-1.5 rounded-xl border border-amber-200 bg-amber-50/70 hover:bg-amber-100 text-amber-900 text-xs font-bold py-2.5 px-3 transition active:scale-95 cursor-pointer"
              >
                <Share2 className="h-3.5 w-3.5 text-amber-700" />
                <span>Share QR</span>
              </button>

              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold py-2.5 px-3 transition active:scale-95 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy Image</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <p className="mt-3 text-[10px] text-slate-400">
            100% Free & Unlimited • High-Resolution Output
          </p>
        </div>
      </div>
    </div>
  );
};
