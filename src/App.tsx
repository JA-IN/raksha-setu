import React, { useState, useEffect, useMemo } from 'react';
import { Search, X, Shield, Filter, Sparkles, Scale, Bookmark, AlertTriangle, ArrowRight } from 'lucide-react';
import { Situation, Language } from './types';
import { SITUATIONS, UI_TRANSLATIONS } from './data/legalData';
import { PanicBar } from './components/PanicBar';
import { Navbar } from './components/Navbar';
import { BottomNav } from './components/BottomNav';
import { SituationCard } from './components/SituationCard';
import { SituationDetail } from './components/SituationDetail';
import { DocumentGenerator } from './components/DocumentGenerator';
import { RightsCardModal } from './components/RightsCardModal';
import { RecordingNoticeModal } from './components/RecordingNoticeModal';
import { AboutSourcesModal } from './components/AboutSourcesModal';

export function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('raksha_lang');
    return (saved as Language) || 'en';
  });

  const [selectedSituation, setSelectedSituation] = useState<Situation | null>(null);
  const [activeTab, setActiveTab] = useState<'situations' | 'docgen'>('situations');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const [isLargeText, setIsLargeText] = useState<boolean>(() => {
    return localStorage.getItem('raksha_large_text') === 'true';
  });

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('raksha_theme');
    return saved ? saved === 'dark' : true;
  });

  const [isCheatSheetOpen, setIsCheatSheetOpen] = useState(false);
  const [isRecordingNoticeOpen, setIsRecordingNoticeOpen] = useState(false);
  const [isSourcesOpen, setIsSourcesOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    localStorage.setItem('raksha_lang', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('raksha_large_text', String(isLargeText));
  }, [isLargeText]);

  useEffect(() => {
    localStorage.setItem('raksha_theme', isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const t = UI_TRANSLATIONS[language];

  const categories = useMemo(() => [
    { id: 'all', label: language === 'hi' ? 'सभी स्थितियां' : language === 'pa' ? 'ਸਾਰੀਆਂ ਸਥਿਤੀਆਂ' : 'All Situations' },
    { id: 'traffic', label: language === 'hi' ? 'ट्रैफिक व वाहन' : language === 'pa' ? 'ਟ੍ਰੈਫਿਕ' : 'Traffic & Vehicles' },
    { id: 'custody', label: language === 'hi' ? 'हिरासत व गिरफ्तारी' : language === 'pa' ? 'ਗ੍ਰਿਫਤਾਰੀ ਤੇ ਹਿਰਾਸਤ' : 'Arrest & Custody' },
    { id: 'women', label: language === 'hi' ? 'महिला अधिकार' : language === 'pa' ? 'ਮਹਿਲਾ ਹੱਕ' : "Women's Rights" },
    { id: 'investigation', label: language === 'hi' ? 'फोन व घर तलाशी' : language === 'pa' ? 'ਤਲਾਸ਼ੀ ਤੇ ਫੋਨ' : 'Search & Phone' },
    { id: 'misconduct', label: language === 'hi' ? 'कदाचार व रिश्वत' : language === 'pa' ? 'ਰਿਸ਼ਵਤ ਤੇ ਧੱਕਾ' : 'Misconduct & Bribery' },
    { id: 'property', label: language === 'hi' ? 'जब्ती व संपत्ति' : language === 'pa' ? 'ਸੰਪਤੀ ਜ਼ਬਤੀ' : 'Seizure & Property' },
  ], [language]);

  // Fuzzy / Multi-field search
  const filteredSituations = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return SITUATIONS.filter((sit) => {
      // Category match
      if (selectedCategory !== 'all' && sit.category !== selectedCategory) {
        return false;
      }
      if (!q) return true;

      // Match across titles and summaries in all languages
      const titleMatch =
        sit.title.en.toLowerCase().includes(q) ||
        sit.title.hi.toLowerCase().includes(q) ||
        sit.title.pa.toLowerCase().includes(q);

      const summaryMatch =
        sit.summary.en.toLowerCase().includes(q) ||
        sit.summary.hi.toLowerCase().includes(q) ||
        sit.summary.pa.toLowerCase().includes(q);

      const rightsMatch = sit.yourRights.some(
        (r) =>
          r.text.en.toLowerCase().includes(q) ||
          r.text.hi.toLowerCase().includes(q) ||
          r.text.pa.toLowerCase().includes(q) ||
          r.citation.toLowerCase().includes(q)
      );

      return titleMatch || summaryMatch || rightsMatch;
    });
  }, [searchQuery, selectedCategory]);

  const handleSelectSituation = (situation: Situation) => {
    setSelectedSituation(situation);
    setActiveTab('situations');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToSituations = () => {
    setSelectedSituation(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDocGenForSituation = (situation: Situation) => {
    setSelectedSituation(situation);
    setActiveTab('docgen');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-[#F8F9FA] text-slate-900'} ${isLargeText ? 'text-lg' : 'text-base'} transition-colors duration-150 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950`}>
      {/* Emergency Panic Bar */}
      <PanicBar
        language={language}
        onOpenRecordingNotice={() => setIsRecordingNoticeOpen(true)}
      />

      {/* Main Top Header Navbar */}
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        isLargeText={isLargeText}
        onToggleLargeText={() => setIsLargeText(!isLargeText)}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        onOpenCheatSheet={() => setIsCheatSheetOpen(true)}
        onOpenSources={() => setIsSourcesOpen(true)}
        onOpenDocGen={() => {
          setActiveTab('docgen');
          setSelectedSituation(null);
        }}
        isOnline={isOnline}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
        {activeTab === 'docgen' ? (
          <DocumentGenerator
            initialSituation={selectedSituation}
            language={language}
            onBack={() => {
              setActiveTab('situations');
            }}
          />
        ) : selectedSituation ? (
          <SituationDetail
            situation={selectedSituation}
            language={language}
            onBack={handleBackToSituations}
            onOpenDocGenerator={handleOpenDocGenForSituation}
          />
        ) : (
          /* HOME: 30-Second Guided Decision Engine */
          <div id="home-view" className="space-y-6">
            {/* Hero / Question Banner */}
            <div className="text-center sm:text-left pt-2 pb-1">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 dark:bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-400/40 dark:border-amber-500/40 shadow-xs">
                  <Shield className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  <span>{language === 'hi' ? 'भारतीय नागरिक सुरक्षा संहिता (BNSS 2023)' : 'Verified under BNSS 2023 & SC Precedents'}</span>
                </span>

                <button
                  onClick={() => setIsCheatSheetOpen(true)}
                  className="text-xs font-bold text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>{t.cheatSheetBtn}</span>
                </button>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
                {t.heroQuestion}
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5 max-w-2xl leading-relaxed">
                {t.heroSubtext}
              </p>
            </div>

            {/* Search Input Bar */}
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 dark:text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="situation-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full pl-11 pr-10 py-3 sm:py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-xs dark:shadow-inner transition"
              />
              {searchQuery && (
                <button
                  id="clear-search-btn"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1.5 scrollbar-none no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  id={`cat-filter-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition cursor-pointer flex-shrink-0 shadow-xs ${
                    selectedCategory === cat.id
                      ? 'bg-amber-500 text-slate-950 font-extrabold shadow-sm'
                      : 'bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-800'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Situations Grid (10 Guided Situations) */}
            <div>
              <div className="flex items-center justify-between mb-3 text-xs font-bold text-slate-500 dark:text-slate-400">
                <span>{filteredSituations.length} {language === 'hi' ? 'स्थितियां उपलब्ध' : language === 'pa' ? 'ਸਥਿਤੀਆਂ ਮੌਜੂਦ' : 'Situations available'}</span>
                {selectedCategory !== 'all' && (
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className="text-amber-600 dark:text-amber-400 hover:underline cursor-pointer"
                  >
                    {language === 'hi' ? 'सभी देखें' : 'Show All'}
                  </button>
                )}
              </div>

              {filteredSituations.length === 0 ? (
                <div className="text-center py-12 px-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
                  <AlertTriangle className="w-10 h-10 text-amber-500 mx-auto mb-2 opacity-80" />
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-300">
                    {language === 'hi' ? 'कोई स्थिति नहीं मिली।' : 'No matching situation found.'}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
                    {language === 'hi'
                      ? 'यदि यह मामला इन श्रेणियों से बाहर है, तो यह कानूनी सहायता (NALSA 15100) का विषय हो सकता है।'
                      : 'Matters outside this verified scope require direct consultation with NALSA Free Legal Aid (15100).'}
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                    }}
                    className="mt-4 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-amber-400 text-xs font-bold transition cursor-pointer"
                  >
                    {language === 'hi' ? 'खोज रीसेट करें' : 'Reset Search'}
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
                  {filteredSituations.map((situation, idx) => (
                    <SituationCard
                      key={situation.id}
                      situation={situation}
                      language={language}
                      onSelect={handleSelectSituation}
                      index={idx}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Quick Action Banner: Generate Legal Document */}
            <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-amber-300 dark:border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm dark:shadow-lg">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">
                    {language === 'hi' ? 'पुलिस ने FIR लिखने से मना किया या दुर्व्यवहार हुआ?' : 'Police Refused FIR or Committed Misconduct?'}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {language === 'hi'
                    ? 'बीएनएसएस धारा 173 व सुप्रीम कोर्ट के नियमों के तहत औपचारिक कानूनी शिकायत पत्र तुरंत तैयार करें।'
                    : 'Draft an instant formal complaint letter citing Section 173 BNSS & Supreme Court Constitution Bench precedents.'}
                </p>
              </div>

              <button
                id="hero-draft-btn"
                onClick={() => {
                  setActiveTab('docgen');
                  setSelectedSituation(null);
                }}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 active:scale-95 text-slate-950 font-black text-xs sm:text-sm whitespace-nowrap flex items-center justify-center gap-1.5 transition shadow-xs cursor-pointer"
              >
                <span>{t.draftDocument}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Legal Disclaimer Footer Bar */}
            <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 text-center text-[11px] text-slate-500 dark:text-slate-400 space-y-1">
              <p>
                {t.disclaimerBody}
              </p>
              <div className="flex items-center justify-center gap-3 pt-1 font-medium">
                <button
                  onClick={() => setIsSourcesOpen(true)}
                  className="text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 underline cursor-pointer"
                >
                  {t.sourcesDisclaimerBtn}
                </button>
                <span>•</span>
                <a
                  href="tel:15100"
                  className="text-emerald-700 dark:text-emerald-400 hover:underline font-bold"
                >
                  NALSA Free Legal Aid: 15100
                </a>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Mobile Bottom Navigation */}
      <BottomNav
        activeTab={activeTab}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          if (tab === 'situations') {
            setSelectedSituation(null);
          }
        }}
        onOpenCheatSheet={() => setIsCheatSheetOpen(true)}
        onOpenSources={() => setIsSourcesOpen(true)}
        language={language}
      />

      {/* Rights Card / Cheat Sheet Modal */}
      <RightsCardModal
        isOpen={isCheatSheetOpen}
        onClose={() => setIsCheatSheetOpen(false)}
        language={language}
      />

      {/* Recording Notice Fullscreen Modal */}
      <RecordingNoticeModal
        isOpen={isRecordingNoticeOpen}
        onClose={() => setIsRecordingNoticeOpen(false)}
        language={language}
      />

      {/* About & Verified Sources Modal */}
      <AboutSourcesModal
        isOpen={isSourcesOpen}
        onClose={() => setIsSourcesOpen(false)}
        language={language}
      />
    </div>
  );
}

export default App;
