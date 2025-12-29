import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader';
import PremiumHeader from './components/PremiumHeader';
import PremiumFooter from './components/PremiumFooter';
import PremiumHome from './pages/PremiumHome';
import PremiumContact from './pages/PremiumContact';
import CorporateAbout from './pages/CorporateAbout';
import CorporateServices from './pages/CorporateServices';
import CorporateTeam from './pages/CorporateTeam';
import CorporateCaseStudies from './pages/CorporateCaseStudies';
import CareersPage from './pages/CareersPage';
import InsightsPage from './pages/InsightsPage';
import FAQPage from './pages/FAQPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState('purple'); // 'purple' or 'teal'

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="App">
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      <BrowserRouter>
        <PremiumHeader theme={theme} />
        <main>
          <Routes>
            <Route path="/" element={<PremiumHome theme={theme} />} />
            <Route path="/about" element={<CorporateAbout />} />
            <Route path="/services" element={<CorporateServices />} />
            <Route path="/team" element={<CorporateTeam />} />
            <Route path="/case-studies" element={<CorporateCaseStudies />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<PremiumContact theme={theme} />} />
          </Routes>
        </main>
        <PremiumFooter theme={theme} />
        
        {/* Theme Switcher */}
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setTheme(theme === 'purple' ? 'teal' : 'purple')}
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all"
            title="Switch Theme"
          >
            {theme === 'purple' ? '💜' : '🌊'}
          </button>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
