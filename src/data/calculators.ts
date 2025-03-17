
import { 
  Heart, Calculator, Activity, Thermometer, 
  FileMinus, Pill, Droplet, Scale, AlertCircle, 
  LineChart, PieChart, Users, HeartPulse, 
  FlaskConical, Microscope, Shield, BookText,
  Brain, Flame, GraduationCap, ListChecks,
  Layers, FileSpreadsheet, BarChart3, Skull,
  PenTool, Network, Stethoscope, Syringe,
  AreaChart, Dna, ScrollText, BadgePercent,
  Bone, Ruler, Calculator as CalcIcon, Zap
} from 'lucide-react';

export interface Calculator {
  id: string;
  title: string;
  description: string;
  letter: string;
  icon: any;
  route: string;
}

export const calculators: Calculator[] = [
  {
    id: 'anthracycline-calculator',
    title: 'Anthracycline total exposure calculator',
    description: 'Calculates total anthracycline exposure based on equivalent dose of each anthracycline received.',
    letter: 'A',
    icon: FlaskConical,
    route: '/calculators/anthracycline'
  },
  {
    id: 'bsa-calculator',
    title: 'Body Surface Area (BSA) calculator',
    description: 'Calculates body surface area using height and weight.',
    letter: 'B',
    icon: Scale,
    route: '/calculators/bsa'
  },
  {
    id: 'carboplatin-calculator',
    title: 'Carboplatin dosing (Calvert formula)',
    description: 'Calculates the dose of carboplatin based on glomerular filtration rate and target AUC.',
    letter: 'C',
    icon: Pill,
    route: '/calculators/carboplatin'
  },
  {
    id: 'carg-bc',
    title: 'CARG-BC',
    description: 'Predicts risk of severe chemotherapy toxicity (grade 3-5) in patients aged over 65 with early stage breast cancer.',
    letter: 'C',
    icon: AlertCircle,
    route: '/calculators/carg-bc'
  },
  {
    id: 'carg-calculator',
    title: 'CARG chemotherapy toxicity calculator',
    description: 'Predicts risk of severe chemotherapy toxicity (grade 3-5) in older adults receiving chemotherapy.',
    letter: 'C',
    icon: AlertCircle,
    route: '/calculators/carg'
  },
  {
    id: 'cisne-calculator',
    title: 'CISNE (Clinical Index of Stable febrile Neutropenia) risk tool',
    description: 'Used to identify patients with chemotherapy related febrile neutropenia who are low risk for medical complications.',
    letter: 'C',
    icon: Thermometer,
    route: '/calculators/cisne'
  },
  {
    id: 'crs-grade',
    title: 'Cytokine Release Syndrome (CRS) Grade (ASTCT criteria)',
    description: 'Grades severity of CRS syndrome according to the American Society for Transplantation and Cellular Therapy (ASTCT) criteria.',
    letter: 'C',
    icon: Activity,
    route: '/calculators/crs-grade'
  },
  {
    id: 'dctaq',
    title: 'Daily Chemotherapy Toxicity self Assessment Questionnaire (DCTAQ)',
    description: 'A patient reported outcome tool for self-reporting chemotherapy toxicities.',
    letter: 'D',
    icon: ScrollText,
    route: '/calculators/dctaq'
  },
  {
    id: 'dpyd-calculator',
    title: 'DPYD (DPD) Activity Score Calculator (CPIC guidelines)',
    description: 'Provides information on functional impact of DPYD (DPD) variants and genotype guided dosing advice for fluoropyrimidine chemotherapy.',
    letter: 'D',
    icon: Dna,
    route: '/calculators/dpyd'
  },
  {
    id: 'early-hodgkins',
    title: 'Early stage Hodgkin\'s lymphoma risk stratification tool',
    description: 'Risk stratifies early stage Hodgkin\'s lymphoma according to the EORTC, GHSG or NCCN criteria.',
    letter: 'E',
    icon: Calculator,
    route: '/calculators/early-hodgkins'
  },
  {
    id: 'esmo-mcbs',
    title: 'ESMO-MCBS: ESMO Magnitude of Clinical Benefit Scale tool v1.1',
    description: 'Assesses the value of a new cancer therapy, taking into account the magnitude of clinical benefit, toxicity and cost within a reproducible scale.',
    letter: 'E',
    icon: BarChart3,
    route: '/calculators/esmo-mcbs'
  },
  {
    id: 'gist-calculator',
    title: 'GIST (Gastrointestinal Stromal Tumor) recurrence risk calculator',
    description: 'Estimates risk of recurrence in resected localised GISTs.',
    letter: 'G',
    icon: AreaChart,
    route: '/calculators/gist'
  },
  {
    id: 'gpa-calculator',
    title: 'Graded Prognostic Assessment (GPA)',
    description: 'Estimates survival in patients with brain metastases.',
    letter: 'G',
    icon: Brain,
    route: '/calculators/gpa'
  },
  {
    id: 'hasenclever-calculator',
    title: 'Hasenclever International Prognostic Score (IPS) for advanced stage classical Hodgkin\'s lymphoma',
    description: 'Risk stratifies advanced stage Hodgkin\'s lymphoma into 6 prognostic groups.',
    letter: 'H',
    icon: Calculator,
    route: '/calculators/hasenclever'
  },
  {
    id: 'hfa-icos',
    title: 'HFA-ICOS Cardio-Oncology Risk Assessment Tool',
    description: 'Stratifies the risk of cancer treatment related cardiovascular toxicity at baseline according to planned therapy and patient related factors.',
    letter: 'H',
    icon: HeartPulse,
    route: '/hfa-icos'
  },
  {
    id: 'icans-grade',
    title: 'Immune effector Cell Associated Neurotoxicity Syndrome (ICANS) grade (ASTCT criteria)',
    description: 'Grades severity of ICANS according to the American Society for Transplantation and Cellular Therapy (ASTCT) criteria.',
    letter: 'I',
    icon: Brain,
    route: '/calculators/icans'
  },
  {
    id: 'immunotherapy-toxicity',
    title: 'Immunotherapy toxicity management tool',
    description: 'Summarises management of immunotherapy toxicities according to international society guidelines.',
    letter: 'I',
    icon: Shield,
    route: '/calculators/immunotherapy-toxicity'
  },
  {
    id: 'ipi-calculator',
    title: 'IPI, R-IPI and NCCN-IPI scores for DLBCL',
    description: 'The International Prognostic Index (IPI), revised IPI (R-IPI) and NCCN-IPI are prognostic tools used to predict survival in patients with DLBCL (diffuse large B cell lymphoma).',
    letter: 'I',
    icon: Calculator,
    route: '/calculators/ipi'
  },
  {
    id: 'manchester-score',
    title: 'Manchester score with pathology adjustment',
    description: 'Predicts finding a pathogenic germline BRCA1/BRCA2 mutation in families with suspected hereditary breast or ovarian cancer.',
    letter: 'M',
    icon: Dna,
    route: '/calculators/manchester-score'
  },
  {
    id: 'mascc-calculator',
    title: 'MASCC febrile neutropenia risk score',
    description: 'Identifies patients with febrile neutropenia who are low risk for complications and may be suitable for outpatient management.',
    letter: 'M',
    icon: Thermometer,
    route: '/calculators/mascc'
  },
  {
    id: 'mirels-calculator',
    title: 'Mirels score',
    description: 'Assesses risk of pathological fracture in patients with a long bone metastasis.',
    letter: 'M',
    icon: Bone,
    route: '/calculators/mirels'
  },
  {
    id: 'opioid-calculator',
    title: 'Opioid conversion calculator',
    description: 'Calculates the equi-analgesic dose of a given opioid according to desired opioid drug and route of administration.',
    letter: 'O',
    icon: Pill,
    route: '/calculators/opioid'
  },
  {
    id: 'pulmonary-nodule',
    title: 'Pulmonary nodule malignancy risk tools',
    description: 'Assess the malignancy risk of pulmonary nodules. Includes both the Herder and Brock models.',
    letter: 'P',
    icon: Stethoscope,
    route: '/calculators/pulmonary-nodule'
  },
  {
    id: 'recist',
    title: 'RECIST 1.1',
    description: 'The RECIST criteria are used to assess radiological response to cancer therapy in solid tumours.',
    letter: 'R',
    icon: Ruler,
    route: '/calculators/recist'
  },
  {
    id: 'sins-calculator',
    title: 'Spinal Instability Neoplastic Score (SINS)',
    description: 'Assesses spinal instability in the vertebral column in patients with neoplastic spinal disease.',
    letter: 'S',
    icon: Bone,
    route: '/calculators/sins'
  },
  {
    id: 'tls-calculator',
    title: 'Tumor Lysis Syndrome (TLS) risk assessment tool',
    description: 'Stratifies patients into low, intermediate or high risk for developing TLS and guides prophylaxis.',
    letter: 'T',
    icon: Zap,
    route: '/calculators/tls'
  }
];

export const alphabeticSections = Array.from(new Set(calculators.map(calc => calc.letter))).sort();

export const getCalculatorsByLetter = (letter: string) => {
  return calculators.filter(calc => calc.letter === letter);
};
