import React from 'react';
import {
  ShieldAlert,
  UserX,
  Search,
  FileX,
  AlertTriangle,
  IndianRupee,
  Shield,
  Eye,
  FileText,
  Smartphone,
  ChevronRight,
} from 'lucide-react';
import { Situation, Language } from '../types';

interface SituationCardProps {
  situation: Situation;
  language: Language;
  onSelect: (situation: Situation) => void;
  index: number;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  ShieldAlert: <ShieldAlert className="w-6 h-6 text-amber-400" />,
  UserX: <UserX className="w-6 h-6 text-rose-400" />,
  Search: <Search className="w-6 h-6 text-sky-400" />,
  FileX: <FileX className="w-6 h-6 text-orange-400" />,
  AlertTriangle: <AlertTriangle className="w-6 h-6 text-red-400" />,
  IndianRupee: <IndianRupee className="w-6 h-6 text-yellow-400" />,
  Shield: <Shield className="w-6 h-6 text-pink-400" />,
  Eye: <Eye className="w-6 h-6 text-indigo-400" />,
  FileText: <FileText className="w-6 h-6 text-emerald-400" />,
  Smartphone: <Smartphone className="w-6 h-6 text-teal-400" />,
};

export const SituationCard: React.FC<SituationCardProps> = ({
  situation,
  language,
  onSelect,
  index,
}) => {
  const icon = ICON_MAP[situation.iconName] || <ShieldAlert className="w-6 h-6 text-amber-400" />;

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'women':
        return 'bg-pink-50 dark:bg-pink-950/60 text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-800/60';
      case 'custody':
        return 'bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800/60';
      case 'misconduct':
        return 'bg-red-50 dark:bg-red-950/60 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800/60';
      case 'investigation':
        return 'bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800/60';
      case 'property':
        return 'bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800/60';
      default:
        return 'bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800/60';
    }
  };

  return (
    <button
      id={`situation-card-${situation.id}`}
      onClick={() => onSelect(situation)}
      className="w-full text-left p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-850/90 border border-slate-200/80 dark:border-slate-800 hover:border-amber-400/80 dark:hover:border-amber-500/50 shadow-xs hover:shadow-md transition-all duration-200 group flex items-start gap-3.5 sm:gap-4 focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
    >
      <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex-shrink-0 group-hover:scale-105 transition-transform shadow-xs">
        {icon}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[11px] font-mono font-bold text-slate-400 dark:text-slate-500">
            #{index + 1}
          </span>
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border whitespace-nowrap uppercase tracking-wider ${getCategoryBadge(situation.category)}`}>
            {situation.category}
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors leading-snug line-clamp-2">
          {situation.title[language]}
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
          {situation.summary[language]}
        </p>

        <div className="flex items-center gap-1.5 text-xs text-amber-700 dark:text-amber-400 font-bold mt-3">
          <span>{language === 'hi' ? 'अधिकार व कदम देखें' : language === 'pa' ? 'ਹੱਕ ਅਤੇ ਕਦਮ ਵੇਖੋ' : 'View Rights & Actions'}</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </button>
  );
};
