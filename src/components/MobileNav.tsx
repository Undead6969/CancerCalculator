
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Home, Calculator, Info, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const MobileNav = () => {
  const navigate = useNavigate();

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
        <Separator className="my-4" />
        <Button onClick={() => navigate('/hfa-icos')} className="w-full bg-medical-accent hover:bg-medical-accent/90">
          HFA-ICOS Risk Tool
        </Button>
      </div>
    </div>
  );
};
