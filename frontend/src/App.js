import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Globe3DPreloader from './components/Globe3DPreloader';
import UltraHeader from './components/UltraHeader';
import UltraFooter from './components/UltraFooter';
import FloatingWidgets from './components/FloatingWidgets';
import UltraHome from './pages/UltraHome';
import PremiumContact from './pages/PremiumContact';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import StrategyPage from './pages/StrategyPage';
import GlobalAccessPage from './pages/GlobalAccessPage';
import FAQsPage from './pages/FAQsPage';
import AlfaGlobalWealthAdvisorsPage from './pages/AlfaGlobalWealthAdvisorsPage';
import AlfaStarDynamicsPage from './pages/AlfaStarDynamicsPage';
import AlfaZillionTradersPage from './pages/AlfaZillionTradersPage';
import GazillionCapitalPage from './pages/GazillionCapitalPage';
import MKDairyFarmsPage from './pages/MKDairyFarmsPage';
import CyberhakzPage from './pages/CyberhakzPage';
import DhanveirGroupsShippingPage from './pages/DhanveirGroupsShippingPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import TeamPage from './pages/TeamPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const theme = 'teal'; // Fixed teal theme across the website

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="App">
      {isLoading && <Globe3DPreloader onComplete={() => setIsLoading(false)} />}
      
      <BrowserRouter>
        <UltraHeader theme={theme} />
        <main>
          <Routes>
            <Route path="/" element={<UltraHome theme={theme} />} />
            <Route path="/about" element={<AboutPage theme={theme} />} />
            <Route path="/services" element={<ServicesPage theme={theme} />} />
            <Route path="/strategy" element={<StrategyPage theme={theme} />} />
            <Route path="/global-access" element={<GlobalAccessPage theme={theme} />} />
            <Route path="/faqs" element={<FAQsPage theme={theme} />} />
            <Route path="/contact" element={<PremiumContact theme={theme} />} />
            {/* Alfa Global Group Companies */}
            <Route path="/alfa-global-wealth-advisors" element={<AlfaGlobalWealthAdvisorsPage theme={theme} />} />
            <Route path="/alfa-star-dynamics" element={<AlfaStarDynamicsPage theme={theme} />} />
            <Route path="/alfa-zillion-traders" element={<AlfaZillionTradersPage theme={theme} />} />
            <Route path="/gazillion-capital" element={<GazillionCapitalPage theme={theme} />} />
            <Route path="/mk-dairy-farms" element={<MKDairyFarmsPage theme={theme} />} />
            <Route path="/cyberhakz" element={<CyberhakzPage theme={theme} />} />
            <Route path="/dhanveir-groups-shipping" element={<DhanveirGroupsShippingPage theme={theme} />} />
            {/* Legal Pages */}
            <Route path="/privacy" element={<PrivacyPage theme={theme} />} />
            <Route path="/terms" element={<TermsPage theme={theme} />} />
            <Route path="/team" element={<TeamPage theme={theme} />} />
          </Routes>
        </main>
        <UltraFooter theme={theme} />
        
        {/* Floating Widgets (WhatsApp, Back to Top, Cookie Consent, Scroll Progress) */}
        <FloatingWidgets theme={theme} />
      </BrowserRouter>
    </div>
  );
}

export default App;
