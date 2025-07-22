import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ChiSiamo from "./pages/ChiSiamo";
import Servizi from "./pages/Servizi";
import Metodologia from "./pages/Metodologia";
import Incentivi from "./pages/Incentivi";
import Contatti from "./pages/Contatti";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chi-siamo" element={<ChiSiamo />} />
              <Route path="/servizi" element={<Servizi />} />
              <Route path="/metodologia" element={<Metodologia />} />
              <Route path="/incentivi" element={<Incentivi />} />
              <Route path="/contatti" element={<Contatti />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
