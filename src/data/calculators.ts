
import { 
  Heart, Calculator, Activity, Thermometer, 
  FileMinus, Pill, Droplet, Scale, AlertCircle, 
  LineChart, PieChart, Users, HeartPulse, 
  FlaskConical, Microscope 
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
    id: 'hfa-icos',
    title: 'HFA-ICOS Cardio-Oncology Risk Assessment Tool',
    description: 'Stratifies the risk of cancer treatment related cardiovascular toxicity at baseline according to planned therapy and patient related factors.',
    letter: 'H',
    icon: HeartPulse,
    route: '/hfa-icos'
  },
];

export const alphabeticSections = Array.from(new Set(calculators.map(calc => calc.letter))).sort();

export const getCalculatorsByLetter = (letter: string) => {
  return calculators.filter(calc => calc.letter === letter);
};
