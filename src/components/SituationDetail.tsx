import React, { useState } from 'react';
import {
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  AlertOctagon,
  ExternalLink,
  PhoneCall,
  FileSignature,
  HelpCircle,
  BookOpen,
  Share2,
  Check,
} from 'lucide-react';
import { Situation, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/legalData';

interface SituationDetailProps {
  situation: Situation;
  language: Language;
  onBack: () => void;
  onOpenDocGenerator: (situation: Situation) => void;
}

export const SituationDetail: React.FC<SituationDetailProps> = ({
  situation,
  language,
  onBack,
  onOpenDocGenerator,
}) => {
  const [explainSimply, setExplainSimply] = useState(false);
  const [copied, setCopied] = useState(false);

  const t = UI_TRANSLATIONS[language];

  const handleShare = async () => {
    const textToShare = `${situation.title[language]}\n\n` +
      `[${t.yourRights}]:\n` +
      situation.yourRights.map((r) => `• ${r.text[language]} (${r.citation})`).join('\n') +
      `\n\n[${t.whatToDoNow}]:\n` +
      situation.whatToDoNow.map((s) => `${s.stepNumber}. ${s.action[language]}`).join('\n') +
      `\n\nVia Raksha Setu — Know Your Police Rights in India (BNSS 2023)`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: situation.title[language],
          text: textToShare,
          url: window.location.href,
        });
        return;
      } catch (err) {
        // Fallback
      }
    }

    await navigator.clipboard.writeText(textToShare);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div id="situation-detail-container" className="w-full max-w-4xl mx-auto pb-24 px-3 sm:px-4 animate-in fade-in duration-200">
      {/* Navigation Header */}
      <div className="sticky top-[53px] z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md py-2.5 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 -mx-3 sm:-mx-4 px-3 sm:px-4 transition-colors">
        <button
          id="back-to-situations-btn"
          onClick={onBack}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-95 text-slate-800 dark:text-slate-200 text-xs font-bold border border-slate-200 dark:border-slate-700 transition cursor-pointer shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.backToSituations}</span>
        </button>

        <div className="flex items-center gap-2">
          {/* Explain Simply Toggle */}
          <button
            id="toggle-explain-simply-btn"
            onClick={() => setExplainSimply(!explainSimply)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition cursor-pointer shadow-xs ${
              explainSimply
                ? 'bg-amber-500 text-slate-950 border-amber-400 font-extrabold'
                : 'bg-slate-100 dark:bg-slate-800 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-500/40 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{explainSimply ? t.hideSimple : t.explainSimply}</span>
          </button>

          {/* Share / Copy button */}
          <button
            id="share-situation-btn"
            onClick={handleShare}
            className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 transition cursor-pointer shadow-xs"
            title="Share this guide"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Share2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Title & Summary */}
      <div className="mt-4 mb-6">
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-300 dark:border-amber-800/60 inline-block mb-2 shadow-xs">
          {situation.category}
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight">
          {situation.title[language]}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
          {situation.summary[language]}
        </p>
      </div>

      {/* SECTION 1: YOUR RIGHTS */}
      <div id="section-your-rights" className="mb-6 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-300 dark:border-emerald-500/30 p-4 sm:p-5 shadow-xs dark:shadow-md">
        <div className="flex items-center gap-2 mb-3.5 pb-2.5 border-b border-emerald-100 dark:border-slate-800">
          <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
          <h2 className="text-sm sm:text-base font-extrabold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
            {t.yourRights}
          </h2>
        </div>

        <div className="space-y-3">
          {situation.yourRights.map((right, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-400 dark:hover:border-emerald-500/40 transition shadow-xs"
            >
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
                  {right.text[language]}
                </p>
              </div>

              {/* Exact citation */}
              <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                <span className="inline-flex items-center text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700/60">
                  {right.citation}
                </span>
              </div>

              {/* Plain language explanation when toggled */}
              {explainSimply && (
                <div className="mt-2.5 pt-2.5 border-t border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-amber-900 dark:text-amber-200/90 leading-relaxed bg-amber-50 dark:bg-amber-950/20 p-2.5 rounded-lg border border-amber-200 dark:border-amber-900/40">
                  <span className="font-bold text-amber-800 dark:text-amber-300">💡 {language === 'hi' ? 'सरल अर्थ: ' : language === 'pa' ? 'ਸੌਖਾ ਮਤਲਬ: ' : 'Plain meaning: '}</span>
                  {right.simpleExplanation[language]}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: WHAT TO DO RIGHT NOW */}
      <div id="section-what-to-do" className="mb-6 rounded-2xl bg-white dark:bg-slate-900 border border-sky-300 dark:border-sky-500/30 p-4 sm:p-5 shadow-xs dark:shadow-md">
        <div className="flex items-center gap-2 mb-3.5 pb-2.5 border-b border-sky-100 dark:border-slate-800">
          <CheckCircle2 className="w-5 h-5 text-sky-600 dark:text-sky-400 flex-shrink-0" />
          <h2 className="text-sm sm:text-base font-extrabold text-sky-800 dark:text-sky-300 uppercase tracking-wider">
            {t.whatToDoNow}
          </h2>
        </div>

        <div className="space-y-2.5">
          {situation.whatToDoNow.map((step) => (
            <div
              key={step.stepNumber}
              className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 shadow-xs"
            >
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sky-100 dark:bg-sky-500/20 border border-sky-300 dark:border-sky-400 text-sky-800 dark:text-sky-300 text-xs font-black flex items-center justify-center">
                {step.stepNumber}
              </span>
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-snug">
                {step.action[language]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: WHAT NOT TO DO */}
      <div id="section-what-not-to-do" className="mb-6 rounded-2xl bg-white dark:bg-slate-900 border border-rose-300 dark:border-rose-500/30 p-4 sm:p-5 shadow-xs dark:shadow-md">
        <div className="flex items-center gap-2 mb-3.5 pb-2.5 border-b border-rose-100 dark:border-slate-800">
          <AlertOctagon className="w-5 h-5 text-rose-600 dark:text-rose-400 flex-shrink-0" />
          <h2 className="text-sm sm:text-base font-extrabold text-rose-800 dark:text-rose-300 uppercase tracking-wider">
            {t.whatNotToDo}
          </h2>
        </div>

        <div className="space-y-2.5">
          {situation.whatNotToDo.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-800/40 text-rose-900 dark:text-rose-200 text-sm leading-relaxed shadow-xs"
            >
              <div className="font-bold flex items-start gap-2 text-rose-800 dark:text-rose-200">
                <span className="text-rose-600 dark:text-rose-400 font-black">✕</span>
                <span>{item.warning[language]}</span>
              </div>
              {item.consequence && (
                <div className="text-xs text-rose-700 dark:text-rose-300/80 mt-1 pl-4 leading-relaxed">
                  {item.consequence[language]}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 4: WHERE TO COMPLAIN / ESCALATE */}
      <div id="section-where-to-complain" className="mb-6 rounded-2xl bg-white dark:bg-slate-900 border border-amber-300 dark:border-amber-500/30 p-4 sm:p-5 shadow-xs dark:shadow-md">
        <div className="flex items-center gap-2 mb-3.5 pb-2.5 border-b border-amber-100 dark:border-slate-800">
          <PhoneCall className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0" />
          <h2 className="text-sm sm:text-base font-extrabold text-amber-800 dark:text-amber-300 uppercase tracking-wider">
            {t.whereToComplain}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {situation.whereToComplain.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between shadow-xs"
            >
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-200">
                  {item.authority[language]}
                </h4>
                {item.details && (
                  <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                    {item.details[language]}
                  </p>
                )}
              </div>

              <div className="mt-3">
                {item.actionType === 'call' && item.value && (
                  <a
                    href={`tel:${item.value}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition shadow-xs cursor-pointer"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>{t.callNow} ({item.value})</span>
                  </a>
                )}

                {item.actionType === 'portal' && item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition shadow-xs cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>{t.openPortal}</span>
                  </a>
                )}

                {item.actionType === 'written' && (
                  <span className="inline-block text-[11px] font-bold text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 px-2.5 py-1 rounded border border-amber-300 dark:border-amber-800/50">
                    {language === 'hi' ? 'लिखित शिकायत' : language === 'pa' ? 'ਲਿਖਤੀ ਸ਼ਿਕਾਇਤ' : 'Written Complaint'}
                  </span>
                )}

                {item.actionType === 'court' && (
                  <span className="inline-block text-[11px] font-bold text-sky-800 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/60 px-2.5 py-1 rounded border border-sky-300 dark:border-sky-800/50">
                    {language === 'hi' ? 'न्यायिक अदालत' : language === 'pa' ? 'ਅਦਾਲਤੀ ਕਾਰਵਾਈ' : 'Judicial Magistrate'}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 5: VERIFIED SOURCES */}
      <div id="section-sources" className="mb-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 shadow-xs">
        <div className="flex items-center gap-2 mb-2.5 pb-2.5 border-b border-slate-200 dark:border-slate-800">
          <BookOpen className="w-4 h-4 text-slate-500 dark:text-slate-400" />
          <h3 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
            {t.verifiedSources}
          </h3>
        </div>

        <div className="space-y-2">
          {situation.sources.map((src, idx) => (
            <a
              key={idx}
              href={src.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-850 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-800 dark:text-slate-300 hover:text-amber-700 dark:hover:text-amber-300 transition group shadow-xs cursor-pointer"
            >
              <span>{src.text[language]}</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-600 dark:group-hover:text-amber-400 flex-shrink-0" />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Sticky Action Bar: Draft Document */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 z-30 transition-colors shadow-lg">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
          <button
            id="draft-complaint-cta-btn"
            onClick={() => onOpenDocGenerator(situation)}
            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-slate-950 font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-md active:scale-98 transition cursor-pointer"
          >
            <FileSignature className="w-5 h-5 text-slate-950" />
            <span>{t.draftDocument}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
