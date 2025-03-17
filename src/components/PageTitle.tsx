
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { calculators } from '@/data/calculators';

// Maps routes to human-readable titles
const routeTitles: Record<string, string> = {
  '/': 'Oncology Risk Assessment Tools',
  '/calculators': 'All Calculators',
  '/about': 'About Us',
};

export const PageTitle = () => {
  const location = useLocation();
  
  useEffect(() => {
    // If it's a calculator page
    if (location.pathname.startsWith('/calculators/')) {
      const calcId = location.pathname.split('/').pop();
      const calculator = calculators.find(c => c.route === location.pathname);
      
      if (calculator) {
        document.title = `${calculator.title} | CancerCalc`;
        return;
      }
    }
    
    // Default pages
    const pageTitle = routeTitles[location.pathname] || 'Oncology Calculator';
    document.title = `${pageTitle} | CancerCalc`;
  }, [location.pathname]);
  
  return null; // This component doesn't render anything
};
