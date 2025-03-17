
import { Button } from "@/components/ui/button";
import { MainLayout } from "@/layouts/MainLayout";
import { FileQuestion, ArrowLeft, Home, Calculator } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
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
