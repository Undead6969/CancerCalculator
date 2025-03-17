
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HfaIcos from "./pages/HfaIcos";
import AllCalculators from "./pages/AllCalculators";
import About from "./pages/About";
import BSACalculator from "./pages/BSACalculator";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { calculators } from "./data/calculators";
import { useEffect } from "react";
import { PageTitle } from "./components/PageTitle";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const App = () => {
  // This effect will log any missing calculator page implementations
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const validRoutes = [
        '/',
        '/about',
        '/calculators',
        '/hfa-icos',
        '/calculators/bsa',
        '*'
      ];
      
      const missingRoutes = calculators
        .filter(calc => !validRoutes.includes(calc.route))
        .map(calc => ({
          id: calc.id,
          title: calc.title,
          route: calc.route
        }));
      
      if (missingRoutes.length > 0) {
        console.warn('Warning: The following calculator pages need to be implemented:', missingRoutes);
      }
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <ErrorBoundary>
            <BrowserRouter>
              <PageTitle />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/hfa-icos" element={<HfaIcos />} />
                <Route path="/calculators" element={<AllCalculators />} />
                <Route path="/about" element={<About />} />
                <Route path="/calculators/bsa" element={<BSACalculator />} />
                {/* We should add all other calculator routes here */}
                {/* For now, catch-all route will handle missing implementations */}
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </ErrorBoundary>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
