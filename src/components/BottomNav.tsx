import React from 'react';
import { LayoutGrid, Bookmark, FileSignature, PhoneCall, Scale } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/legalData';

interface BottomNavProps {
  activeTab: 'situations' | 'docgen';
  onSelectTab: (tab: 'situations' | 'docgen') => void;
  onOpenCheatSheet: () => void;
  onOpenSources: () => void;
  language: Language;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  onSelectTab,
  onOpenCheatSheet,
  onOpenSources,
  language,
}) => {
  const t = UI_TRANSLATIONS[language];

  return (
    <nav
      id="bottom-nav"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 py-1.5 px-3 sm:hidden shadow-lg transition-colors"
    >
      <div className="flex items-center justify-around">
        {/* Situations Tab */}
        <button
          id="bottom-nav-situations"
          onClick={() => onSelectTab('situations')}
          className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded-lg transition cursor-pointer ${
            activeTab === 'situations'
              ? 'text-amber-600 dark:text-amber-400 font-extrabold'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
          }`}
        >
          <LayoutGrid className="w-5 h-5" />
          <span className="text-[10px]">
            {language === 'hi' ? 'स्थितियां' : language === 'pa' ? 'ਸਥਿਤੀਆਂ' : 'Situations'}
          </span>
        </button>

        {/* Rights Card */}
        <button
          id="bottom-nav-rights"
          onClick={onOpenCheatSheet}
          className="flex flex-col items-center gap-0.5 py-1 px-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition cursor-pointer"
        >
          <Bookmark className="w-5 h-5" />
          <span className="text-[10px] font-medium">
            {language === 'hi' ? 'अधिकार कार्ड' : language === 'pa' ? 'ਹੱਕ ਕਾਰਡ' : 'Rights Card'}
          </span>
        </button>

        {/* Draft Letter Tab */}
        <button
          id="bottom-nav-docgen"
          onClick={() => onSelectTab('docgen')}
          className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded-lg transition cursor-pointer ${
            activeTab === 'docgen'
              ? 'text-amber-600 dark:text-amber-400 font-extrabold'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
          }`}
        >
          <FileSignature className="w-5 h-5" />
          <span className="text-[10px]">
            {language === 'hi' ? 'शिकायत पत्र' : language === 'pa' ? 'ਸ਼ਿਕਾਇਤ ਪੱਤਰ' : 'Draft Letter'}
          </span>
        </button>

        {/* Quick 112 Call */}
        <a
          id="bottom-nav-call112"
          href="tel:112"
          className="flex flex-col items-center gap-0.5 py-1 px-2 rounded-lg text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition"
        >
          <div className="w-5 h-5 rounded-full bg-red-100 dark:bg-red-600/30 flex items-center justify-center">
            <PhoneCall className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
          </div>
          <span className="text-[10px] font-black">112</span>
        </a>

        {/* Sources & Law */}
        <button
          id="bottom-nav-sources"
          onClick={onOpenSources}
          className="flex flex-col items-center gap-0.5 py-1 px-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition cursor-pointer"
        >
          <Scale className="w-5 h-5" />
          <span className="text-[10px] font-medium">
            {language === 'hi' ? 'कानून' : language === 'pa' ? 'ਕਾਨੂੰਨ' : 'Sources'}
          </span>
        </button>
      </div>
    </nav>
  );
};
