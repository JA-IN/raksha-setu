import React, { useState } from 'react';
import { PhoneCall, MapPin, Video, AlertOctagon, Check, Copy, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { Language } from '../types';
import { EMERGENCY_CONTACTS, UI_TRANSLATIONS } from '../data/legalData';

interface PanicBarProps {
  language: Language;
  onOpenRecordingNotice: () => void;
}

export const PanicBar: React.FC<PanicBarProps> = ({ language, onOpenRecordingNotice }) => {
  const [showAllContacts, setShowAllContacts] = useState(false);
  const [isLocating, setIsLocating] = useState(false);
  const [copiedLocation, setCopiedLocation] = useState(false);

  const t = UI_TRANSLATIONS[language];

  const handleShareLocation = async () => {
    setIsLocating(true);
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      setIsLocating(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const mapsUrl = `https://maps.google.com/?q=${latitude},${longitude}`;
        const timeString = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
        
        const message = language === 'hi'
          ? `[आपातकालीन संदेश - रक्षा सेतु]: मैं पुलिस बातचीत/आपात स्थिति में हूँ। मेरी वर्तमान लाइव लोकेशन (${timeString} पर):\n${mapsUrl}\nअक्षांश: ${latitude.toFixed(5)}, देशांतर: ${longitude.toFixed(5)}`
          : language === 'pa'
          ? `[ਐਮਰਜੈਂਸੀ ਸੁਨੇਹਾ - ਰਕਸ਼ਾ ਸੇਤੂ]: ਮੈਂ ਪੁਲਿਸ ਜਾਂਚ/ਐਮਰਜੈਂਸੀ ਵਿੱਚ ਹਾਂ। ਮੇਰੀ ਲਾਈਵ ਲੋਕੇਸ਼ਨ (${timeString}):\n${mapsUrl}`
          : `[EMERGENCY ALERT - Raksha Setu]: I am in a police interaction/emergency. My live GPS location at ${timeString}:\n${mapsUrl}\nCoordinates: ${latitude.toFixed(5)}, ${longitude.toFixed(5)}`;

        if (navigator.share) {
          try {
            await navigator.share({
              title: 'Emergency Live Location - Raksha Setu',
              text: message,
              url: mapsUrl,
            });
            setIsLocating(false);
            return;
          } catch (err) {
            // Fallback to clipboard
          }
        }

        try {
          await navigator.clipboard.writeText(message);
          setCopiedLocation(true);
          setTimeout(() => setCopiedLocation(false), 3000);
        } catch (e) {
          window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`, '_blank');
        }
        setIsLocating(false);
      },
      (error) => {
        console.error('Error fetching location:', error);
        alert('Could not fetch GPS location. Please check device location permissions.');
        setIsLocating(false);
      },
      { enableHighAccuracy: true, timeout: 8000 }
    );
  };

  const primaryContacts = EMERGENCY_CONTACTS.filter((c) => c.isPrimary);

  return (
    <div id="panic-bar-container" className="w-full bg-slate-900 border-b border-amber-500/40 text-white sticky top-0 z-40 shadow-md">
      <div className="max-w-5xl mx-auto px-3 sm:px-4 py-2">
        {/* Top Emergency Action Row */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
            </span>
            <span className="text-xs font-black tracking-wider uppercase text-amber-400">
              {t.emergencyNotice}
            </span>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            {/* Quick Call: 112 */}
            <a
              id="call-112-btn"
              href="tel:112"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 active:scale-95 text-white text-xs font-bold transition shadow-xs"
              title="Call National Emergency 112"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>112 (Police)</span>
            </a>

            {/* Quick Call: 15100 NALSA */}
            <a
              id="call-nalsa-btn"
              href="tel:15100"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs font-bold transition shadow-xs"
              title="Call NALSA Free Legal Aid 15100"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>15100 (NALSA)</span>
            </a>

            {/* Share Live Location Button */}
            <button
              id="share-location-btn"
              onClick={handleShareLocation}
              disabled={isLocating}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 active:scale-95 text-amber-300 border border-amber-500/40 text-xs font-semibold transition cursor-pointer shadow-xs"
            >
              {copiedLocation ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">{t.locationCopied}</span>
                </>
              ) : (
                <>
                  <MapPin className={`w-3.5 h-3.5 text-amber-400 ${isLocating ? 'animate-bounce' : ''}`} />
                  <span>{isLocating ? 'Locating...' : t.shareLocation}</span>
                </>
              )}
            </button>

            {/* Recording Disclosure Notice */}
            <button
              id="recording-notice-btn"
              onClick={onOpenRecordingNotice}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-950/90 hover:bg-indigo-900 active:scale-95 text-indigo-200 border border-indigo-500/50 text-xs font-semibold transition cursor-pointer shadow-xs"
              title="Show legal recording disclosure card to officer"
            >
              <Video className="w-3.5 h-3.5 text-indigo-400" />
              <span>{t.recordingNotice}</span>
            </button>

            {/* Toggle All Contacts */}
            <button
              id="toggle-contacts-btn"
              onClick={() => setShowAllContacts(!showAllContacts)}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition cursor-pointer"
              aria-label="Toggle helplines"
            >
              {showAllContacts ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Expanded Contacts Drawer */}
        {showAllContacts && (
          <div className="mt-3 pt-3 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-2">
            {EMERGENCY_CONTACTS.map((contact) => (
              <a
                key={contact.id}
                id={`contact-${contact.id}`}
                href={`tel:${contact.number}`}
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-850 hover:bg-slate-800 border border-slate-750 transition group shadow-xs"
              >
                <div>
                  <div className="text-xs font-bold text-slate-200 group-hover:text-amber-400 transition">
                    {contact.name[language]}
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono font-medium">{contact.number}</div>
                </div>
                <PhoneCall className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition" />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
