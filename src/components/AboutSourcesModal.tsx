import React from 'react';
import { X, BookOpen, ExternalLink, ShieldCheck, Scale, AlertTriangle } from 'lucide-react';
import { Language } from '../types';
import { CORE_LEGAL_SOURCES, UI_TRANSLATIONS } from '../data/legalData';

interface AboutSourcesModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const AboutSourcesModal: React.FC<AboutSourcesModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const t = UI_TRANSLATIONS[language];
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 dark:bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col transition-colors">
        {/* Header */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between sticky top-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md z-10">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            <h2 className="text-base font-extrabold text-slate-900 dark:text-slate-100">
              {t.sourcesDisclaimerBtn}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 space-y-5 text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
          {/* Prominent Disclaimer Card */}
          <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-500/40 text-amber-950 dark:text-amber-200 shadow-xs">
            <div className="flex items-center gap-2 font-bold text-amber-800 dark:text-amber-300 text-sm mb-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />
              <span>{t.disclaimerTitle}</span>
            </div>
            <p className="text-xs leading-relaxed text-amber-900 dark:text-amber-200/90">
              {t.disclaimerBody}
            </p>
          </div>

          {/* About Raksha Setu */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wider mb-1 text-amber-800 dark:text-amber-400">
              About Raksha Setu (रक्षा सेतु)
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
              Raksha Setu is a dedicated mobile-first legal aid utility designed to empower Indian citizens with immediate, clear, and actionable knowledge of their statutory rights during police encounters in under 30 seconds.
            </p>
          </div>

          {/* Legal Framework Baseline */}
          <div>
            <h3 className="text-sm font-extrabold text-slate-900 dark:text-slate-100 uppercase tracking-wide mb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Statutory Legal Framework (New Criminal Laws 2023)</span>
            </h3>

            <div className="space-y-2.5">
              {CORE_LEGAL_SOURCES.map((source, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750 hover:border-slate-300 dark:hover:border-slate-650 transition shadow-xs"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-slate-100 text-xs sm:text-sm">
                        {source.lawName}
                      </h4>
                      {source.sectionCode && (
                        <span className="inline-block text-[10px] font-mono font-bold text-emerald-800 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-300 dark:border-emerald-800/60 mt-1">
                          {source.sectionCode}
                        </span>
                      )}
                    </div>

                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition cursor-pointer shadow-xs"
                      title="Open official portal"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {source.text[language]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Official Verification Portals */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2.5">
              Official Government & Judicial Portals
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <a
                href="https://www.indiacode.nic.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-850 text-slate-800 dark:text-slate-300 hover:text-amber-700 dark:hover:text-amber-400 transition border border-slate-200 dark:border-slate-800 shadow-xs"
              >
                <span>India Code (Official Acts)</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href="https://nalsa.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-850 text-slate-800 dark:text-slate-300 hover:text-amber-700 dark:hover:text-amber-400 transition border border-slate-200 dark:border-slate-800 shadow-xs"
              >
                <span>NALSA (Free Legal Aid)</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href="https://hrcnet.nic.in/HRCNet/public/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-850 text-slate-800 dark:text-slate-300 hover:text-amber-700 dark:hover:text-amber-400 transition border border-slate-200 dark:border-slate-800 shadow-xs"
              >
                <span>NHRC Human Rights Portal</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href="https://main.sci.gov.in/judgments"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-850 text-slate-800 dark:text-slate-300 hover:text-amber-700 dark:hover:text-amber-400 transition border border-slate-200 dark:border-slate-800 shadow-xs"
              >
                <span>Supreme Court Judgments</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3.5 border-t border-slate-200 dark:border-slate-800 flex justify-end bg-slate-50 dark:bg-slate-900 rounded-b-2xl">
          <button
            onClick={onClose}
            className="py-2 px-5 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold transition cursor-pointer shadow-xs"
          >
            Close / बंद करें
          </button>
        </div>
      </div>
    </div>
  );
};
