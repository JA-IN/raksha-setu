import { Situation, EmergencyContact, LegalSource } from '../types';

export const EMERGENCY_CONTACTS: EmergencyContact[] = [
  {
    id: 'national-emergency',
    name: {
      en: 'National Emergency',
      hi: 'राष्ट्रीय आपातकालीन नंबर',
      pa: 'ਰਾਸ਼ਟਰੀ ਐਮਰਜੈਂਸੀ ਨੰਬਰ',
    },
    number: '112',
    category: 'police',
    description: {
      en: 'Police, Fire, Ambulance & Emergency response across India',
      hi: 'भारत भर में पुलिस, अग्निशमन और एम्बुलेंस आपातकालीन सेवा',
      pa: 'ਭਾਰਤ ਭਰ ਵਿੱਚ ਪੁਲਿਸ, ਫਾਇਰ ਅਤੇ ਐਂਬੂਲੈਂਸ ਐਮਰਜੈਂਸੀ ਸੇਵਾ',
    },
    isPrimary: true,
  },
  {
    id: 'nalsa-legal-aid',
    name: {
      en: 'NALSA Free Legal Aid',
      hi: 'नालसा निःशुल्क कानूनी सहायता',
      pa: 'ਨਾਲਸਾ ਮੁਫਤ ਕਾਨੂੰਨੀ ਸਹਾਇਤਾ',
    },
    number: '15100',
    category: 'legal',
    description: {
      en: 'National Legal Services Authority 24x7 toll-free legal aid',
      hi: 'राष्ट्रीय विधिक सेवा प्राधिकरण 24x7 निःशुल्क कानूनी सहायता',
      pa: 'ਰਾਸ਼ਟਰੀ ਕਾਨੂੰਨੀ ਸੇਵਾਵਾਂ ਅਥਾਰਟੀ 24x7 ਟੋਲ-ਫ੍ਰੀ ਕਾਨੂੰਨੀ ਸਹਾਇਤਾ',
    },
    isPrimary: true,
  },
  {
    id: 'women-helpline-1091',
    name: {
      en: 'Women Helpline (National)',
      hi: 'महिला हेल्पलाइन (राष्ट्रीय)',
      pa: 'ਮਹਿਲਾ ਹੈਲਪਲਾਈਨ (ਰਾਸ਼ਟਰੀ)',
    },
    number: '1091',
    category: 'women',
    description: {
      en: '24x7 dedicated emergency assistance for women in distress',
      hi: 'संकटग्रस्त महिलाओं के लिए 24x7 समर्पित आपातकालीन सहायता',
      pa: 'ਮੁਸੀਬਤ ਵਿੱਚ ਔਰਤਾਂ ਲਈ 24x7 ਸਮਰਪਿਤ ਐਮਰਜੈਂਸੀ ਸਹਾਇਤਾ',
    },
    isPrimary: true,
  },
  {
    id: 'women-helpline-181',
    name: {
      en: 'Women in Distress (181)',
      hi: 'महिला सहायता (181)',
      pa: 'ਮਹਿਲਾ ਸਹਾਇਤਾ (181)',
    },
    number: '181',
    category: 'women',
    description: {
      en: 'All-India emergency & counselling support for women',
      hi: 'अखिल भारतीय आपातकालीन व परामर्श सहायता',
      pa: 'ਅਖਿਲ ਭਾਰਤੀ ਐਮਰਜੈਂਸੀ ਅਤੇ ਕਾਉਂਸਲਿੰਗ ਸਹਾਇਤਾ',
    },
  },
  {
    id: 'child-helpline',
    name: {
      en: 'Childline Helpline',
      hi: 'चाइल्ड हेल्पलाइन',
      pa: 'ਚਾਈਲਡ ਹੈਲਪਲਾਈਨ',
    },
    number: '1098',
    category: 'child',
    description: {
      en: 'Protection and emergency care for children in distress',
      hi: 'संकटग्रस्त बच्चों के लिए सुरक्षा और आपातकालीन देखभाल',
      pa: 'ਸੰਕਟ ਵਿੱਚ ਬੱਚਿਆਂ ਲਈ ਸੁਰੱਖਿਆ ਅਤੇ ਐਮਰਜੈਂਸੀ ਦੇਖਭਾਲ',
    },
  },
  {
    id: 'senior-helpline',
    name: {
      en: 'Senior Citizen Helpline (Elderline)',
      hi: 'वरिष्ठ नागरिक हेल्पलाइन (एल्डरलाइन)',
      pa: 'ਸੀਨੀਅਰ ਸਿਟੀਜ਼ਨ ਹੈਲਪਲਾਈਨ',
    },
    number: '14567',
    category: 'senior',
    description: {
      en: 'Toll-free support and grievance redressal for senior citizens',
      hi: 'वरिष्ठ नागरिकों के लिए निःशुल्क सहायता और शिकायत निवारण',
      pa: 'ਬਜ਼ੁਰਗਾਂ ਲਈ ਮੁਫਤ ਸਹਾਇਤਾ ਅਤੇ ਸ਼ਿਕਾਇਤ ਨਿਵਾਰਣ',
    },
  },
];

export const CORE_LEGAL_SOURCES: LegalSource[] = [
  {
    lawName: 'Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023',
    sectionCode: 'BNSS 2023 (in force 1 July 2024)',
    text: {
      en: 'Replaced the Code of Criminal Procedure (CrPC) 1973. Governs arrest procedures (Sec 36, 43, 47, 48), electronic FIR recording (Sec 173), searches (Sec 103, 105), and property custody (Sec 497, 503).',
      hi: 'दंड प्रक्रिया संहिता (CrPC) 1973 का स्थान लिया। गिरफ्तारी प्रक्रिया (धारा 36, 43, 47, 48), ई-एफआईआर (धारा 173), तलाशी (धारा 103, 105) और जब्ती नियमों को नियंत्रित करता है।',
      pa: 'ਸੀਆਰਪੀਸੀ 1973 ਦੀ ਥਾਂ ਲਈ। ਗ੍ਰਿਫਤਾਰੀ ਪ੍ਰਕਿਰਿਆਵਾਂ, ਈ-ਐਫਆਈਆਰ (ਧਾਰਾ 173), ਤਲਾਸ਼ੀ (ਧਾਰਾ 103, 105) ਅਤੇ ਜ਼ਬਤੀ ਨਿਯਮਾਂ ਨੂੰ ਨਿਯੰਤਰਿਤ ਕਰਦਾ ਹੈ।',
    },
    url: 'https://www.indiacode.nic.in',
    isOfficialGovt: true,
  },
  {
    lawName: 'Constitution of India (Articles 20, 21, 22)',
    sectionCode: 'Articles 20(3), 21, 22(1), 22(2)',
    text: {
      en: 'Guarantees protection against self-incrimination (Art 20(3)), right to life & personal liberty (Art 21), right to know arrest grounds & consult legal counsel (Art 22(1)), and mandatory production before Magistrate within 24 hours (Art 22(2)).',
      hi: 'आत्म-दोषारोपण से सुरक्षा (अनुच्छेद 20(3)), जीवन और व्यक्तिगत स्वतंत्रता का अधिकार (अनुच्छेद 21), गिरफ्तारी के कारण जानने व वकील से मिलने का अधिकार (अनुच्छेद 22(1)), 24 घंटे में मजिस्ट्रेट के समक्ष पेशी (अनुच्छेद 22(2))।',
      pa: 'ਆਪਣੇ ਖਿਲਾਫ ਗਵਾਹੀ ਤੋਂ ਸੁਰੱਖਿਆ (ਆਰਟੀਕਲ 20(3)), ਜੀਵਨ ਅਤੇ ਆਜ਼ਾਦੀ ਦਾ ਅਧਿਕਾਰ (ਆਰਟੀਕਲ 21), ਵਕੀਲ ਦੀ ਸਲਾਹ (ਆਰਟੀਕਲ 22(1)), ਅਤੇ 24 ਘੰਟਿਆਂ ਵਿੱਚ ਮੈਜਿਸਟਰੇਟ ਅੱਗੇ ਪੇਸ਼ੀ (ਆਰਟੀਕਲ 22(2))।',
    },
    url: 'https://www.indiacode.nic.in',
    isOfficialGovt: true,
  },
  {
    lawName: 'D.K. Basu v. State of West Bengal, (1997) 1 SCC 416',
    sectionCode: 'Landmark SC Guidelines on Arrest',
    text: {
      en: 'Supreme Court binding guidelines: Mandatory name badges for police, preparation of arrest memo with witness signature, right of arrested person to inform a friend/relative, and regular medical check-ups.',
      hi: 'सुप्रीम कोर्ट के बाध्यकारी दिशानिर्देश: पुलिस अधिकारी का नाम बैज, गवाह के हस्ताक्षर के साथ अरेस्ट मेमो, रिश्तेदार/मित्र को सूचना देने का अधिकार, और नियमित मेडिकल जांच।',
      pa: 'ਸੁਪਰੀਮ ਕੋਰਟ ਦੇ ਨਿਰਦੇਸ਼: ਪੁਲਿਸ ਦਾ ਨਾਮ ਬੈਜ, ਗਵਾਹ ਦੇ ਦਸਤਖਤਾਂ ਵਾਲਾ ਗ੍ਰਿਫਤਾਰੀ ਮੈਮੋ, ਰਿਸ਼ਤੇਦਾਰ ਨੂੰ ਸੂਚਿਤ ਕਰਨ ਦਾ ਹੱਕ ਅਤੇ ਮੈਡੀਕਲ ਜਾਂਚ।',
    },
    url: 'https://main.sci.gov.in/judgments',
    isOfficialGovt: true,
  },
  {
    lawName: 'Lalita Kumari v. Govt of Uttar Pradesh, (2014) 2 SCC 1',
    sectionCode: 'Mandatory FIR Registration',
    text: {
      en: 'Supreme Court 5-judge Constitution Bench held that registration of FIR is mandatory under Section 154 CrPC (now Section 173 BNSS) if the information discloses commission of a cognizable offence.',
      hi: 'सुप्रीम कोर्ट संविधान पीठ: यदि सूचना संज्ञेय अपराध दर्शाती है, तो धारा 173 बीएनएसएस के तहत एफआईआर दर्ज करना पुलिस के लिए अनिवार्य है।',
      pa: 'ਸੁਪਰੀਮ ਕੋਰਟ ਸੰਵਿਧਾਨ ਬੈਂਚ: ਜੇਕਰ ਸ਼ਿਕਾਇਤ ਵਿੱਚ ਸੰਗੀਨ ਜੁਰਮ ਦਾ ਪਤਾ ਲੱਗਦਾ ਹੈ ਤਾਂ ਐਫਆਈਆਰ ਦਰਜ ਕਰਨਾ ਪੁਲਿਸ ਲਈ ਲਾਜ਼ਮੀ ਹੈ।',
    },
    url: 'https://main.sci.gov.in/judgments',
    isOfficialGovt: true,
  },
  {
    lawName: 'Prakash Singh v. Union of India, (2006) 8 SCC 1',
    sectionCode: 'Police Complaints Authorities',
    text: {
      en: 'Supreme Court mandated establishment of State and District Police Complaints Authorities (PCA) to investigate serious police misconduct (custodial death, serious abuse, corruption, illegal arrest).',
      hi: 'सुप्रीम कोर्ट ने गंभीर पुलिस कदाचार (हिरासत में हिंसा, अवैध गिरफ्तारी, जबरन वसूली) की जांच के लिए पुलिस शिकायत प्राधिकरण (PCA) की स्थापना का आदेश दिया।',
      pa: 'ਸੁਪਰੀਮ ਕੋਰਟ ਨੇ ਪੁਲਿਸ ਦੁਰਵਿਹਾਰ ਅਤੇ ਗੈਰ-ਕਾਨੂੰਨੀ ਕਾਰਵਾਈਆਂ ਦੀ ਜਾਂਚ ਲਈ ਪੁਲਿਸ ਸ਼ਿਕਾਇਤ ਅਥਾਰਟੀ (PCA) ਬਣਾਉਣ ਦਾ ਹੁਕਮ ਦਿੱਤਾ।',
    },
    url: 'https://main.sci.gov.in/judgments',
    isOfficialGovt: true,
  },
  {
    lawName: 'Prevention of Corruption Act, 1988',
    sectionCode: 'Anti-Corruption Law',
    text: {
      en: 'Criminalises demand or acceptance of undue advantage/bribe by public servants (including police personnel). Provides framework for reporting to State Anti-Corruption Bureaus (ACB) and CVC.',
      hi: 'लोक सेवकों (पुलिस सहित) द्वारा रिश्वत या अनुचित लाभ मांगने या स्वीकार करने को संज्ञेय अपराध बनाता है। राज्य भ्रष्टाचार निरोधक ब्यूरो (ACB) में शिकायत का प्रावधान।',
      pa: 'ਸਰਕਾਰੀ ਕਰਮਚਾਰੀਆਂ (ਪੁਲਿਸ ਸਮੇਤ) ਦੁਆਰਾ ਰਿਸ਼ਵਤ ਮੰਗਣ ਜਾਂ ਲੈਣ ਨੂੰ ਕਾਨੂੰਨੀ ਜੁਰਮ ਬਣਾਉਂਦਾ ਹੈ। ਰਾਜ ਭ੍ਰਿਸ਼ਟਾਚਾਰ ਵਿਰੋਧੀ ਬਿਊਰੋ (ACB) ਕੋਲ ਸ਼ਿਕਾਇਤ ਦਾ ਪ੍ਰਬੰਧ।',
    },
    url: 'https://www.indiacode.nic.in',
    isOfficialGovt: true,
  },
];

