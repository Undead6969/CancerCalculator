
import { useState, useEffect } from 'react';

type PlannedTreatment = 
  | 'anthracycline' 
  | 'anti-her2' 
  | 'anthracycline-anti-her2' 
  | 'vegf' 
  | 'proteasome' 
  | 'immunotherapy' 
  | 'tyrosine-kinase' 
  | 'fluoropyrimidine';

type MedicalHistory = 
  | 'none' 
  | 'heart-failure' 
  | 'valvular-disease' 
  | 'myocardial-infarction' 
  | 'stable-angina' 
  | 'lvef-lt-50' 
  | 'lvef-50-54';

type CardiacBiomarkers = 
  | 'normal' 
  | 'elevated-troponin' 
  | 'elevated-bnp';

type Age = 
  | 'lt-65' 
  | '65-79' 
  | 'gte-80';

type CardiacRiskFactors = 
  | 'none' 
  | 'hypertension' 
  | 'diabetes' 
  | 'chronic-kidney-disease';

type PreviousTreatment = 
  | 'none' 
  | 'anthracycline' 
  | 'radiotherapy' 
  | 'non-anthracycline';

type LifestyleFactors = 
  | 'none' 
  | 'smoking' 
  | 'obesity';

type RiskLevel = 
  | 'Low' 
  | 'Moderate' 
  | 'High' 
  | 'Very High';

interface HfaIcosInputs {
  plannedTreatment: PlannedTreatment;
  medicalHistory: MedicalHistory[];
  cardiacBiomarkers: CardiacBiomarkers[];
  age: Age;
  cardiacRiskFactors: CardiacRiskFactors[];
  previousTreatment: PreviousTreatment[];
  lifestyleFactors: LifestyleFactors[];
}

interface HfaIcosResult {
  riskLevel: RiskLevel;
  surveillance: {
    ecg: string;
    serumTests: string;
    echo: string;
  };
}

