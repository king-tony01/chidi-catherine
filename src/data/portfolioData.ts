export interface NavSubItem {
  label: string;
  href: string;
  badge?: string;
  description?: string;
}

export interface NavGroup {
  category: string;
  href: string;
  description?: string;
  items: NavSubItem[];
}

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
  children?: NavItem[];
}

// Main navbar items
export const primaryNavItems = [
  { label: "Home", href: "/" },
  { label: "Awards & Honours", href: "/awards" },
  { label: "Forward Planning", href: "/forward-planning" },
  { label: "Artifacts & Resume", href: "/artifacts" },
];

// The "More" dropdown structure containing the rest of the sections and sub-items
export const moreNavGroups: NavGroup[] = [
  {
    category: "Philosophy & Identity",
    href: "/philosophy",
    description: "Core nursing values, BAVs, and professional identity",
    items: [
      { label: "My Nursing Philosophy", href: "/philosophy#core-philosophy" },
      { label: "Beliefs, Assumptions & Values (BAVs)", href: "/philosophy#bavs" },
      { label: "Personal History & Nursing Evolution", href: "/philosophy#personal-history" },
      { label: "Metaparadigms of Nursing", href: "/philosophy#metaparadigms" },
      { label: "Philosophy & Future Practice", href: "/philosophy#future-practice" },
    ],
  },
  {
    category: "Clinical Practice",
    href: "/clinical-practice",
    description: "Practice progression, client populations, and placement summaries",
    items: [
      { label: "Clinical Overview & Progression", href: "/clinical-practice#overview" },
      { label: "Practice Settings & Populations", href: "/clinical-practice#populations" },
    ],
  },
  {
    category: "Competencies & Standards",
    href: "/competencies-standards",
    description: "Skills tracking list and CNO Mental Health Standards integration",
    items: [
      { label: "Clinical Skills Tracking Record", href: "/competencies-standards#skills-log" },
      { label: "CNO Mental Health Standards", href: "/competencies-standards#mental-health-context" },
      { label: "Reflective Synthesis", href: "/competencies-standards#reflective-synthesis" },
    ],
  },
  {
    category: "Evaluations & Growth",
    href: "/evaluations-growth",
    description: "Clinical evaluation reflections, faculty feedback, and growth action plans",
    items: [
      { label: "Faculty & Preceptor Feedback", href: "/evaluations-growth" },
      { label: "Strengths & Development Areas", href: "/evaluations-growth" },
      { label: "Proactive Action Plans", href: "/evaluations-growth" },
    ],
  },
];

// Full navigation data for footer and sitemaps
export const navigationData: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Philosophy & Identity",
    href: "/philosophy",
    children: [
      { label: "My Nursing Philosophy", href: "/philosophy#core-philosophy" },
      { label: "Beliefs, Assumptions & Values (BAVs)", href: "/philosophy#bavs" },
      { label: "Personal History & Nursing Evolution", href: "/philosophy#personal-history" },
      { label: "Metaparadigms of Nursing", href: "/philosophy#metaparadigms" },
      { label: "Philosophy & Future Practice", href: "/philosophy#future-practice" },
    ],
  },
  {
    label: "Clinical Practice",
    href: "/clinical-practice",
    children: [
      { label: "Clinical Overview & Progression", href: "/clinical-practice#overview" },
      { label: "Practice Settings & Populations", href: "/clinical-practice#populations" },
    ],
  },
  {
    label: "Competencies & Standards",
    href: "/competencies-standards",
    children: [
      { label: "Clinical Skills Tracking Record", href: "/competencies-standards#skills-log" },
      { label: "CNO Mental Health Standards", href: "/competencies-standards#mental-health-context" },
    ],
  },
  { label: "Awards & Honours", href: "/awards" },
  { label: "Evaluations & Growth", href: "/evaluations-growth" },
  { label: "Forward Planning", href: "/forward-planning" },
  { label: "Artifacts & Resume", href: "/artifacts" },
];

