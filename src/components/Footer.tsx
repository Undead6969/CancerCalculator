
import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t py-8 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          <div>
            <div className="flex items-center">
              <Heart className="h-5 w-5 text-medical-accent mr-2" />
              <span className="font-semibold">CancerCalc</span>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Cancer risk assessment tools for healthcare professionals with comprehensive calculators for all oncology specialties.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/calculators" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Calculators</Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">About</Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Mail className="h-4 w-4 text-medical-accent mt-0.5 mr-2" />
                <span className="text-sm text-muted-foreground">contact@cancercalc.org</span>
              </div>
              <div className="flex items-start">
                <Phone className="h-4 w-4 text-medical-accent mt-0.5 mr-2" />
                <span className="text-sm text-muted-foreground">(+1) 555-123-4567</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 text-medical-accent mt-0.5 mr-2" />
                <span className="text-sm text-muted-foreground">123 Medical Center Blvd, Suite 101<br />Healthcare City, HC 12345</span>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            This tool is for educational purposes only. Always consult with a healthcare professional.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            © {new Date().getFullYear()} CancerCalc. Developed by Hitesh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