export const SITUATIONS: Situation[] = [
  {
    id: 'stop-question',
    iconName: 'ShieldAlert',
    category: 'encounter',
    title: {
      en: 'Police stopped or questioning me',
      hi: 'पुलिस ने रोका या पूछताछ कर रही है',
      pa: 'ਪੁਲਿਸ ਨੇ ਰੋਕਿਆ ਜਾਂ ਪੁੱਛਗਿੱਛ ਕਰ ਰਹੀ ਹੈ',
    },
    summary: {
      en: 'On the street, in a vehicle check, or during routine police stop.',
      hi: 'सड़क पर, वाहन चेकिंग के दौरान या सामान्य पुलिस पूछताछ में।',
      pa: 'ਸੜਕ ਤੇ, ਵਾਹਨ ਚੈਕਿੰਗ ਦੌਰਾਨ ਜਾਂ ਆਮ ਪੁਲਿਸ ਪੁੱਛਗਿੱਛ ਵੇਲੇ।',
    },
    tags: ['stopped', 'questioning', 'vehicle', 'traffic', 'challan', 'street', 'interrogation', 'checking', 'nakabandi'],
    yourRights: [
      {
        text: {
          en: 'You can politely ask officer\'s name, rank, and purpose of stop.',
          hi: 'आप विनम्रता से अधिकारी का नाम, पद और रोकने का कारण पूछ सकते हैं।',
          pa: 'ਤੁਸੀਂ ਨਿਮਰਤਾ ਨਾਲ ਅਧਿਕਾਰੀ ਦਾ ਨਾਮ, ਅਹੁਦਾ ਅਤੇ ਰੋਕਣ ਦਾ ਕਾਰਨ ਪੁੱਛ ਸਕਦੇ ਹੋ।',
        },
        citation: 'Section 36, BNSS 2023',
        simpleExplanation: {
          en: 'Police officers on duty must display clear name tags and state why they are stopping you.',
          hi: 'ड्यूटी पर तैनात पुलिस अधिकारी को नाम बैज लगाना और रोकने का कारण बताना आवश्यक है।',
          pa: 'ਡਿਊਟੀ ਤੇ ਤਾਇਨਾਤ ਪੁਲਿਸ ਅਧਿਕਾਰੀ ਨੂੰ ਆਪਣਾ ਨਾਮ ਬੈਜ ਲਗਾਉਣਾ ਅਤੇ ਰੋਕਣ ਦਾ ਕਾਰਨ ਦੱਸਣਾ ਜ਼ਰੂਰੀ ਹੈ।',
        },
      },
      {
        text: {
          en: 'Protection against compelled self-incrimination.',
          hi: 'स्वयं के विरुद्ध गवाही देने के लिए बाध्य न किए जाने का अधिकार।',
          pa: 'ਆਪਣੇ ਖਿਲਾਫ ਗਵਾਹੀ ਦੇਣ ਲਈ ਮਜਬੂਰ ਨਾ ਕੀਤੇ ਜਾਣ ਦਾ ਅਧਿਕਾਰ।',
        },
        citation: 'Article 20(3), Constitution of India',
        simpleExplanation: {
          en: 'Police cannot force you to confess to a crime or make statements against yourself.',
          hi: 'पुलिस आपको किसी अपराध को स्वीकार करने या खुद के खिलाफ बयान देने के लिए मजबूर नहीं कर सकती।',
          pa: 'ਪੁਲਿਸ ਤੁਹਾਨੂੰ ਕੋਈ ਜੁਰਮ ਕਬੂਲ ਕਰਨ ਜਾਂ ਆਪਣੇ ਖਿਲਾਫ ਬਿਆਨ ਦੇਣ ਲਈ ਮਜਬੂਰ ਨਹੀਂ ਕਰ ਸਕਦੀ।',
        },
      },
      {
        text: {
          en: 'Recording public officials in public duty is lawful.',
          hi: 'सार्वजनिक स्थान पर ड्यूटीरत अधिकारी की शांतिपूर्ण रिकॉर्डिंग वैध है।',
          pa: 'ਜਨਤਕ ਥਾਂ ਤੇ ਡਿਊਟੀ ਕਰਦੇ ਅਧਿਕਾਰੀ ਦੀ ਸ਼ਾਂਤਮਈ ਰਿਕਾਰਡਿੰਗ ਜਾਇਜ਼ ਹੈ।',
        },
        citation: 'Article 19(1)(a) & Article 21, Constitution of India',
        simpleExplanation: {
          en: 'You may record your interaction in a public place as long as you do not obstruct their duty.',
          hi: 'आप सार्वजनिक स्थान पर बातचीत रिकॉर्ड कर सकते हैं जब तक आप पुलिस कार्य में बाधा न डालें।',
          pa: 'ਤੁਸੀਂ ਜਨਤਕ ਥਾਂ ਤੇ ਗੱਲਬਾਤ ਰਿਕਾਰਡ ਕਰ ਸਕਦੇ ਹੋ ਬਸ਼ਰਤੇ ਤੁਸੀਂ ਸਰਕਾਰੀ ਕੰਮ ਵਿੱਚ ਰੁਕਾਵਟ ਨਾ ਪਾਓ।',
        },
      },
      {
        text: {
          en: 'Digital DigiLocker/mParivahan vehicle documents are legally valid.',
          hi: 'डिजिलॉकर/एमपरिवहन पर डिजिटल वाहन दस्तावेज पूरी तरह मान्य हैं।',
          pa: 'ਡਿਜੀਲਾਕਰ/ਐਮਪਰਿਵਾਹਨ ਦੇ ਡਿਜੀਟਲ ਦਸਤਾਵੇਜ਼ ਪੂਰੀ ਤਰ੍ਹਾਂ ਮੰਨੇ ਜਾਂਦੇ ਹਨ।',
        },
        citation: 'Rule 139, Central Motor Vehicles Rules 1989',
        simpleExplanation: {
          en: 'Traffic police must accept verified electronic driving licenses and RC on DigiLocker/mParivahan.',
          hi: 'ट्रैफिक पुलिस को डिजिलॉकर या एमपरिवहन पर दिखाए गए डिजिटल आरसी और लाइसेंस स्वीकार करने होंगे।',
          pa: 'ਟ੍ਰੈਫਿਕ ਪੁਲਿਸ ਨੂੰ ਡਿਜੀਲਾਕਰ ਜਾਂ ਐਮਪਰਿਵਾਹਨ ਦੇ ਡਿਜੀਟਲ ਦਸਤਾਵੇਜ਼ ਸਵੀਕਾਰ ਕਰਨੇ ਪੈਣਗੇ।',
        },
      },
    ],
    whatToDoNow: [
      {
        stepNumber: 1,
        action: {
          en: 'Stay calm, keep hands visible, and speak respectfully.',
          hi: 'शांत रहें, हाथ दिखाई देते रहें और सम्मानपूर्वक बात करें।',
          pa: 'ਸ਼ਾਂਤ ਰਹੋ, ਹੱਥ ਸਾਹਮਣੇ ਰੱਖੋ ਅਤੇ ਨਿਮਰਤਾ ਨਾਲ ਗੱਲ ਕਰੋ।',
        },
      },
      {
        stepNumber: 2,
        action: {
          en: 'Politely ask: "May I know your name and reason for stopping me?"',
          hi: 'विनम्रता से पूछें: "क्या मैं आपका नाम और रोकने का कारण जान सकता हूँ?"',
          pa: 'ਨਿਮਰਤਾ ਨਾਲ ਪੁੱਛੋ: "ਕੀ ਮੈਂ ਤੁਹਾਡਾ ਨਾਮ ਅਤੇ ਰੋਕਣ ਦਾ ਕਾਰਨ ਜਾਣ ਸਕਦਾ ਹਾਂ?"',
        },
      },
      {
        stepNumber: 3,
        action: {
          en: 'Show required vehicle/identity documents when lawfully requested.',
          hi: 'कानूनी रूप से मांगे जाने पर आवश्यक वाहन या पहचान दस्तावेज दिखाएं।',
          pa: 'ਕਾਨੂੰਨੀ ਮੰਗ ਤੇ ਲੋੜੀਂਦੇ ਵਾਹਨ ਜਾਂ ਪਛਾਣ ਦਸਤਾਵੇਜ਼ ਦਿਖਾਓ।',
        },
      },
      {
        stepNumber: 4,
        action: {
          en: 'If questioning prolongs, ask calmly: "Am I being detained or am I free to go?"',
          hi: 'यदि पूछताछ खिंचती है तो पूछें: "क्या मुझे हिरासत में लिया गया है या मैं जा सकता हूँ?"',
          pa: 'ਜੇ ਪੁੱਛਗਿੱਛ ਲੰਬੀ ਹੋਵੇ ਤਾਂ ਪੁੱਛੋ: "ਕੀ ਮੈਨੂੰ ਹਿਰਾਸਤ ਚ ਲਿਆ ਗਿਆ ਹੈ ਜਾਂ ਮੈਂ ਜਾ ਸਕਦਾ ਹਾਂ?"',
        },
      },
      {
        stepNumber: 5,
        action: {
          en: 'Use Emergency Bar to share live location with family if you feel unsafe.',
          hi: 'असुरक्षित महसूस होने पर परिजनों के साथ तुरंत लाइव लोकेशन साझा करें।',
          pa: 'ਅਸੁਰੱਖਿਅਤ ਮਹਿਸੂਸ ਹੋਣ ਤੇ ਐਮਰਜੈਂਸੀ ਬਟਨ ਨਾਲ ਪਰਿਵਾਰ ਨਾਲ ਲਾਈਵ ਲੋਕੇਸ਼ਨ ਸਾਂਝੀ ਕਰੋ।',
        },
      },
    ],
    whatNotToDo: [
      {
        warning: {
          en: 'Do not run away, argue aggressively, or physically resist.',
          hi: 'भागें नहीं, आक्रामक बहस न करें और शारीरिक रूप से विरोध न करें।',
          pa: 'ਭੱਜੋ ਨਾ, ਹਮਲਾਵਰ ਬਹਿਸ ਨਾ ਕਰੋ ਅਤੇ ਸਰੀਰਕ ਵਿਰੋਧ ਨਾ ਕਰੋ।',
        },
        consequence: {
          en: 'Can lead to obstruction charges under BNS Section 221.',
          hi: 'बीएनएस धारा 221 के तहत सरकारी कार्य में बाधा का मामला बन सकता है।',
          pa: 'ਬੀਐਨਐਸ ਧਾਰਾ 221 ਤਹਿਤ ਸਰਕਾਰੀ ਕੰਮ ਵਿੱਚ ਰੁਕਾਵਟ ਦਾ ਕੇਸ ਬਣ ਸਕਦਾ ਹੈ।',
        },
      },
      {
        warning: {
          en: 'Never sign any blank paper or unread document.',
          hi: 'किसी भी कोरे कागज या बिना पढ़े दस्तावेज पर कभी हस्ताक्षर न करें।',
          pa: 'ਕਿਸੇ ਵੀ ਕੋਰੇ ਕਾਗਜ਼ ਜਾਂ ਬਿਨਾਂ ਪੜ੍ਹੇ ਦਸਤਾਵੇਜ਼ ਤੇ ਕਦੇ ਦਸਤਖਤ ਨਾ ਕਰੋ।',
        },
      },
      {
        warning: {
          en: 'Do not unlock your phone for personal search without asking for legal warrant/basis.',
          hi: 'बिना कानूनी आधार या वारंट पूछे अपना फोन अनलॉक करके न सौंपें।',
          pa: 'ਬਿਨਾਂ ਕਾਨੂੰਨੀ ਆਧਾਰ ਪੁੱਛੇ ਆਪਣਾ ਫੋਨ ਅਨਲੌਕ ਕਰਕੇ ਨਾ ਦਿਓ।',
        },
      },
    ],
    whereToComplain: [
      {
        authority: {
          en: 'Superintendent of Police (SP) / DCP',
          hi: 'पुलिस अधीक्षक (SP) / डीसीपी',
          pa: 'ਐਸ.ਪੀ. / ਡੀ.ਸੀ.ਪੀ.',
        },
        actionType: 'written',
        details: {
          en: 'Submit written grievance to the district SP/Commissioner office.',
          hi: 'जिले के एसपी/कमिश्नर कार्यालय में लिखित शिकायत दें।',
          pa: 'ਜ਼ਿਲ੍ਹਾ ਐਸਪੀ/ਕਮਿਸ਼ਨਰ ਦਫ਼ਤਰ ਵਿੱਚ ਲਿਖਤੀ ਸ਼ਿਕਾਇਤ ਦਰਜ ਕਰੋ।',
        },
      },
      {
        authority: {
          en: 'State Human Rights Commission / NHRC',
          hi: 'राज्य मानवाधिकार आयोग / राष्ट्रीय मानवाधिकार आयोग',
          pa: 'ਰਾਜ ਮਨੁੱਖੀ ਅਧਿਕਾਰ ਕਮਿਸ਼ਨ / ਐਨ.ਐਚ.ਆਰ.ਸੀ.',
        },
        actionType: 'portal',
        url: 'https://hrcnet.nic.in/HRCNet/public/',
      },
      {
        authority: {
          en: 'Traffic Police Grievance Portal',
          hi: 'ट्रैफिक पुलिस शिकायत पोर्टल',
          pa: 'ਟ੍ਰੈਫਿਕ ਪੁਲਿਸ ਸ਼ਿਕਾਇਤ ਪੋਰਟਲ',
        },
        actionType: 'portal',
        url: 'https://echallan.parivahan.gov.in',
      },
    ],
    sources: [
      {
        lawName: 'BNSS 2023',
        sectionCode: 'Section 36',
        text: {
          en: 'Section 36 BNSS — Identification and duties of police officers.',
          hi: 'बीएनएसएस धारा 36 — पुलिस अधिकारियों की पहचान व कर्तव्य।',
          pa: 'ਬੀਐਨਐਸਐਸ ਧਾਰਾ 36 — ਪੁਲਿਸ ਅਧਿਕਾਰੀਆਂ ਦੀ ਪਛਾਣ ਅਤੇ ਫਰਜ਼।',
        },
        url: 'https://www.indiacode.nic.in',
        isOfficialGovt: true,
      },
      {
        lawName: 'Constitution of India',
        sectionCode: 'Article 20(3)',
        text: {
          en: 'Article 20(3) — Right against self-incrimination.',
          hi: 'अनुच्छेद 20(3) — आत्म-दोषारोपण से संरक्षण।',
          pa: 'ਆਰਟੀਕਲ 20(3) — ਆਪਣੇ ਖਿਲਾਫ ਗਵਾਹੀ ਤੋਂ ਸੁਰੱਖਿਆ।',
        },
        url: 'https://www.indiacode.nic.in',
        isOfficialGovt: true,
      },
    ],
  },
  {
    id: 'arrest-detained',
    iconName: 'UserX',
    category: 'custody',
    title: {
      en: 'I am being arrested or detained',
      hi: 'मुझे गिरफ्तार या हिरासत में लिया जा रहा है',
      pa: 'ਮੈਨੂੰ ਗ੍ਰਿਫਤਾਰ ਜਾਂ ਹਿਰਾਸਤ ਵਿੱਚ ਲਿਆ ਜਾ ਰਿਹਾ ਹੈ',
    },
    summary: {
      en: 'Immediate rights and protections the moment police arrest or detain you.',
      hi: 'गिरफ्तारी या हिरासत के क्षण से लागू होने वाले तत्काल कानूनी अधिकार।',
      pa: 'ਗ੍ਰਿਫਤਾਰੀ ਜਾਂ ਹਿਰਾਸਤ ਦੇ ਪਲ ਤੋਂ ਲਾਗੂ ਹੋਣ ਵਾਲੇ ਜ਼ਰੂਰੀ ਕਾਨੂੰਨੀ ਹੱਕ।',
    },
    tags: ['arrest', 'custody', 'lockup', 'bail', 'grounds', 'handcuffs', 'lawyer', 'magistrate', '24 hours', 'dk basu'],
    defaultDocType: 'police-misconduct',
    yourRights: [
      {
        text: {
          en: 'Right to know exact grounds of arrest immediately.',
          hi: 'गिरफ्तारी के सटीक कारण तत्काल जानने का कानूनी अधिकार।',
          pa: 'ਗ੍ਰਿਫਤਾਰੀ ਦੇ ਸਹੀ ਕਾਰਨ ਤੁਰੰਤ ਜਾਣਨ ਦਾ ਕਾਨੂੰਨੀ ਅਧਿਕਾਰ।',
        },
        citation: 'Section 47(1), BNSS 2023 & Article 22(1), Constitution',
        simpleExplanation: {
          en: 'Police must immediately inform you of the exact section and reasons why you are being arrested.',
          hi: 'पुलिस को आपको तुरंत बताना होगा कि आपको किस धारा और किस अपराध के तहत गिरफ्तार किया जा रहा है।',
          pa: 'ਪੁਲਿਸ ਨੂੰ ਤੁਹਾਨੂੰ ਤੁਰੰਤ ਦੱਸਣਾ ਹੋਵੇਗਾ ਕਿ ਕਿਸ ਧਾਰਾ ਅਤੇ ਜੁਰਮ ਤਹਿਤ ਗ੍ਰਿਫਤਾਰ ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੈ।',
        },
      },
      {
        text: {
          en: 'Right to have family/friend informed of arrest & custody place.',
          hi: 'परिवार या मित्र को गिरफ्तारी और थाने की सूचना देने का अधिकार।',
          pa: 'ਪਰਿਵਾਰ ਜਾਂ ਦੋਸਤ ਨੂੰ ਗ੍ਰਿਫਤਾਰੀ ਅਤੇ ਥਾਣੇ ਬਾਰੇ ਸੂਚਿਤ ਕਰਨ ਦਾ ਹੱਕ।',
        },
        citation: 'Section 48, BNSS 2023 & D.K. Basu Guidelines',
        simpleExplanation: {
          en: 'Police must immediately notify a friend or relative named by you about your arrest and where you are held.',
          hi: 'पुलिस को आपके द्वारा बताए गए किसी मित्र या रिश्तेदार को आपकी गिरफ्तारी और हिरासत स्थान की सूचना देनी होगी।',
          pa: 'ਪੁਲਿਸ ਨੂੰ ਤੁਹਾਡੇ ਦੱਸੇ ਦੋਸਤ ਜਾਂ ਰਿਸ਼ਤੇਦਾਰ ਨੂੰ ਗ੍ਰਿਫਤਾਰੀ ਅਤੇ ਥਾਣੇ ਬਾਰੇ ਤੁਰੰਤ ਸੂਚਿਤ ਕਰਨਾ ਪਵੇਗਾ।',
        },
      },
      {
        text: {
          en: 'Right to consult an advocate of your choice during interrogation.',
          hi: 'पूछताछ के दौरान अपनी पसंद के वकील से मिलने व सलाह लेने का अधिकार।',
          pa: 'ਪੁੱਛਗਿੱਛ ਦੌਰਾਨ ਆਪਣੀ ਪਸੰਦ ਦੇ ਵਕੀਲ ਨਾਲ ਸਲਾਹ ਕਰਨ ਦਾ ਹੱਕ।',
        },
        citation: 'Section 38, BNSS 2023',
        simpleExplanation: {
          en: 'You are permitted to meet your lawyer throughout the interrogation (though not necessarily present for the whole duration).',
          hi: 'आप पूछताछ के दौरान अपने वकील से मिल सकते हैं और कानूनी सलाह ले सकते हैं।',
          pa: 'ਤੁਸੀਂ ਪੁੱਛਗਿੱਛ ਦੌਰਾਨ ਆਪਣੇ ਵਕੀਲ ਨੂੰ ਮਿਲ ਸਕਦੇ ਹੋ ਅਤੇ ਕਾਨੂੰਨੀ ਸਲਾਹ ਲੈ ਸਕਦੇ ਹੋ।',
        },
      },
      {
        text: {
          en: 'Right to be produced before Magistrate within 24 hours.',
          hi: '24 घंटे के भीतर निकटतम मजिस्ट्रेट के समक्ष पेश किए जाने का अधिकार।',
          pa: '24 ਘੰਟਿਆਂ ਦੇ ਅੰਦਰ ਮੈਜਿਸਟਰੇਟ ਅੱਗੇ ਪੇਸ਼ ਕੀਤੇ ਜਾਣ ਦਾ ਹੱਕ।',
        },
        citation: 'Article 22(2), Constitution & Section 58, BNSS 2023',
        simpleExplanation: {
          en: 'Police cannot keep you in custody beyond 24 hours without a Magistrate\'s explicit judicial order.',
          hi: 'मजिस्ट्रेट के न्यायिक आदेश के बिना पुलिस आपको 24 घंटे से अधिक समय तक हिरासत में नहीं रख सकती।',
          pa: 'ਮੈਜਿਸਟਰੇਟ ਦੇ ਨਿਆਂਇਕ ਹੁਕਮ ਤੋਂ ਬਿਨਾਂ ਪੁਲਿਸ ਤੁਹਾਨੂੰ 24 ਘੰਟਿਆਂ ਤੋਂ ਵੱਧ ਹਿਰਾਸਤ ਵਿੱਚ ਨਹੀਂ ਰੱਖ ਸਕਦੀ।',
        },
      },
      {
        text: {
          en: 'Mandatory Arrest Memo signed by a witness & arrested person.',
          hi: 'गवाह और गिरफ्तार व्यक्ति द्वारा हस्ताक्षरित अरेस्ट मेमो तैयार करना अनिवार्य।',
          pa: 'ਗਵਾਹ ਅਤੇ ਗ੍ਰਿਫਤਾਰ ਵਿਅਕਤੀ ਦੇ ਦਸਤਖਤਾਂ ਵਾਲਾ ਗ੍ਰਿਫਤਾਰੀ ਮੈਮੋ ਲਾਜ਼ਮੀ।',
        },
        citation: 'Section 36, BNSS 2023',
        simpleExplanation: {
          en: 'An arrest memo must state date, time, location, and be witnessed by a family member or local respectable person.',
          hi: 'अरेस्ट मेमो में तारीख, समय, स्थान और परिवार के सदस्य या स्थानीय नागरिक के हस्ताक्षर होने चाहिए।',
          pa: 'ਗ੍ਰਿਫਤਾਰੀ ਮੈਮੋ ਵਿੱਚ ਮਿਤੀ, ਸਮਾਂ, ਸਥਾਨ ਅਤੇ ਗਵਾਹ ਦੇ ਦਸਤਖਤ ਹੋਣੇ ਲਾਜ਼ਮੀ ਹਨ।',
        },
      },
      {
        text: {
          en: 'Right to medical examination upon arrest & custody.',
          hi: 'गिरफ्तारी के समय और हिरासत में मेडिकल जांच का अधिकार।',
          pa: 'ਗ੍ਰਿਫਤਾਰੀ ਵੇਲੇ ਅਤੇ ਹਿਰਾਸਤ ਵਿੱਚ ਮੈਡੀਕਲ ਜਾਂਚ ਦਾ ਅਧਿਕਾਰ।',
        },
        citation: 'Section 53, BNSS 2023',
        simpleExplanation: {
          en: 'A medical officer must examine you and record any pre-existing injuries or physical state.',
          hi: 'एक सरकारी डॉक्टर को आपकी मेडिकल जांच करनी होगी और चोटों का रिकॉर्ड तैयार करना होगा।',
          pa: 'ਸਰਕਾਰੀ ਡਾਕਟਰ ਦੁਆਰਾ ਤੁਹਾਡੀ ਮੈਡੀਕਲ ਜਾਂਚ ਹੋਣੀ ਅਤੇ ਸੱਟਾਂ ਦਾ ਰਿਕਾਰਡ ਬਣਨਾ ਜ਼ਰੂਰੀ ਹੈ।',
        },
      },
    ],
    whatToDoNow: [
      {
        stepNumber: 1,
        action: {
          en: 'Ask clearly: "Under what specific section and offence am I being arrested?"',
          hi: 'स्पष्ट पूछें: "मुझे किस विशिष्ट धारा और अपराध के तहत गिरफ्तार किया जा रहा है?"',
          pa: 'ਸਪੱਸ਼ਟ ਪੁੱਛੋ: "ਮੈਨੂੰ ਕਿਸ ਖਾਸ ਧਾਰਾ ਅਤੇ ਜੁਰਮ ਤਹਿਤ ਗ੍ਰਿਫਤਾਰ ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੈ?"',
        },
      },
      {
        stepNumber: 2,
        action: {
          en: 'State: "I want to inform my family and consult my lawyer immediately."',
          hi: 'कहें: "मैं अपने परिवार को सूचित करना चाहता हूँ और तुरंत अपने वकील से परामर्श करना चाहता हूँ।"',
          pa: 'ਕਹੋ: "ਮੈਂ ਆਪਣੇ ਪਰਿਵਾਰ ਨੂੰ ਸੂਚਿਤ ਕਰਨਾ ਚਾਹੁੰਦਾ ਹਾਂ ਅਤੇ ਵਕੀਲ ਨਾਲ ਗੱਲ ਕਰਨੀ ਹੈ।"',
        },
      },
      {
        stepNumber: 3,
        action: {
          en: 'Demand a copy of the formal Arrest Memorandum signed by the witness.',
          hi: 'गवाह द्वारा हस्ताक्षरित औपचारिक अरेस्ट मेमो की प्रति मांगें।',
          pa: 'ਗਵਾਹ ਦੇ ਦਸਤਖਤਾਂ ਵਾਲੇ ਗ੍ਰਿਫਤਾਰੀ ਮੈਮੋ ਦੀ ਕਾਪੀ ਮੰਗੋ।',
        },
      },
      {
        stepNumber: 4,
        action: {
          en: 'Request immediate medical examination if you have injuries or medical conditions.',
          hi: 'यदि आपको चोट लगी है या कोई बीमारी है, तो तुरंत मेडिकल जांच की मांग करें।',
          pa: 'ਜੇਕਰ ਸੱਟ ਲੱਗੀ ਹੈ ਤਾਂ ਤੁਰੰਤ ਮੈਡੀਕਲ ਜਾਂਚ ਦੀ ਮੰਗ ਕਰੋ।',
        },
      },
      {
        stepNumber: 5,
        action: {
          en: 'When produced before the Magistrate, report any police abuse or illegal detention directly.',
          hi: 'मजिस्ट्रेट के समक्ष पेश होने पर किसी भी पुलिस दुर्व्यवहार या अवैध हिरासत की शिकायत सीधे करें।',
          pa: 'ਮੈਜਿਸਟਰੇਟ ਅੱਗੇ ਪੇਸ਼ ਹੋਣ ਵੇਲੇ ਕਿਸੇ ਵੀ ਗੈਰ-ਕਾਨੂੰਨੀ ਕਾਰਵਾਈ ਦੀ ਸ਼ਿਕਾਇਤ ਸਿੱਧੀ ਕਰੋ।',
        },
      },
    ],
    whatNotToDo: [
      {
        warning: {
          en: 'Do not sign confessions or blank sheets of paper under pressure.',
          hi: 'दबाव में आकर किसी भी बयान या खाली कागज पर हस्ताक्षर न करें।',
          pa: 'ਦਬਾਅ ਵਿੱਚ ਆ ਕੇ ਕਿਸੇ ਬਿਆਨ ਜਾਂ ਖਾਲੀ ਕਾਗਜ਼ ਤੇ ਦਸਤਖਤ ਨਾ ਕਰੋ।',
        },
        consequence: {
          en: 'Confessions to police officers are generally inadmissible under BSA 2023, but written signatures create complications.',
          hi: 'पुलिस को दिए गए इकबालिया बयान कानूनी रूप से ग्राह्य नहीं होते, लेकिन हस्ताक्षर समस्याएं पैदा कर सकते हैं।',
          pa: 'ਪੁਲਿਸ ਅੱਗੇ ਦਿੱਤੇ ਬਿਆਨ ਅਦਾਲਤ ਚ ਮੰਨਣਯੋਗ ਨਹੀਂ ਹੁੰਦੇ, ਪਰ ਦਸਤਖਤ ਮੁਸ਼ਕਲ ਖੜ੍ਹੀ ਕਰ ਸਕਦੇ ਹਨ।',
        },
      },
      {
        warning: {
          en: 'Do not physically battle or attempt to break away.',
          hi: 'शारीरिक रूप से हाथापाई न करें या भागने का प्रयास न करें।',
          pa: 'ਸਰੀਰਕ ਹੱਥੋਪਾਈ ਨਾ ਕਰੋ ਜਾਂ ਭੱਜਣ ਦੀ ਕੋਸ਼ਿਸ਼ ਨਾ ਕਰੋ।',
        },
      },
    ],
    whereToComplain: [
      {
        authority: {
          en: 'NALSA Free Legal Aid Helpline',
          hi: 'नालसा निःशुल्क कानूनी सहायता हेल्पलाइन',
          pa: 'ਨਾਲਸਾ ਮੁਫਤ ਕਾਨੂੰਨੀ ਸਹਾਇਤਾ ਹੈਲਪਲਾਈਨ',
        },
        actionType: 'call',
        value: '15100',
      },
      {
        authority: {
          en: 'Jurisdictional Magistrate at first production',
          hi: 'प्रथम पेशी पर संबंधित न्यायिक मजिस्ट्रेट',
          pa: 'ਪਹਿਲੀ ਪੇਸ਼ੀ ਵੇਲੇ ਸੰਬੰਧਿਤ ਨਿਆਂਇਕ ਮੈਜਿਸਟਰੇਟ',
        },
        actionType: 'court',
        details: {
          en: 'Tell the judge directly about any rights violations, torture, or denial of lawyer.',
          hi: 'न्यायाधीश को सीधे बताएं कि क्या अधिकारों का हनन हुआ या वकील से मिलने से रोका गया।',
          pa: 'ਜੱਜ ਨੂੰ ਸਿੱਧਾ ਦੱਸੋ ਜੇਕਰ ਅਧਿਕਾਰਾਂ ਦੀ ਉਲੰਘਣਾ ਹੋਈ ਜਾਂ ਵਕੀਲ ਨਹੀਂ ਮਿਲਣ ਦਿੱਤਾ ਗਿਆ।',
        },
      },
      {
        authority: {
          en: 'District Legal Services Authority (DLSA)',
          hi: 'जिला विधिक सेवा प्राधिकरण (DLSA)',
          pa: 'ਜ਼ਿਲ੍ਹਾ ਕਾਨੂੰਨੀ ਸੇਵਾਵਾਂ ਅਥਾਰਟੀ',
        },
        actionType: 'portal',
        url: 'https://nalsa.gov.in',
      },
    ],
    sources: [
      {
        lawName: 'BNSS 2023',
        sectionCode: 'Sections 36, 38, 47, 48, 53, 58',
        text: {
          en: 'BNSS 2023 — Comprehensive statutory safeguards on arrest and custody.',
          hi: 'बीएनएसएस 2023 — गिरफ्तारी और हिरासत पर व्यापक वैधानिक सुरक्षा।',
          pa: 'ਬੀਐਨਐਸਐਸ 2023 — ਗ੍ਰਿਫਤਾਰੀ ਅਤੇ ਹਿਰਾਸਤ ਸੰਬੰਧੀ ਕਾਨੂੰਨੀ ਸੁਰੱਖਿਆਵਾਂ।',
        },
        url: 'https://www.indiacode.nic.in',
        isOfficialGovt: true,
      },
      {
        lawName: 'Constitution of India',
        sectionCode: 'Articles 21 & 22',
        text: {
          en: 'Constitution of India — Protection of life, liberty and protection against arrest.',
          hi: 'भारत का संविधान — जीवन, स्वतंत्रता और गिरफ्तारी से संरक्षण।',
          pa: 'ਭਾਰਤ ਦਾ ਸੰਵਿਧਾਨ — ਜੀਵਨ, ਆਜ਼ਾਦੀ ਅਤੇ ਗ੍ਰਿਫਤਾਰੀ ਤੋਂ ਸੁਰੱਖਿਆ।',
        },
        url: 'https://www.indiacode.nic.in',
        isOfficialGovt: true,
      },
      {
        lawName: 'Supreme Court of India',
        sectionCode: 'D.K. Basu v. State of West Bengal (1997)',
        text: {
          en: 'D.K. Basu Guidelines — Mandatory 11 arrest directives.',
          hi: 'डी.के. बसु दिशानिर्देश — गिरफ्तारी के अनिवार्य 11 नियम।',
          pa: 'ਡੀ.ਕੇ. ਬਾਸੂ ਦਿਸ਼ਾ-ਨਿਰਦੇਸ਼ — ਗ੍ਰਿਫਤਾਰੀ ਦੇ ਲਾਜ਼ਮੀ ਨਿਯਮ।',
        },
        url: 'https://main.sci.gov.in/judgments',
        isOfficialGovt: true,
      },
    ],
  },
  {
    id: 'search-seizure',
    iconName: 'Search',
    category: 'investigation',
    title: {
      en: 'Police want to search me or seize property',
      hi: 'पुलिस मेरी तलाशी लेना या संपत्ति जब्त करना चाहती है',
      pa: 'ਪੁਲਿਸ ਮੇਰੀ ਤਲਾਸ਼ੀ ਲੈਣਾ ਜਾਂ ਜਾਇਦਾਦ ਜ਼ਬਤ ਕਰਨਾ ਚਾਹੁੰਦੀ ਹੈ',
    },
    summary: {
      en: 'Personal body search, home/office search, vehicle search, or phone/laptop seizure.',
      hi: 'व्यक्तिगत तलाशी, घर/दफ्तर की तलाशी, वाहन जांच या फोन/लैपटॉप जब्ती।',
      pa: 'ਸਰੀਰਕ ਤਲਾਸ਼ੀ, ਘਰ ਜਾਂ ਦਫ਼ਤਰ ਦੀ ਤਲਾਸ਼ੀ, ਵਾਹਨ ਚੈਕਿੰਗ ਜਾਂ ਫੋਨ/ਲੈਪਟਾਪ ਜ਼ਬਤੀ।',
    },
    tags: ['search', 'seizure', 'warrant', 'phone', 'laptop', 'panchnama', 'video', 'memo', 'property'],
    yourRights: [
      {
        text: {
          en: 'Mandatory Audio-Video electronic recording of search and seizure.',
          hi: 'तलाशी और जब्ती प्रक्रिया की अनिवार्य ऑडियो-वीडियो इलेक्ट्रॉनिक रिकॉर्डिंग।',
          pa: 'ਤਲਾਸ਼ੀ ਅਤੇ ਜ਼ਬਤੀ ਦੀ ਆਡੀਓ-ਵੀਡੀਓ ਇਲੈਕਟ੍ਰਾਨਿਕ ਰਿਕਾਰਡਿੰਗ ਲਾਜ਼ਮੀ।',
        },
        citation: 'Section 105, BNSS 2023',
        simpleExplanation: {
          en: 'Under BNSS 2023, police must record the entire search and preparation of seizure list using audio-video electronic means.',
          hi: 'बीएनएसएस धारा 105 के तहत पुलिस को तलाशी और जब्ती सूची बनाने की प्रक्रिया की वीडियो रिकॉर्डिंग करनी होगी।',
          pa: 'ਬੀਐਨਐਸਐਸ ਧਾਰਾ 105 ਤਹਿਤ ਪੁਲਿਸ ਨੂੰ ਤਲਾਸ਼ੀ ਅਤੇ ਜ਼ਬਤੀ ਦੀ ਵੀਡੀਓ ਰਿਕਾਰਡਿੰਗ ਕਰਨੀ ਜ਼ਰੂਰੀ ਹੈ।',
        },
      },
      {
        text: {
          en: 'Independent witnesses (Panchanama) must witness the search.',
          hi: 'स्वतंत्र गवाहों (पंचों) की उपस्थिति में ही तलाशी ली जानी चाहिए।',
          pa: 'ਸੁਤੰਤਰ ਗਵਾਹਾਂ (ਪੰਚਾਂ) ਦੀ ਮੌਜੂਦਗੀ ਵਿੱਚ ਹੀ ਤਲਾਸ਼ੀ ਲਈ ਜਾਣੀ ਚਾਹੀਦੀ ਹੈ।',
        },
        citation: 'Section 103, BNSS 2023',
        simpleExplanation: {
          en: 'Search of a premises must be conducted in presence of two independent respectable witnesses from the locality.',
          hi: 'स्थान की तलाशी इलाके के दो स्वतंत्र और सम्मानित गवाहों की उपस्थिति में होनी चाहिए।',
          pa: 'ਕਿਸੇ ਥਾਂ ਦੀ ਤਲਾਸ਼ੀ ਇਲਾਕੇ ਦੇ ਦੋ ਸੁਤੰਤਰ ਗਵਾਹਾਂ ਦੀ ਹਾਜ਼ਰੀ ਵਿੱਚ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ।',
        },
      },
      {
        text: {
          en: 'Right to receive a signed copy of the Seizure Memo (Panchnama) on the spot.',
          hi: 'मौके पर ही जब्ती सूची (पंचनामा) की हस्ताक्षरित प्रति पाने का अधिकार।',
          pa: 'ਮੌਕੇ ਤੇ ਹੀ ਜ਼ਬਤੀ ਸੂਚੀ (ਪੰਚਨਾਮਾ) ਦੀ ਦਸਤਖਤ ਕੀਤੀ ਕਾਪੀ ਲੈਣ ਦਾ ਹੱਕ।',
        },
        citation: 'Section 103(2), BNSS 2023',
        simpleExplanation: {
          en: 'Police must immediately provide you a copy of the list detailing every single item seized.',
          hi: 'पुलिस को जब्त किए गए प्रत्येक सामान की सूची की प्रति आपको तुरंत सौंपनी होगी।',
          pa: 'ਪੁਲਿਸ ਨੂੰ ਜ਼ਬਤ ਕੀਤੇ ਗਏ ਹਰ ਸਾਮਾਨ ਦੀ ਸੂਚੀ ਦੀ ਕਾਪੀ ਤੁਹਾਨੂੰ ਤੁਰੰਤ ਦੇਣੀ ਪਵੇਗੀ।',
        },
      },
      {
        text: {
          en: 'Woman must be searched strictly by another woman with decency.',
          hi: 'महिला की शारीरिक तलाशी केवल महिला अधिकारी द्वारा पूरी शालीनता से।',
          pa: 'ਔਰਤ ਦੀ ਸਰੀਰਕ ਤਲਾਸ਼ੀ ਸਿਰਫ ਮਹਿਲਾ ਅਧਿਕਾਰੀ ਦੁਆਰਾ ਹੀ ਲਈ ਜਾ ਸਕਦੀ ਹੈ।',
        },
        citation: 'Section 51(2), BNSS 2023',
        simpleExplanation: {
          en: 'Male police officers are strictly prohibited from conducting personal body searches of women.',
          hi: 'पुरुष पुलिस अधिकारियों को महिलाओं की व्यक्तिगत तलाशी लेने की सख्त मनाही है।',
          pa: 'ਪੁਰਸ਼ ਪੁਲਿਸ ਅਧਿਕਾਰੀ ਔਰਤਾਂ ਦੀ ਸਰੀਰਕ ਤਲਾਸ਼ੀ ਨਹੀਂ ਲੈ ਸਕਦੇ।',
        },
      },
    ],
    whatToDoNow: [
      {
        stepNumber: 1,
        action: {
          en: 'Ask to inspect the search warrant, noting court name, date, and scope.',
          hi: 'सर्च वारंट देखने का अनुरोध करें और अदालत का नाम, तारीख व विवरण नोट करें।',
          pa: 'ਸਰਚ ਵਾਰੰਟ ਦੇਖਣ ਦੀ ਮੰਗ ਕਰੋ ਅਤੇ ਅਦਾਲਤ ਦਾ ਨਾਮ, ਮਿਤੀ ਨੋਟ ਕਰੋ।',
        },
      },
      {
        stepNumber: 2,
        action: {
          en: 'If warrantless, ask officer for the specific legal provision (e.g. Sec 185 BNSS).',
          hi: 'यदि बिना वारंट के है, तो अधिकारी से कानूनी आधार (जैसे बीएनएसएस धारा 185) पूछें।',
          pa: 'ਜੇਕਰ ਬਿਨਾਂ ਵਾਰੰਟ ਹੈ ਤਾਂ ਕਾਨੂੰਨੀ ਆਧਾਰ ਬਾਰੇ ਪੁੱਛੋ।',
        },
      },
      {
        stepNumber: 3,
        action: {
          en: 'Insist that audio-video recording under BNSS Section 105 is active during seizure.',
          hi: 'आग्रह करें कि जब्ती के दौरान धारा 105 के तहत वीडियो रिकॉर्डिंग चालू रहे।',
          pa: 'ਧਾਰਾ 105 ਤਹਿਤ ਵੀਡੀਓ ਰਿਕਾਰਡਿੰਗ ਚਾਲੂ ਰੱਖਣ ਦੀ ਮੰਗ ਕਰੋ।',
        },
      },
      {
        stepNumber: 4,
        action: {
          en: 'Verify that every phone, laptop, or asset has IMEI/Serial number explicitly recorded in the memo.',
          hi: 'जांचें कि फोन, लैपटॉप या सामान का आईएमईआई/सीरियल नंबर मेमो में स्पष्ट लिखा हो।',
          pa: 'ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਫੋਨ ਜਾਂ ਲੈਪਟਾਪ ਦਾ ਸੀਰੀਅਲ ਨੰਬਰ ਮੈਮੋ ਵਿੱਚ ਦਰਜ ਹੋਵੇ।',
        },
      },
      {
        stepNumber: 5,
        action: {
          en: 'Demand and collect your signed duplicate copy of the seizure memo before leaving.',
          hi: 'स्थान छोड़ने से पहले जब्ती मेमो की हस्ताक्षरित प्रति अवश्य प्राप्त करें।',
          pa: 'ਜਾਣ ਤੋਂ ਪਹਿਲਾਂ ਜ਼ਬਤੀ ਮੈਮੋ ਦੀ ਦਸਤਖਤ ਕੀਤੀ ਕਾਪੀ ਜ਼ਰੂਰ ਲਵੋ।',
        },
      },
    ],
    whatNotToDo: [
      {
        warning: {
          en: 'Do not physically obstruct a search authorized by law.',
          hi: 'कानूनी तलाशी में शारीरिक रूप से बाधा न डालें।',
          pa: 'ਕਾਨੂੰਨੀ ਤਲਾਸ਼ੀ ਵਿੱਚ ਸਰੀਰਕ ਰੁਕਾਵਟ ਨਾ ਪਾਓ।',
        },
      },
      {
        warning: {
          en: 'Do not sign an incomplete, inaccurate, or vague seizure memo.',
          hi: 'किसी अधूरे, गलत या अस्पष्ट जब्ती मेमो पर हस्ताक्षर न करें।',
          pa: 'ਅਧੂਰੇ ਜਾਂ ਗਲਤ ਜ਼ਬਤੀ ਮੈਮੋ ਤੇ ਦਸਤਖਤ ਨਾ ਕਰੋ।',
        },
      },
    ],
    whereToComplain: [
      {
        authority: {
          en: 'Jurisdictional Judicial Magistrate',
          hi: 'संबंधित न्यायिक मजिस्ट्रेट',
          pa: 'ਸੰਬੰਧਿਤ ਨਿਆਂਇਕ ਮੈਜਿਸਟਰੇਟ',
        },
        actionType: 'court',
        details: {
          en: 'File an application for unlawful seizure or return of property under Sec 497/503 BNSS.',
          hi: 'अवैध जब्ती या सामान वापसी के लिए धारा 497/503 बीएनएसएस के तहत आवेदन करें।',
          pa: 'ਸਾਮਾਨ ਵਾਪਸੀ ਲਈ ਧਾਰਾ 497/503 ਬੀਐਨਐਸਐਸ ਤਹਿਤ ਅਰਜ਼ੀ ਦਾਖਲ ਕਰੋ।',
        },
      },
      {
        authority: {
          en: 'Superintendent of Police (SP)',
          hi: 'पुलिस अधीक्षक (SP)',
          pa: 'ਪੁਲਿਸ ਸੁਪਰਡੈਂਟ (ਐਸ.ਪੀ.)',
        },
        actionType: 'written',
      },
    ],
    sources: [
      {
        lawName: 'BNSS 2023',
        sectionCode: 'Sections 103, 105, 185',
        text: {
          en: 'BNSS 2023 — Search procedures, audio-video recording, and seizure memos.',
          hi: 'बीएनएसएस 2023 — तलाशी प्रक्रिया, वीडियो रिकॉर्डिंग और जब्ती मेमो।',
          pa: 'ਬੀਐਨਐਸਐਸ 2023 — ਤਲਾਸ਼ੀ ਨਿਯਮ, ਵੀਡੀਓ ਰਿਕਾਰਡਿੰਗ ਅਤੇ ਜ਼ਬਤੀ ਮੈਮੋ।',
        },
        url: 'https://www.indiacode.nic.in',
        isOfficialGovt: true,
      },
    ],
  },
  {
    id: 'fir-refusal',
    iconName: 'FileX',
    category: 'encounter',
    title: {
      en: 'Police are refusing to register my FIR',
      hi: 'पुलिस मेरी एफआईआर (FIR) दर्ज करने से मना कर रही है',
      pa: 'ਪੁਲਿਸ ਮੇਰੀ ਐਫਆਈਆਰ (FIR) ਦਰਜ ਕਰਨ ਤੋਂ ਇਨਕਾਰ ਕਰ ਰਹੀ ਹੈ',
    },
    summary: {
      en: 'Police station refusing to accept complaint, giving excuses, or denying Zero FIR.',
      hi: 'थाने द्वारा शिकायत न लेना, टालमटोल करना या जीरो एफआईआर से इनकार करना।',
      pa: 'ਥਾਣੇ ਵੱਲੋਂ ਸ਼ਿਕਾਇਤ ਨਾ ਲੈਣਾ ਜਾਂ ਜ਼ੀਰੋ ਐਫਆਈਆਰ ਤੋਂ ਇਨਕਾਰ ਕਰਨਾ।',
    },
    tags: ['fir', 'refusal', 'zero fir', 'lalita kumari', 'complaint', 'cognizable', 'sp', 'magistrate', '173 bnss'],
    defaultDocType: 'fir-refusal',
    yourRights: [
      {
        text: {
          en: 'Mandatory FIR registration for all cognizable offences.',
          hi: 'सभी संज्ञेय अपराधों के लिए एफआईआर दर्ज करना अनिवार्य है।',
          pa: 'ਸਾਰੇ ਸੰਗੀਨ ਜੁਰਮਾਂ ਲਈ ਐਫਆਈਆਰ ਦਰਜ ਕਰਨਾ ਲਾਜ਼ਮੀ ਹੈ।',
        },
        citation: 'Section 173, BNSS 2023 & Lalita Kumari v. Govt of UP',
        simpleExplanation: {
          en: 'If your complaint discloses a serious (cognizable) crime, police cannot refuse or delay registration.',
          hi: 'यदि आपकी शिकायत में संज्ञेय अपराध का उल्लेख है, तो पुलिस एफआईआर दर्ज करने से इनकार नहीं कर सकती।',
          pa: 'ਜੇਕਰ ਸ਼ਿਕਾਇਤ ਵਿੱਚ ਸੰਗੀਨ ਜੁਰਮ ਹੈ ਤਾਂ ਪੁਲਿਸ ਐਫਆਈਆਰ ਦਰਜ ਕਰਨ ਤੋਂ ਇਨਕਾਰ ਨਹੀਂ ਕਰ ਸਕਦੀ।',
        },
      },
      {
        text: {
          en: 'Right to file a Zero FIR at ANY police station irrespective of jurisdiction.',
          hi: 'किसी भी थाने में क्षेत्राधिकार की परवाह किए बिना जीरो एफआईआर दर्ज कराने का अधिकार।',
          pa: 'ਕਿਸੇ ਵੀ ਥਾਣੇ ਵਿੱਚ ਜ਼ੀਰੋ ਐਫਆਈਆਰ ਦਰਜ ਕਰਵਾਉਣ ਦਾ ਹੱਕ।',
        },
        citation: 'Section 173(1), BNSS 2023',
        simpleExplanation: {
          en: 'Police cannot say "this is not our jurisdiction". They must register Zero FIR and transfer it.',
          hi: 'पुलिस यह कहकर मना नहीं कर सकती कि यह उनका इलाका नहीं है। उन्हें जीरो एफआईआर दर्ज करनी होगी।',
          pa: 'ਪੁਲਿਸ ਇਲਾਕਾ ਬਾਹਰ ਹੋਣ ਦਾ ਬਹਾਨਾ ਨਹੀਂ ਬਣਾ ਸਕਦੀ। ਜ਼ੀਰੋ ਐਫਆਈਆਰ ਦਰਜ ਕਰਨੀ ਲਾਜ਼ਮੀ ਹੈ।',
        },
      },
      {
        text: {
          en: 'Right to a free copy of the registered FIR immediately.',
          hi: 'दर्ज एफआईआर की निःशुल्क प्रति तत्काल प्राप्त करने का अधिकार।',
          pa: 'ਦਰਜ ਐਫਆਈਆਰ ਦੀ ਮੁਫਤ ਕਾਪੀ ਤੁਰੰਤ ਲੈਣ ਦਾ ਹੱਕ।',
        },
        citation: 'Section 173(2), BNSS 2023',
        simpleExplanation: {
          en: 'Police must provide you an official signed copy of the FIR immediately and completely free of cost.',
          hi: 'पुलिस को एफआईआर की आधिकारिक हस्ताक्षरित प्रति तुरंत और पूरी तरह निःशुल्क देनी होगी।',
          pa: 'ਪੁਲਿਸ ਨੂੰ ਐਫਆਈਆਰ ਦੀ ਕਾਪੀ ਤੁਰੰਤ ਅਤੇ ਮੁਫਤ ਦੇਣੀ ਪਵੇਗੀ।',
        },
      },
      {
        text: {
          en: 'Right to submit complaint electronically (e-FIR).',
          hi: 'इलेक्ट्रॉनिक संचार (ई-एफआईआर) द्वारा शिकायत भेजने का अधिकार।',
          pa: 'ਈ-ਐਫਆਈਆਰ ਰਾਹੀਂ ਸ਼ਿਕਾਇਤ ਦਰਜ ਕਰਵਾਉਣ ਦਾ ਹੱਕ।',
        },
        citation: 'Section 173(1), BNSS 2023',
        simpleExplanation: {
          en: 'You can send information electronically, with a requirement to sign it within 3 days.',
          hi: 'आप ईमेल/पोर्टल द्वारा शिकायत भेज सकते हैं, जिसे 3 दिनों में हस्ताक्षरित करना होता है।',
          pa: 'ਤੁਸੀਂ ਈਮੇਲ ਜਾਂ ਪੋਰਟਲ ਰਾਹੀਂ ਸ਼ਿਕਾਇਤ ਭੇਜ ਸਕਦੇ ਹੋ, ਜਿਸਤੇ 3 ਦਿਨਾਂ ਚ ਦਸਤਖਤ ਕਰਨੇ ਹੁੰਦੇ ਹਨ।',
        },
      },
    ],
    whatToDoNow: [
      {
        stepNumber: 1,
        action: {
          en: 'Submit complaint in writing; take a photo of the signed document with date & receiving stamp.',
          hi: 'लिखित शिकायत दें; तारीख और मुहर लगे प्राप्त दस्तावेज की फोटो खींच लें।',
          pa: 'ਲਿਖਤੀ ਸ਼ਿਕਾਇਤ ਦਿਓ ਅਤੇ ਮੋਹਰ ਲੱਗੇ ਦਸਤਾਵੇਜ਼ ਦੀ ਫੋਟੋ ਆਪਣੇ ਕੋਲ ਰੱਖੋ।',
        },
      },
      {
        stepNumber: 2,
        action: {
          en: 'If refused, send the complaint directly to the District SP/SSP by Registered Post or Email.',
          hi: 'मना करने पर शिकायत सीधे जिले के एसपी/एसएसपी को रजिस्टर्ड डाक या ईमेल से भेजें।',
          pa: 'ਇਨਕਾਰ ਹੋਣ ਤੇ ਸ਼ਿਕਾਇਤ ਸਿੱਧੀ ਜ਼ਿਲ੍ਹਾ ਐਸਐਸਪੀ ਨੂੰ ਰਜਿਸਟਰਡ ਡਾਕ ਜਾਂ ਈਮੇਲ ਰਾਹੀਂ ਭੇਜੋ।',
        },
      },
      {
        stepNumber: 3,
        action: {
          en: 'Use our AI Document Assistant to draft a formal Section 173 BNSS escalation letter instantly.',
          hi: 'हमारे एआई डॉक्यूमेंट असिस्टेंट से धारा 173 बीएनएसएस का औपचारिक शिकायती पत्र तुरंत तैयार करें।',
          pa: 'ਸਾਡੇ ਏਆਈ ਟੂਲ ਨਾਲ ਧਾਰਾ 173 ਬੀਐਨਐਸਐਸ ਤਹਿਤ ਸ਼ਿਕਾਇਤ ਪੱਤਰ ਤੁਰੰਤ ਤਿਆਰ ਕਰੋ।',
        },
      },
      {
        stepNumber: 4,
        action: {
          en: 'File e-FIR on your state police official web portal or mobile app.',
          hi: 'अपने राज्य की पुलिस के आधिकारिक वेब पोर्टल या ऐप पर ऑनलाइन ई-एफआईआर दर्ज करें।',
          pa: 'ਆਪਣੇ ਰਾਜ ਦੀ ਪੁਲਿਸ ਦੇ ਪੋਰਟਲ ਤੇ ਆਨਲਾਈਨ ਈ-ਐਫਆਈਆਰ ਦਰਜ ਕਰੋ।',
        },
      },
      {
        stepNumber: 5,
        action: {
          en: 'Approach the Judicial Magistrate under Section 175(3) BNSS if SP does not order investigation.',
          hi: 'यदि एसपी कार्रवाई न करे तो धारा 175(3) बीएनएसएस के तहत न्यायिक मजिस्ट्रेट की अदालत में जाएं।',
          pa: 'ਜੇਕਰ ਐਸਪੀ ਕਾਰਵਾਈ ਨਾ ਕਰੇ ਤਾਂ ਧਾਰਾ 175(3) ਤਹਿਤ ਮੈਜਿਸਟਰੇਟ ਕੋਲ ਪਹੁੰਚ ਕਰੋ।',
        },
      },
    ],
    whatNotToDo: [
      {
        warning: {
          en: 'Do not rely solely on verbal discussions; always maintain written proof.',
          hi: 'केवल मौखिक बातचीत पर भरोसा न करें; हमेशा लिखित और पावती का रिकॉर्ड रखें।',
          pa: 'ਸਿਰਫ ਜ਼ੁਬਾਨੀ ਗੱਲਬਾਤ ਤੇ ਨਿਰਭਰ ਨਾ ਰਹੋ; ਲਿਖਤੀ ਸਬੂਤ ਜ਼ਰੂਰ ਰੱਖੋ।',
        },
      },
      {
        warning: {
          en: 'Do not lose your speed post/email acknowledgment slips.',
          hi: 'अपनी स्पीड पोस्ट रसीद या ईमेल पावती को संभाल कर रखें।',
          pa: 'ਆਪਣੀ ਡਾਕ ਰਸੀਦ ਜਾਂ ਈਮੇਲ ਸਬੂਤ ਨੂੰ ਸੰਭਾਲ ਕੇ ਰੱਖੋ।',
        },
      },
    ],
    whereToComplain: [
      {
        authority: {
          en: 'Superintendent of Police (SP) / SSP / DCP',
          hi: 'पुलिस अधीक्षक (SP / SSP / DCP)',
          pa: 'ਐਸ.ਐਸ.ਪੀ. / ਡੀ.ਸੀ.ਪੀ.',
        },
        actionType: 'written',
        details: {
          en: 'Send formal complaint citing Section 173 BNSS and Lalita Kumari ruling.',
          hi: 'धारा 173 बीएनएसएस और ललिता कुमारी निर्णय का हवाला देकर औपचारिक पत्र भेजें।',
          pa: 'ਧਾਰਾ 173 ਬੀਐਨਐਸਐਸ ਦਾ ਹਵਾਲਾ ਦੇ ਕੇ ਲਿਖਤੀ ਪੱਤਰ ਭੇਜੋ।',
        },
      },
      {
        authority: {
          en: 'State Human Rights Commission (SHRC)',
          hi: 'राज्य मानवाधिकार आयोग',
          pa: 'ਰਾਜ ਮਨੁੱਖੀ ਅਧਿਕਾਰ ਕਮਿਸ਼ਨ',
        },
        actionType: 'portal',
        url: 'https://hrcnet.nic.in/HRCNet/public/',
      },
      {
        authority: {
          en: 'Jurisdictional Judicial Magistrate Court',
          hi: 'संबंधित न्यायिक मजिस्ट्रेट न्यायालय',
          pa: 'ਸੰਬੰਧਿਤ ਨਿਆਂਇਕ ਮੈਜਿਸਟਰੇਟ ਅਦਾਲਤ',
        },
        actionType: 'court',
      },
    ],
    sources: [
      {
        lawName: 'BNSS 2023',
        sectionCode: 'Section 173',
        text: {
          en: 'Section 173 BNSS — Information in cognizable cases and mandatory FIR.',
          hi: 'धारा 173 बीएनएसएस — संज्ञेय मामलों में सूचना और अनिवार्य एफआईआर।',
          pa: 'ਧਾਰਾ 173 ਬੀਐਨਐਸਐਸ — ਸੰਗੀਨ ਮਾਮਲਿਆਂ ਵਿੱਚ ਲਾਜ਼ਮੀ ਐਫਆਈਆਰ।',
        },
        url: 'https://www.indiacode.nic.in',
        isOfficialGovt: true,
      },
      {
        lawName: 'Supreme Court of India',
        sectionCode: 'Lalita Kumari (2014)',
        text: {
          en: 'Lalita Kumari v. Govt of UP (2014) 2 SCC 1 — Mandatory FIR registration.',
          hi: 'ललिता कुमारी बनाम उप्र सरकार (2014) 2 SCC 1 — अनिवार्य एफआईआर।',
          pa: 'ਲਲਿਤਾ ਕੁਮਾਰੀ ਕੇਸ (2014) — ਲਾਜ਼ਮੀ ਐਫਆਈਆਰ।',
        },
        url: 'https://main.sci.gov.in/judgments',
        isOfficialGovt: true,
      },
    ],
  },
  {
    id: 'threat-abuse-assault',
    iconName: 'AlertTriangle',
    category: 'misconduct',
    title: {
      en: 'Officer is threatening, abusing, or assaulting me',
      hi: 'पुलिस अधिकारी धमकी, दुर्व्यवहार या मारपीट कर रहा है',
      pa: 'ਪੁਲਿਸ ਅਧਿਕਾਰੀ ਧਮਕੀ, ਗਾਲੀ-ਗਲੋਚ ਜਾਂ ਕੁੱਟਮਾਰ ਕਰ ਰਿਹਾ ਹੈ',
    },
    summary: {
      en: 'Custodial violence, verbal abuse, physical assault, or unlawful threats.',
      hi: 'हिरासत में हिंसा, अभद्र भाषा, शारीरिक हमला या गैर-कानूनी धमकियां।',
      pa: 'ਹਿਰਾਸਤ ਵਿੱਚ ਹਿੰਸਾ, ਬਦਸਲੂਕੀ, ਸਰੀਰਕ ਹਮਲਾ ਜਾਂ ਗੈਰ-ਕਾਨੂੰਨੀ ਧਮਕੀਆਂ।',
    },
    tags: ['abuse', 'assault', 'violence', 'custodial', 'torture', 'threat', 'human rights', 'medical exam', 'complaint'],
    defaultDocType: 'police-misconduct',
    yourRights: [
      {
        text: {
          en: 'Absolute constitutional protection against torture & custodial violence.',
          hi: 'हिरासत में यातना और शारीरिक हिंसा के विरुद्ध पूर्ण संवैधानिक सुरक्षा।',
          pa: 'ਹਿਰਾਸਤ ਵਿੱਚ ਤਸ਼ੱਦਦ ਅਤੇ ਹਿੰਸਾ ਵਿਰੁੱਧ ਪੂਰੀ ਸੰਵਿਧਾਨਕ ਸੁਰੱਖਿਆ।',
        },
        citation: 'Article 21, Constitution & D.K. Basu v. State of WB',
        simpleExplanation: {
          en: 'Police brutality violates your fundamental Right to Life and Dignity under Article 21.',
          hi: 'पुलिस द्वारा मारपीट या प्रताड़ना अनुच्छेद 21 के तहत आपके जीवन व गरिमा के अधिकार का सीधा उल्लंघन है।',
          pa: 'ਪੁਲਿਸ ਕੁੱਟਮਾਰ ਤੁਹਾਡੇ ਜੀਵਨ ਅਤੇ ਸਨਮਾਨ ਦੇ ਮੌਲਿਕ ਅਧਿਕਾਰ ਦੀ ਸਿੱਧੀ ਉਲੰਘਣਾ ਹੈ।',
        },
      },
      {
        text: {
          en: 'Right to immediate government medical examination & injury documentation.',
          hi: 'तत्काल सरकारी अस्पताल में मेडिकल जांच और चोटों के दस्तावेजीकरण का अधिकार।',
          pa: 'ਤੁਰੰਤ ਸਰਕਾਰੀ ਹਸਪਤਾਲ ਵਿੱਚ ਮੈਡੀਕਲ ਜਾਂਚ ਅਤੇ ਸੱਟਾਂ ਦੇ ਰਿਕਾਰਡ ਦਾ ਹੱਕ।',
        },
        citation: 'Section 53 & 54, BNSS 2023',
        simpleExplanation: {
          en: 'You can demand a medical checkup by a government doctor who must record every bruise or injury.',
          hi: 'आप सरकारी डॉक्टर से जांच की मांग कर सकते हैं जो हर चोट का मेडिकल रिकॉर्ड तैयार करेगा।',
          pa: 'ਤੁਸੀਂ ਸਰਕਾਰੀ ਡਾਕਟਰ ਤੋਂ ਜਾਂਚ ਦੀ ਮੰਗ ਕਰ ਸਕਦੇ ਹੋ ਜੋ ਸੱਟਾਂ ਦਾ ਰਿਕਾਰਡ ਬਣਾਏਗਾ।',
        },
      },
      {
        text: {
          en: 'Police officers committing assault face criminal prosecution under BNS.',
          hi: 'मारपीट करने वाले पुलिस कर्मियों पर बीएनएस के तहत आपराधिक मुकदमा चलाया जा सकता है।',
          pa: 'ਕੁੱਟਮਾਰ ਕਰਨ ਵਾਲੇ ਪੁਲਿਸ ਵਾਲਿਆਂ ਖਿਲਾਫ ਬੀਐਨਐਸ ਤਹਿਤ ਫੌਜਦਾਰੀ ਮੁਕੱਦਮਾ ਚੱਲ ਸਕਦਾ ਹੈ।',
        },
        citation: 'Bharatiya Nyaya Sanhita (BNS) 2023',
        simpleExplanation: {
          en: 'Uniform does not grant immunity from criminal assault, criminal intimidation, or hurt charges.',
          hi: 'वर्दी किसी भी पुलिसकर्मी को मारपीट या आपराधिक धमकी के आरोपों से सुरक्षा नहीं देती।',
          pa: 'ਵਰਦੀ ਕਿਸੇ ਪੁਲਿਸ ਵਾਲੇ ਨੂੰ ਕੁੱਟਮਾਰ ਜਾਂ ਧਮਕੀਆਂ ਦੇ ਕੇਸ ਤੋਂ ਬਚਾਅ ਨਹੀਂ ਦਿੰਦੀ।',
        },
      },
    ],
    whatToDoNow: [
      {
        stepNumber: 1,
        action: {
          en: 'Go to a government hospital (Civil Hospital) immediately and get a Medico-Legal Case (MLC) report.',
          hi: 'तुरंत सरकारी अस्पताल (सिविल अस्पताल) जाएं और एमएलसी (MLC) रिपोर्ट बनवाएं।',
          pa: 'ਤੁਰੰਤ ਸਰਕਾਰੀ ਹਸਪਤਾਲ ਜਾਓ ਅਤੇ ਐਮਐਲਸੀ (MLC) ਰਿਪੋਰਟ ਬਣਵਾਓ।',
        },
      },
      {
        stepNumber: 2,
        action: {
          en: 'Take clear, timestamped photographs of all visible injuries and preserve torn clothing/evidence.',
          hi: 'सभी चोटों की तारीख व समय वाली स्पष्ट तस्वीरें लें और फटे कपड़े/सबूत संभालें।',
          pa: 'ਸਾਰੀਆਂ ਸੱਟਾਂ ਦੀਆਂ ਤਸਵੀਰਾਂ ਲਵੋ ਅਤੇ ਸਬੂਤ ਸੰਭਾਲ ਕੇ ਰੱਖੋ।',
        },
      },
      {
        stepNumber: 3,
        action: {
          en: 'Note badge numbers, names, PCR vehicle numbers, date, time, and witness contacts.',
          hi: 'बैज नंबर, नाम, पीसीआर गाड़ी नंबर, तारीख, समय और गवाहों के नंबर नोट करें।',
          pa: 'ਬੈਜ ਨੰਬਰ, ਨਾਮ, ਪੀਸੀਆਰ ਵਾਹਨ ਨੰਬਰ ਅਤੇ ਗਵਾਹਾਂ ਦੇ ਵੇਰਵੇ ਨੋਟ ਕਰੋ।',
        },
      },
      {
        stepNumber: 4,
        action: {
          en: 'File an online complaint immediately on the National Human Rights Commission (NHRC) portal.',
          hi: 'राष्ट्रीय मानवाधिकार आयोग (NHRC) के पोर्टल पर तुरंत ऑनलाइन शिकायत दर्ज करें।',
          pa: 'ਰਾਸ਼ਟਰੀ ਮਨੁੱਖੀ ਅਧਿਕਾਰ ਕਮਿਸ਼ਨ (NHRC) ਦੇ ਪੋਰਟਲ ਤੇ ਤੁਰੰਤ ਸ਼ਿਕਾਇਤ ਦਰਜ ਕਰੋ।',
        },
      },
      {
        stepNumber: 5,
        action: {
          en: 'Call NALSA Free Legal Aid at 15100 for immediate advocate support.',
          hi: 'तत्काल वकील सहायता के लिए 15100 पर नालसा विधिक सहायता को कॉल करें।',
          pa: 'ਤੁਰੰਤ ਵਕੀਲ ਦੀ ਮਦਦ ਲਈ 15100 ਤੇ ਨਾਲਸਾ ਨੂੰ ਕਾਲ ਕਰੋ।',
        },
      },
    ],
    whatNotToDo: [
      {
        warning: {
          en: 'Do not delay medical examination; injuries heal and crucial evidence is lost.',
          hi: 'मेडिकल जांच में देरी न करें; चोटें ठीक होने पर अहम सबूत नष्ट हो जाते हैं।',
          pa: 'ਮੈਡੀਕਲ ਜਾਂਚ ਚ ਦੇਰੀ ਨਾ ਕਰੋ; ਸੱਟਾਂ ਠੀਕ ਹੋਣ ਤੇ ਅਹਿਮ ਸਬੂਤ ਖਤਮ ਹੋ ਜਾਂਦੇ ਹਨ।',
        },
      },
      {
        warning: {
          en: 'Do not physically retaliate or attack the officer in response.',
          hi: 'जवाब में अधिकारी पर शारीरिक हमला या जवाबी प्रहार न करें।',
          pa: 'ਜਵਾਬ ਵਿੱਚ ਪੁਲਿਸ ਅਧਿਕਾਰੀ ਤੇ ਸਰੀਰਕ ਹਮਲਾ ਨਾ ਕਰੋ।',
        },
      },
    ],
    whereToComplain: [
      {
        authority: {
          en: 'NHRC Online Complaint Portal',
          hi: 'एनएचआरसी (NHRC) ऑनलाइन शिकायत पोर्टल',
          pa: 'ਐਨ.ਐਚ.ਆਰ.ਸੀ. ਆਨਲਾਈਨ ਪੋਰਟਲ',
        },
        actionType: 'portal',
        url: 'https://hrcnet.nic.in/HRCNet/public/',
      },
      {
        authority: {
          en: 'State Police Complaints Authority (PCA)',
          hi: 'राज्य पुलिस शिकायत प्राधिकरण (PCA)',
          pa: 'ਰਾਜ ਪੁਲਿਸ ਸ਼ਿਕਾਇਤ ਅਥਾਰਟੀ (PCA)',
        },
        actionType: 'written',
      },
      {
        authority: {
          en: 'NALSA Legal Aid Helpline',
          hi: 'नालसा विधिक सहायता हेल्पलाइन',
          pa: 'ਨਾਲਸਾ ਕਾਨੂੰਨੀ ਸਹਾਇਤਾ ਹੈਲਪਲਾਈਨ',
        },
        actionType: 'call',
        value: '15100',
      },
    ],
    sources: [
      {
        lawName: 'Constitution of India',
        sectionCode: 'Article 21',
        text: {
          en: 'Article 21 — Protection of life and personal liberty.',
          hi: 'अनुच्छेद 21 — प्राण और दैहिक स्वतंत्रता का संरक्षण।',
          pa: 'ਆਰਟੀਕਲ 21 — ਜੀਵਨ ਅਤੇ ਨਿੱਜੀ ਆਜ਼ਾਦੀ ਦੀ ਸੁਰੱਖਿਆ।',
        },
        url: 'https://www.indiacode.nic.in',
        isOfficialGovt: true,
      },
      {
        lawName: 'Supreme Court of India',
        sectionCode: 'D.K. Basu v. State of WB (1997)',
        text: {
          en: 'D.K. Basu Guidelines — Prevention of custodial torture.',
          hi: 'डी.के. बसु — हिरासत में प्रताड़ना की रोकथाम।',
          pa: 'ਡੀ.ਕੇ. ਬਾਸੂ ਕੇਸ — ਹਿਰਾਸਤੀ ਤਸ਼ੱਦਦ ਦੀ ਰੋਕਥਾਮ।',
        },
        url: 'https://main.sci.gov.in/judgments',
        isOfficialGovt: true,
      },
    ],
  },
  {
    id: 'bribe-demand',
    iconName: 'IndianRupee',
    category: 'misconduct',
    title: {
      en: 'A police officer is asking me for a bribe',
      hi: 'पुलिस अधिकारी मुझसे रिश्वत मांग रहा है',
      pa: 'ਪੁਲਿਸ ਅਧਿਕਾਰੀ ਮੇਰੇ ਤੋਂ ਰਿਸ਼ਵਤ ਮੰਗ ਰਿਹਾ ਹੈ',
    },
    summary: {
      en: 'Demands for cash, UPI, or favours under threat of false case, impoundment, or arrest.',
      hi: 'झूठे केस, जब्ती या गिरफ्तारी की धमकी देकर नकदी, यूपीआई या अनुचित लाभ की मांग।',
      pa: 'ਝੂਠੇ ਕੇਸ ਜਾਂ ਜ਼ਬਤੀ ਦੀ ਧਮਕੀ ਦੇ ਕੇ ਪੈਸੇ ਜਾਂ ਰਿਸ਼ਵਤ ਦੀ ਮੰਗ।',
    },
    tags: ['bribe', 'corruption', 'acb', 'vigilance', 'cvc', 'extortion', 'money', 'upi', 'cash'],
    defaultDocType: 'police-misconduct',
    yourRights: [
      {
        text: {
          en: 'Demanding a bribe is a serious criminal offence under Anti-Corruption law.',
          hi: 'रिश्वत मांगना भ्रष्टाचार निवारण अधिनियम के तहत एक गंभीर संज्ञेय अपराध है।',
          pa: 'ਰਿਸ਼ਵਤ ਮੰਗਣਾ ਭ੍ਰਿਸ਼ਟਾਚਾਰ ਵਿਰੋਧੀ ਕਾਨੂੰਨ ਤਹਿਤ ਇੱਕ ਗੰਭੀਰ ਜੁਰਮ ਹੈ।',
        },
        citation: 'Section 7, Prevention of Corruption Act 1988 (as amended)',
        simpleExplanation: {
          en: 'A public servant demanding an undue advantage faces 3 to 7 years imprisonment.',
          hi: 'रिश्वत मांगने वाले लोक सेवक को 3 से 7 साल तक की कैद की सजा हो सकती है।',
          pa: 'ਰਿਸ਼ਵਤ ਮੰਗਣ ਵਾਲੇ ਸਰਕਾਰੀ ਮੁਲਾਜ਼ਮ ਨੂੰ 3 ਤੋਂ 7 ਸਾਲ ਦੀ ਕੈਦ ਹੋ ਸਕਦੀ ਹੈ।',
        },
      },
      {
        text: {
          en: 'Protection if compelled to pay — report within 7 days to Anti-Corruption Bureau.',
          hi: 'मजबूरी में दी गई रिश्वत पर सुरक्षा — 7 दिनों के भीतर एसीबी में रिपोर्ट करें।',
          pa: 'ਮਜਬੂਰੀ ਚ ਦਿੱਤੀ ਰਿਸ਼ਵਤ ਤੇ ਸੁਰੱਖਿਆ — 7 ਦਿਨਾਂ ਦੇ ਅੰਦਰ ਏਸੀਬੀ ਨੂੰ ਰਿਪੋਰਟ ਕਰੋ।',
        },
        citation: 'Section 8 Proviso, Prevention of Corruption Act 1988',
        simpleExplanation: {
          en: 'If you were coerced to pay under threat, reporting it within 7 days protects you from prosecution.',
          hi: 'यदि धमकी देकर रिश्वत वसूली गई, तो 7 दिनों में सूचना देने पर आप पर कोई कानूनी कार्रवाई नहीं होगी।',
          pa: 'ਜੇਕਰ ਧਮਕੀ ਦੇ ਕੇ ਰਿਸ਼ਵਤ ਲਈ ਗਈ ਤਾਂ 7 ਦਿਨਾਂ ਵਿੱਚ ਰਿਪੋਰਟ ਕਰਨ ਤੇ ਤੁਹਾਨੂੰ ਸੁਰੱਖਿਆ ਮਿਲਦੀ ਹੈ।',
        },
      },
      {
        text: {
          en: 'State Anti-Corruption Bureau (ACB) sets up lawful trap operations.',
          hi: 'राज्य भ्रष्टाचार निरोधक ब्यूरो (ACB) रिश्वतखोरों को रंगे हाथ पकड़ने के लिए ट्रैप लगाता है।',
          pa: 'ਸਟੇਟ ਵਿਜੀਲੈਂਸ ਬਿਊਰੋ ਰਿਸ਼ਵਤਖੋਰਾਂ ਨੂੰ ਰੰਗੇ ਹੱਥੀਂ ਫੜਨ ਲਈ ਟਰੈਪ ਲਗਾਉਂਦਾ ਹੈ।',
        },
        citation: 'State Vigilance & Anti-Corruption Bureau Guidelines',
        simpleExplanation: {
          en: 'ACB officials provide marked currency and record the transaction to catch corrupt officers red-handed.',
          hi: 'एसीबी अधिकारी चिह्नित नोट देते हैं और भ्रष्ट अधिकारियों को रंगे हाथ पकड़ने के लिए कानूनी ट्रैप लगाते हैं।',
          pa: 'ਏਸੀਬੀ ਅਧਿਕਾਰੀ ਰਿਸ਼ਵਤਖੋਰ ਨੂੰ ਰੰਗੇ ਹੱਥੀਂ ਫੜਨ ਲਈ ਪੂਰੀ ਕਾਨੂੰਨੀ ਕਾਰਵਾਈ ਕਰਦੇ ਹਨ।',
        },
      },
    ],
    whatToDoNow: [
      {
        stepNumber: 1,
        action: {
          en: 'Do not voluntarily agree to pay. Note officer\'s name, rank, badge, date, time, and location.',
          hi: 'स्वेच्छा से पैसे न दें। अधिकारी का नाम, पद, बैज, तारीख, समय और स्थान नोट करें।',
          pa: 'ਆਪਣੀ ਮਰਜ਼ੀ ਨਾਲ ਪੈਸੇ ਨਾ ਦਿਓ। ਅਧਿਕਾਰੀ ਦਾ ਨਾਮ, ਅਹੁਦਾ, ਮਿਤੀ ਅਤੇ ਸਮਾਂ ਨੋਟ ਕਰੋ।',
        },
      },
      {
        stepNumber: 2,
        action: {
          en: 'Preserve any audio/video recordings, WhatsApp messages, or UPI payment IDs safely.',
          hi: 'कोई भी ऑडियो/वीडियो रिकॉर्डिंग, व्हाट्सएप मैसेज या यूपीआई आईडी सुरक्षित रखें।',
          pa: 'ਆਡੀਓ/ਵੀਡੀਓ ਰਿਕਾਰਡਿੰਗ, ਵਟਸਐਪ ਸੁਨੇਹੇ ਜਾਂ ਯੂਪੀਆਈ ਵੇਰਵੇ ਸੰਭਾਲ ਕੇ ਰੱਖੋ।',
        },
      },
      {
        stepNumber: 3,
        action: {
          en: 'Contact your State Anti-Corruption Bureau (ACB) / Vigilance Department helpline.',
          hi: 'अपने राज्य के भ्रष्टाचार निरोधक ब्यूरो (ACB) / विजिलेंस विभाग की हेल्पलाइन पर संपर्क करें।',
          pa: 'ਆਪਣੇ ਰਾਜ ਦੇ ਭ੍ਰਿਸ਼ਟਾਚਾਰ ਵਿਰੋਧੀ ਬਿਊਰੋ (ACB) / ਵਿਜੀਲੈਂਸ ਹੈਲਪਲਾਈਨ ਤੇ ਸੰਪਰਕ ਕਰੋ।',
        },
      },
      {
        stepNumber: 4,
        action: {
          en: 'Follow ACB instructions for trap operations rather than taking unauthorized independent actions.',
          hi: 'खुद कोई कदम उठाने के बजाय एसीबी द्वारा बताए गए ट्रैप प्रक्रिया का पालन करें।',
          pa: 'ਖੁਦ ਕੋਈ ਕਦਮ ਚੁੱਕਣ ਦੀ ਬਜਾਏ ਏਸੀਬੀ ਦੇ ਨਿਰਦੇਸ਼ਾਂ ਦੀ ਪਾਲਣਾ ਕਰੋ।',
        },
      },
    ],
    whatNotToDo: [
      {
        warning: {
          en: 'Do not voluntarily offer a bribe to bypass legal procedures.',
          hi: 'कानूनी प्रक्रिया से बचने के लिए स्वेच्छा से रिश्वत की पेशकश न करें।',
          pa: 'ਕਾਨੂੰਨੀ ਕਾਰਵਾਈ ਤੋਂ ਬਚਣ ਲਈ ਆਪਣੀ ਮਰਜ਼ੀ ਨਾਲ ਰਿਸ਼ਵਤ ਦੀ ਪੇਸ਼ਕਸ਼ ਨਾ ਕਰੋ।',
        },
        consequence: {
          en: 'Offering a bribe voluntarily is also punishable under Section 8 of the PC Act.',
          hi: 'स्वेच्छा से रिश्वत देना भी भ्रष्टाचार अधिनियम की धारा 8 के तहत दंडनीय है।',
          pa: 'ਮਰਜ਼ੀ ਨਾਲ ਰਿਸ਼ਵਤ ਦੇਣਾ ਵੀ ਕਾਨੂੰਨੀ ਤੌਰ ਤੇ ਜੁਰਮ ਹੈ।',
        },
      },
      {
        warning: {
          en: 'Do not get into an aggressive physical fight on the spot.',
          hi: 'मौके पर आक्रामक हाथापाई या झगड़ा न करें।',
          pa: 'ਮੌਕੇ ਤੇ ਕੋਈ ਹਿੰਸਕ ਝਗੜਾ ਨਾ ਕਰੋ।',
        },
      },
    ],
    whereToComplain: [
      {
        authority: {
          en: 'State Anti-Corruption Bureau (ACB) / Vigilance Directorate',
          hi: 'राज्य भ्रष्टाचार निरोधक ब्यूरो (ACB) / सतर्कता निदेशालय',
          pa: 'ਰਾਜ ਵਿਜੀਲੈਂਸ ਬਿਊਰੋ / ਏਸੀਬੀ',
        },
        actionType: 'portal',
        details: {
          en: 'Contact state-specific ACB toll-free helpline (e.g. 1064 in many states).',
          hi: 'राज्य एसीबी टोल-फ्री हेल्पलाइन (कई राज्यों में 1064) पर संपर्क करें।',
          pa: 'ਰਾਜ ਏਸੀਬੀ ਹੈਲਪਲਾਈਨ (ਜਿਵੇਂ ਕਿ 1064) ਤੇ ਸੰਪਰਕ ਕਰੋ।',
        },
      },
      {
        authority: {
          en: 'Central Vigilance Commission (CVC)',
          hi: 'केंद्रीय सतर्कता आयोग (CVC)',
          pa: 'ਕੇਂਦਰੀ ਵਿਜੀਲੈਂਸ ਕਮਿਸ਼ਨ (CVC)',
        },
        actionType: 'portal',
        url: 'https://cvc.gov.in',
      },
      {
        authority: {
          en: 'State Lokayukta',
          hi: 'राज्य लोकायुक्त',
          pa: 'ਰਾਜ ਲੋਕਾਯੁਕਤ',
        },
        actionType: 'written',
      },
    ],
    sources: [
      {
        lawName: 'Prevention of Corruption Act, 1988',
        sectionCode: 'Sections 7 & 8',
        text: {
          en: 'Prevention of Corruption Act — Offences relating to public servants demanding bribe.',
          hi: 'भ्रष्टाचार निवारण अधिनियम — लोक सेवकों द्वारा रिश्वत की मांग संबंधी अपराध।',
          pa: 'ਭ੍ਰਿਸ਼ਟਾਚਾਰ ਵਿਰੋਧੀ ਐਕਟ — ਰਿਸ਼ਵਤ ਮੰਗਣ ਸੰਬੰਧੀ ਜੁਰਮ।',
        },
        url: 'https://www.indiacode.nic.in',
        isOfficialGovt: true,
      },
    ],
  },
  {
    id: 'women-protections',
    iconName: 'Shield',
    category: 'women',
    title: {
      en: 'I\'m a woman — special protections during police interaction',
      hi: 'मैं एक महिला हूँ — पुलिस बातचीत के दौरान विशेष कानूनी सुरक्षा',
      pa: 'ਮੈਂ ਇੱਕ ਔਰਤ ਹਾਂ — ਪੁਲਿਸ ਕਾਰਵਾਈ ਦੌਰਾਨ ਵਿਸ਼ੇਸ਼ ਕਾਨੂੰਨੀ ਸੁਰੱਖਿਆ',
    },
    summary: {
      en: 'Night arrest prohibition, questioning at home only, female officer search, and 24x7 help.',
      hi: 'सूर्यास्त बाद गिरफ्तारी पर रोक, घर पर ही पूछताछ, महिला अधिकारी द्वारा तलाशी व सुरक्षा।',
      pa: 'ਸੂਰਜ ਡੁੱਬਣ ਮਗਰੋਂ ਗ੍ਰਿਫਤਾਰੀ ਤੇ ਰੋਕ, ਘਰ ਬੈਠ ਕੇ ਪੁੱਛਗਿੱਛ ਅਤੇ ਮਹਿਲਾ ਅਧਿਕਾਰੀ ਦੁਆਰਾ ਤਲਾਸ਼ੀ।',
    },
    tags: ['women', 'sunset', 'sunrise', 'night arrest', 'female officer', 'home questioning', 'decency', '1091', '181'],
    yourRights: [
      {
        text: {
          en: 'Strict prohibition on arrest of women between Sunset and Sunrise.',
          hi: 'सूर्यास्त के बाद और सूर्योदय से पहले महिलाओं की गिरफ्तारी पर पूर्ण रोक।',
          pa: 'ਸੂਰਜ ਡੁੱਬਣ ਤੋਂ ਬਾਅਦ ਅਤੇ ਚੜ੍ਹਨ ਤੋਂ ਪਹਿਲਾਂ ਔਰਤਾਂ ਦੀ ਗ੍ਰਿਫਤਾਰੀ ਤੇ ਪੂਰੀ ਰੋਕ।',
        },
        citation: 'Section 43(5), BNSS 2023',
        simpleExplanation: {
          en: 'No woman can be arrested after sunset and before sunrise without prior written permission from a Judicial Magistrate First Class.',
          hi: 'प्रथम श्रेणी न्यायिक मजिस्ट्रेट की पूर्व लिखित अनुमति के बिना सूर्यास्त के बाद किसी महिला को गिरफ्तार नहीं किया जा सकता।',
          pa: 'ਜੁਡੀਸ਼ੀਅਲ ਮੈਜਿਸਟਰੇਟ ਦੀ ਅਗਾਊਂ ਲਿਖਤੀ ਮਨਜ਼ੂਰੀ ਤੋਂ ਬਿਨਾਂ ਰਾਤ ਨੂੰ ਕਿਸੇ ਔਰਤ ਨੂੰ ਗ੍ਰਿਫਤਾਰ ਨਹੀਂ ਕੀਤਾ ਜਾ ਸਕਦਾ।',
        },
      },
      {
        text: {
          en: 'Questioning of women must take place at her residence.',
          hi: 'महिला गवाह से पूछताछ केवल उसके निवास स्थान पर ही की जा सकती है।',
          pa: 'ਔਰਤ ਗਵਾਹ ਤੋਂ ਪੁੱਛਗਿੱਛ ਸਿਰਫ ਉਸਦੇ ਘਰ ਵਿਖੇ ਹੀ ਹੋ ਸਕਦੀ ਹੈ।',
        },
        citation: 'Section 179(1) Proviso, BNSS 2023',
        simpleExplanation: {
          en: 'Police cannot summon a female witness to the police station for questioning; they must visit her home.',
          hi: 'पुलिस किसी महिला गवाह को पूछताछ के लिए थाने नहीं बुला सकती; उन्हें उसके घर आना होगा।',
          pa: 'ਪੁਲਿਸ ਕਿਸੇ ਔਰਤ ਗਵਾਹ ਨੂੰ ਥਾਣੇ ਨਹੀਂ ਸੱਦ ਸਕਦੀ; ਉਹਨਾਂ ਨੂੰ ਉਸਦੇ ਘਰ ਆਉਣਾ ਪਵੇਗਾ।',
        },
      },
      {
        text: {
          en: 'Search of a woman must be done ONLY by a female police officer with decency.',
          hi: 'महिला की शारीरिक तलाशी केवल महिला पुलिसकर्मी द्वारा पूरी शालीनता से।',
          pa: 'ਔਰਤ ਦੀ ਸਰੀਰਕ ਤਲਾਸ਼ੀ ਸਿਰਫ ਮਹਿਲਾ ਪੁਲਿਸ ਅਧਿਕਾਰੀ ਦੁਆਰਾ ਹੀ ਕੀਤੀ ਜਾ ਸਕਦੀ ਹੈ।',
        },
        citation: 'Section 51(2), BNSS 2023',
        simpleExplanation: {
          en: 'Male police officers are strictly barred from physically touching or searching a woman.',
          hi: 'पुरुष पुलिसकर्मियों को किसी महिला को छूने या तलाशी लेने का कोई अधिकार नहीं है।',
          pa: 'ਪੁਰਸ਼ ਪੁਲਿਸ ਅਧਿਕਾਰੀ ਕਿਸੇ ਔਰਤ ਨੂੰ ਹੱਥ ਨਹੀਂ ਲਗਾ ਸਕਦੇ ਨਾ ਹੀ ਤਲਾਸ਼ੀ ਲੈ ਸਕਦੇ ਹਨ।',
        },
      },
      {
        text: {
          en: 'Arrest of a woman must be executed by a female police officer.',
          hi: 'महिला की गिरफ्तारी केवल महिला पुलिस अधिकारी द्वारा की जानी चाहिए।',
          pa: 'ਔਰਤ ਦੀ ਗ੍ਰਿਫਤਾਰੀ ਸਿਰਫ ਮਹਿਲਾ ਪੁਲਿਸ ਅਧਿਕਾਰੀ ਦੁਆਰਾ ਹੀ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ।',
        },
        citation: 'Section 43(1) Proviso, BNSS 2023',
        simpleExplanation: {
          en: 'Unless circumstances dictate otherwise, only a female officer should execute the arrest of a woman.',
          hi: 'विशेष परिस्थितियों को छोड़कर, महिला की गिरफ्तारी केवल महिला अधिकारी द्वारा ही की जानी चाहिए।',
          pa: 'ਖਾਸ ਹਾਲਾਤਾਂ ਨੂੰ ਛੱਡ ਕੇ ਔਰਤ ਦੀ ਗ੍ਰਿਫਤਾਰੀ ਮਹਿਲਾ ਅਫਸਰ ਦੁਆਰਾ ਹੀ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ।',
        },
      },
    ],
    whatToDoNow: [
      {
        stepNumber: 1,
        action: {
          en: 'If called to a police station as a witness, cite Section 179 BNSS and state: "Please come to my residence for statements."',
          hi: 'यदि थाने बुलाया जाए, तो धारा 179 बीएनएसएस का हवाला दें: "कृपया बयान लेने मेरे घर आएं।"',
          pa: 'ਜੇ ਥਾਣੇ ਸੱਦਿਆ ਜਾਵੇ ਤਾਂ ਧਾਰਾ 179 ਦਾ ਹਵਾਲਾ ਦੇ ਕੇ ਘਰ ਆਉਣ ਲਈ ਕਹੋ।',
        },
      },
      {
        stepNumber: 2,
        action: {
          en: 'If approached for arrest after sunset, demand to see the Judicial Magistrate\'s written authorization order.',
          hi: 'यदि सूर्यास्त के बाद गिरफ्तारी की कोशिश हो, तो न्यायिक मजिस्ट्रेट का लिखित अनुमति आदेश मांगें।',
          pa: 'ਜੇਕਰ ਸੂਰਜ ਡੁੱਬਣ ਮਗਰੋਂ ਗ੍ਰਿਫਤਾਰੀ ਦੀ ਕੋਸ਼ਿਸ਼ ਹੋਵੇ ਤਾਂ ਮੈਜਿਸਟਰੇਟ ਦਾ ਲਿਖਤੀ ਹੁਕਮ ਮੰਗੋ।',
        },
      },
      {
        stepNumber: 3,
        action: {
          en: 'Call Women Helpline 1091 or Emergency 112 immediately if you feel threatened or unsafe.',
          hi: 'यदि आप असुरक्षित महसूस करें तो तुरंत महिला हेल्पलाइन 1091 या 112 पर कॉल करें।',
          pa: 'ਜੇਕਰ ਅਸੁਰੱਖਿਅਤ ਮਹਿਸੂਸ ਕਰੋ ਤਾਂ ਤੁਰੰਤ ਮਹਿਲਾ ਹੈਲਪਲਾਈਨ 1091 ਜਾਂ 112 ਤੇ ਕਾਲ ਕਰੋ।',
        },
      },
      {
        stepNumber: 4,
        action: {
          en: 'Use our Emergency Bar to broadcast your live GPS location to trusted family members.',
          hi: 'हमारे इमरजेंसी बार से अपने परिजनों को अपनी लाइव जीपीएस लोकेशन भेजें।',
          pa: 'ਸਾਡੇ ਐਮਰਜੈਂਸੀ ਬਟਨ ਨਾਲ ਆਪਣੇ ਪਰਿਵਾਰ ਨੂੰ ਲਾਈਵ ਲੋਕੇਸ਼ਨ ਭੇਜੋ।',
        },
      },
    ],
    whatNotToDo: [
      {
        warning: {
          en: 'Do not allow male officers to conduct physical body searches.',
          hi: 'पुरुष पुलिसकर्मियों को अपनी शारीरिक तलाशी लेने की अनुमति कभी न दें।',
          pa: 'ਪੁਰਸ਼ ਪੁਲਿਸ ਅਧਿਕਾਰੀਆਂ ਨੂੰ ਆਪਣੀ ਸਰੀਰਕ ਤਲਾਸ਼ੀ ਨਾ ਲੈਣ ਦਿਓ।',
        },
      },
      {
        warning: {
          en: 'Do not go alone to a police station at night without a lawyer or family member.',
          hi: 'रात के समय अकेले किसी थाने में न जाएं; हमेशा वकील या परिजन को साथ रखें।',
          pa: 'ਰਾਤ ਨੂੰ ਇਕੱਲੇ ਥਾਣੇ ਨਾ ਜਾਓ; ਪਰਿਵਾਰ ਜਾਂ ਵਕੀਲ ਨੂੰ ਨਾਲ ਲੈ ਕੇ ਜਾਓ।',
        },
      },
    ],
    whereToComplain: [
      {
        authority: {
          en: 'Women Helpline (National)',
          hi: 'राष्ट्रीय महिला हेल्पलाइन',
          pa: 'ਰਾਸ਼ਟਰੀ ਮਹਿਲਾ ਹੈਲਪਲਾਈਨ',
        },
        actionType: 'call',
        value: '1091',
      },
      {
        authority: {
          en: 'National Commission for Women (NCW)',
          hi: 'राष्ट्रीय महिला आयोग (NCW)',
          pa: 'ਰਾਸ਼ਟਰੀ ਮਹਿਲਾ ਕਮਿਸ਼ਨ (NCW)',
        },
        actionType: 'portal',
        url: 'https://ncw.nic.in',
      },
      {
        authority: {
          en: 'State Women\'s Commission',
          hi: 'राज्य महिला आयोग',
          pa: 'ਰਾਜ ਮਹਿਲਾ ਕਮਿਸ਼ਨ',
        },
        actionType: 'written',
      },
    ],
    sources: [
      {
        lawName: 'BNSS 2023',
        sectionCode: 'Sections 43(1), 43(5), 51(2), 179',
        text: {
          en: 'BNSS 2023 — Specific legal safeguards protecting women during arrest, search, and inquiry.',
          hi: 'बीएनएसएस 2023 — गिरफ्तारी, तलाशी और पूछताछ के दौरान महिलाओं के लिए विशेष कानूनी सुरक्षा।',
          pa: 'ਬੀਐਨਐਸਐਸ 2023 — ਔਰਤਾਂ ਲਈ ਗ੍ਰਿਫਤਾਰੀ ਅਤੇ ਤਲਾਸ਼ੀ ਸੰਬੰਧੀ ਖਾਸ ਕਾਨੂੰਨੀ ਸੁਰੱਖਿਆ।',
        },
        url: 'https://www.indiacode.nic.in',
        isOfficialGovt: true,
      },
    ],
  },
  {
    id: 'report-misconduct',
    iconName: 'Eye',
    category: 'misconduct',
    title: {
      en: 'I witnessed police misconduct',
      hi: 'मैंने पुलिस कदाचार या दुर्व्यवहार देखा है',
      pa: 'ਮੈਂ ਪੁਲਿਸ ਦੀ ਗਲਤ ਕਾਰਵਾਈ ਜਾਂ ਦੁਰਵਿਹਾਰ ਦੇਖਿਆ ਹੈ',
    },
    summary: {
      en: 'Witnessing brutality, illegal detention, bribery, or destruction of evidence as a bystander.',
      hi: 'एक दर्शक के रूप में हिंसा, अवैध हिरासत, रिश्वत या सबूत मिटाने की घटना देखना।',
      pa: 'ਇੱਕ ਗਵਾਹ ਵਜੋਂ ਪੁਲਿਸ ਹਿੰਸਾ, ਗੈਰ-ਕਾਨੂੰਨੀ ਹਿਰਾਸਤ ਜਾਂ ਰਿਸ਼ਵਤਖੋਰੀ ਦੇਖਣਾ।',
    },
    tags: ['witness', 'bystander', 'misconduct', 'recording', 'evidence', 'pca', 'nhrc', 'report'],
    defaultDocType: 'police-misconduct',
    yourRights: [
      {
        text: {
          en: 'Right to record public servants performing public duty peacefully.',
          hi: 'सार्वजनिक कर्तव्य कर रहे लोक सेवकों की शांतिपूर्ण रिकॉर्डिंग का अधिकार।',
          pa: 'ਡਿਊਟੀ ਕਰ ਰਹੇ ਪੁਲਿਸ ਮੁਲਾਜ਼ਮਾਂ ਦੀ ਸ਼ਾਂਤਮਈ ਰਿਕਾਰਡਿੰਗ ਕਰਨ ਦਾ ਹੱਕ।',
        },
        citation: 'Article 19(1)(a) & Article 21, Constitution of India',
        simpleExplanation: {
          en: 'Recording public officials in public spaces is protected under freedom of speech and expression.',
          hi: 'सार्वजनिक स्थान पर सरकारी अधिकारियों की रिकॉर्डिंग अभिव्यक्ति की स्वतंत्रता के तहत संरक्षित है।',
          pa: 'ਜਨਤਕ ਥਾਂ ਤੇ ਅਧਿਕਾਰੀਆਂ ਦੀ ਰਿਕਾਰਡਿੰਗ ਕਰਨਾ ਪ੍ਰਗਟਾਵੇ ਦੀ ਆਜ਼ਾਦੀ ਦੇ ਘੇਰੇ ਵਿੱਚ ਆਉਂਦਾ ਹੈ।',
        },
      },
      {
        text: {
          en: 'Any citizen can report police misconduct even if not directly the victim.',
          hi: 'कोई भी नागरिक पुलिस कदाचार की शिकायत कर सकता है, भले ही वह स्वयं पीड़ित न हो।',
          pa: 'ਕੋਈ ਵੀ ਨਾਗਰਿਕ ਪੁਲਿਸ ਦੁਰਵਿਹਾਰ ਦੀ ਸ਼ਿਕਾਇਤ ਕਰ ਸਕਦਾ ਹੈ, ਭਾਵੇਂ ਉਹ ਖੁਦ ਪੀੜਤ ਨਾ ਹੋਵੇ।',
        },
        citation: 'Prakash Singh v. Union of India & NHRC Regulations',
        simpleExplanation: {
          en: 'Witnesses and good samaritans can submit complaints to Police Complaints Authorities and NHRC.',
          hi: 'गवाह और जागरूक नागरिक पुलिस शिकायत प्राधिकरण व मानवाधिकार आयोग में शिकायत दे सकते हैं।',
          pa: 'ਗਵਾਹ ਪੁਲਿਸ ਸ਼ਿਕਾਇਤ ਅਥਾਰਟੀ ਅਤੇ ਮਨੁੱਖੀ ਅਧਿਕਾਰ ਕਮਿਸ਼ਨ ਕੋਲ ਸ਼ਿਕਾਇਤ ਦਰਜ ਕਰਵਾ ਸਕਦੇ ਹਨ।',
        },
      },
    ],
    whatToDoNow: [
      {
        stepNumber: 1,
        action: {
          en: 'If safe, record video/audio from a reasonable distance without obstructing police work.',
          hi: 'यदि सुरक्षित हो, तो बिना रुकावट डाले उचित दूरी से वीडियो या ऑडियो रिकॉर्ड करें।',
          pa: 'ਜੇਕਰ ਸੁਰੱਖਿਅਤ ਹੋਵੇ ਤਾਂ ਕੰਮ ਚ ਰੁਕਾਵਟ ਪਾਏ ਬਿਨਾਂ ਦੂਰੀ ਤੋਂ ਵੀਡੀਓ ਰਿਕਾਰਡ ਕਰੋ।',
        },
      },
      {
        stepNumber: 2,
        action: {
          en: 'Note down exact location, timestamp, vehicle numbers, officer name badges, and victim details.',
          hi: 'सटीक स्थान, समय, वाहन नंबर, अधिकारियों के नाम बैज और पीड़ित का विवरण नोट करें।',
          pa: 'ਸਹੀ ਸਥਾਨ, ਸਮਾਂ, ਵਾਹਨ ਨੰਬਰ ਅਤੇ ਅਧਿਕਾਰੀਆਂ ਦੇ ਨਾਮ ਨੋਟ ਕਰੋ।',
        },
      },
      {
        stepNumber: 3,
        action: {
          en: 'Create secure cloud backups of raw video files before sharing or uploading.',
          hi: 'शेयर करने से पहले मूल वीडियो फाइलों का सुरक्षित क्लाउड बैकअप बनाएं।',
          pa: 'ਸਾਂਝਾ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਵੀਡੀਓ ਫਾਈਲਾਂ ਦਾ ਸੁਰੱਖਿਅਤ ਬੈਕਅੱਪ ਬਣਾਓ।',
        },
      },
      {
        stepNumber: 4,
        action: {
          en: 'Submit evidence to State Police Complaints Authority (PCA) or NHRC portal.',
          hi: 'राज्य पुलिस शिकायत प्राधिकरण (PCA) या एनएचआरसी पोर्टल पर सबूत सहित शिकायत भेजें।',
          pa: 'ਰਾਜ ਪੁਲਿਸ ਸ਼ਿਕਾਇਤ ਅਥਾਰਟੀ ਜਾਂ ਐਨਐਚਆਰਸੀ ਪੋਰਟਲ ਤੇ ਸਬੂਤਾਂ ਸਮੇਤ ਸ਼ਿਕਾਇਤ ਭੇਜੋ।',
        },
      },
    ],
    whatNotToDo: [
      {
        warning: {
          en: 'Do not physically interfere in an active police operation.',
          hi: 'चल रहे पुलिस ऑपरेशन में शारीरिक रूप से हस्तक्षेप न करें।',
          pa: 'ਚੱਲ ਰਹੀ ਪੁਲਿਸ ਕਾਰਵਾਈ ਵਿੱਚ ਸਰੀਰਕ ਦਖਲਅੰਦਾਜ਼ੀ ਨਾ ਕਰੋ।',
        },
      },
      {
        warning: {
          en: 'Do not edit, trim, or filter original recordings as it compromises evidentiary value.',
          hi: 'मूल रिकॉर्डिंग को एडिट या ट्रिम न करें क्योंकि इससे कानूनी साक्ष्य मूल्य कम होता है।',
          pa: 'ਅਸਲ ਵੀਡੀਓ ਨਾਲ ਕੋਈ ਛੇੜਛਾੜ ਨਾ ਕਰੋ ਕਿਉਂਕਿ ਇਸ ਨਾਲ ਕਾਨੂੰਨੀ ਸਬੂਤ ਕਮਜ਼ੋਰ ਹੁੰਦਾ ਹੈ।',
        },
      },
    ],
    whereToComplain: [
      {
        authority: {
          en: 'NHRC Complaint Portal',
          hi: 'राष्ट्रीय मानवाधिकार आयोग (NHRC) पोर्टल',
          pa: 'ਐਨ.ਐਚ.ਆਰ.ਸੀ. ਪੋਰਟਲ',
        },
        actionType: 'portal',
        url: 'https://hrcnet.nic.in/HRCNet/public/',
      },
      {
        authority: {
          en: 'State/District Police Complaints Authority',
          hi: 'राज्य/जिला पुलिस शिकायत प्राधिकरण',
          pa: 'ਰਾਜ/ਜ਼ਿਲ੍ਹਾ ਪੁਲਿਸ ਸ਼ਿਕਾਇਤ ਅਥਾਰਟੀ',
        },
        actionType: 'written',
      },
    ],
    sources: [
      {
        lawName: 'Supreme Court of India',
        sectionCode: 'Prakash Singh (2006) 8 SCC 1',
        text: {
          en: 'Prakash Singh Guidelines — Redressal of police excesses through independent authorities.',
          hi: 'प्रकाश सिंह दिशानिर्देश — स्वतंत्र प्राधिकरणों के माध्यम से पुलिस ज्यादतियों का निवारण।',
          pa: 'ਪ੍ਰਕਾਸ਼ ਸਿੰਘ ਕੇਸ — ਪੁਲਿਸ ਵਧੀਕੀਆਂ ਦੀ ਸੁਤੰਤਰ ਜਾਂਚ।',
        },
        url: 'https://main.sci.gov.in/judgments',
        isOfficialGovt: true,
      },
    ],
  },
  {
    id: 'complaint-against-officer',
    iconName: 'FileText',
    category: 'misconduct',
    title: {
      en: 'I want to file a complaint against a police officer',
      hi: 'मैं किसी पुलिस अधिकारी के खिलाफ शिकायत दर्ज कराना चाहता हूँ',
      pa: 'ਮੈਂ ਕਿਸੇ ਪੁਲਿਸ ਅਧਿਕਾਰੀ ਖਿਲਾਫ ਸ਼ਿਕਾਇਤ ਦਰਜ ਕਰਵਾਉਣੀ ਚਾਹੁੰਦਾ ਹਾਂ',
    },
    summary: {
      en: 'Filing formal complaints for misconduct, corruption, illegal arrest, or inaction.',
      hi: 'कदाचार, भ्रष्टाचार, अवैध गिरफ्तारी या निष्क्रियता के लिए औपचारिक शिकायत।',
      pa: 'ਦੁਰਵਿਹਾਰ, ਭ੍ਰਿਸ਼ਟਾਚਾਰ ਜਾਂ ਗੈਰ-ਕਾਨੂੰਨੀ ਗ੍ਰਿਫਤਾਰੀ ਖਿਲਾਫ ਰਸਮੀ ਸ਼ਿਕਾਇਤ।',
    },
    tags: ['complaint', 'officer', 'pca', 'sp', 'dcp', 'rti', 'internal affairs', 'human rights'],
    defaultDocType: 'police-misconduct',
    yourRights: [
      {
        text: {
          en: 'Right to file a written complaint to senior supervisory police authorities.',
          hi: 'वरिष्ठ पर्यवेक्षी पुलिस अधिकारियों (एसपी/कमिश्नर) को लिखित शिकायत देने का अधिकार।',
          pa: 'ਸੀਨੀਅਰ ਪੁਲਿਸ ਅਧਿਕਾਰੀਆਂ (ਐਸਪੀ/ਕਮਿਸ਼ਨਰ) ਨੂੰ ਲਿਖਤੀ ਸ਼ਿਕਾਇਤ ਦੇਣ ਦਾ ਹੱਕ।',
        },
        citation: 'Police Act & State Police Regulations',
        simpleExplanation: {
          en: 'You can bypass the local station and directly petition the Superintendent of Police or Commissioner.',
          hi: 'आप स्थानीय थाने को छोड़कर सीधे पुलिस अधीक्षक या पुलिस आयुक्त को शिकायत दे सकते हैं।',
          pa: 'ਤੁਸੀਂ ਸਥਾਨਕ ਥਾਣੇ ਨੂੰ ਛੱਡ ਕੇ ਸਿੱਧਾ ਐਸਪੀ ਜਾਂ ਕਮਿਸ਼ਨਰ ਨੂੰ ਸ਼ਿਕਾਇਤ ਦੇ ਸਕਦੇ ਹੋ।',
        },
      },
      {
        text: {
          en: 'Statutory Police Complaints Authority (PCA) independent oversight.',
          hi: 'स्वतंत्र पुलिस शिकायत प्राधिकरण (PCA) द्वारा निष्पक्ष जांच का अधिकार।',
          pa: 'ਸੁਤੰਤਰ ਪੁਲਿਸ ਸ਼ਿਕਾਇਤ ਅਥਾਰਟੀ (PCA) ਦੁਆਰਾ ਨਿਰਪੱਖ ਜਾਂਚ ਦਾ ਹੱਕ।',
        },
        citation: 'Prakash Singh v. Union of India, (2006) 8 SCC 1',
        simpleExplanation: {
          en: 'State and District PCAs investigate serious misconduct including custodial death, grievous hurt, extortion, or rape.',
          hi: 'राज्य व जिला पीसीए गंभीर कदाचार जैसे हिरासत में हिंसा, अवैध गिरफ्तारी व जबरन वसूली की जांच करते हैं।',
          pa: 'ਰਾਜ ਅਤੇ ਜ਼ਿਲ੍ਹਾ ਪੀਸੀਏ ਪੁਲਿਸ ਦੀਆਂ ਗੰਭੀਰ ਗਲਤੀਆਂ ਦੀ ਸੁਤੰਤਰ ਜਾਂਚ ਕਰਦੇ ਹਨ।',
        },
      },
      {
        text: {
          en: 'Right to seek information & investigation status under RTI Act 2005.',
          hi: 'सूचना का अधिकार (RTI) 2005 के तहत शिकायत पर की गई कार्रवाई की जानकारी पाने का अधिकार।',
          pa: 'ਆਰਟੀਆਈ ਐਕਟ 2005 ਤਹਿਤ ਸ਼ਿਕਾਇਤ ਤੇ ਕੀਤੀ ਕਾਰਵਾਈ ਦੀ ਜਾਣਕਾਰੀ ਲੈਣ ਦਾ ਹੱਕ।',
        },
        citation: 'Right to Information Act, 2005',
        simpleExplanation: {
          en: 'You can file an RTI application to obtain daily diary excerpts, inquiry reports, and action-taken reports.',
          hi: 'आप अपनी शिकायत पर की गई जांच और रिपोर्ट की जानकारी पाने के लिए आरटीआई दाखिल कर सकते हैं।',
          pa: 'ਤੁਸੀਂ ਆਪਣੀ ਸ਼ਿਕਾਇਤ ਤੇ ਕੀਤੀ ਗਈ ਕਾਰਵਾਈ ਦੀ ਰਿਪੋਰਟ ਲੈਣ ਲਈ ਆਰਟੀਆਈ ਪਾ ਸਕਦੇ ਹੋ।',
        },
      },
    ],
    whatToDoNow: [
      {
        stepNumber: 1,
        action: {
          en: 'Use our AI Document Generator to prepare a structured formal complaint with all legal citations.',
          hi: 'सभी कानूनी धाराओं के साथ औपचारिक शिकायत पत्र बनाने के लिए हमारे एआई टूल का उपयोग करें।',
          pa: 'ਸਾਰੇ ਕਾਨੂੰਨੀ ਹਵਾਲਿਆਂ ਨਾਲ ਸ਼ਿਕਾਇਤ ਪੱਤਰ ਤਿਆਰ ਕਰਨ ਲਈ ਸਾਡੇ ਏਆਈ ਟੂਲ ਦੀ ਵਰਤੋਂ ਕਰੋ।',
        },
      },
      {
        stepNumber: 2,
        action: {
          en: 'Attach copies of medical reports, photographs, video files on pen drive/CD, or witness affidavits.',
          hi: 'मेडिकल रिपोर्ट, तस्वीरें, वीडियो फाइलों की प्रतियां या गवाहों के शपथपत्र संलग्न करें।',
          pa: 'ਮੈਡੀਕਲ ਰਿਪੋਰਟਾਂ, ਤਸਵੀਰਾਂ, ਵੀਡੀਓ ਜਾਂ ਗਵਾਹਾਂ ਦੇ ਬਿਆਨ ਨਾਲ ਨੱਥੀ ਕਰੋ।',
        },
      },
      {
        stepNumber: 3,
        action: {
          en: 'Send via Registered Post with Acknowledgment Due (RPAD) or submit in person with receiving stamp.',
          hi: 'रजिस्टर्ड डाक द्वारा भेजें या कार्यालय में व्यक्तिगत रूप से पावती मुहर के साथ जमा करें।',
          pa: 'ਰਜਿਸਟਰਡ ਡਾਕ ਰਾਹੀਂ ਭੇਜੋ ਜਾਂ ਦਫ਼ਤਰ ਵਿੱਚ ਰਸੀਦ ਲੈ ਕੇ ਜਮ੍ਹਾਂ ਕਰਵਾਓ।',
        },
      },
      {
        stepNumber: 4,
        action: {
          en: 'If no action within 30 days, file an RTI application seeking the Action Taken Report (ATR).',
          hi: 'यदि 30 दिनों में कार्रवाई न हो, तो कार्रवाई रिपोर्ट (ATR) मांगने के लिए आरटीआई दाखिल करें।',
          pa: 'ਜੇ 30 ਦਿਨਾਂ ਵਿੱਚ ਕਾਰਵਾਈ ਨਾ ਹੋਵੇ ਤਾਂ ਕਾਰਵਾਈ ਰਿਪੋਰਟ ਲਈ ਆਰਟੀਆਈ ਦਾਖਲ ਕਰੋ।',
        },
      },
    ],
    whatNotToDo: [
      {
        warning: {
          en: 'Do not submit anonymous or unsupported verbal complaints.',
          hi: 'बिना नाम-पते या बिना सबूत के केवल मौखिक शिकायत न करें।',
          pa: 'ਬਿਨਾਂ ਸਬੂਤਾਂ ਦੇ ਸਿਰਫ ਜ਼ੁਬਾਨੀ ਸ਼ਿਕਾਇਤ ਨਾ ਕਰੋ।',
        },
      },
      {
        warning: {
          en: 'Do not give original documents to the department; always submit attested photocopies.',
          hi: 'मूल दस्तावेज कभी विभाग को न सौंपें; हमेशा प्रमाणित फोटोकॉपी ही जमा करें।',
          pa: 'ਅਸਲ ਦਸਤਾਵੇਜ਼ ਕਦੇ ਨਾ ਦਿਓ; ਹਮੇਸ਼ਾ ਫੋਟੋਕਾਪੀ ਹੀ ਜਮ੍ਹਾਂ ਕਰਵਾਓ।',
        },
      },
    ],
    whereToComplain: [
      {
        authority: {
          en: 'District Superintendent of Police (SP) / Police Commissioner',
          hi: 'जिला पुलिस अधीक्षक (SP) / पुलिस आयुक्त',
          pa: 'ਜ਼ਿਲ੍ਹਾ ਪੁਲਿਸ ਸੁਪਰਡੈਂਟ (ਐਸ.ਪੀ.) / ਪੁਲਿਸ ਕਮਿਸ਼ਨਰ',
        },
        actionType: 'written',
      },
      {
        authority: {
          en: 'State Police Complaints Authority (PCA)',
          hi: 'राज्य पुलिस शिकायत प्राधिकरण (PCA)',
          pa: 'ਰਾਜ ਪੁਲਿਸ ਸ਼ਿਕਾਇਤ ਅਥਾਰਟੀ (PCA)',
        },
        actionType: 'written',
      },
      {
        authority: {
          en: 'National Human Rights Commission (NHRC)',
          hi: 'राष्ट्रीय मानवाधिकार आयोग (NHRC)',
          pa: 'ਰਾਸ਼ਟਰੀ ਮਨੁੱਖੀ ਅਧਿਕਾਰ ਕਮਿਸ਼ਨ (NHRC)',
        },
        actionType: 'portal',
        url: 'https://hrcnet.nic.in/HRCNet/public/',
      },
    ],
    sources: [
      {
        lawName: 'Supreme Court of India',
        sectionCode: 'Prakash Singh (2006)',
        text: {
          en: 'Prakash Singh v. Union of India — Mandate for Police Complaints Authorities.',
          hi: 'प्रकाश सिंह बनाम भारत संघ — पुलिस शिकायत प्राधिकरण का गठन।',
          pa: 'ਪ੍ਰਕਾਸ਼ ਸਿੰਘ ਕੇਸ — ਪੁਲਿਸ ਸ਼ਿਕਾਇਤ ਅਥਾਰਟੀ ਦਾ ਗਠਨ।',
        },
        url: 'https://main.sci.gov.in/judgments',
        isOfficialGovt: true,
      },
      {
        lawName: 'RTI Act 2005',
        sectionCode: 'Sections 6 & 7',
        text: {
          en: 'Right to Information Act 2005 — Securing action reports on police grievances.',
          hi: 'सूचना का अधिकार अधिनियम 2005 — पुलिस शिकायतों पर कार्रवाई रिपोर्ट प्राप्त करना।',
          pa: 'ਸੂਚਨਾ ਦਾ ਅਧਿਕਾਰ ਐਕਟ 2005 — ਸ਼ਿਕਾਇਤਾਂ ਤੇ ਕਾਰਵਾਈ ਰਿਪੋਰਟ ਲੈਣਾ।',
        },
        url: 'https://www.indiacode.nic.in',
        isOfficialGovt: true,
      },
    ],
  },
  {
    id: 'property-seized',
    iconName: 'Smartphone',
    category: 'property',
    title: {
      en: 'My phone/vehicle/property was seized — how to get it back',
      hi: 'मेरा फोन/गाड़ी/सामान जब्त कर लिया गया — इसे वापस कैसे पाएं',
      pa: 'ਮੇਰਾ ਫੋਨ/ਗੱਡੀ/ਸਾਮਾਨ ਜ਼ਬਤ ਕਰ ਲਿਆ ਗਿਆ — ਇਸਨੂੰ ਵਾਪਸ ਕਿਵੇਂ ਲਈਏ',
    },
    summary: {
      en: 'Superdari application in court for release of seized phone, laptop, car, or cash.',
      hi: 'जब्त फोन, लैपटॉप, कार या नकदी छुड़ाने के लिए अदालत में सुपुर्दगी (Superdari) आवेदन।',
      pa: 'ਜ਼ਬਤ ਫੋਨ, ਲੈਪਟਾਪ, ਕਾਰ ਜਾਂ ਪੈਸੇ ਛੁਡਵਾਉਣ ਲਈ ਅਦਾਲਤ ਵਿੱਚ ਸੁਪੁਰਦਾਰੀ ਅਰਜ਼ੀ।',
    },
    tags: ['property', 'seized', 'phone', 'vehicle', 'car', 'bike', 'superdari', 'release', 'magistrate', '497 bnss'],
    yourRights: [
      {
        text: {
          en: 'Right to apply for interim release of seized property before the Magistrate.',
          hi: 'मजिस्ट्रेट के समक्ष जब्त संपत्ति की अंतरिम रिहाई (सुपुर्दगी) के लिए आवेदन का अधिकार।',
          pa: 'ਜ਼ਬਤ ਸਾਮਾਨ ਦੀ ਅੰਤਰਿਮ ਰਿਹਾਈ (ਸੁਪੁਰਦਾਰੀ) ਲਈ ਮੈਜਿਸਟਰੇਟ ਕੋਲ ਅਰਜ਼ੀ ਦੇਣ ਦਾ ਹੱਕ।',
        },
        citation: 'Section 497 & 503, BNSS 2023',
        simpleExplanation: {
          en: 'The Magistrate has judicial power to order the police to release your seized vehicle, phone, or items on superdari bonds pending trial.',
          hi: 'मजिस्ट्रेट के पास मुकदमा चलने के दौरान जब्त वाहन या सामान को सुपुर्दगी बांड पर छोड़ने का कानूनी अधिकार है।',
          pa: 'ਮੈਜਿਸਟਰੇਟ ਕੋਲ ਮੁਕੱਦਮੇ ਦੌਰਾਨ ਜ਼ਬਤ ਵਾਹਨ ਜਾਂ ਸਾਮਾਨ ਨੂੰ ਸੁਪੁਰਦਾਰੀ ਤੇ ਛੱਡਣ ਦਾ ਕਾਨੂੰਨੀ ਅਧਿਕਾਰ ਹੈ।',
        },
      },
      {
        text: {
          en: 'Police cannot retain property indefinitely without production before Court.',
          hi: 'पुलिस अदालत में पेश किए बिना अनिश्चित काल तक सामान अपने पास नहीं रख सकती।',
          pa: 'ਪੁਲਿਸ ਅਦਾਲਤ ਵਿੱਚ ਪੇਸ਼ ਕੀਤੇ ਬਿਨਾਂ ਬੇਮਿਆਦੀ ਸਮੇਂ ਲਈ ਸਾਮਾਨ ਨਹੀਂ ਰੱਖ ਸਕਦੀ।',
        },
        citation: 'Section 503, BNSS 2023 & Sunderbhai Ambalal Desai v. State of Gujarat (2002)',
        simpleExplanation: {
          en: 'Supreme Court held that vehicles and articles must not remain in police stations decaying; they should be returned on bond.',
          hi: 'सुप्रीम कोर्ट: वाहनों और सामान को थानों में सड़ने के लिए नहीं छोड़ा जाना चाहिए; बांड पर तत्काल वापस किया जाना चाहिए।',
          pa: 'ਸੁਪਰੀਮ ਕੋਰਟ: ਵਾਹਨਾਂ ਅਤੇ ਸਾਮਾਨ ਨੂੰ ਥਾਣਿਆਂ ਚ ਖਰਾਬ ਨਹੀਂ ਹੋਣ ਦੇਣਾ ਚਾਹੀਦਾ; ਬਾਂਡ ਤੇ ਤੁਰੰਤ ਵਾਪਸ ਕੀਤਾ ਜਾਣਾ ਚਾਹੀਦਾ ਹੈ।',
        },
      },
      {
        text: {
          en: 'Right to verified inventory and prevention of digital tampering.',
          hi: 'सत्यापित जब्ती सूची और डिजिटल छेड़छाड़ से सुरक्षा का अधिकार।',
          pa: 'ਤਸਦੀਕਸ਼ੁਦਾ ਜ਼ਬਤੀ ਸੂਚੀ ਅਤੇ ਡਿਜੀਟਲ ਛੇੜਛਾੜ ਤੋਂ ਬਚਾਅ ਦਾ ਹੱਕ।',
        },
        citation: 'Section 105, BNSS 2023',
        simpleExplanation: {
          en: 'Hash values and proper physical seals must be maintained on electronic storage devices.',
          hi: 'इलेक्ट्रॉनिक उपकरणों पर उचित सील और हैश वैल्यू सुरक्षित रखी जानी चाहिए ताकि डेटा से छेड़छाड़ न हो।',
          pa: 'ਇਲੈਕਟ੍ਰਾਨਿਕ ਉਪਕਰਣਾਂ ਤੇ ਸਹੀ ਸੀਲ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ ਤਾਂ ਜੋ ਡਾਟਾ ਨਾਲ ਛੇੜਛਾੜ ਨਾ ਹੋਵੇ।',
        },
      },
    ],
    whatToDoNow: [
      {
        stepNumber: 1,
        action: {
          en: 'Collect the Seizure Memo (Panchnama) specifying FIR number, police station, and exact item serial number.',
          hi: 'जब्ती मेमो प्राप्त करें जिसमें एफआईआर नंबर, थाना और सामान का सीरियल नंबर दर्ज हो।',
          pa: 'ਜ਼ਬਤੀ ਮੈਮੋ ਲਵੋ ਜਿਸ ਵਿੱਚ ਐਫਆਈਆਰ ਨੰਬਰ ਅਤੇ ਸੀਰੀਅਲ ਨੰਬਰ ਦਰਜ ਹੋਵੇ।',
        },
      },
      {
        stepNumber: 2,
        action: {
          en: 'Gather ownership proof (Registration Certificate (RC), purchase invoice, phone box/IMEI bill).',
          hi: 'स्वामित्व के प्रमाण एकत्र करें (आरसी, खरीद बिल, फोन बॉक्स/आईएमईआई रसीद)।',
          pa: 'ਮਾਲਕੀ ਦੇ ਸਬੂਤ ਇਕੱਠੇ ਕਰੋ (ਆਰਸੀ, ਖਰੀਦ ਬਿੱਲ, ਫੋਨ ਦਾ ਬਿੱਲ)।',
        },
      },
      {
        stepNumber: 3,
        action: {
          en: 'File an application for release on Superdari under Section 497/503 BNSS before the Jurisdictional Magistrate.',
          hi: 'संबंधित मजिस्ट्रेट के समक्ष धारा 497/503 बीएनएसएस के तहत सुपुर्दगी (Superdari) आवेदन दाखिल करें।',
          pa: 'ਸੰਬੰਧਿਤ ਮੈਜਿਸਟਰੇਟ ਕੋਲ ਧਾਰਾ 497/503 ਤਹਿਤ ਸੁਪੁਰਦਾਰੀ ਅਰਜ਼ੀ ਦਾਖਲ ਕਰੋ।',
        },
      },
      {
        stepNumber: 4,
        action: {
          en: 'Contact NALSA at 15100 if you need free legal aid to draft and file the court application.',
          hi: 'अदालती आवेदन तैयार करने के लिए मुफ्त कानूनी सहायता हेतु 15100 पर नालसा से संपर्क करें।',
          pa: 'ਅਦਾਲਤੀ ਅਰਜ਼ੀ ਲਈ ਮੁਫਤ ਕਾਨੂੰਨੀ ਸਹਾਇਤਾ ਵਾਸਤੇ 15100 ਤੇ ਨਾਲਸਾ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।',
        },
      },
    ],
    whatNotToDo: [
      {
        warning: {
          en: 'Do not attempt to take back seized property forcibly from a police station.',
          hi: 'थाने से जबरन जब्त संपत्ति वापस लेने की कोशिश न करें।',
          pa: 'ਥਾਣੇ ਵਿੱਚੋਂ ਜ਼ਬਰਦਸਤੀ ਸਾਮਾਨ ਵਾਪਸ ਲੈਣ ਦੀ ਕੋਸ਼ਿਸ਼ ਨਾ ਕਰੋ।',
        },
        consequence: {
          en: 'Attracts criminal charges for theft/obstruction under BNS.',
          hi: 'बीएनएस के तहत चोरी या सरकारी कार्य में बाधा का गंभीर मुकदमा दर्ज हो सकता है।',
          pa: 'ਚੋਰੀ ਜਾਂ ਸਰਕਾਰੀ ਕੰਮ ਵਿੱਚ ਰੁਕਾਵਟ ਦਾ ਕੇਸ ਬਣ ਸਕਦਾ ਹੈ।',
        },
      },
      {
        warning: {
          en: 'Do not misplace original purchase bills or seizure memos.',
          hi: 'मूल खरीद रसीदें या जब्ती मेमो को न खोएं।',
          pa: 'ਅਸਲ ਖਰੀਦ ਬਿੱਲ ਜਾਂ ਜ਼ਬਤੀ ਮੈਮੋ ਗੁਆਚਣ ਨਾ ਦਿਓ।',
        },
      },
    ],
    whereToComplain: [
      {
        authority: {
          en: 'Jurisdictional Judicial Magistrate Court',
          hi: 'संबंधित न्यायिक मजिस्ट्रेट न्यायालय',
          pa: 'ਸੰਬੰਧਿਤ ਨਿਆਂਇਕ ਮੈਜਿਸਟਰੇਟ ਅਦਾਲਤ',
        },
        actionType: 'court',
        details: {
          en: 'File Superdari application citing Sunderbhai Ambalal Desai ruling.',
          hi: 'सुंदरभाई अंबालाल देसाई निर्णय का हवाला देकर सुपुर्दगी अर्जी दाखिल करें।',
          pa: 'ਸੁੰਦਰਭਾਈ ਅੰਬਾਲਾਲ ਕੇਸ ਦਾ ਹਵਾਲਾ ਦੇ ਕੇ ਸੁਪੁਰਦਾਰੀ ਅਰਜ਼ੀ ਦਾਖਲ ਕਰੋ।',
        },
      },
      {
        authority: {
          en: 'NALSA Free Legal Aid Helpline',
          hi: 'नालसा निःशुल्क कानूनी सहायता',
          pa: 'ਨਾਲਸਾ ਮੁਫਤ ਕਾਨੂੰਨੀ ਸਹਾਇਤਾ',
        },
        actionType: 'call',
        value: '15100',
      },
    ],
    sources: [
      {
        lawName: 'BNSS 2023',
        sectionCode: 'Sections 497, 498, 503',
        text: {
          en: 'BNSS 2023 — Custody and disposal of seized property pending inquiry and trial.',
          hi: 'बीएनएसएस 2023 — जांच और मुकदमे के दौरान जब्त संपत्ति की हिरासत और निपटान।',
          pa: 'ਬੀਐਨਐਸਐਸ 2023 — ਮੁਕੱਦਮੇ ਦੌਰਾਨ ਜ਼ਬਤ ਸਾਮਾਨ ਦੀ ਕਸਟਡੀ ਅਤੇ ਵਾਪਸੀ।',
        },
        url: 'https://www.indiacode.nic.in',
        isOfficialGovt: true,
      },
      {
        lawName: 'Supreme Court of India',
        sectionCode: 'Sunderbhai Ambalal Desai (2002) 10 SCC 283',
        text: {
          en: 'Supreme Court guidelines on prompt release of seized vehicles and valuable articles.',
          hi: 'जब्त वाहनों और कीमती सामान को तुरंत वापस करने पर सुप्रीम कोर्ट के दिशानिर्देश।',
          pa: 'ਜ਼ਬਤ ਵਾਹਨਾਂ ਅਤੇ ਕੀਮਤੀ ਸਾਮਾਨ ਨੂੰ ਤੁਰੰਤ ਵਾਪਸ ਕਰਨ ਸੰਬੰਧੀ ਸੁਪਰੀਮ ਕੋਰਟ ਦੇ ਨਿਰਦੇਸ਼।',
        },
        url: 'https://main.sci.gov.in/judgments',
        isOfficialGovt: true,
      },
    ],
  },
];

