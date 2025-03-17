
import { Calculator, calculators } from "./calculators";
import { 
  Thermometer, Heart, Brain, Dna, 
  BookText, FlaskConical, Pill, 
  Bone, Microscope, Stethoscope,
  LucideIcon
} from "lucide-react";

export interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
}

export const categories: Category[] = [
  {
    id: "acute-oncology",
    name: "Acute Oncology",
    icon: Thermometer
  },
  {
    id: "breast-oncology",
    name: "Breast Oncology",
    icon: Microscope
  },
  {
    id: "cardio-oncology",
    name: "Cardio-Oncology",
    icon: Heart
  },
  {
    id: "cns-oncology",
    name: "CNS Oncology",
    icon: Brain
  },
  {
    id: "genetics",
    name: "Genetics",
    icon: Dna
  },
  {
    id: "hemato-oncology",
    name: "Hemato-Oncology",
    icon: BookText
  },
  {
    id: "lung-oncology",
    name: "Lung Oncology",
    icon: Stethoscope
  },
  {
    id: "palliative-care",
    name: "Palliative Care",
    icon: Pill
  },
  {
    id: "pharmacology",
    name: "Pharmacology",
    icon: FlaskConical
  },
  {
    id: "surgical-oncology",
    name: "Surgical Oncology",
    icon: Bone
  }
];

// Map calculators to categories
const calculatorCategories: Record<string, string[]> = {
  "acute-oncology": [
    "cisne-calculator", 
    "crs-grade", 
    "icans-grade", 
    "immunotherapy-toxicity", 
    "mascc-calculator", 
    "mirels-calculator", 
    "sins-calculator"
  ],
  "breast-oncology": [
    "carg-bc", 
    "manchester-score"
  ],
  "cardio-oncology": [
    "hfa-icos", 
    "anthracycline-calculator"
  ],
  "cns-oncology": [
    "gpa-calculator"
  ],
  "genetics": [
    "dpyd-calculator", 
    "manchester-score"
  ],
  "hemato-oncology": [
    "crs-grade", 
    "early-hodgkins", 
    "hasenclever-calculator", 
    "icans-grade", 
    "ipi-calculator", 
    "tls-calculator"
  ],
  "lung-oncology": [
    "pulmonary-nodule"
  ],
  "palliative-care": [
    "opioid-calculator", 
    "mirels-calculator", 
    "sins-calculator"
  ],
  "pharmacology": [
    "anthracycline-calculator", 
    "carboplatin-calculator", 
    "carg-calculator", 
    "carg-bc", 
    "dctaq", 
    "dpyd-calculator", 
    "esmo-mcbs", 
    "gist-calculator", 
    "hfa-icos", 
    "recist"
  ],
  "surgical-oncology": [
    "mirels-calculator", 
    "sins-calculator", 
    "gist-calculator"
  ]
};

// Some calculators may appear in multiple categories
export const getCalculatorsByCategory = (categoryId: string): Calculator[] => {
  if (!calculatorCategories[categoryId]) {
    return [];
  }
  
  return calculators.filter(calc => 
    calculatorCategories[categoryId].includes(calc.id)
  );
};
