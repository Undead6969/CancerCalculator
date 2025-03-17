
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Home, Calculator, Info, Heart, Moon, Sun, FileText, Shield, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './ThemeProvider';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export const MobileNav = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const [lastUsedTool] = useLocalStorage<string | null>("lastUsedTool", null);

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
        <Separator className="my-3" />
        <div className="text-xs text-muted-foreground uppercase font-semibold tracking-wider pl-2 mb-1">
          Legal
        </div>
        <Button variant="ghost" className="w-full justify-start text-sm" onClick={() => navigate('/terms')}>
          <FileText className="mr-2 h-4 w-4" />
          Terms & Conditions
        </Button>
        <Button variant="ghost" className="w-full justify-start text-sm" onClick={() => navigate('/privacy')}>
          <Shield className="mr-2 h-4 w-4" />
          Privacy Policy
        </Button>
        <Button variant="ghost" className="w-full justify-start text-sm" onClick={() => navigate('/disclaimer')}>
          <Globe className="mr-2 h-4 w-4" />
          Medical Disclaimer
        </Button>
        {lastUsedTool && (
          <>
            <Separator className="my-4" />
            <Button onClick={() => navigate(lastUsedTool)} className="w-full bg-medical-accent hover:bg-medical-accent/90">
              Continue Last Tool
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
