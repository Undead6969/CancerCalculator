
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MainLayout } from "@/layouts/MainLayout";
import { Calculator, Heart, HeartPulse, Microscope, Search, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { calculators } from "@/data/calculators";

const Index = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const featuredCalculators = calculators.slice(0, 3);

  const filteredCalculators = searchTerm 
    ? calculators.filter(calc => 
        calc.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        calc.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <MainLayout>
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl mb-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium mb-2">
              <Heart className="h-4 w-4 mr-1 text-medical-accent" />
              <span>Oncology Risk Assessment Tools</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Cancer & Cardio-Oncology Calculators
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Evidence-based calculators and risk assessment tools for healthcare professionals in oncology and cardio-oncology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 min-[400px]:gap-2">
              <Button 
                size="lg" 
                className="bg-medical-accent hover:bg-medical-accent/90"
                onClick={() => navigate('/hfa-icos')}
              >
                <HeartPulse className="mr-2 h-4 w-4" />
                HFA-ICOS Risk Tool
              </Button>
              <Button 
                size="lg" 
                onClick={() => navigate('/calculators')}
              >
                <Calculator className="mr-2 h-4 w-4" />
                All Calculators
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container px-4 md:px-6 mb-12">
        <div className="relative">
          <div className="flex items-center space-x-2 mb-1">
            <Search className="h-4 w-4 text-muted-foreground" />
            <h2 className="text-lg font-medium">Find a Calculator</h2>
          </div>
          <Input
            type="search"
            placeholder="Search by name or description..."
            className="w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {searchTerm && (
            <div className="absolute w-full mt-1 bg-white border rounded-md shadow-lg z-10 max-h-80 overflow-y-auto">
              {filteredCalculators.length > 0 ? (
                filteredCalculators.map((calc) => (
                  <div 
                    key={calc.id}
                    className="p-3 hover:bg-muted cursor-pointer flex justify-between items-center border-b last:border-0"
                    onClick={() => {
                      navigate(calc.route);
                      setSearchTerm("");
                    }}
                  >
                    <div>
                      <div className="font-medium">{calc.title}</div>
                      <div className="text-xs text-muted-foreground">{calc.description}</div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                ))
              ) : (
                <div className="p-3 text-center text-muted-foreground">No calculators found</div>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="container px-4 md:px-6 mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold tracking-tight">Featured Calculators</h2>
          <Button variant="ghost" onClick={() => navigate('/calculators')}>
            View all
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCalculators.map((calc) => (
            <Card 
              key={calc.id}
              className="hover:shadow-md transition-all cursor-pointer border-2"
              onClick={() => navigate(calc.route)}
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg font-medium">{calc.title}</CardTitle>
                  <calc.icon className="h-5 w-5 text-primary" />
                </div>
                <CardDescription>{calc.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="p-0 h-auto text-primary">
                  Use calculator
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container px-4 md:px-6 mb-16">
        <Card className="bg-medical-light border-0">
          <CardContent className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-primary mb-4">HFA-ICOS Cardio-Oncology Risk Assessment Tool</h2>
                <p className="text-muted-foreground mb-6">
                  Assess cardiovascular risk in cancer patients before starting potentially cardiotoxic treatments. This tool was developed by leading cardio-oncology experts.
                </p>
                <Button 
                  size="lg" 
                  className="bg-medical-accent hover:bg-medical-accent/90"
                  onClick={() => navigate('/hfa-icos')}
                >
                  <HeartPulse className="mr-2 h-4 w-4" />
                  Access the Tool
                </Button>
              </div>
              <div className="flex justify-center">
                <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-medical-accent/10 flex items-center justify-center">
                      <HeartPulse className="h-5 w-5 text-medical-accent" />
                    </div>
                    <div>
                      <div className="font-medium">Cardio-Oncology</div>
                      <div className="text-xs text-muted-foreground">Risk assessment</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="p-2 bg-green-50 border border-green-100 rounded-md text-green-800 text-sm">
                      Low Risk
                    </div>
                    <div className="p-2 bg-yellow-50 border border-yellow-100 rounded-md text-yellow-800 text-sm">
                      Moderate Risk
                    </div>
                    <div className="p-2 bg-orange-50 border border-orange-100 rounded-md text-orange-800 text-sm">
                      High Risk
                    </div>
                    <div className="p-2 bg-red-50 border border-red-100 rounded-md text-red-800 text-sm">
                      Very High Risk
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </MainLayout>
  );
};

export default Index;
