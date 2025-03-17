
import { MainLayout } from "@/layouts/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, Heart, Calculator, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-2">
            <Info className="w-4 h-4 mr-1" />
            About
          </div>
          <h1 className="text-3xl font-bold tracking-tight">About CancerCalc</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            A comprehensive suite of calculators and risk assessment tools for oncology healthcare professionals
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
            <CardDescription>
              Providing evidence-based tools to support clinical decision making
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              CancerCalc aims to provide healthcare professionals with easy access to validated clinical calculators and risk assessment tools that are commonly used in oncology and cardio-oncology practice.
            </p>
            <p>
              Our tools are designed to assist in clinical decision making by providing standardized calculations based on published algorithms and risk assessment models. They help clinicians estimate risks, calculate appropriate dosages, and determine appropriate patient management strategies.
            </p>
            <div className="flex justify-center mt-6">
              <Button onClick={() => navigate('/calculators')} className="bg-medical hover:bg-medical-dark">
                <Calculator className="mr-2 h-4 w-4" />
                Explore All Calculators
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="h-5 w-5 text-medical-accent mr-2" />
                Cardio-Oncology Focus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                We feature specialized tools for cardio-oncology, helping clinicians navigate the complex intersection of cardiac health and cancer treatment. Our HFA-ICOS Cardiovascular Risk Assessment tool is designed to stratify patients' risk of developing cardiac complications during cancer treatment.
              </p>
              <Button variant="outline" className="w-full mt-4" onClick={() => navigate('/hfa-icos')}>
                View HFA-ICOS Tool
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calculator className="h-5 w-5 text-primary mr-2" />
                Comprehensive Tools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Our collection includes tools for chemotherapy dosing, toxicity assessment, risk stratification, prognostic evaluation, and more. Each calculator is based on validated clinical algorithms and includes references to the original research where appropriate.
              </p>
              <Button variant="outline" className="w-full mt-4" onClick={() => navigate('/calculators')}>
                Browse All Calculators
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Important Disclaimer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm">
              <strong>For Educational Purposes Only:</strong> The calculators and tools provided on this website are intended for educational and informational purposes only. They should not be used as a substitute for professional medical advice, diagnosis, or treatment.
            </p>
            <p className="text-sm">
              <strong>Clinical Judgment Required:</strong> All results should be interpreted within the context of the individual patient's clinical presentation and in conjunction with professional medical judgment. Healthcare providers should always verify calculations and consult appropriate guidelines.
            </p>
            <p className="text-sm">
              <strong>No Liability:</strong> While every effort has been made to ensure accuracy, the creators and maintainers of this website cannot be held responsible for any errors or for any consequences arising from the use of the information contained herein.
            </p>
            <div className="flex items-center p-3 bg-muted rounded-lg text-sm">
              <ExternalLink className="h-5 w-5 text-muted-foreground mr-2 flex-shrink-0" />
              <p>For the most up-to-date guidelines and recommendations, please refer to the relevant professional societies and published literature.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default About;