export const nurseProfile = {
  name: "Chidi Catherine Obi-Hezekiah",
  credentials: "RPN, Honours BSN Candidate '27",
  roleTitle: "Registered Practical Nurse (RPN) | Honours BSN Candidate",
  email: "cobi-hezekiah@myseneca.ca",
  institution: "Seneca Polytechnic",
  program: "Honours Bachelor of Science in Nursing (BSN)",
  semester: "Year 2 / BSN Candidate",
  expectedGraduation: "2027",
  cnoStatus: "Registered Practical Nurse (RPN) licensed with the College of Nurses of Ontario (CNO) since 2021",
  clinicalExperienceYears: "4+ years licensed practical nursing experience across acute care, medical-surgical, mental health, long-term care, and retirement home environments",
  academicHonour: "Seneca Polytechnic President's Honour List (Winter 2026)",
  origin: "Nigeria, West Africa",
  previousProfession: "Educator / Schoolteacher",
  nursingEducationStart: "September 2019",
  summaryHeadline: "Turning compassionate dedication, pedagogical empathy, and 4+ years of licensed acute bedside acumen into safe, patient-centred care.",
  
  currentPlacement: {
    hospital: "Mackenzie Health Hospital",
    unit: "3 Aqua (3C)",
    focus: "Complex Medical-Surgical, Stroke, Dysphagia, Enteral G-Tube Nutrition, Aseptic Foley Catheter Care, Falls Mitigation",
    ehr: "Epic",
  },
  previousPlacement: {
    hospital: "Brampton Civic Hospital (William Osler Health System)",
    unit: "4th Floor General Medicine",
    focus: "Acute & Chronic Medical Inpatient Care, Wound Management, Medication Administration, Interprofessional Rounds",
    ehr: "Meditech",
  },
  certifications: [
    "College of Nurses of Ontario (CNO) — Licensed RPN (2021)",
    "Basic Life Support (BLS Provider)",
    "Standard First Aid",
    "WHMIS Certification",
    "Crisis Prevention Intervention (CPI) / NVCI",
    "Gentle Persuasive Approaches (GPA) in Dementia Care",
  ],
  ehrSystems: ["Epic (Mackenzie Health)", "Meditech (Brampton Civic)", "PointClickCare (LTC / Retirement)"],
  memberships: [
    "College of Nurses of Ontario (CNO) – 2021",
    "Registered Practical Nurses Association of Ontario (WeRPN)",
  ],

  coreValues: [
    {
      title: "Compassion & Dignity",
      description: "Treating every client as a whole, valued individual with unwavering empathy, respect, and unconditional positive regard regardless of diagnosis, background, or circumstance.",
      icon: "heart",
    },
    {
      title: "Patient-Centred Care",
      description: "Partnering collaboratively with patients and their families to honour their unique autonomy, cultural values, preferences, and holistic health needs.",
      icon: "user-check",
    },
    {
      title: "Cultural Humility & Advocacy",
      description: "Championing equitable, culturally responsive care and serving as a proactive advocate for individuals from underserved and linguistically diverse communities.",
      icon: "shield",
    },
    {
      title: "Scientific Rigour & Lifelong Learning",
      description: "Embracing nursing as both an art of human connection and a disciplined science, continuously grounding clinical judgment in evidence-based best practices.",
      icon: "book-open",
    },
    {
      title: "Interprofessional Collaboration",
      description: "Communicating transparently and working synergistically across multidisciplinary healthcare teams to foster a culture of safety, trust, and excellence.",
      icon: "users",
    },
    {
      title: "Ethical Accountability",
      description: "Upholding the rigorous ethical, legal, and professional standards outlined by the College of Nurses of Ontario (CNO) through continual self-reflection.",
      icon: "award",
    },
  ],

  stats: [
    { label: "CNO Licensure", value: "RPN (2021)", detail: "4+ Years Clinical Practice" },
    { label: "Degree Program", value: "Honours BSN", detail: "Seneca Polytechnic" },
    { label: "Academic Distinction", value: "President's List", detail: "Winter 2026 Seneca Honour List" },
    { label: "Target Completion", value: "2027", detail: "Consolidation & RN Licensure" },
  ],
};

