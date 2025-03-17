
import { MainLayout } from "@/layouts/MainLayout";
import { CalculatorCard } from "@/components/CalculatorCard";
import { alphabeticSections, getCalculatorsByLetter } from "@/data/calculators";
import { Calculator } from "lucide-react";

const AllCalculators = () => {
  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-2">
            <Calculator className="w-4 h-4 mr-1" />
            Tools
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Medical Calculators & Tools</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Access our comprehensive library of medical calculators and risk assessment tools for oncology and cardiology.
          </p>
        </div>

        <div className="space-y-8">
          {alphabeticSections.map((letter) => (
            <section key={letter} id={`section-${letter}`} className="scroll-mt-20">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold">
                  {letter}
                </div>
                <h2 className="text-xl font-semibold">
                  {letter}
                </h2>
                <div className="h-px bg-muted flex-1" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {getCalculatorsByLetter(letter).map((calculator) => (
                  <CalculatorCard
                    key={calculator.id}
                    title={calculator.title}
                    description={calculator.description}
                    icon={calculator.icon}
                    route={calculator.route}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default AllCalculators;
