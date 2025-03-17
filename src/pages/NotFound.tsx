
import { Button } from "@/components/ui/button";
import { MainLayout } from "@/layouts/MainLayout";
import { FileQuestion, ArrowLeft, Home, Calculator, Construction } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { calculators } from "@/data/calculators";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useEffect, useState } from "react";

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCalculatorRoute, setIsCalculatorRoute] = useState(false);
  const [calculatorInfo, setCalculatorInfo] = useState<{id: string; title: string; description: string} | null>(null);
  
  useEffect(() => {
    // Check if this is a calculator route that's defined but not implemented
    const path = location.pathname;
    const matchingCalculator = calculators.find(calc => calc.route === path);
    
    if (matchingCalculator) {
      setIsCalculatorRoute(true);
      setCalculatorInfo({
        id: matchingCalculator.id,
        title: matchingCalculator.title,
        description: matchingCalculator.description
      });
    }
  }, [location.pathname]);

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
        {isCalculatorRoute && calculatorInfo ? (
          <>
            <div className="animate-bounce mb-6">
              <div className="h-24 w-24 rounded-full bg-amber-100 flex items-center justify-center">
                <Construction className="h-12 w-12 text-amber-500" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-4 animate-fade-in">
              Coming Soon
            </h1>
            <p className="text-muted-foreground max-w-md mb-8 animate-fade-in">
              We're currently working on implementing the <strong>{calculatorInfo.title}</strong> calculator.
            </p>
            
            <Card className="max-w-md w-full mb-8 border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800/30">
              <CardHeader>
                <CardTitle>{calculatorInfo.title}</CardTitle>
                <CardDescription>{calculatorInfo.description}</CardDescription>
              </CardHeader>
            </Card>
            
            <Alert className="max-w-md mb-8 bg-primary/5">
              <AlertTitle>Implementation in progress</AlertTitle>
              <AlertDescription>
                This calculator is defined in our system but hasn't been fully implemented yet. Please check back later.
              </AlertDescription>
            </Alert>
          </>
        ) : (
          <>
            <div className="animate-bounce mb-6">
              <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center">
                <FileQuestion className="h-12 w-12 text-muted-foreground" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-4 animate-fade-in">
              404 - Page Not Found
            </h1>
            <p className="text-muted-foreground max-w-md mb-8 animate-fade-in">
              We couldn't find the calculator or page you were looking for. It may have been moved or doesn't exist.
            </p>
          </>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
          <Button onClick={() => navigate('/')} className="group">
            <Home className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Return to Home
          </Button>
          <Button variant="outline" onClick={() => navigate('/calculators')}>
            <Calculator className="mr-2 h-4 w-4" />
            View All Calculators
          </Button>
          <Button variant="ghost" onClick={() => navigate(-1)}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
