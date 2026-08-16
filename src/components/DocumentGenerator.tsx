import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  FileSignature,
  Sparkles,
  Copy,
  Check,
  Download,
  Printer,
  Share2,
  AlertCircle,
  FileText,
  RefreshCw,
  Send,
} from 'lucide-react';
import { Situation, Language, DocumentDraftPayload, DocumentResponse } from '../types';
import { UI_TRANSLATIONS } from '../data/legalData';
import { generateLocalLegalDraft } from '../data/documentTemplates';

interface DocumentGeneratorProps {
  initialSituation: Situation | null;
  language: Language;
  onBack: () => void;
}

export const DocumentGenerator: React.FC<DocumentGeneratorProps> = ({
  initialSituation,
  language,
  onBack,
}) => {
  const [docType, setDocType] = useState<'fir-refusal' | 'police-misconduct'>(
    initialSituation?.defaultDocType || 'fir-refusal'
  );

  const [formData, setFormData] = useState<DocumentDraftPayload>({
    docType: initialSituation?.defaultDocType || 'fir-refusal',
    language,
    complainantName: '',
    complainantPhone: '',
    complainantAddress: '',
    policeStation: '',
    districtState: '',
    incidentDate: new Date().toISOString().split('T')[0],
    incidentTime: '18:30',
    officerNameRank: '',
    incidentSummary: '',
    witnessInfo: '',
    evidenceDetails: '',
    reliefSought: '',
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedDoc, setGeneratedDoc] = useState<DocumentResponse | null>(null);
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const t = UI_TRANSLATIONS[language];

  // Update formData when docType or language changes
  useEffect(() => {
    setFormData((prev) => ({ ...prev, docType, language }));
  }, [docType, language]);

  const handleInputChange = (field: keyof DocumentDraftPayload, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePrefillSample = () => {
    if (docType === 'fir-refusal') {
      setFormData({
        docType: 'fir-refusal',
        language,
        complainantName: 'Aarav Sharma',
        complainantPhone: '9876543210',
        complainantAddress: 'House 42, Civil Lines, Sector 5',
        policeStation: 'Sector 17 Police Station',
        districtState: 'North District, New Delhi',
        incidentDate: new Date().toISOString().split('T')[0],
        incidentTime: '19:45',
        officerNameRank: 'Sub-Inspector R.K. Verma (Duty Officer)',
        incidentSummary:
          language === 'hi'
            ? 'दिनांक 16/08/2026 को शाम 7:45 बजे मेरे साथ मुख्य बाजार में हथियार के बल पर मोबाइल व ₹5,000 की छिनैती (Robbery) हुई। जब मैं तुरंत सेक्टर 17 थाने में लिखित शिकायत लेकर गया, तो ड्यूटी अधिकारी ने शिकायत लेने से मना कर दिया और कहा कि यह सिविल मामला है या दूसरे थाने जाओ।'
            : 'On 16/08/2026 at approx. 7:45 PM, two unidentified persons snatched my smartphone and cash at knifepoint in Main Market. When I presented my written complaint at Sector 17 Police Station, the duty officer refused to register an FIR and turned me away stating territorial excuse.',
        witnessInfo: 'Shopkeeper Rajiv Kumar (Witness present during incident)',
        evidenceDetails: 'CCTV footage available outside shop, IMEI bill of mobile phone',
        reliefSought: 'Immediate registration of FIR under Section 173 BNSS and relevant robbery provisions of BNS 2023.',
      });
    } else {
      setFormData({
        docType: 'police-misconduct',
        language,
        complainantName: 'Pooja Verma',
        complainantPhone: '9812345678',
        complainantAddress: 'Plot 12, Model Town',
        policeStation: 'Central Police Station',
        districtState: 'Ludhiana, Punjab',
        incidentDate: new Date().toISOString().split('T')[0],
        incidentTime: '20:30',
        officerNameRank: 'Head Constable Gurmeet Singh & Constable Suresh',
        incidentSummary:
          language === 'hi'
            ? 'पुलिसकर्मियों ने वाहन चेकिंग के नाम पर गाली-गलौज की, थप्पड़ मारा और बिना किसी रसीद या चालान के ₹2,000 नकद रिश्वत की मांग की। विरोध करने पर झूठे केस में फंसाने की धमकी दी।'
            : 'Police personnel verbally abused me during routine vehicle checking, used physical force, and demanded an illegal cash bribe of ₹2,000 without issuing any challan, threatening false implication upon refusal.',
        witnessInfo: 'Brother Rohit Verma present at the spot',
        evidenceDetails: 'Mobile video recording of misconduct, hospital MLC report of minor bruises',
        reliefSought: 'Independent inquiry by Police Complaints Authority & suspension of errant officers.',
      });
    }
  };

  const handleGenerate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!formData.complainantName || !formData.policeStation || !formData.incidentSummary) {
      setErrorMsg(
        language === 'hi'
          ? 'कृपया अपना नाम, थाना और घटना का विवरण अवश्य भरें।'
          : language === 'pa'
          ? 'ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਨਾਮ, ਥਾਣਾ ਅਤੇ ਘਟਨਾ ਦਾ ਵੇਰਵਾ ਜ਼ਰੂਰ ਭਰੋ।'
          : 'Please fill Complainant Name, Police Station, and Incident Summary.'
      );
      return;
    }

    setErrorMsg(null);
    setIsGenerating(true);

    try {
      const res = await fetch('/api/generate-document', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const data: DocumentResponse = await res.json();
        setGeneratedDoc(data);
      } else {
        throw new Error('Server error');
      }
    } catch (err) {
      console.warn('API call failed, generating locally:', err);
      const local = generateLocalLegalDraft(formData);
      setGeneratedDoc({
        success: true,
        generatedText: local.text,
        docTitle: local.title,
        sourceCitations: local.citations,
        isFallback: true,
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = async () => {
    if (!generatedDoc) return;
    await navigator.clipboard.writeText(generatedDoc.generatedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadTxt = () => {
    if (!generatedDoc) return;
    const blob = new Blob([generatedDoc.generatedText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `RakshaSetu_Complaint_${formData.docType}_${formData.incidentDate}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    if (!generatedDoc) return;
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      window.print();
      return;
    }

    printWindow.document.write(`
      <html>
        <head>
          <title>${generatedDoc.docTitle}</title>
          <style>
            body { font-family: 'Times New Roman', serif; padding: 40px; line-height: 1.6; color: #111; }
            h1 { font-size: 16pt; text-align: center; margin-bottom: 20px; border-bottom: 2px solid #000; padding-bottom: 8px; }
            pre { white-space: pre-wrap; font-family: 'Times New Roman', serif; font-size: 12pt; }
            .footer { margin-top: 40px; font-size: 9pt; color: #666; border-top: 1px solid #ccc; padding-top: 8px; }
          </style>
        </head>
        <body>
          <h1>${generatedDoc.docTitle}</h1>
          <pre>${generatedDoc.generatedText}</pre>
          <div class="footer">Generated via Raksha Setu Legal Assistant (BNSS 2023 Compliant)</div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  const handleShare = async () => {
    if (!generatedDoc) return;
    if (navigator.share) {
      try {
        await navigator.share({
          title: generatedDoc.docTitle,
          text: generatedDoc.generatedText,
        });
        return;
      } catch (e) {
        // Fallback
      }
    }
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(generatedDoc.generatedText)}`, '_blank');
  };

  return (
    <div id="document-generator-container" className="w-full max-w-4xl mx-auto pb-24 px-3 sm:px-4 animate-in fade-in duration-200">
      {/* Top Bar */}
      <div className="sticky top-[53px] z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md py-2.5 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 -mx-3 sm:-mx-4 px-3 sm:px-4 mb-5 transition-colors">
        <button
          id="doc-gen-back-btn"
          onClick={onBack}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold border border-slate-200 dark:border-slate-700 transition cursor-pointer shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.backToSituations}</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            type="button"
            id="prefill-sample-btn"
            onClick={handlePrefillSample}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-500/40 text-xs font-bold transition cursor-pointer shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>{language === 'hi' ? 'नमूना भरें' : language === 'pa' ? 'ਨਮੂਨਾ ਭਰੋ' : 'Fill Sample Scenario'}</span>
          </button>
        </div>
      </div>

      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1.5">
          <FileSignature className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
            {t.docGenHeading}
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          {t.docGenSubheading}
        </p>
      </div>

      {/* Document Type Selector Tabs */}
      <div className="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 mb-6 shadow-xs">
        <button
          type="button"
          id="select-fir-refusal-tab"
          onClick={() => {
            setDocType('fir-refusal');
            setGeneratedDoc(null);
          }}
          className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 cursor-pointer ${
            docType === 'fir-refusal'
              ? 'bg-amber-500 text-slate-950 font-extrabold shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>{language === 'hi' ? 'एफआईआर इनकार पत्र' : language === 'pa' ? 'ਐਫਆਈਆਰ ਇਨਕਾਰ ਪੱਤਰ' : 'FIR Refusal Letter'}</span>
        </button>

        <button
          type="button"
          id="select-misconduct-tab"
          onClick={() => {
            setDocType('police-misconduct');
            setGeneratedDoc(null);
          }}
          className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 cursor-pointer ${
            docType === 'police-misconduct'
              ? 'bg-amber-500 text-slate-950 font-extrabold shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'
          }`}
        >
          <AlertCircle className="w-4 h-4" />
          <span>{language === 'hi' ? 'पुलिस कदाचार शिकायत' : language === 'pa' ? 'ਪੁਲਿਸ ਦੁਰਵਿਹਾਰ ਸ਼ਿਕਾਇਤ' : 'Police Misconduct'}</span>
        </button>
      </div>

      {/* Form & Output Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Form Inputs (Left Column) */}
        <form onSubmit={handleGenerate} className="lg:col-span-6 space-y-4">
          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs dark:shadow-md space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 pb-1.5 border-b border-slate-100 dark:border-slate-800">
              {language === 'hi' ? '१. शिकायतकर्ता का विवरण' : language === 'pa' ? '੧. ਸ਼ਿਕਾਇਤਕਰਤਾ ਦੇ ਵੇਰਵੇ' : '1. Complainant Details'}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {t.formComplainantName} *
                </label>
                <input
                  id="input-complainant-name"
                  type="text"
                  required
                  value={formData.complainantName}
                  onChange={(e) => handleInputChange('complainantName', e.target.value)}
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {t.formPhone} *
                </label>
                <input
                  id="input-complainant-phone"
                  type="tel"
                  required
                  value={formData.complainantPhone}
                  onChange={(e) => handleInputChange('complainantPhone', e.target.value)}
                  placeholder="e.g. 9876543210"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {t.formAddress}
              </label>
              <input
                id="input-complainant-address"
                type="text"
                value={formData.complainantAddress}
                onChange={(e) => handleInputChange('complainantAddress', e.target.value)}
                placeholder="e.g. House 14, Gandhi Nagar, Jaipur"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-xs"
              />
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs dark:shadow-md space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 pb-1.5 border-b border-slate-100 dark:border-slate-800">
              {language === 'hi' ? '२. घटना व थाने का विवरण' : language === 'pa' ? '੨. ਘਟਨਾ ਅਤੇ ਥਾਣੇ ਦੇ ਵੇਰਵੇ' : '2. Incident & Station Details'}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {t.formPoliceStation} *
                </label>
                <input
                  id="input-police-station"
                  type="text"
                  required
                  value={formData.policeStation}
                  onChange={(e) => handleInputChange('policeStation', e.target.value)}
                  placeholder="e.g. Kotwali Police Station"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {t.formDistrictState} *
                </label>
                <input
                  id="input-district-state"
                  type="text"
                  required
                  value={formData.districtState}
                  onChange={(e) => handleInputChange('districtState', e.target.value)}
                  placeholder="e.g. Varanasi, Uttar Pradesh"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-xs"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {t.formDate}
                </label>
                <input
                  id="input-incident-date"
                  type="date"
                  value={formData.incidentDate}
                  onChange={(e) => handleInputChange('incidentDate', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {t.formOfficer}
                </label>
                <input
                  id="input-officer-info"
                  type="text"
                  value={formData.officerNameRank}
                  onChange={(e) => handleInputChange('officerNameRank', e.target.value)}
                  placeholder="e.g. SI Sharma (Badge #402)"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {t.formSummary} *
              </label>
              <textarea
                id="input-incident-summary"
                rows={3}
                required
                value={formData.incidentSummary}
                onChange={(e) => handleInputChange('incidentSummary', e.target.value)}
                placeholder="State the concise facts: what crime occurred, what officer said, why FIR was refused or misconduct occurred..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-xs leading-relaxed"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {t.formEvidence}
              </label>
              <input
                id="input-evidence-details"
                type="text"
                value={formData.evidenceDetails}
                onChange={(e) => handleInputChange('evidenceDetails', e.target.value)}
                placeholder="e.g. CCTV video, medical MLC report, phone recording, witnesses"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-xs"
              />
            </div>
          </div>

          {errorMsg && (
            <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/80 border border-rose-200 dark:border-rose-600 text-rose-900 dark:text-rose-200 text-xs font-bold flex items-center gap-2 shadow-xs">
              <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-600 dark:text-rose-400" />
              <span>{errorMsg}</span>
            </div>
          )}

          <button
            id="generate-document-submit-btn"
            type="submit"
            disabled={isGenerating}
            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-slate-950 font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-md active:scale-98 transition cursor-pointer disabled:opacity-50"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>{t.generating}</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>{t.generateButton}</span>
              </>
            )}
          </button>
        </form>

        {/* Generated Letter Preview (Right Column) */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex-1 flex flex-col min-h-[460px] shadow-xs dark:shadow-md">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 dark:border-slate-800">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">
                  {language === 'hi' ? 'औपचारिक कानूनी प्रारूप' : language === 'pa' ? 'ਰਸਮੀ ਕਾਨੂੰਨੀ ਖਰੜਾ' : 'Formal Legal Draft'}
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  {docType === 'fir-refusal'
                    ? 'Section 173 BNSS 2023 & Lalita Kumari Precedent'
                    : 'Article 21 & Prakash Singh Guidelines'}
                </p>
              </div>

              {generatedDoc && (
                <div className="flex items-center gap-1">
                  <button
                    id="copy-draft-btn"
                    onClick={handleCopy}
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition cursor-pointer shadow-xs border border-slate-200 dark:border-slate-700"
                    title="Copy Text"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>

                  <button
                    id="download-draft-btn"
                    onClick={handleDownloadTxt}
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition cursor-pointer shadow-xs border border-slate-200 dark:border-slate-700"
                    title="Download .txt"
                  >
                    <Download className="w-4 h-4" />
                  </button>

                  <button
                    id="print-draft-btn"
                    onClick={handlePrint}
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition cursor-pointer shadow-xs border border-slate-200 dark:border-slate-700"
                    title="Print / Save PDF"
                  >
                    <Printer className="w-4 h-4" />
                  </button>

                  <button
                    id="share-draft-btn"
                    onClick={handleShare}
                    className="p-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition cursor-pointer shadow-xs"
                    title="Share via WhatsApp"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Document Content Box */}
            <div className="flex-1 overflow-y-auto max-h-[500px] p-4 rounded-xl bg-[#FAFAFA] dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-serif text-slate-900 dark:text-slate-200 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap select-text shadow-inner">
              {generatedDoc ? (
                generatedDoc.generatedText
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-400 dark:text-slate-500 font-sans">
                  <FileSignature className="w-12 h-12 text-slate-300 dark:text-slate-700 mb-3" />
                  <p className="font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {language === 'hi'
                      ? 'फॉर्म भरें या "नमूना भरें" पर क्लिक करके औपचारिक शिकायती पत्र तैयार करें'
                      : language === 'pa'
                      ? 'ਫਾਰਮ ਭਰੋ ਜਾਂ "ਨਮੂਨਾ ਭਰੋ" ਤੇ ਕਲਿਕ ਕਰਕੇ ਰਸਮੀ ਸ਼ਿਕਾਇਤ ਪੱਤਰ ਤਿਆਰ ਕਰੋ'
                      : 'Fill in details or click "Fill Sample Scenario" to generate a legally compliant formal complaint letter'}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {language === 'hi'
                      ? 'बीएनएसएस 2023 की धारा 173 और सुप्रीम कोर्ट के बाध्यकारी निर्णयों के साथ तुरंत तैयार।'
                      : 'Instant, formal drafting citing verified BNSS 2023 provisions.'}
                  </p>
                </div>
              )}
            </div>

            {/* Citations Footer */}
            {generatedDoc && generatedDoc.sourceCitations && (
              <div className="mt-3.5 pt-3 border-t border-slate-200 dark:border-slate-800">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                  {language === 'hi' ? 'शामिल किए गए कानूनी उद्धरण:' : 'Applied Legal Citations:'}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {generatedDoc.sourceCitations.map((cite, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-emerald-800 dark:text-emerald-300"
                    >
                      {cite}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
