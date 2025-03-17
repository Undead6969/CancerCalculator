
import { Heart, Calculator, Menu, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useNavigate } from 'react-router-dom';
import { MobileNav } from './MobileNav';
import { ThemeToggle } from './ThemeToggle';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { calculators } from '@/data/calculators';

export const Header = () => {
  const navigate = useNavigate();
  const [lastUsedTool] = useLocalStorage<string | null>("lastUsedTool", null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCalculators = searchTerm 
    ? calculators.filter(calc => 
        calc.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        calc.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const handleNavigate = (route: string) => {
    navigate(route);
    setIsSearchOpen(false);
    setSearchTerm('');
  };

  return (
    <header className="bg-background border-b sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2" onClick={() => navigate('/')} role="button">
          <Heart className="h-8 w-8 text-medical-accent" />
          <div>
            <h1 className="text-xl font-bold text-primary">CancerCalc</h1>
            <p className="text-xs text-muted-foreground">Oncology Risk Assessment Tools</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" onClick={() => navigate('/')}>Home</Button>
          <Button variant="ghost" onClick={() => navigate('/calculators')}>
            <Calculator className="mr-2 h-4 w-4" />
            All Calculators
          </Button>
          <Button variant="ghost" onClick={() => navigate('/about')}>About</Button>
          
          <div className="relative">
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)} aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>
            
            {isSearchOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-background border rounded-md shadow-lg p-3 animate-in slide-in-from-top-5 fade-in-20">
                <Input
                  type="search"
                  placeholder="Search calculators..."
                  className="w-full mb-2"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  autoFocus
                />
                <div className="max-h-80 overflow-y-auto">
                  {searchTerm && filteredCalculators.length > 0 ? (
                    filteredCalculators.map((calc) => (
                      <div 
                        key={calc.id}
                        className="p-2 hover:bg-muted cursor-pointer rounded-md flex items-center text-sm"
                        onClick={() => handleNavigate(calc.route)}
                      >
                        <calc.icon className="h-4 w-4 mr-2 text-primary" />
                        <span>{calc.title}</span>
                      </div>
                    ))
                  ) : searchTerm ? (
                    <div className="p-2 text-center text-muted-foreground">No calculators found</div>
                  ) : null}
                </div>
              </div>
            )}
          </div>
          
          {lastUsedTool && (
            <Button onClick={() => navigate(lastUsedTool)} className="bg-medical-accent hover:bg-medical-accent/90">
              Continue Last Tool
            </Button>
          )}
          <ThemeToggle />
        </div>
        
        <div className="md:hidden flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Button>
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
        
        {isSearchOpen && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 md:hidden">
            <div className="container p-4 pt-16">
              <div className="bg-background border rounded-md shadow-lg p-4">
                <div className="flex items-center mb-4">
                  <Input
                    type="search"
                    placeholder="Search calculators..."
                    className="w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    autoFocus
                  />
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="ml-2"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    &times;
                  </Button>
                </div>
                <div className="max-h-[60vh] overflow-y-auto">
                  {searchTerm && filteredCalculators.length > 0 ? (
                    filteredCalculators.map((calc) => (
                      <div 
                        key={calc.id}
                        className="p-3 hover:bg-muted cursor-pointer rounded-md flex items-center"
                        onClick={() => handleNavigate(calc.route)}
                      >
                        <calc.icon className="h-5 w-5 mr-3 text-primary" />
                        <div>
                          <div className="font-medium">{calc.title}</div>
                          <div className="text-xs text-muted-foreground">{calc.description}</div>
                        </div>
                      </div>
                    ))
                  ) : searchTerm ? (
                    <div className="p-3 text-center text-muted-foreground">No calculators found</div>
                  ) : (
                    <div className="p-3 text-center text-muted-foreground">Type to search for calculators</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
