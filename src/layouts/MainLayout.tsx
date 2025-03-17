
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ReactNode, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300">
      <Header />
      <ScrollArea className="flex-1">
        <motion.main 
          className="flex-1 container mx-auto px-4 py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ 
            duration: 0.3,
            ease: "easeInOut"
          }}
        >
          {children}
        </motion.main>
      </ScrollArea>
      <Footer />
    </div>
  );
};
