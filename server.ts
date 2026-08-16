import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';
import { DocumentDraftPayload } from './src/types';
import { generateLocalLegalDraft } from './src/data/documentTemplates';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Shared Gemini client with required User-Agent telemetry
  const getGeminiClient = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return null;
    return new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  };

  // API Route: Generate Formal Legal Document
  app.post('/api/generate-document', async (req: Request, res: Response) => {
    try {
      const payload: DocumentDraftPayload = req.body;
      const ai = getGeminiClient();

      // If Gemini client is not configured or fails, use the verified local legal template
      if (!ai) {
        const localDraft = generateLocalLegalDraft(payload);
        return res.json({
          success: true,
          generatedText: localDraft.text,
          docTitle: localDraft.title,
          sourceCitations: localDraft.citations,
          isFallback: false,
        });
      }

      const prompt = `You are an expert Indian Legal Drafting Assistant specializing in the Bharatiya Nagarik Suraksha Sanhita (BNSS) 2023, Constitution of India, and Supreme Court of India precedents.

TASK:
Draft a formal, legally grounded, ready-to-submit complaint letter in ${payload.language === 'hi' ? 'Hindi (Devanagari script)' : payload.language === 'pa' ? 'Punjabi (Gurmukhi script)' : 'English'}.

CRITICAL MANDATE:
- Do not invent, infer, or substitute legal provisions. Every legal citation must strictly come from the verified legal dataset.
- For FIR refusal: Cite Section 173 BNSS 2023 and Lalita Kumari v. Govt. of UP (2014) 2 SCC 1.
- For Police Misconduct: Cite Article 21 Constitution of India, Prakash Singh v. Union of India (2006) 8 SCC 1, and D.K. Basu v. State of WB (1997) 1 SCC 416.
- Maintain formal legal hierarchy: Addressed to Superintendent of Police / Police Complaints Authority, with subject line, numbered facts, specific statutory provisions violated, prayer / relief sought, date/place, and CC to State Human Rights Commission (SHRC) and DLSA.

USER COMPLAINT DATA:
- Type: ${payload.docType}
- Complainant Name: ${payload.complainantName}
- Complainant Contact: ${payload.complainantPhone}
- Complainant Address: ${payload.complainantAddress || 'As provided'}
- Police Station: ${payload.policeStation}
- District / State: ${payload.districtState}
- Date & Time: ${payload.incidentDate} ${payload.incidentTime || ''}
- Officer Involved: ${payload.officerNameRank || 'Officer In-charge / Duty Staff'}
- Incident Summary: ${payload.incidentSummary}
- Evidence / Witnesses: ${payload.evidenceDetails || payload.witnessInfo || 'Documents, recordings, and witnesses available'}
- Relief Requested: ${payload.reliefSought || 'Immediate registration of FIR / Action against delinquent personnel'}

Output the formal letter formatted cleanly with line breaks and signature placeholders.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.7-flash',
        contents: prompt,
        config: {
          temperature: 0.2,
          systemInstruction:
            'You are a certified Indian legal drafting assistant. Output only the formal complaint letter without conversational preamble or markdown code fences.',
        },
      });

      const generatedText = response.text?.trim() || '';

      if (!generatedText) {
        const localDraft = generateLocalLegalDraft(payload);
        return res.json({
          success: true,
          generatedText: localDraft.text,
          docTitle: localDraft.title,
          sourceCitations: localDraft.citations,
          isFallback: true,
        });
      }

      const defaultCitations =
        payload.docType === 'fir-refusal'
          ? [
              'Section 173, Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023',
              'Lalita Kumari v. Govt. of Uttar Pradesh, (2014) 2 SCC 1',
              'Article 21, Constitution of India',
            ]
          : [
              'Article 21, Constitution of India',
              'Prakash Singh v. Union of India, (2006) 8 SCC 1',
              'D.K. Basu v. State of West Bengal, (1997) 1 SCC 416',
            ];

      return res.json({
        success: true,
        generatedText,
        docTitle:
          payload.docType === 'fir-refusal'
            ? 'Formal Complaint for Refusal to Register FIR (Section 173 BNSS)'
            : 'Formal Complaint against Police Misconduct (PCA & NHRC)',
        sourceCitations: defaultCitations,
        isFallback: false,
      });
    } catch (err: any) {
      console.error('Gemini generation error, using verified local engine:', err?.message || err);
      const localDraft = generateLocalLegalDraft(req.body);
      return res.json({
        success: true,
        generatedText: localDraft.text,
        docTitle: localDraft.title,
        sourceCitations: localDraft.citations,
        isFallback: true,
      });
    }
  });

  // Health check
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', app: 'Raksha Setu', time: new Date().toISOString() });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Raksha Setu server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
