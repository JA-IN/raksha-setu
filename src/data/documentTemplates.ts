import { DocumentDraftPayload } from '../types';

export function generateLocalLegalDraft(data: DocumentDraftPayload): { text: string; title: string; citations: string[] } {
  const currentDate = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  if (data.docType === 'fir-refusal') {
    const citations = [
      'Section 173, Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023',
      'Lalita Kumari v. Govt. of Uttar Pradesh, (2014) 2 SCC 1 (Constitution Bench)',
      'Article 21, Constitution of India',
    ];

    if (data.language === 'hi') {
      const text = `सेवा में,
पुलिस अधीक्षक (SP) / पुलिस आयुक्त,
जिला: ${data.districtState || '[जिले का नाम]'}

विषय: धारा 173 भारतीय नागरिक सुरक्षा संहिता (BNSS) 2023 के तहत संज्ञेय अपराध की प्रथम सूचना रिपोर्ट (FIR) दर्ज न करने और संबंधित पुलिस थाने के विरुद्ध उचित कानूनी कार्रवाई के संबंध में औपचारिक शिकायत।

महोदय/महोदया,

मैं, ${data.complainantName || '[शिकायतकर्ता का नाम]'}, मोबाइल नंबर: ${data.complainantPhone || '[मोबाइल नंबर]'}, निवासी: ${data.complainantAddress || '[शिकायतकर्ता का पता]'}, अत्यंत विनम्रतापूर्वक निम्नलिखित तथ्य आपके संज्ञान में लाना चाहता हूँ:

1. घटना की तिथि व समय: ${data.incidentDate || '[तारीख]'} ${data.incidentTime ? 'समय लगभग ' + data.incidentTime : ''}
2. संबंधित पुलिस थाना: ${data.policeStation || '[थाने का नाम]'}
3. संबंधित पुलिस अधिकारी: ${data.officerNameRank || 'थाना प्रभारी / ड्यूटी अधिकारी'}

घटना का संक्षिप्त विवरण:
${data.incidentSummary || '[घटना का विवरण]'}

उपलब्ध साक्ष्य / गवाह:
${data.evidenceDetails || data.witnessInfo || 'लिखित शिकायत, सीसीटीवी फुटेज / तस्वीरें / गवाह'}

कानूनी आधार एवं उच्चतम न्यायालय के निर्देश:
1. भारतीय नागरिक सुरक्षा संहिता (BNSS) 2023 की धारा 173 के तहत स्पष्ट प्रावधान है कि संज्ञेय अपराध की सूचना मिलने पर पुलिस द्वारा एफआईआर दर्ज करना अनिवार्य है।
2. माननीय सर्वोच्च न्यायालय की 5-न्यायाधीशों की संविधान पीठ ने 'ललिता कुमारी बनाम उत्तर प्रदेश सरकार (2014) 2 SCC 1' में स्पष्ट व्यवस्था दी है कि यदि दी गई सूचना संज्ञेय अपराध दर्शाती है तो धारा 173 के तहत एफआईआर दर्ज करना पुलिस के लिए बाध्यकारी है।
3. संबंधित थाने द्वारा शिकायत लेने या एफआईआर दर्ज करने से मनमाने ढंग से इनकार किया गया, जो कि कानून व माननीय सुप्रीम कोर्ट के आदेशों की सीधी अवहेलना है।

प्रार्थना / मांगी गई राहत:
अतः आपसे सविनय प्रार्थना है कि:
(क) इस शिकायत को तुरंत पंजीकृत कर धारा 173 बीएनएसएस के तहत संबंधित थाने को अविलंब एफआईआर दर्ज करने का निर्देश दिया जाए।
(ख) बीएनएसएस धारा 173(2) के तहत एफआईआर की प्रमाणित प्रति निःशुल्क शिकायतकर्ता को उपलब्ध कराई जाए।
(ग) एफआईआर दर्ज करने से इनकार करने वाले दोषी पुलिस अधिकारियों के विरुद्ध विभागीय एवं अनुशासनात्मक कार्रवाई प्रारंभ की जाए।

दिनांक: ${currentDate}
स्थान: ${data.districtState || ''}

भवदीय / भवदीया,

(हस्ताक्षर)
नाम: ${data.complainantName || ''}
मोबाइल: ${data.complainantPhone || ''}
पता: ${data.complainantAddress || ''}

प्रतिलिपि प्रेषित (सूचनार्थ एवं उचित कार्रवाई हेतु):
1. माननीय अध्यक्ष, राज्य मानवाधिकार आयोग (SHRC)
2. जिला विधिक सेवा प्राधिकरण (DLSA)`;

      return {
        text,
        title: 'एफआईआर दर्ज न करने की औपचारिक शिकायत (धारा 173 बीएनएसएस)',
        citations,
      };
    }

    if (data.language === 'pa') {
      const text = `ਸੇਵਾ ਵਿਖੇ,
ਜ਼ਿਲ੍ਹਾ ਪੁਲਿਸ ਸੁਪਰਡੈਂਟ (SP) / ਪੁਲਿਸ ਕਮਿਸ਼ਨਰ,
ਜ਼ਿਲ੍ਹਾ: ${data.districtState || '[ਜ਼ਿਲ੍ਹੇ ਦਾ ਨਾਮ]'}

ਵਿਸ਼ਾ: ਧਾਰਾ 173 ਭਾਰਤੀ ਨਾਗਰਿਕ ਸੁਰੱਖਿਆ ਸੰਹਿਤਾ (BNSS) 2023 ਤਹਿਤ ਐਫਆਈਆਰ (FIR) ਦਰਜ ਨਾ ਕਰਨ ਵਿਰੁੱਧ ਰਸਮੀ ਸ਼ਿਕਾਇਤ।

ਜਨਾਬ/ਮੈਡਮ,

ਮੈਂ, ${data.complainantName || '[ਸ਼ਿਕਾਇਤਕਰਤਾ ਦਾ ਨਾਮ]'}, ਮੋਬਾਈਲ: ${data.complainantPhone || '[ਮੋਬਾਈਲ ਨੰਬਰ]'}, ਪਤਾ: ${data.complainantAddress || '[ਪਤਾ]'}, ਹੇਠ ਲਿਖੇ ਤੱਥ ਤੁਹਾਡੇ ਧਿਆਨ ਵਿੱਚ ਲਿਆਉਣਾ ਚਾਹੁੰਦਾ ਹਾਂ:

1. ਘਟਨਾ ਦੀ ਮਿਤੀ ਤੇ ਸਮਾਂ: ${data.incidentDate || '[ਮਿਤੀ]'} ${data.incidentTime || ''}
2. ਸੰਬੰਧਿਤ ਪੁਲਿਸ ਥਾਣਾ: ${data.policeStation || '[ਥਾਣੇ ਦਾ ਨਾਮ]'}
3. ਅਧਿਕਾਰੀ: ${data.officerNameRank || 'ਥਾਣਾ ਮੁਖੀ / ਡਿਊਟੀ ਅਫਸਰ'}

ਘਟਨਾ ਦਾ ਸੰਖੇਪ ਵੇਰਵਾ:
${data.incidentSummary || '[ਘਟਨਾ ਦਾ ਵੇਰਵਾ]'}

ਸਬੂਤ / ਗਵਾਹ:
${data.evidenceDetails || data.witnessInfo || 'ਲਿਖਤੀ ਸ਼ਿਕਾਇਤ, ਵੀਡੀਓ / ਤਸਵੀਰਾਂ / ਗਵਾਹ'}

ਕਾਨੂੰਨੀ ਆਧਾਰ:
1. ਬੀਐਨਐਸਐਸ 2023 ਦੀ ਧਾਰਾ 173 ਅਨੁਸਾਰ ਸੰਗੀਨ ਜੁਰਮ ਦੀ ਸੂਚਨਾ ਮਿਲਣ ਤੇ ਐਫਆਈਆਰ ਦਰਜ ਕਰਨਾ ਪੁਲਿਸ ਲਈ ਕਾਨੂੰਨੀ ਤੌਰ ਤੇ ਲਾਜ਼ਮੀ ਹੈ।
2. ਮਾਣਯੋਗ ਸੁਪਰੀਮ ਕੋਰਟ ਦੇ ਸੰਵਿਧਾਨ ਬੈਂਚ ਦੇ ਫੈਸਲੇ 'ਲਲਿਤਾ ਕੁਮਾਰੀ ਬਨਾਮ ਯੂਪੀ ਸਰਕਾਰ (2014)' ਅਨੁਸਾਰ ਐਫਆਈਆਰ ਦਰਜ ਕਰਨ ਤੋਂ ਇਨਕਾਰ ਨਹੀਂ ਕੀਤਾ ਜਾ ਸਕਦਾ।

ਬੇਨਤੀ / ਰਾਹਤ:
(1) ਤੁਰੰਤ ਐਫਆਈਆਰ ਦਰਜ ਕਰਨ ਦੇ ਹੁਕਮ ਦਿੱਤੇ ਜਾਣ।
(2) ਐਫਆਈਆਰ ਦੀ ਕਾਪੀ ਮੁਫਤ ਮੁਹੱਈਆ ਕਰਵਾਈ ਜਾਵੇ।
(3) ਇਨਕਾਰ ਕਰਨ ਵਾਲੇ ਅਧਿਕਾਰੀਆਂ ਖਿਲਾਫ ਕਾਰਵਾਈ ਕੀਤੀ ਜਾਵੇ।

ਮਿਤੀ: ${currentDate}
ਹਸਤਾਖਰ: ________________
ਨਾਮ: ${data.complainantName || ''}
ਮੋਬਾਈਲ: ${data.complainantPhone || ''}

ਕਾਪੀ ਭੇਜੀ ਗਈ:
1. ਰਾਜ ਮਨੁੱਖੀ ਅਧਿਕਾਰ ਕਮਿਸ਼ਨ (SHRC)
2. ਜ਼ਿਲ੍ਹਾ ਕਾਨੂੰਨੀ ਸੇਵਾਵਾਂ ਅਥਾਰਟੀ`;

      return {
        text,
        title: 'ਐਫਆਈਆਰ ਇਨਕਾਰ ਵਿਰੁੱਧ ਰਸਮੀ ਸ਼ਿਕਾਇਤ (ਧਾਰਾ 173 ਬੀਐਨਐਸਐਸ)',
        citations,
      };
    }

    // Default English
    const text = `To,
The Superintendent of Police (SP) / Commissioner of Police,
District: ${data.districtState || '[District / State]'}

Subject: Formal Complaint under Section 173 of the Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 regarding Refusal / Wilful Delay to Register First Information Report (FIR) by ${data.policeStation || '[Police Station Name]'}.

Respected Sir/Madam,

I, ${data.complainantName || '[Complainant Name]'}, Contact No: ${data.complainantPhone || '[Phone Number]'}, residing at ${data.complainantAddress || '[Complainant Address]'}, bring to your immediate attention the refusal of the local police to register an FIR disclosing a cognizable offence.

1. INCIDENT DETAILS:
   - Date & Time of Incident: ${data.incidentDate || '[Date]'} ${data.incidentTime ? 'at approx. ' + data.incidentTime : ''}
   - Police Station Involved: ${data.policeStation || '[Police Station]'}
   - Officer(s) Involved: ${data.officerNameRank || 'Station House Officer / Duty Officer'}

2. STATEMENT OF FACTS & COGNIZABLE OFFENCE:
${data.incidentSummary || '[Brief description of facts and offence]'}

3. EVIDENCE & WITNESS DETAILS:
${data.evidenceDetails || data.witnessInfo || 'Written complaint copy, photographs/video evidence, independent witnesses'}

4. STATUTORY MANDATE & BINDING PRECEDENTS:
   a) Section 173 of the Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 mandates that every information relating to the commission of a cognizable offence shall be recorded by the officer-in-charge of a police station.
   b) The Constitution Bench of the Hon'ble Supreme Court in 'Lalita Kumari v. Govt. of Uttar Pradesh, (2014) 2 SCC 1' held that registration of an FIR is mandatory if the information discloses the commission of a cognizable offence, and no preliminary inquiry is permissible in such cases.
   c) The arbitrary refusal by the concerned police station directly infringes upon the complainant's fundamental rights guaranteed under Articles 14 and 21 of the Constitution of India.

5. PRAYER / RELIEF SOUGHT:
In light of the above facts, I humbly pray that your esteemed office may be pleased to:
   (i) Direct the immediate registration of an FIR under relevant provisions of the Bharatiya Nyaya Sanhita (BNS), 2023;
   (ii) Direct that a free, certified copy of the registered FIR be provided forthwith to the complainant as mandated under Section 173(2) of BNSS;
   (iii) Initiate appropriate departmental inquiry and disciplinary proceedings against the delinquent police personnel for dereliction of statutory duty.

Date: ${currentDate}
Place: ${data.districtState || ''}

Yours sincerely,

___________________________
(Signature of Complainant)
Name: ${data.complainantName || ''}
Mobile: ${data.complainantPhone || ''}
Address: ${data.complainantAddress || ''}

Copy forwarded for information and urgent intervention to:
1. The Chairperson, State Human Rights Commission (SHRC)
2. Secretary, District Legal Services Authority (DLSA)`;

    return {
      text,
      title: 'Formal Complaint for Refusal to Register FIR (Section 173 BNSS)',
      citations,
    };
  }

  // Police Misconduct Complaint
  const citations = [
    'Article 21, Constitution of India (Right to Life & Personal Dignity)',
    'Prakash Singh v. Union of India, (2006) 8 SCC 1 (Mandate for Police Complaints Authorities)',
    'D.K. Basu v. State of West Bengal, (1997) 1 SCC 416 (Custodial Violence Safeguards)',
    'Bharatiya Nyaya Sanhita (BNS), 2023',
  ];

  if (data.language === 'hi') {
    const text = `सेवा में,
अध्यक्ष / सदस्य सचिव,
राज्य / जिला पुलिस शिकायत प्राधिकरण (Police Complaints Authority)
एवं पुलिस अधीक्षक (SP) / पुलिस आयुक्त,
जिला: ${data.districtState || '[जिले का नाम]'}

विषय: पुलिस अधिकारी/कर्मियों द्वारा गंभीर कदाचार, अवैध उत्पीड़न, हिंसा व पद के दुरुपयोग के विरुद्ध औपचारिक शिकायत।

महोदय/महोदया,

मैं, ${data.complainantName || '[शिकायतकर्ता का नाम]'}, मोबाइल: ${data.complainantPhone || '[मोबाइल नंबर]'}, निवासी: ${data.complainantAddress || '[पता]'}, निम्नलिखित गंभीर पुलिस कदाचार के संबंध में औपचारिक शिकायत प्रस्तुत करता/करती हूँ:

1. घटना विवरण:
   - तारीख व समय: ${data.incidentDate || '[तारीख]'} ${data.incidentTime || ''}
   - घटना का स्थान / थाना: ${data.policeStation || '[थाना/स्थान]'}
   - आरोपी पुलिस अधिकारी: ${data.officerNameRank || '[अधिकारी का नाम/पद/बैज]'}

2. कदाचार का विवरण:
${data.incidentSummary || '[कदाचार, धमकी, हिंसा या अवैध कार्रवाई का विवरण]'}

3. उपलब्ध साक्ष्य / चोटें / गवाह:
${data.evidenceDetails || data.witnessInfo || 'मेडिकल रिपोर्ट (MLC), वीडियो रिकॉर्डिंग, फोटो, स्वतंत्र गवाह'}

4. कानूनी आधार:
   - भारत के संविधान के अनुच्छेद 21 के तहत प्रत्येक नागरिक को गरिमापूर्ण जीवन व स्वतंत्रता का मौलिक अधिकार प्राप्त है।
   - माननीय सर्वोच्च न्यायालय ने 'प्रकाश सिंह बनाम भारत संघ (2006)' तथा 'डी.के. बसु बनाम प. बंगाल (1997)' में स्पष्ट किया है कि पुलिस द्वारा किसी भी प्रकार की अवैध हिरासत, मारपीट या उत्पीड़न असंवैधानिक व दंडनीय है।

प्रार्थना / राहत:
(क) दोषी पुलिस कर्मियों के विरुद्ध तत्काल स्वतंत्र जांच कर विभागीय एवं आपराधिक कार्रवाई की जाए।
(ख) पीड़ित को सुरक्षा प्रदान की जाए।

दिनांक: ${currentDate}
हस्ताक्षर: ________________
नाम: ${data.complainantName || ''}
मोबाइल: ${data.complainantPhone || ''}

प्रतिलिपि प्रेषित:
1. राष्ट्रीय मानवाधिकार आयोग (NHRC)
2. पुलिस महानिदेशक (DGP)`;

    return {
      text,
      title: 'पुलिस कदाचार एवं दुर्व्यवहार के विरुद्ध औपचारिक शिकायत पत्र',
      citations,
    };
  }

  // English Misconduct
  const text = `To,
The Chairperson / Member Secretary,
State / District Police Complaints Authority (PCA),
AND
The Superintendent of Police / Commissioner of Police,
District: ${data.districtState || '[District / State]'}

Subject: Formal Complaint regarding Grave Police Misconduct, Custodial Abuse, Criminal Intimidation, and Violation of Fundamental Rights.

Respected Authority,

I, ${data.complainantName || '[Complainant Name]'}, Contact No: ${data.complainantPhone || '[Phone Number]'}, residing at ${data.complainantAddress || '[Complainant Address]'}, submit this formal complaint regarding grave acts of misconduct, misuse of official authority, and violation of statutory procedures by police personnel.

1. PARTICULARS OF INCIDENT:
   - Date & Time of Incident: ${data.incidentDate || '[Date]'} ${data.incidentTime ? 'at approx. ' + data.incidentTime : ''}
   - Location / Police Station: ${data.policeStation || '[Police Station / Location]'}
   - Officer(s) Implicated: ${data.officerNameRank || '[Officer Name / Rank / Badge Number if known]'}

2. STATEMENT OF ALLEGATIONS & FACTS:
${data.incidentSummary || '[Detailed account of unlawful actions, abuse, physical force, unlawful seizure, or extortion]'}

3. EVIDENCE, INJURIES & WITNESSES:
${data.evidenceDetails || data.witnessInfo || 'Medico-Legal Case (MLC) report, audio-video electronic recordings, photographs, witness testimonies'}

4. VIOLATION OF CONSTITUTIONAL & STATUTORY MANDATES:
   a) The acts alleged violate Article 21 of the Constitution of India guaranteeing the inviolable right to life, bodily integrity, and dignity.
   b) Under the directions of the Hon'ble Supreme Court in 'Prakash Singh v. Union of India, (2006) 8 SCC 1', Police Complaints Authorities are empowered to inquire into serious police misconduct.
   c) The guidelines laid down in 'D.K. Basu v. State of West Bengal, (1997) 1 SCC 416' regarding lawful conduct during arrest, detention, and documentation have been blatantly breached.

5. PRAYER / RELIEF SOUGHT:
I respectfully urge this esteemed Authority / Office to:
   (i) Register this complaint and initiate an independent inquiry into the alleged misconduct;
   (ii) Recommend strict disciplinary and criminal action against the errant officers under the Bharatiya Nyaya Sanhita (BNS), 2023 and Police Service Rules;
   (iii) Ensure protection of the complainant and witnesses against any harassment or retaliatory actions.

Date: ${currentDate}
Place: ${data.districtState || ''}

Yours sincerely,

___________________________
(Signature of Complainant)
Name: ${data.complainantName || ''}
Mobile: ${data.complainantPhone || ''}
Address: ${data.complainantAddress || ''}

Copy forwarded to:
1. The Registrar, National Human Rights Commission (NHRC)
2. The Director General of Police (DGP) of the State`;

  return {
    text,
    title: 'Formal Complaint against Police Misconduct (Police Complaints Authority)',
    citations,
  };
}
