export type Language = 'en' | 'hi' | 'pa';

export interface EmergencyContact {
  id: string;
  name: Record<Language, string>;
  number: string;
  category: 'police' | 'legal' | 'women' | 'child' | 'senior';
  description: Record<Language, string>;
  isPrimary?: boolean;
}

export interface LegalSource {
  text: Record<Language, string>;
  sectionCode?: string;
  lawName: string;
  url: string;
  isOfficialGovt?: boolean;
}

export interface WhereToComplainItem {
  authority: Record<Language, string>;
  actionType: 'call' | 'portal' | 'written' | 'court';
  value?: string;
  url?: string;
  details?: Record<Language, string>;
}

export interface Situation {
  id: string;
  iconName: string;
  title: Record<Language, string>;
  summary: Record<Language, string>;
  category: 'encounter' | 'custody' | 'investigation' | 'women' | 'misconduct' | 'property';
  tags: string[];
  yourRights: Array<{
    text: Record<Language, string>;
    citation: string;
    simpleExplanation: Record<Language, string>;
    sourceUrl?: string;
  }>;
  whatToDoNow: Array<{
    stepNumber: number;
    action: Record<Language, string>;
    detail?: Record<Language, string>;
  }>;
  whatNotToDo: Array<{
    warning: Record<Language, string>;
    consequence?: Record<Language, string>;
  }>;
  whereToComplain: WhereToComplainItem[];
  sources: LegalSource[];
  defaultDocType?: 'fir-refusal' | 'police-misconduct';
}

export interface DocumentDraftPayload {
  docType: 'fir-refusal' | 'police-misconduct';
  language: Language;
  complainantName: string;
  complainantPhone: string;
  complainantAddress?: string;
  policeStation: string;
  districtState: string;
  incidentDate: string;
  incidentTime?: string;
  officerNameRank?: string;
  incidentSummary: string;
  offenceCategory?: string;
  witnessInfo?: string;
  evidenceDetails?: string;
  reliefSought?: string;
}

export interface DocumentResponse {
  success: boolean;
  generatedText: string;
  sourceCitations: string[];
  docTitle: string;
  isFallback?: boolean;
}
