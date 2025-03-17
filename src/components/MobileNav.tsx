
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Home, Calculator, Info, Heart, Moon, Sun } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './ThemeProvider';

export const MobileNav = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col h-full py-6">
      <div className="flex items-center mb-6">
        <Heart className="h-6 w-6 text-medical-accent mr-2" />
        <h2 className="text-lg font-semibold">CancerCalc</h2>
      </div>
      <Separator className="mb-6" />
      <div className="space-y-3">
        <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/')}>
          <Home className="mr-2 h-5 w-5" />
          Home
        </Button>
        <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/calculators')}>
          <Calculator className="mr-2 h-5 w-5" />
          All Calculators
        </Button>
        <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/about')}>
          <Info className="mr-2 h-5 w-5" />
          About
        </Button>
        <Button 
          variant="ghost" 
          className="w-full justify-start" 
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? (
            <>
              <Sun className="mr-2 h-5 w-5" />
              Light Mode
            </>
          ) : (
            <>
              <Moon className="mr-2 h-5 w-5" />
              Dark Mode
            </>
          )}
        </Button>
        <Separator className="my-4" />
        <Button onClick={() => navigate('/hfa-icos')} className="w-full bg-medical-accent hover:bg-medical-accent/90">
          HFA-ICOS Risk Tool
        </Button>
      </div>
    </div>
  );
};
