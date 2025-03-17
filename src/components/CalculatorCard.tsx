
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface CalculatorCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  route: string;
  letter?: string;
  className?: string;
}

export const CalculatorCard = ({
  title,
  description,
  icon: Icon,
  route,
  letter,
  className,
}: CalculatorCardProps) => {
  return (
    <Link to={route}>
      <Card className={cn("h-full transition-all hover:shadow-md hover:border-primary/50", className)}>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <CardTitle className="text-lg font-medium">{title}</CardTitle>
            {letter && (
              <div className="flex items-center justify-center h-6 w-6 rounded-full bg-muted text-muted-foreground text-xs font-semibold">
                {letter}
              </div>
            )}
            {Icon && <Icon className="h-5 w-5 text-primary" />}
          </div>
          <CardDescription className="text-sm">{description}</CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex items-center text-sm font-medium text-primary hover:underline">
            Use calculator
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
