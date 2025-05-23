import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Campaigns from "./pages/Campaigns";
import DeepAnalytics from "./pages/DeepAnalytics";
import Reports from "./pages/Reports";
import MapAnalytics from "./pages/MapAnalytics";
import Performance from "./pages/Performance";
import Revenue from "./pages/Revenue";
import Forecasts from "./pages/Forecasts";
import BudgetCampaign from "./pages/BudgetCampaign";
import BusinessSolutions from "./pages/BusinessSolutions";
import ARWorkingDemoPage from "./pages/ARWorkingDemoPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/index" element={<Index />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/deep-analytics" element={<DeepAnalytics />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/map-analytics" element={<MapAnalytics />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/revenue" element={<Revenue />} />
          <Route path="/forecasts" element={<Forecasts />} />
          <Route path="/budget-campaign" element={<BudgetCampaign />} />
          <Route path="/ar-working-demo" element={<ARWorkingDemoPage />} />
          <Route path="/business-solutions" element={<BusinessSolutions />} />
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
