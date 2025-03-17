
import { Button } from "@/components/ui/button";
import { MainLayout } from "@/layouts/MainLayout";
import { FileQuestion } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center mb-6">
          <FileQuestion className="h-12 w-12 text-muted-foreground" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">404 - Page Not Found</h1>
        <p className="text-muted-foreground max-w-md mb-8">
          We couldn't find the calculator or page you were looking for. It may have been moved or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button onClick={() => navigate('/')}>Return to Home</Button>
          <Button variant="outline" onClick={() => navigate('/calculators')}>
            View All Calculators
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
