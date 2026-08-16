import React from 'react';
import { X, Video, ShieldAlert, Check } from 'lucide-react';
import { Language } from '../types';

interface RecordingNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const RecordingNoticeModal: React.FC<RecordingNoticeModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 dark:bg-black/95 backdrop-blur-md animate-in fade-in duration-150 select-none">
      <div className="bg-slate-950 border-4 border-amber-500 rounded-3xl w-full max-w-xl p-6 sm:p-8 text-slate-100 relative shadow-2xl shadow-amber-500/20">
        {/* Close button */}
        <button
          id="close-recording-notice-btn"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white border border-slate-700 transition cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Recording Visual Badge */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="flex h-3.5 w-3.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-600"></span>
          </span>
          <span className="text-xs sm:text-sm font-mono font-black text-red-500 uppercase tracking-widest">
            RECORDING IN PROGRESS / रिकॉर्डिंग चालू है
          </span>
        </div>

        {/* Big High Contrast Notice Heading */}
        <div className="text-center mb-6">
          <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-2xl inline-block mb-3">
            <Video className="w-12 h-12 text-amber-400 mx-auto" />
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-amber-400 uppercase tracking-wide leading-tight">
            LEGAL NOTICE: AUDIO/VIDEO RECORDING
          </h1>
          <h2 className="text-base sm:text-lg font-bold text-slate-200 mt-1">
            कानूनी सूचना: यह बातचीत रिकॉर्ड की जा रही है
          </h2>
        </div>

        {/* Bilingual Legal Affirmation */}
        <div className="space-y-4 text-xs sm:text-sm leading-relaxed bg-slate-900/90 border border-slate-800 p-4 sm:p-5 rounded-2xl">
          <div>
            <p className="font-semibold text-slate-100 leading-relaxed">
              "This interaction is being peacefully recorded for mutual safety and transparency. Peaceful recording of public officials discharging public duties in a public place is protected under <strong>Article 19(1)(a) & Article 21</strong> of the Constitution of India."
            </p>
          </div>

          <div className="pt-3 border-t border-slate-800">
            <p className="font-medium text-slate-300 leading-relaxed">
              "यह बातचीत आपसी सुरक्षा एवं पारदर्शिता के लिए रिकॉर्ड की जा रही है। सार्वजनिक स्थान पर ड्यूटीरत सरकारी अधिकारियों की शांतिपूर्ण रिकॉर्डिंग भारतीय संविधान के <strong>अनुच्छेद 19(1)(क) व अनुच्छेद 21</strong> के तहत नागरिक का वैध अधिकार है।"
            </p>
          </div>

          <div className="pt-2.5 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
            • Recording does not obstruct public duty.<br />
            • Audio/video timestamps and GPS location are digitally preserved.
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={onClose}
            className="w-full py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-sm sm:text-base transition cursor-pointer shadow-lg"
          >
            I Understand / वापस जाएं
          </button>
        </div>
      </div>
    </div>
  );
};
