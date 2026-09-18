'use client';

import React, { useState } from 'react';
import {
  X,
  Star,
  Send,
  CheckCircle2,
  MessageSquareHeart,
  Sparkles,
  Bug,
  HelpCircle,
  FileText,
} from 'lucide-react';
import { WhatsAppIcon } from './OfficialBrandIcons';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'suggestion' | 'review';
}

const CATEGORIES = [
  { id: 'Suggestion', label: 'Suggestion', icon: Sparkles },
  { id: 'Bug Report', label: 'Bug Report', icon: Bug },
  { id: 'Syllabus Request', label: 'Syllabus Request', icon: FileText },
  { id: 'General Review', label: 'Review & Rating', icon: MessageSquareHeart },
];

const RATING_DESCRIPTIONS: Record<number, string> = {
  1: 'Needs major improvement 😕',
  2: 'Could be better 😐',
  3: 'Good and useful 🙂',
  4: 'Very helpful app! 😊',
  5: 'Loved it! Best for PU students! 🌟❤️',
};

export const FeedbackModal: React.FC<FeedbackModalProps> = ({
  isOpen,
  onClose,
  initialType = 'suggestion',
}) => {
  const [rating, setRating] = useState<number>(5);
  const [category, setCategory] = useState<string>(
    initialType === 'review' ? 'General Review' : 'Suggestion'
  );
  const [message, setMessage] = useState<string>('');
  const [nameAndCollege, setNameAndCollege] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Save to localStorage
    try {
      const existing = JSON.parse(
        localStorage.getItem('lazy_pu_feedbacks_v1') || '[]'
      );
      const newEntry = {
        id: Date.now().toString(),
        date: new Date().toISOString(),
        category,
        rating,
        message: message.trim(),
        nameAndCollege: nameAndCollege.trim(),
      };
      existing.push(newEntry);
      localStorage.setItem('lazy_pu_feedbacks_v1', JSON.stringify(existing));
    } catch {
      // ignore localStorage errors
    }

    setIsSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const text = `*Lazy PU Feedback & Suggestion*\n` +
      `📌 *Topic:* ${category}\n` +
      `⭐ *Rating:* ${rating}/5\n` +
      (nameAndCollege ? `🎓 *Student:* ${nameAndCollege}\n` : '') +
      `💬 *Message:* ${message || 'Feedback sent from Lazy PU App'}`;

    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-60 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-2xl text-slate-900 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close feedback form"
          className="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-800 transition"
        >
          <X className="h-5 w-5" />
        </button>

        {isSubmitted ? (
          <div className="py-4 text-center space-y-3 animate-in zoom-in-95 duration-200">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="text-base font-black text-slate-900">
              Thank You for Your Feedback!
            </h3>
            <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
              Your feedback helps keep the Patna University syllabus, circulars, and tools accurate and updated.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row gap-2 justify-center">
              <button
                onClick={handleSendWhatsApp}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 text-xs shadow-xs transition"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Send to PU WhatsApp Support</span>
              </button>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setMessage('');
                  onClose();
                }}
                className="rounded-2xl border border-slate-200 bg-slate-100 px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-200 transition"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Header */}
            <div className="flex items-center gap-3 pr-8">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-200">
                <MessageSquareHeart className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-black text-slate-900">
                  Feedback & Suggestions
                </h3>
                <p className="text-[11px] text-slate-500 font-medium">
                  Report bugs, request missing syllabus, or share ideas
                </p>
              </div>
            </div>

            {/* Topic Selector */}
            <div>
              <label className="block text-[11px] font-black uppercase tracking-wider text-slate-600 mb-1.5">
                Topic
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {CATEGORIES.map((cat) => {
                  const Icon = cat.icon;
                  const isSelected = category === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setCategory(cat.id)}
                      className={`flex items-center gap-2 rounded-xl p-2 text-xs font-bold transition text-left border ${
                        isSelected
                          ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200/80 hover:bg-slate-100'
                      }`}
                    >
                      <Icon className={`h-3.5 w-3.5 shrink-0 ${isSelected ? 'text-amber-400' : 'text-slate-500'}`} />
                      <span className="truncate">{cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Star Rating */}
            <div>
              <label className="block text-[11px] font-black uppercase tracking-wider text-slate-600 mb-1">
                Your Rating
              </label>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="p-1 rounded-lg hover:bg-amber-50 active:scale-90 transition"
                  >
                    <Star
                      className={`h-6 w-6 transition-colors ${
                        star <= rating
                          ? 'fill-amber-400 text-amber-400'
                          : 'fill-slate-100 text-slate-300'
                      }`}
                    />
                  </button>
                ))}
                <span className="ml-2 text-xs font-bold text-amber-700">
                  {RATING_DESCRIPTIONS[rating]}
                </span>
              </div>
            </div>

            {/* Name / College */}
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">
                Name & College / Department <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <input
                type="text"
                value={nameAndCollege}
                onChange={(e) => setNameAndCollege(e.target.value)}
                placeholder="e.g. Rahul, Patna Science College"
                className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:outline-hidden transition"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">
                Your Message / Suggestion <span className="text-rose-500">*</span>
              </label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us what feature you need, report an error, or write your review..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:outline-hidden transition resize-none"
              />
            </div>

            {/* Submit & WhatsApp Buttons */}
            <div className="space-y-2 pt-1">
              <button
                type="submit"
                disabled={!message.trim()}
                className="w-full flex items-center justify-center gap-2 rounded-2xl bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-white font-black py-2.5 px-4 text-xs transition shadow-xs active:scale-98"
              >
                <Send className="h-4 w-4" /> Submit Feedback
              </button>

              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="w-full flex items-center justify-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50/80 hover:bg-emerald-100 text-emerald-900 font-bold py-2 px-4 text-xs transition"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Or Send Direct on WhatsApp</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
