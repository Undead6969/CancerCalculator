
import { MainLayout } from "@/layouts/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { HeartPulse, Info } from "lucide-react";
import { useHfaIcosCalculator } from "@/hooks/useHfaIcosCalculator";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const HfaIcos = () => {
  const {
    inputs,
    result,
    setPlannedTreatment,
    toggleMedicalHistory,
    toggleCardiacBiomarkers,
    setAge,
    toggleCardiacRiskFactors,
    togglePreviousTreatment,
    toggleLifestyleFactors,
  } = useHfaIcosCalculator();

  const [showResults, setShowResults] = useState(true);

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-2">
            <HeartPulse className="w-4 h-4 mr-1" />
            Cardio-Oncology Risk Assessment
          </div>
          <h1 className="text-3xl font-bold tracking-tight">HFA-ICOS Cardio-Oncology Risk Assessment Tool</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Stratifies the risk of cancer treatment related cardiovascular toxicity at baseline according to planned therapy and patient related factors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Risk Assessment Parameters</CardTitle>
                <CardDescription>
                  Complete all fields to calculate cardiovascular risk
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Planned Treatment */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label className="text-base font-medium">1. Select planned treatment</Label>
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <Info className="h-4 w-4" />
                        </Button>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <div className="text-sm">
                          Select the primary treatment regimen planned for the patient's cancer management.
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                  <RadioGroup
                    value={inputs.plannedTreatment}
                    onValueChange={(value) => setPlannedTreatment(value as any)}
                    className="grid grid-cols-1 md:grid-cols-2 gap-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="anthracycline" id="treatment-anthracycline" />
                      <Label htmlFor="treatment-anthracycline">Anthracycline chemotherapy</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="anti-her2" id="treatment-anti-her2" />
                      <Label htmlFor="treatment-anti-her2">Anti-HER2 targeted therapy</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="anthracycline-anti-her2" id="treatment-combined" />
                      <Label htmlFor="treatment-combined">Anthracycline + Anti-HER2 therapy</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="vegf" id="treatment-vegf" />
                      <Label htmlFor="treatment-vegf">VEGF inhibitor</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="proteasome" id="treatment-proteasome" />
                      <Label htmlFor="treatment-proteasome">Proteasome inhibitor</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="immunotherapy" id="treatment-immunotherapy" />
                      <Label htmlFor="treatment-immunotherapy">Immunotherapy</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="tyrosine-kinase" id="treatment-tyrosine" />
                      <Label htmlFor="treatment-tyrosine">Tyrosine kinase inhibitor</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="fluoropyrimidine" id="treatment-fluoropyrimidine" />
                      <Label htmlFor="treatment-fluoropyrimidine">Fluoropyrimidine</Label>
                    </div>
                  </RadioGroup>
                </div>

                <Separator />

                {/* Medical History */}
                <div className="space-y-3">
                  <Label className="text-base font-medium">2. Previous history of cardiovascular disease</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="history-none" 
                        checked={inputs.medicalHistory.length === 0}
                        onCheckedChange={() => setInputs(prev => ({ ...prev, medicalHistory: [] }))}
                      />
                      <Label htmlFor="history-none" className="text-sm">No history of cardiovascular disease</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="history-heart-failure" 
                        checked={inputs.medicalHistory.includes('heart-failure')}
                        onCheckedChange={() => toggleMedicalHistory('heart-failure')}
                      />
                      <Label htmlFor="history-heart-failure" className="text-sm">Heart failure or cardiomyopathy</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="history-valvular" 
                        checked={inputs.medicalHistory.includes('valvular-disease')}
                        onCheckedChange={() => toggleMedicalHistory('valvular-disease')}
                      />
                      <Label htmlFor="history-valvular" className="text-sm">Severe valvular heart disease</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="history-mi" 
                        checked={inputs.medicalHistory.includes('myocardial-infarction')}
                        onCheckedChange={() => toggleMedicalHistory('myocardial-infarction')}
                      />
                      <Label htmlFor="history-mi" className="text-sm">Myocardial infarction or previous coronary revascularisation</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="history-angina" 
                        checked={inputs.medicalHistory.includes('stable-angina')}
                        onCheckedChange={() => toggleMedicalHistory('stable-angina')}
                      />
                      <Label htmlFor="history-angina" className="text-sm">Stable angina</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="history-lvef-low" 
                        checked={inputs.medicalHistory.includes('lvef-lt-50')}
                        onCheckedChange={() => toggleMedicalHistory('lvef-lt-50')}
                      />
                      <Label htmlFor="history-lvef-low" className="text-sm">Baseline LVEF< 50%</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="history-lvef-borderline" 
                        checked={inputs.medicalHistory.includes('lvef-50-54')}
                        onCheckedChange={() => toggleMedicalHistory('lvef-50-54')}
                      />
                      <Label htmlFor="history-lvef-borderline" className="text-sm">Baseline LVEF 50-54%</Label>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Cardiac Biomarkers */}
                <div className="space-y-3">
                  <Label className="text-base font-medium">3. Cardiac biomarkers</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="biomarkers-normal" 
                        checked={inputs.cardiacBiomarkers.length === 0}
                        onCheckedChange={() => setInputs(prev => ({ ...prev, cardiacBiomarkers: [] }))}
                      />
                      <Label htmlFor="biomarkers-normal" className="text-sm">Normal troponin and BNP</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="biomarkers-troponin" 
                        checked={inputs.cardiacBiomarkers.includes('elevated-troponin')}
                        onCheckedChange={() => toggleCardiacBiomarkers('elevated-troponin')}
                      />
                      <Label htmlFor="biomarkers-troponin" className="text-sm">Elevated baseline troponin</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="biomarkers-bnp" 
                        checked={inputs.cardiacBiomarkers.includes('elevated-bnp')}
                        onCheckedChange={() => toggleCardiacBiomarkers('elevated-bnp')}
                      />
                      <Label htmlFor="biomarkers-bnp" className="text-sm">Elevated baseline BNP or NT-proBNP</Label>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Age */}
                <div className="space-y-3">
                  <Label className="text-base font-medium">4. Age</Label>
                  <RadioGroup
                    value={inputs.age}
                    onValueChange={(value) => setAge(value as any)}
                    className="grid grid-cols-1 md:grid-cols-3 gap-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="lt-65" id="age-under-65" />
                      <Label htmlFor="age-under-65">< 65 years</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="65-79" id="age-65-79" />
                      <Label htmlFor="age-65-79">65-79 years</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="gte-80" id="age-80-plus" />
                      <Label htmlFor="age-80-plus">≥80 years</Label>
                    </div>
                  </RadioGroup>
                </div>

                <Separator />

                {/* Cardiovascular Risk Factors */}
                <div className="space-y-3">
                  <Label className="text-base font-medium">5. Cardiovascular risk factors</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="cv-risk-none" 
                        checked={inputs.cardiacRiskFactors.length === 0}
                        onCheckedChange={() => setInputs(prev => ({ ...prev, cardiacRiskFactors: [] }))}
                      />
                      <Label htmlFor="cv-risk-none" className="text-sm">No cardiovascular risk factors</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="cv-risk-hypertension" 
                        checked={inputs.cardiacRiskFactors.includes('hypertension')}
                        onCheckedChange={() => toggleCardiacRiskFactors('hypertension')}
                      />
                      <Label htmlFor="cv-risk-hypertension" className="text-sm">Hypertension</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="cv-risk-diabetes" 
                        checked={inputs.cardiacRiskFactors.includes('diabetes')}
                        onCheckedChange={() => toggleCardiacRiskFactors('diabetes')}
                      />
                      <Label htmlFor="cv-risk-diabetes" className="text-sm">Diabetes mellitus</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="cv-risk-kidney" 
                        checked={inputs.cardiacRiskFactors.includes('chronic-kidney-disease')}
                        onCheckedChange={() => toggleCardiacRiskFactors('chronic-kidney-disease')}
                      />
                      <Label htmlFor="cv-risk-kidney" className="text-sm">Chronic kidney disease</Label>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Previous Cardio-toxic Treatment */}
                <div className="space-y-3">
                  <Label className="text-base font-medium">6. Previous cardio-toxic treatment</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="prev-treatment-none" 
                        checked={inputs.previousTreatment.length === 0}
                        onCheckedChange={() => setInputs(prev => ({ ...prev, previousTreatment: [] }))}
                      />
                      <Label htmlFor="prev-treatment-none" className="text-sm">No previous cardio-toxic treatment</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="prev-treatment-anthracycline" 
                        checked={inputs.previousTreatment.includes('anthracycline')}
                        onCheckedChange={() => togglePreviousTreatment('anthracycline')}
                      />
                      <Label htmlFor="prev-treatment-anthracycline" className="text-sm">Previous anthracycline exposure</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="prev-treatment-radiotherapy" 
                        checked={inputs.previousTreatment.includes('radiotherapy')}
                        onCheckedChange={() => togglePreviousTreatment('radiotherapy')}
                      />
                      <Label htmlFor="prev-treatment-radiotherapy" className="text-sm">Previous radiotherapy to left chest or mediastinum</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="prev-treatment-non-anthracycline" 
                        checked={inputs.previousTreatment.includes('non-anthracycline')}
                        onCheckedChange={() => togglePreviousTreatment('non-anthracycline')}
                      />
                      <Label htmlFor="prev-treatment-non-anthracycline" className="text-sm">Previous non-anthracycline based chemotherapy</Label>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Lifestyle Risk Factors */}
                <div className="space-y-3">
                  <Label className="text-base font-medium">7. Lifestyle risk factors</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="lifestyle-none" 
                        checked={inputs.lifestyleFactors.length === 0}
                        onCheckedChange={() => setInputs(prev => ({ ...prev, lifestyleFactors: [] }))}
                      />
                      <Label htmlFor="lifestyle-none" className="text-sm">None</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="lifestyle-smoking" 
                        checked={inputs.lifestyleFactors.includes('smoking')}
                        onCheckedChange={() => toggleLifestyleFactors('smoking')}
                      />
                      <Label htmlFor="lifestyle-smoking" className="text-sm">Current smoker or significant smoking history</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="lifestyle-obesity" 
                        checked={inputs.lifestyleFactors.includes('obesity')}
                        onCheckedChange={() => toggleLifestyleFactors('obesity')}
                      />
                      <Label htmlFor="lifestyle-obesity" className="text-sm">Obesity</Label>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center pt-2">
                  <Button 
                    onClick={() => setShowResults(true)} 
                    className="bg-medical hover:bg-medical-dark"
                    size="lg"
                  >
                    Calculate Risk
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {showResults && (
            <div className="animate-fade-in">
              <Card className={`border-2 ${
                result.riskLevel === 'Low' ? 'border-green-500 risk-low' : 
                result.riskLevel === 'Moderate' ? 'border-yellow-500 risk-moderate' :
                result.riskLevel === 'High' ? 'border-orange-500 risk-high' :
                'border-red-500 risk-very-high'
              }`}>
                <CardHeader className="pb-2">
                  <CardTitle className="flex justify-between items-center">
                    <span>Results</span>
                    <HeartPulse className={`h-6 w-6 ${
                      result.riskLevel === 'Low' ? 'text-green-600' : 
                      result.riskLevel === 'Moderate' ? 'text-yellow-600' :
                      result.riskLevel === 'High' ? 'text-orange-600' :
                      'text-red-600'
                    }`} />
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center py-4">
                    <div className="text-lg font-medium">Overall risk level:</div>
                    <div className={`text-3xl font-bold ${
                      result.riskLevel === 'Low' ? 'text-green-600' : 
                      result.riskLevel === 'Moderate' ? 'text-yellow-600' :
                      result.riskLevel === 'High' ? 'text-orange-600' :
                      'text-red-600'
                    }`}>
                      {result.riskLevel}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="font-medium">Recommended surveillance:</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex">
                        <span className="font-semibold mr-2">ECG:</span>
                        <span>{result.surveillance.ecg}</span>
                      </div>
                      <div className="flex">
                        <span className="font-semibold mr-2">Serum troponin & BNP:</span>
                        <span>{result.surveillance.serumTests}</span>
                      </div>
                      <div className="flex">
                        <span className="font-semibold mr-2">Transthoracic echo:</span>
                        <span>{result.surveillance.echo}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-4">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">About this assessment</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <p>
                    The HFA-ICOS cardio-oncology tools were developed to risk stratify oncology patients prior to commencing potentially cardio-toxic anti-cancer therapy.
                  </p>
                  <p className="mt-2">
                    The tools were developed in 2020 by the Heart Failure Association of the European Society of Cardiology Cardio-Oncology Study Group in collaboration with the International Cardio-Oncology Society (HFA-ICOS).
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    This calculator is for educational purposes only. Always consult with a healthcare professional for medical advice.
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default HfaIcos;
