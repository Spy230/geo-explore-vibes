import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import IndexSimple from "./pages/IndexSimple";
import IndexDebug from "./pages/IndexDebug";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import DataProcessingConsent from "./pages/legal/DataProcessingConsent";
import MarketingConsent from "./pages/legal/MarketingConsent";
import LegalDemo from "./pages/LegalDemo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/debug" element={<IndexDebug />} />
          <Route path="/simple" element={<IndexSimple />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/legal-demo" element={<LegalDemo />} />
          
          {/* Legal pages */}
          <Route path="/legal/privacy" element={<PrivacyPolicy />} />
          <Route path="/legal/terms" element={<TermsOfService />} />
          <Route path="/legal/data-processing" element={<DataProcessingConsent />} />
          <Route path="/legal/marketing" element={<MarketingConsent />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
