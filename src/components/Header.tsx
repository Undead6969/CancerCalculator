
import { Heart, Calculator, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useNavigate } from 'react-router-dom';
import { MobileNav } from './MobileNav';
import { ThemeToggle } from './ThemeToggle';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2" onClick={() => navigate('/')} role="button">
          <Heart className="h-8 w-8 text-medical-accent" />
          <div>
            <h1 className="text-xl font-bold text-primary">CancerCalc</h1>
            <p className="text-xs text-muted-foreground">Medical Risk Assessment Tools</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" onClick={() => navigate('/')}>Home</Button>
          <Button variant="ghost" onClick={() => navigate('/calculators')}>
            <Calculator className="mr-2 h-4 w-4" />
            All Calculators
          </Button>
          <Button variant="ghost" onClick={() => navigate('/about')}>About</Button>
          <Button onClick={() => navigate('/hfa-icos')} className="bg-medical-accent hover:bg-medical-accent/90">
            HFA-ICOS Tool
          </Button>
          <ThemeToggle />
        </div>
        
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <MobileNav />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