export const UI_TRANSLATIONS = {
  en: {
    appName: 'Raksha Setu',
    appSubname: 'रक्षा सेतु',
    tagline: 'Your rights, in your pocket — before you need them',
    subtagline: 'Instant legal guidance for police encounters in India under BNSS 2023',
    availableOffline: 'Available Offline',
    emergencyNotice: 'Emergency Panic Bar',
    quickCall: 'Emergency Call',
    shareLocation: 'Share Live GPS',
    locationCopied: 'Location copied to clipboard!',
    recordingNotice: 'I Am Recording',
    searchPlaceholder: 'Search situation (e.g. bribe, bag search, night arrest, FIR refused)...',
    clearSearch: 'Clear',
    allSituations: 'All 10 Situations',
    whatHappening: 'What is happening right now?',
    tapToUnderstand: 'Tap any card for immediate 30-second legal guidance',
    yourRights: 'Your Legal Rights',
    whatToDoNow: 'What To Do Right Now',
    whatNotToDo: 'What NOT To Do',
    whereToComplain: 'Where To Complain & Escalate',
    verifiedSources: 'Verified Statutory Sources',
    explainSimply: 'Explain simply',
    hideSimple: 'Standard view',
    draftDocument: 'Draft Formal Complaint Letter',
    cheatSheetBtn: 'Rights Cheat Sheet',
    sourcesDisclaimerBtn: 'Sources & Disclaimer',
    step: 'Step',
    warning: 'Warning',
    callNow: 'Call Now',
    openPortal: 'Open Portal',
    copyText: 'Copy Text',
    copied: 'Copied!',
    share: 'Share',
    downloadTxt: 'Download Text',
    printDoc: 'Print / Save PDF',
    regenerateAI: 'Draft with AI Assistant',
    disclaimerTitle: 'Official Legal Disclaimer',
    disclaimerBody: 'Raksha Setu provides general legal information for citizen awareness under the Bharatiya Nagarik Suraksha Sanhita (BNSS) 2023, Constitution of India, and Supreme Court rulings. It is not a substitute for formal legal counsel from an advocate. Laws, state amendments, and judicial interpretations can evolve — verify with official portals before relying on this in court.',
    largeText: 'Large Text',
    darkTheme: 'Dark',
    lightTheme: 'Light',
    languageName: 'English',
    docGenHeading: 'AI Document Assistant',
    docGenSubheading: 'Draft a ready-to-submit formal complaint letter citing BNSS 2023 & Supreme Court rulings',
    formComplainantName: 'Your Full Name',
    formPhone: 'Mobile Number',
    formAddress: 'Address / City',
    formPoliceStation: 'Police Station Name',
    formDistrictState: 'District & State',
    formDate: 'Date of Incident',
    formOfficer: 'Officer Name / Rank / Badge (if known)',
    formSummary: 'Summary of Incident & What Happened',
    formEvidence: 'Evidence Available (Photos / Video / Witness / MLC)',
    formRelief: 'Relief / Action Demanded',
    generateButton: 'Generate Formal Legal Letter',
    generating: 'Drafting legal letter with verified citations...',
    backToSituations: 'Back to Situations',
    top5Rights: 'Top 5 Golden Rights Cheat Sheet',
  },
  hi: {
    appName: 'रक्षा सेतु',
    appSubname: 'Raksha Setu',
    tagline: 'आपके अधिकार, आपकी जेब में — ज़रूरत पड़ने से पहले',
    subtagline: 'बीएनएसएस 2023 और संविधान के तहत पुलिस कार्रवाई में त्वरित कानूनी मार्गदर्शन',
    availableOffline: 'ऑफ़लाइन उपलब्ध',
    emergencyNotice: 'इमरजेंसी पैनिक बार',
    quickCall: 'आपातकालीन कॉल',
    shareLocation: 'लाइव लोकेशन भेजें',
    locationCopied: 'लोकेशन क्लिपबोर्ड पर कॉपी हो गई!',
    recordingNotice: 'मैं रिकॉर्ड कर रहा हूँ',
    searchPlaceholder: 'स्थिति खोजें (उदा. रिश्वत, तलाशी, रात में गिरफ्तारी, एफआईआर मना)...',
    clearSearch: 'हटाएं',
    allSituations: 'सभी 10 स्थितियां',
    whatHappening: 'अभी आपके साथ क्या हो रहा है?',
    tapToUnderstand: '30 सेकंड में सटीक अधिकार और कार्रवाई जानने के लिए टैप करें',
    yourRights: 'आपके कानूनी अधिकार',
    whatToDoNow: 'अभी क्या करें (क्रमवार)',
    whatNotToDo: 'क्या बिल्कुल न करें',
    whereToComplain: 'कहाँ शिकायत और अपील करें',
    verifiedSources: 'सत्यापित कानूनी स्रोत',
    explainSimply: 'सरल भाषा में समझें',
    hideSimple: 'मानक देखें',
    draftDocument: 'औपचारिक शिकायत पत्र तैयार करें',
    cheatSheetBtn: 'अधिकार चीट शीट',
    sourcesDisclaimerBtn: 'स्रोत और अस्वीकरण',
    step: 'कदम',
    warning: 'चेतावनी',
    callNow: 'कॉल करें',
    openPortal: 'पोर्टल खोलें',
    copyText: 'कॉपी करें',
    copied: 'कॉपी हो गया!',
    share: 'शेयर करें',
    downloadTxt: 'टेक्स्ट डाउनलोड करें',
    printDoc: 'प्रिंट / पीडीएफ सेव करें',
    regenerateAI: 'एआई द्वारा पत्र बनाएं',
    disclaimerTitle: 'आधिकारिक कानूनी अस्वीकरण',
    disclaimerBody: 'रक्षा सेतु भारतीय नागरिक सुरक्षा संहिता (BNSS) 2023, भारतीय संविधान और सर्वोच्च न्यायालय के निर्णयों के तहत आम नागरिकों में कानूनी जागरूकता के लिए सामान्य जानकारी प्रदान करता है। यह किसी वकील की पेशेवर सलाह का विकल्प नहीं है। अदालत में उपयोग से पहले आधिकारिक स्रोतों से पुष्टि करें।',
    largeText: 'बड़ा टेक्स्ट',
    darkTheme: 'डार्क',
    lightTheme: 'लाइट',
    languageName: 'हिन्दी',
    docGenHeading: 'एआई कानूनी दस्तावेज सहायक',
    docGenSubheading: 'बीएनएसएस 2023 और सुप्रीम कोर्ट निर्णयों के उद्धरणों के साथ औपचारिक शिकायती पत्र तैयार करें',
    formComplainantName: 'आपका पूरा नाम',
    formPhone: 'मोबाइल नंबर',
    formAddress: 'पता / शहर',
    formPoliceStation: 'थाने का नाम',
    formDistrictState: 'जिला और राज्य',
    formDate: 'घटना की तारीख',
    formOfficer: 'अधिकारी का नाम / पद / बैज (यदि ज्ञात हो)',
    formSummary: 'घटना का संक्षिप्त विवरण',
    formEvidence: 'उपलब्ध साक्ष्य (फोटो / वीडियो / गवाह / मेडिकल)',
    formRelief: 'मांगी गई कार्रवाई / राहत',
    generateButton: 'औपचारिक कानूनी पत्र तैयार करें',
    generating: 'सत्यापित धाराओं के साथ पत्र तैयार हो रहा है...',
    backToSituations: 'वापस स्थितियों पर जाएं',
    top5Rights: 'शीर्ष 5 अधिकार चीट शीट',
  },
  pa: {
    appName: 'ਰਕਸ਼ਾ ਸੇਤੂ',
    appSubname: 'Raksha Setu',
    tagline: 'ਤੁਹਾਡੇ ਅਧਿਕਾਰ, ਤੁਹਾਡੀ ਜੇਬ ਵਿੱਚ — ਲੋੜ ਪੈਣ ਤੋਂ ਪਹਿਲਾਂ',
    subtagline: 'ਬੀਐਨਐਸਐਸ 2023 ਅਤੇ ਸੰਵਿਧਾਨ ਤਹਿਤ ਪੁਲਿਸ ਕਾਰਵਾਈ ਵੇਲੇ ਤੁਰੰਤ ਕਾਨੂੰਨੀ ਮਦਦ',
    availableOffline: 'ਆਫਲਾਈਨ ਉਪਲਬਧ',
    emergencyNotice: 'ਐਮਰਜੈਂਸੀ ਪੈਨਿਕ ਬਾਰ',
    quickCall: 'ਐਮਰਜੈਂਸੀ ਕਾਲ',
    shareLocation: 'ਲਾਈਵ ਲੋਕੇਸ਼ਨ ਭੇਜੋ',
    locationCopied: 'ਲੋਕੇਸ਼ਨ ਕਾਪੀ ਹੋ ਗਈ ਹੈ!',
    recordingNotice: 'ਮੈਂ ਰਿਕਾਰਡ ਕਰ ਰਿਹਾ ਹਾਂ',
    searchPlaceholder: 'ਖੋਜ ਕਰੋ (ਜਿਵੇਂ ਕਿ ਰਿਸ਼ਵਤ, ਤਲਾਸ਼ੀ, ਰਾਤ ਦੀ ਗ੍ਰਿਫਤਾਰੀ, ਐਫਆਈਆਰ ਇਨਕਾਰ)...',
    clearSearch: 'ਸਾਫ ਕਰੋ',
    allSituations: 'ਸਾਰੀਆਂ 10 ਸਥਿਤੀਆਂ',
    whatHappening: 'ਹੁਣੇ ਤੁਹਾਡੇ ਨਾਲ ਕੀ ਹੋ ਰਿਹਾ ਹੈ?',
    tapToUnderstand: '30 ਸਕਿੰਟਾਂ ਵਿੱਚ ਕਾਨੂੰਨੀ ਹੱਕ ਜਾਣਨ ਲਈ ਕਿਸੇ ਕਾਰਡ ਤੇ ਟੈਪ ਕਰੋ',
    yourRights: 'ਤੁਹਾਡੇ ਕਾਨੂੰਨੀ ਅਧਿਕਾਰ',
    whatToDoNow: 'ਹੁਣੇ ਕੀ ਕਰਨਾ ਹੈ (ਕਦਮਵਾਰ)',
    whatNotToDo: 'ਕੀ ਬਿਲਕੁਲ ਨਹੀਂ ਕਰਨਾ',
    whereToComplain: 'ਸ਼ਿਕਾਇਤ ਕਿੱਥੇ ਕਰਨੀ ਹੈ',
    verifiedSources: 'ਪ੍ਰਮਾਣਿਤ ਕਾਨੂੰਨੀ ਸਰੋਤ',
    explainSimply: 'ਸੌਖੀ ਭਾਸ਼ਾ ਵਿੱਚ ਸਮਝੋ',
    hideSimple: 'ਆਮ ਵੇਖੋ',
    draftDocument: 'ਰਸਮੀ ਸ਼ਿਕਾਇਤ ਪੱਤਰ ਤਿਆਰ ਕਰੋ',
    cheatSheetBtn: 'ਅਧਿਕਾਰ ਚੀਟ ਸ਼ੀਟ',
    sourcesDisclaimerBtn: 'ਸਰੋਤ ਅਤੇ ਬੇਦਾਅਵਾ',
    step: 'ਕਦਮ',
    warning: 'ਚਿਤਾਵਨੀ',
    callNow: 'ਕਾਲ ਕਰੋ',
    openPortal: 'ਪੋਰਟਲ ਖੋਲ੍ਹੋ',
    copyText: 'ਕਾਪੀ ਕਰੋ',
    copied: 'ਕਾਪੀ ਹੋ ਗਿਆ!',
    share: 'ਸਾਂਝਾ ਕਰੋ',
    downloadTxt: 'ਟੈਕਸਟ ਡਾਊਨਲੋਡ ਕਰੋ',
    printDoc: 'ਪ੍ਰਿੰਟ / ਪੀਡੀਐਫ ਸੇਵ ਕਰੋ',
    regenerateAI: 'ਏਆਈ ਨਾਲ ਪੱਤਰ ਬਣਾਓ',
    disclaimerTitle: 'ਅਧਿਕਾਰਤ ਕਾਨੂੰਨੀ ਬੇਦਾਅਵਾ',
    disclaimerBody: 'ਰਕਸ਼ਾ ਸੇਤੂ ਭਾਰਤੀ ਨਾਗਰਿਕ ਸੁਰੱਖਿਆ ਸੰਹਿਤਾ 2023 ਅਤੇ ਸੰਵਿਧਾਨ ਤਹਿਤ ਕਾਨੂੰਨੀ ਜਾਗਰੂਕਤਾ ਲਈ ਆਮ ਜਾਣਕਾਰੀ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ। ਇਹ ਕਿਸੇ ਵਕੀਲ ਦੀ ਕਾਨੂੰਨੀ ਸਲਾਹ ਦਾ ਬਦਲ ਨਹੀਂ ਹੈ। ਅਦਾਲਤ ਵਿੱਚ ਵਰਤਣ ਤੋਂ ਪਹਿਲਾਂ ਸਰਕਾਰੀ ਸਰੋਤਾਂ ਤੋਂ ਪੁਸ਼ਟੀ ਕਰੋ।',
    largeText: 'ਵੱਡਾ ਟੈਕਸਟ',
    darkTheme: 'ਡਾਰਕ',
    lightTheme: 'ਲਾਈਟ',
    languageName: 'ਪੰਜਾਬੀ',
    docGenHeading: 'ਏਆਈ ਦਸਤਾਵੇਜ਼ ਸਹਾਇਕ',
    docGenSubheading: 'ਬੀਐਨਐਸਐਸ 2023 ਅਤੇ ਸੁਪਰੀਮ ਕੋਰਟ ਦੇ ਹਵਾਲਿਆਂ ਨਾਲ ਰਸਮੀ ਸ਼ਿਕਾਇਤ ਪੱਤਰ ਤਿਆਰ ਕਰੋ',
    formComplainantName: 'ਤੁਹਾਡਾ ਪੂਰਾ ਨਾਮ',
    formPhone: 'ਮੋਬਾਈਲ ਨੰਬਰ',
    formAddress: 'ਪਤਾ / ਸ਼ਹਿਰ',
    formPoliceStation: 'ਥਾਣੇ ਦਾ ਨਾਮ',
    formDistrictState: 'ਜ਼ਿਲ੍ਹਾ ਅਤੇ ਰਾਜ',
    formDate: 'ਘਟਨਾ ਦੀ ਮਿਤੀ',
    formOfficer: 'ਅਧਿਕਾਰੀ ਦਾ ਨਾਮ / ਬੈਜ ਨੰਬਰ (ਜੇ ਪਤਾ ਹੋਵੇ)',
    formSummary: 'ਘਟਨਾ ਦਾ ਸੰਖੇਪ ਵੇਰਵਾ',
    formEvidence: 'ਉਪਲਬਧ ਸਬੂਤ (ਫੋਟੋ / ਵੀਡੀਓ / ਗਵਾਹ / ਮੈਡੀਕਲ)',
    formRelief: 'ਮੰਗੀ ਗਈ ਕਾਰਵਾਈ',
    generateButton: 'ਕਾਨੂੰਨੀ ਪੱਤਰ ਤਿਆਰ ਕਰੋ',
    generating: 'ਕਾਨੂੰਨੀ ਧਾਰਾਵਾਂ ਨਾਲ ਪੱਤਰ ਤਿਆਰ ਹੋ ਰਿਹਾ ਹੈ...',
    backToSituations: 'ਸਥਿਤੀਆਂ ਤੇ ਵਾਪਸ ਜਾਓ',
    top5Rights: 'ਮੁੱਖ 5 ਅਧਿਕਾਰ ਚੀਟ ਸ਼ੀਟ',
  },
};
