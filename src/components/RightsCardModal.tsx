import React, { useState } from 'react';
import { X, Download, Copy, Check, Printer, Shield, PhoneCall } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS, EMERGENCY_CONTACTS } from '../data/legalData';

interface RightsCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const RightsCardModal: React.FC<RightsCardModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const [copied, setCopied] = useState(false);
  const t = UI_TRANSLATIONS[language];

  if (!isOpen) return null;

  const TOP_5_RIGHTS = [
    {
      num: '1',
      title: {
        en: 'Right to Grounds of Arrest Immediately',
        hi: 'गिरफ्तारी के कारण तुरंत जानने का अधिकार',
        pa: 'ਗ੍ਰਿਫਤਾਰੀ ਦਾ ਕਾਰਨ ਤੁਰੰਤ ਜਾਣਨ ਦਾ ਹੱਕ',
      },
      code: 'BNSS Sec 47(1) & Art 22(1)',
      desc: {
        en: 'Police must immediately inform you of the exact sections and reasons for arrest.',
        hi: 'पुलिस को आपको तुरंत सटीक धाराएं और गिरफ्तारी का कारण बताना होगा।',
        pa: 'ਪੁਲਿਸ ਨੂੰ ਗ੍ਰਿਫਤਾਰੀ ਦੀਆਂ ਧਾਰਾਵਾਂ ਅਤੇ ਕਾਰਨ ਤੁਰੰਤ ਦੱਸਣੇ ਪੈਣਗੇ।',
      },
    },
    {
      num: '2',
      title: {
        en: 'Right to Inform Family / Friend',
        hi: 'परिवार या मित्र को सूचना देने का अधिकार',
        pa: 'ਪਰਿਵਾਰ ਜਾਂ ਦੋਸਤ ਨੂੰ ਸੂਚਿਤ ਕਰਨ ਦਾ ਹੱਕ',
      },
      code: 'BNSS Sec 48 & D.K. Basu',
      desc: {
        en: 'Police must inform your nominated contact immediately of your custody location.',
        hi: 'पुलिस को आपके बताए परिजन को आपकी हिरासत के थाने की सूचना देनी होगी।',
        pa: 'ਪੁਲਿਸ ਨੂੰ ਤੁਹਾਡੇ ਦੱਸੇ ਰਿਸ਼ਤੇਦਾਰ ਨੂੰ ਹਿਰਾਸਤ ਦੀ ਸੂਚਨਾ ਤੁਰੰਤ ਦੇਣੀ ਪਵੇਗੀ।',
      },
    },
    {
      num: '3',
      title: {
        en: 'Right to Consult Lawyer during Interrogation',
        hi: 'पूछताछ में वकील से मिलने व सलाह का अधिकार',
        pa: 'ਪੁੱਛਗਿੱਛ ਦੌਰਾਨ ਵਕੀਲ ਦੀ ਸਲਾਹ ਲੈਣ ਦਾ ਹੱਕ',
      },
      code: 'BNSS Sec 38',
      desc: {
        en: 'You have the right to meet your advocate throughout the interrogation.',
        hi: 'पूछताछ के दौरान आप अपने वकील से मिल सकते हैं।',
        pa: 'ਪੁੱਛਗਿੱਛ ਦੌਰਾਨ ਤੁਸੀਂ ਆਪਣੇ ਵਕੀਲ ਨਾਲ ਮਿਲ ਸਕਦੇ ਹੋ।',
      },
    },
    {
      num: '4',
      title: {
        en: 'Magistrate Production within 24 Hours',
        hi: '24 घंटे में मजिस्ट्रेट के समक्ष पेशी',
        pa: '24 ਘੰਟਿਆਂ ਵਿੱਚ ਮੈਜਿਸਟਰੇਟ ਅੱਗੇ ਪੇਸ਼ੀ',
      },
      code: 'Constitution Art 22(2) & BNSS Sec 58',
      desc: {
        en: 'No citizen can be detained in police custody past 24 hours without judicial Magistrate order.',
        hi: 'मजिस्ट्रेट के आदेश के बिना 24 घंटे से अधिक पुलिस हिरासत पूरी तरह अवैध है।',
        pa: 'ਮੈਜਿਸਟਰੇਟ ਦੇ ਹੁਕਮ ਤੋਂ ਬਿਨਾਂ 24 ਘੰਟਿਆਂ ਤੋਂ ਵੱਧ ਹਿਰਾਸਤ ਗੈਰ-ਕਾਨੂੰਨੀ ਹੈ।',
      },
    },
    {
      num: '5',
      title: {
        en: 'Women Protection: No Night Arrest & Female Search',
        hi: 'महिला सुरक्षा: रात में गिरफ्तारी पर रोक व महिला द्वारा तलाशी',
        pa: 'ਮਹਿਲਾ ਸੁਰੱਖਿਆ: ਰਾਤ ਨੂੰ ਗ੍ਰਿਫਤਾਰੀ ਤੇ ਰੋਕ ਅਤੇ ਮਹਿਲਾ ਵੱਲੋਂ ਤਲਾਸ਼ੀ',
      },
      code: 'BNSS Sec 43(5) & Sec 51(2)',
      desc: {
        en: 'No arrest of women between sunset and sunrise without Magistrate order. Body search only by female officer.',
        hi: 'सूर्यास्त बाद महिला की गिरफ्तारी वर्जित है। शारीरिक तलाशी केवल महिला पुलिसकर्मी ही ले सकती है।',
        pa: 'ਸੂਰਜ ਡੁੱਬਣ ਮਗਰੋਂ ਔਰਤ ਦੀ ਗ੍ਰਿਫਤਾਰੀ ਮਨ੍ਹਾ ਹੈ। ਸਰੀਰਕ ਤਲਾਸ਼ੀ ਸਿਰਫ ਮਹਿਲਾ ਅਫਸਰ ਹੀ ਲੈ ਸਕਦੀ ਹੈ।',
      },
    },
  ];

  const handleCopyText = async () => {
    const text = `RAKSHA SETU — TOP 5 CITIZEN POLICE RIGHTS IN INDIA (BNSS 2023)\n\n` +
      TOP_5_RIGHTS.map((r) => `${r.num}. ${r.title[language]} [${r.code}]\n   ${r.desc[language]}`).join('\n\n') +
      `\n\nEMERGENCY HELPLINES:\n• 112 (National Police/Emergency)\n• 15100 (NALSA Free Legal Aid)\n• 1091 (Women Helpline)\n• 1098 (Childline)\n• 14567 (Senior Helpline)\n\nKeep on lock screen for instant awareness.`;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 dark:bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-amber-500/50 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col transition-colors">
        {/* Modal Header */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between sticky top-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md z-10">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            <h2 className="text-base font-extrabold text-slate-900 dark:text-slate-100">
              {t.top5Rights}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Printable Cheat Sheet Card */}
        <div id="printable-cheat-sheet" className="p-4 space-y-4">
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 border border-amber-300 dark:border-amber-500/40 text-slate-900 dark:text-slate-100 shadow-sm">
            <div className="text-center pb-3 border-b border-slate-200 dark:border-slate-800 mb-3">
              <div className="text-xs font-mono font-bold text-amber-800 dark:text-amber-400 tracking-wider uppercase">
                {language === 'hi' ? 'भारतीय नागरिक पुलिस अधिकार' : 'CITIZEN POLICE RIGHTS IN INDIA'}
              </div>
              <div className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-slate-100 mt-0.5">
                {t.appName} (रक्षा सेतु)
              </div>
              <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">
                Under BNSS 2023 & Constitution of India
              </div>
            </div>

            {/* Top 5 Rights List */}
            <div className="space-y-2.5">
              {TOP_5_RIGHTS.map((item) => (
                <div key={item.num} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-500 text-slate-950 text-xs font-black flex items-center justify-center">
                    {item.num}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">
                        {item.title[language]}
                      </div>
                      <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                        {item.code}
                      </span>
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                      {item.desc[language]}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Contacts Banner */}
            <div className="mt-3.5 pt-3.5 border-t border-slate-200 dark:border-slate-800 grid grid-cols-3 gap-2 text-center">
              <div className="p-2 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-800/60">
                <div className="text-[9px] font-bold text-red-800 dark:text-red-300">POLICE / 112</div>
                <div className="text-xs sm:text-sm font-black text-red-700 dark:text-red-200">112</div>
              </div>
              <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60">
                <div className="text-[9px] font-bold text-emerald-800 dark:text-emerald-300">NALSA LEGAL</div>
                <div className="text-xs sm:text-sm font-black text-emerald-700 dark:text-emerald-200">15100</div>
              </div>
              <div className="p-2 rounded-xl bg-pink-50 dark:bg-pink-950/60 border border-pink-200 dark:border-pink-800/60">
                <div className="text-[9px] font-bold text-pink-800 dark:text-pink-300">WOMEN</div>
                <div className="text-xs sm:text-sm font-black text-pink-700 dark:text-pink-200">1091 / 181</div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-3.5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-2 bg-slate-50 dark:bg-slate-900 rounded-b-2xl">
          <button
            onClick={handleCopyText}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold transition cursor-pointer shadow-xs"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? t.copied : t.copyText}</span>
          </button>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-black transition cursor-pointer shadow-xs"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>{t.printDoc}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
