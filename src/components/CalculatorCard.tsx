
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface CalculatorCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  route: string;
  onClick?: () => void;
}

export const CalculatorCard = ({ title, description, icon: Icon, route, onClick }: CalculatorCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick();
    navigate(route);
  };

  return (
    <Card 
      className="cursor-pointer hover:shadow-md transition-all border-2"
      onClick={handleClick}
    >
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-medium">{title}</CardTitle>
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button variant="link" className="p-0 h-auto text-primary">
          Use calculator
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};
