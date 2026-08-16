import React from 'react';
import {
  Shield,
  Globe,
  Type,
  Sun,
  Moon,
  Wifi,
  Scale,
  Sparkles,
  Bookmark,
} from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/legalData';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  isLargeText: boolean;
  onToggleLargeText: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenCheatSheet: () => void;
  onOpenSources: () => void;
  onOpenDocGen: () => void;
  isOnline: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  isLargeText,
  onToggleLargeText,
  isDarkMode,
  onToggleDarkMode,
  onOpenCheatSheet,
  onOpenSources,
  onOpenDocGen,
  isOnline,
}) => {
  const t = UI_TRANSLATIONS[language];

  return (
    <header className="w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30 transition-colors">
      <div className="max-w-5xl mx-auto px-3 sm:px-4 py-2.5 flex items-center justify-between gap-2">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-amber-400 flex items-center justify-center shadow-md flex-shrink-0">
            <Shield className="w-5 h-5 text-slate-950 stroke-[2.5]" />
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-black text-base sm:text-lg text-slate-900 dark:text-slate-100 tracking-tight leading-none">
                Raksha Setu
              </span>
              <span className="text-xs font-bold text-amber-600 dark:text-amber-400 font-hindi">
                (रक्षा सेतु)
              </span>
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium hidden sm:inline">
                Know Your Police Rights • BNSS 2023
              </span>
              <span className="inline-flex items-center gap-1 text-[9px] font-mono font-medium px-1.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
                <Wifi className="w-2.5 h-2.5" />
                <span>{t.availableOffline}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Controls & Nav Shortcuts */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Quick Cheat Sheet Button */}
          <button
            id="nav-cheat-sheet-btn"
            onClick={onOpenCheatSheet}
            className="hidden md:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-slate-700 transition cursor-pointer shadow-xs"
            title="Top 5 Rights Cheat Sheet"
          >
            <Bookmark className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>{t.cheatSheetBtn}</span>
          </button>

          {/* Quick AI Doc Gen Button */}
          <button
            id="nav-doc-gen-btn"
            onClick={onOpenDocGen}
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-amber-50 dark:bg-amber-500/20 hover:bg-amber-100 dark:hover:bg-amber-500/30 text-amber-800 dark:text-amber-300 text-xs font-semibold border border-amber-300 dark:border-amber-500/40 transition cursor-pointer shadow-xs"
            title="AI Document Assistant"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>{language === 'hi' ? 'दस्तावेज' : language === 'pa' ? 'ਦਸਤਾਵੇਜ਼' : 'Draft Letter'}</span>
          </button>

          {/* Language Switcher Dropdown / Toggle */}
          <div className="flex items-center rounded-lg bg-slate-100 dark:bg-slate-950 p-0.5 border border-slate-200 dark:border-slate-800 shadow-xs">
            {(['en', 'hi', 'pa'] as Language[]).map((lang) => (
              <button
                key={lang}
                id={`lang-btn-${lang}`}
                onClick={() => onLanguageChange(lang)}
                className={`px-2 py-1 rounded text-xs font-bold transition cursor-pointer ${
                  language === lang
                    ? 'bg-amber-500 text-slate-950 shadow-xs font-extrabold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {lang === 'en' ? 'EN' : lang === 'hi' ? 'हिन्दी' : 'ਪੰਜਾਬੀ'}
              </button>
            ))}
          </div>

          {/* Large Text Mode Toggle */}
          <button
            id="toggle-large-text-btn"
            onClick={onToggleLargeText}
            className={`p-1.5 rounded-lg border transition cursor-pointer shadow-xs ${
              isLargeText
                ? 'bg-amber-100 dark:bg-amber-500/20 border-amber-400 text-amber-800 dark:text-amber-300 font-bold'
                : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
            title="Toggle Large Text Mode"
            aria-label="Toggle Large Text Mode"
          >
            <Type className="w-4 h-4" />
          </button>

          {/* Theme Toggle */}
          <button
            id="toggle-theme-btn"
            onClick={onToggleDarkMode}
            className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition cursor-pointer shadow-xs"
            title="Toggle Dark / Light Theme"
            aria-label="Toggle Dark / Light Theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* Sources & About Button */}
          <button
            id="nav-sources-btn"
            onClick={onOpenSources}
            className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition cursor-pointer shadow-xs"
            title="Sources & Disclaimer"
            aria-label="Sources & Disclaimer"
          >
            <Scale className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
