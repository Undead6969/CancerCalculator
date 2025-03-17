
import { MainLayout } from "@/layouts/MainLayout";
import { CalculatorCard } from "@/components/CalculatorCard";
import { alphabeticSections, calculators, getCalculatorsByLetter } from "@/data/calculators";
import { Calculator, Filter } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categories, getCalculatorsByCategory } from "@/data/categories";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const AllCalculators = () => {
  const [viewMode, setViewMode] = useState<"alphabetical" | "category">("alphabetical");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [_, setLastUsedTool] = useLocalStorage<string | null>("lastUsedTool", null);

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
            Access our comprehensive library of medical calculators and risk assessment tools for oncology specialties.
          </p>
        </div>

        <div className="mb-6 flex justify-center">
          <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as "alphabetical" | "category")} className="w-full max-w-md">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="alphabetical">Alphabetical</TabsTrigger>
              <TabsTrigger value="category">By Category</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {viewMode === "category" && (
          <div className="flex flex-wrap gap-2 mb-6 justify-center">
            <Button 
              variant={selectedCategory === "all" ? "default" : "outline"} 
              size="sm"
              onClick={() => setSelectedCategory("all")}
            >
              All Categories
            </Button>
            {categories.map((category) => (
              <Button 
                key={category.id} 
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        )}

        <div className="space-y-8">
          {viewMode === "alphabetical" ? (
            // Alphabetical view
            alphabeticSections.map((letter) => (
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
                      onClick={() => setLastUsedTool(calculator.route)}
                    />
                  ))}
                </div>
              </section>
            ))
          ) : (
            // Category view
            selectedCategory === "all" ? (
              // All categories
              categories.map((category) => (
                <section key={category.id} id={`category-${category.id}`} className="scroll-mt-20">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground">
                      <category.icon className="h-4 w-4" />
                    </div>
                    <h2 className="text-xl font-semibold">
                      {category.name}
                    </h2>
                    <div className="h-px bg-muted flex-1" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {getCalculatorsByCategory(category.id).map((calculator) => (
                      <CalculatorCard
                        key={calculator.id}
                        title={calculator.title}
                        description={calculator.description}
                        icon={calculator.icon}
                        route={calculator.route}
                        onClick={() => setLastUsedTool(calculator.route)}
                      />
                    ))}
                  </div>
                </section>
              ))
            ) : (
              // Selected category
              <section key={selectedCategory} id={`category-${selectedCategory}`} className="scroll-mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {getCalculatorsByCategory(selectedCategory).map((calculator) => (
                    <CalculatorCard
                      key={calculator.id}
                      title={calculator.title}
                      description={calculator.description}
                      icon={calculator.icon}
                      route={calculator.route}
                      onClick={() => setLastUsedTool(calculator.route)}
                    />
                  ))}
                </div>
              </section>
            )
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default AllCalculators;
