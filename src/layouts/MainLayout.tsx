
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ReactNode } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ScrollArea className="flex-1">
        <main className="flex-1 container mx-auto px-4 py-8">
          {children}
        </main>
      </ScrollArea>
      <Footer />
    </div>
  );
};