export const useHfaIcosCalculator = () => {
  const [inputs, setInputs] = useState<HfaIcosInputs>({
    plannedTreatment: 'anthracycline',
    medicalHistory: [],
    cardiacBiomarkers: [],
    age: 'lt-65',
    cardiacRiskFactors: [],
    previousTreatment: [],
    lifestyleFactors: [],
  });

  const [result, setResult] = useState<HfaIcosResult>({
    riskLevel: 'Low',
    surveillance: {
      ecg: 'At baseline',
      serumTests: 'At baseline, pre cycles 2,4 & 6 and at 3 months post completion of treatment',
      echo: 'At baseline, after cycle 4 and at 12 months post completion of treatment',
    },
  });

  useEffect(() => {
    // This is a simplified risk calculation algorithm
    // In a real application, this would be more complex and accurate
    let riskScore = 0;
    
    // Calculate risk based on planned treatment
    if (['anthracycline-anti-her2', 'vegf', 'proteasome'].includes(inputs.plannedTreatment)) {
      riskScore += 2;
    } else if (['anthracycline', 'anti-her2'].includes(inputs.plannedTreatment)) {
      riskScore += 1;
    }
    
    // Calculate risk based on medical history
    if (inputs.medicalHistory.includes('heart-failure') || inputs.medicalHistory.includes('valvular-disease')) {
      riskScore += 3;
    } else if (inputs.medicalHistory.includes('myocardial-infarction')) {
      riskScore += 2;
    } else if (inputs.medicalHistory.includes('lvef-lt-50')) {
      riskScore += 2;
    } else if (inputs.medicalHistory.includes('stable-angina') || inputs.medicalHistory.includes('lvef-50-54')) {
      riskScore += 1;
    }
    
    // Calculate risk based on cardiac biomarkers
    if (inputs.cardiacBiomarkers.includes('elevated-troponin')) {
      riskScore += 2;
    } else if (inputs.cardiacBiomarkers.includes('elevated-bnp')) {
      riskScore += 1;
    }
    
    // Calculate risk based on age
    if (inputs.age === 'gte-80') {
      riskScore += 2;
    } else if (inputs.age === '65-79') {
      riskScore += 1;
    }
    
    // Calculate risk based on cardiac risk factors
    if (inputs.cardiacRiskFactors.length > 0) {
      riskScore += 1;
    }
    
    // Calculate risk based on previous treatment
    if (inputs.previousTreatment.includes('anthracycline') || inputs.previousTreatment.includes('radiotherapy')) {
      riskScore += 2;
    } else if (inputs.previousTreatment.includes('non-anthracycline')) {
      riskScore += 1;
    }
    
    // Calculate risk based on lifestyle factors
    if (inputs.lifestyleFactors.length > 0) {
      riskScore += 1;
    }
    
    // Determine risk level based on score
    let riskLevel: RiskLevel = 'Low';
    let surveillance = {
      ecg: 'At baseline',
      serumTests: 'At baseline, pre cycles 2,4 & 6 and at 3 months post completion of treatment',
      echo: 'At baseline, after cycle 4 and at 12 months post completion of treatment',
    };
    
    if (riskScore >= 7) {
      riskLevel = 'Very High';
      surveillance = {
        ecg: 'At baseline and before each cycle',
        serumTests: 'At baseline, pre each cycle, 1 month and 3 months post completion of treatment',
        echo: 'At baseline, after cycle 2 and cycle 4, and at 3 months and 12 months post completion of treatment',
      };
    } else if (riskScore >= 5) {
      riskLevel = 'High';
      surveillance = {
        ecg: 'At baseline and before cycles 2, 4 and 6',
        serumTests: 'At baseline, pre cycles 2,4 & 6, 1 month and 3 months post completion of treatment',
        echo: 'At baseline, after cycle 3, and at 3 months and 12 months post completion of treatment',
      };
    } else if (riskScore >= 3) {
      riskLevel = 'Moderate';
      surveillance = {
        ecg: 'At baseline and before cycles 3 and 6',
        serumTests: 'At baseline, pre cycles 3 & 6 and at 3 months post completion of treatment',
        echo: 'At baseline, after cycle 4 and at 6 months post completion of treatment',
      };
    }
    
    setResult({
      riskLevel,
      surveillance,
    });
  }, [inputs]);

  const setPlannedTreatment = (treatment: PlannedTreatment) => {
    setInputs(prev => ({ ...prev, plannedTreatment: treatment }));
  };

  const toggleMedicalHistory = (item: MedicalHistory) => {
    setInputs(prev => ({
      ...prev,
      medicalHistory: prev.medicalHistory.includes(item)
        ? prev.medicalHistory.filter(i => i !== item)
        : [...prev.medicalHistory, item]
    }));
  };

  const toggleCardiacBiomarkers = (item: CardiacBiomarkers) => {
    setInputs(prev => ({
      ...prev,
      cardiacBiomarkers: prev.cardiacBiomarkers.includes(item)
        ? prev.cardiacBiomarkers.filter(i => i !== item)
        : [...prev.cardiacBiomarkers, item]
    }));
  };

  const setAge = (age: Age) => {
    setInputs(prev => ({ ...prev, age }));
  };

  const toggleCardiacRiskFactors = (item: CardiacRiskFactors) => {
    setInputs(prev => ({
      ...prev,
      cardiacRiskFactors: prev.cardiacRiskFactors.includes(item)
        ? prev.cardiacRiskFactors.filter(i => i !== item)
        : [...prev.cardiacRiskFactors, item]
    }));
  };

  const togglePreviousTreatment = (item: PreviousTreatment) => {
    setInputs(prev => ({
      ...prev,
      previousTreatment: prev.previousTreatment.includes(item)
        ? prev.previousTreatment.filter(i => i !== item)
        : [...prev.previousTreatment, item]
    }));
  };

  const toggleLifestyleFactors = (item: LifestyleFactors) => {
    setInputs(prev => ({
      ...prev,
      lifestyleFactors: prev.lifestyleFactors.includes(item)
        ? prev.lifestyleFactors.filter(i => i !== item)
        : [...prev.lifestyleFactors, item]
    }));
  };

  return {
    inputs,
    result,
    setInputs,
    setPlannedTreatment,
    toggleMedicalHistory,
    toggleCardiacBiomarkers,
    setAge,
    toggleCardiacRiskFactors,
    togglePreviousTreatment,
    toggleLifestyleFactors,
  };
};
