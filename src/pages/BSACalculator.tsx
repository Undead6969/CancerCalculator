
import { MainLayout } from "@/layouts/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Scale } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BSACalculator = () => {
  const [height, setHeight] = useState<number | ''>('');
  const [weight, setWeight] = useState<number | ''>('');
  const [heightUnit, setHeightUnit] = useState('cm'); // 'cm' or 'in'
  const [weightUnit, setWeightUnit] = useState('kg'); // 'kg' or 'lb'
  const [bsa, setBsa] = useState<number | null>(null);
  const [formula, setFormula] = useState('dubois'); // 'dubois', 'mosteller', or 'haycock'

  useEffect(() => {
    if (typeof height === 'number' && typeof weight === 'number' && height > 0 && weight > 0) {
      // Convert to cm/kg if necessary
      const heightInCm = heightUnit === 'in' ? height * 2.54 : height;
      const weightInKg = weightUnit === 'lb' ? weight * 0.453592 : weight;
      
      let calculatedBsa: number;
      
      // Calculate BSA using different formulas
      switch (formula) {
        case 'dubois':
          calculatedBsa = 0.007184 * Math.pow(heightInCm, 0.725) * Math.pow(weightInKg, 0.425);
          break;
        case 'mosteller':
          calculatedBsa = Math.sqrt((heightInCm * weightInKg) / 3600);
          break;
        case 'haycock':
          calculatedBsa = 0.024265 * Math.pow(heightInCm, 0.3964) * Math.pow(weightInKg, 0.5378);
          break;
        default:
          calculatedBsa = 0;
      }
      
      setBsa(parseFloat(calculatedBsa.toFixed(2)));
    } else {
      setBsa(null);
    }
  }, [height, weight, heightUnit, weightUnit, formula]);

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setHeight(value === '' ? '' : parseFloat(value));
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setWeight(value === '' ? '' : parseFloat(value));
  };

  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-2">
            <Scale className="w-4 h-4 mr-1" />
            Body Measurements
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Body Surface Area (BSA) Calculator</h1>
          <p className="text-muted-foreground mt-2">
            Calculates body surface area using height and weight, which is used for drug dosing and other medical calculations.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Calculate Body Surface Area</CardTitle>
            <CardDescription>
              Enter the patient's height and weight to calculate their body surface area
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Tabs defaultValue="metric" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="metric" onClick={() => { setHeightUnit('cm'); setWeightUnit('kg'); }}>Metric (cm/kg)</TabsTrigger>
                <TabsTrigger value="imperial" onClick={() => { setHeightUnit('in'); setWeightUnit('lb'); }}>Imperial (in/lb)</TabsTrigger>
              </TabsList>
              <TabsContent value="metric" className="pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="height-metric">Height (cm)</Label>
                    <Input 
                      id="height-metric" 
                      type="number" 
                      placeholder="e.g. 170" 
                      value={height === '' ? '' : height}
                      onChange={handleHeightChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="weight-metric">Weight (kg)</Label>
                    <Input 
                      id="weight-metric" 
                      type="number" 
                      placeholder="e.g. 70" 
                      value={weight === '' ? '' : weight}
                      onChange={handleWeightChange}
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="imperial" className="pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="height-imperial">Height (inches)</Label>
                    <Input 
                      id="height-imperial" 
                      type="number" 
                      placeholder="e.g. 67" 
                      value={height === '' ? '' : height}
                      onChange={handleHeightChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="weight-imperial">Weight (lb)</Label>
                    <Input 
                      id="weight-imperial" 
                      type="number" 
                      placeholder="e.g. 154" 
                      value={weight === '' ? '' : weight}
                      onChange={handleWeightChange}
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="space-y-2">
              <Label>Formula</Label>
              <div className="grid grid-cols-3 gap-2">
                <Button 
                  variant={formula === 'dubois' ? 'default' : 'outline'} 
                  onClick={() => setFormula('dubois')}
                  className="w-full"
                >
                  DuBois
                </Button>
                <Button 
                  variant={formula === 'mosteller' ? 'default' : 'outline'} 
                  onClick={() => setFormula('mosteller')}
                  className="w-full"
                >
                  Mosteller
                </Button>
                <Button 
                  variant={formula === 'haycock' ? 'default' : 'outline'} 
                  onClick={() => setFormula('haycock')}
                  className="w-full"
                >
                  Haycock
                </Button>
              </div>
            </div>

            <div className="mt-6 p-4 bg-muted rounded-lg">
              <div className="text-center">
                <div className="text-sm font-medium text-muted-foreground mb-1">Body Surface Area</div>
                {bsa !== null ? (
                  <div className="text-3xl font-bold text-primary">{bsa} m²</div>
                ) : (
                  <div className="text-lg text-muted-foreground">Enter height and weight</div>
                )}
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
              <div className="font-medium mb-1">Formula Information:</div>
              {formula === 'dubois' && (
                <p>DuBois & DuBois (1916): BSA = 0.007184 × height(cm)^0.725 × weight(kg)^0.425</p>
              )}
              {formula === 'mosteller' && (
                <p>Mosteller (1987): BSA = √(height(cm) × weight(kg) / 3600)</p>
              )}
              {formula === 'haycock' && (
                <p>Haycock (1978): BSA = 0.024265 × height(cm)^0.3964 × weight(kg)^0.5378</p>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Clinical Applications</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2">
            <p>Body Surface Area (BSA) is used for various clinical purposes:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Drug dosing calculations, especially for chemotherapy</li>
              <li>Cardiac output interpretation</li>
              <li>Burn assessment</li>
              <li>Renal function evaluation</li>
              <li>Equipment selection (e.g., ventilator settings)</li>
            </ul>
            <p className="text-xs text-muted-foreground mt-4">
              This calculator is for educational purposes only. Always verify calculations and consult with a healthcare professional for medical applications.
            </p>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default BSACalculator;
