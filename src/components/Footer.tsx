
import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="mt-auto bg-gray-50 border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <Heart className="h-5 w-5 text-medical-accent mr-2" />
              <span className="font-semibold">CancerCalc</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Cancer risk assessment tools for healthcare professionals
            </p>
          </div>
          <div className="text-sm text-muted-foreground">
            <p>This tool is for educational purposes only. Always consult with a healthcare professional.</p>
            <p className="mt-1">© {new Date().getFullYear()} CancerCalc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