export const academicHonourAward = {
  award: "President's Honour List",
  term: "Winter 2026",
  institution: "Seneca Polytechnic, School of Nursing",
  issuer: "David Agnew, President, Seneca Polytechnic",
  program: "Honours Bachelor of Science in Nursing (BSN)",
  credential: "Academic Distinction & Dean's/President's List",
  criteria: "Awarded to full-time students who attain a Grade Point Average of 3.8 or higher, demonstrating exemplary academic scholarship, disciplined clinical inquiry, and theoretical mastery.",
  summary:
    "Official institutional academic distinction awarded by Seneca Polytechnic President David Agnew in recognition of superior academic scholarship, disciplined clinical inquiry, and nursing excellence achieved in the Honours Bachelor of Science in Nursing program for the Winter 2026 academic term.",
  highlights: [
    "Conferred directly by Seneca Polytechnic President David Agnew",
    "Recognizes top-tier academic scholarship and theoretical mastery in nursing science",
    "Reflects dedication to evidence-based practice, pharmacological precision, and empirical rigor",
    "Maintained while concurrently balancing active acute hospital clinical placements and frontline RPN practice",
  ],
};

export const verifiedArtifacts = [
  {
    id: "hemodialysis-esrd-presentation",
    title: "Clinical Presentation: Hemodialysis Care to a Patient With End-Stage Renal Disease (ESRD)",
    category: "Nephrology & Acute Medicine Case Presentation",
    date: "2026",
    credential: "11-Slide Clinical Inpatient Analysis & Laboratory Synthesis",
    issuer: "General 4 Medicine & Seneca Polytechnic Nursing Practicum",
    summary:
      "Comprehensive 11-slide clinical presentation analyzing the extracorporeal hemodialysis circuit, countercurrent dialyzer mechanics, and nursing management of a 76-year-old female (Mrs. D.K.) admitted with ESRD, severe uremia (BUN 51.4 mmol/L), creatinine 281 µmol/L, and uncontrolled hypertension. Details ultrafiltration fluid calculations, vascular fistula safety, and interdialytic guidelines.",
    snapshotUrl: "/images/artifacts/hemodialysis-presentation-preview.png",
    pdfUrl: "/documents/clinical-presentation-hemodialysis-esrd.pdf",
    htmlUrl: "/documents/hemodialysis_presentation.html",
    highlights: [
      "Real patient case study: Mrs. D.K., 76yo female admitted to Gen 4 Medicine with failure to cope and ESRD",
      "Comprehensive 10-parameter laboratory diagnostic breakdown with critical interpretations",
      "Biophysical analysis of diffusion, osmosis, and ultrafiltration transmembrane pressure (TMP)",
      "Vascular access protection protocols (bruit/thrill auscultation, fistula preservation)",
    ],
  },
  {
    id: "copd-exacerbation-presentation",
    title: "Clinical Presentation: Exacerbation of a Chronic Respiratory Disease (COPD)",
    category: "Acute Resuscitation & CNO Scope Presentation",
    date: "2026",
    credential: "31-Slide Clinical Guideline Presentation (GOLD 2024 & CNO Standards)",
    issuer: "Acute Inpatient Medicine & Seneca Polytechnic",
    summary:
      "Rigorous 31-slide clinical presentation evaluating the acute decompensation of chronic obstructive pulmonary disease (emphysema and chronic bronchitis) in Mr. J.D. (68yo male). Integrates GOLD 2024 evidence-based guidelines, emergency ABCDE resuscitation, controlled oxygen titration (target SpO2 88–92% to avoid hypercapnic blunting), ABG acid-base decompensation, Non-Invasive Ventilation (BiPAP) protocols, and the CNO Three-Factor Framework delineating RN versus RPN scope.",
    snapshotUrl: "/images/artifacts/copd-presentation-preview.png",
    pdfUrl: "/documents/clinical-presentation-copd-exacerbation.pdf",
    htmlUrl: "/documents/copd_presentation.html",
    highlights: [
      "Case study: Mr. J.D., 68yo retired construction worker with 45 pack-year smoking history and AECOPD",
      "Physiological deep-dive into oxygen-induced hypercapnia and the 88%–92% controlled titration window",
      "Arterial Blood Gas (ABG) analysis (pH 7.28, PaCO2 64 mmHg, PaO2 49 mmHg) and acute BiPAP initiation",
      "College of Nurses of Ontario (CNO) Three-Factor Framework analysis of RN vs. RPN autonomous practice",
    ],
  },
];
