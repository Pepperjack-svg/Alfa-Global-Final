import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobePreloader from './components/GlobePreloader';
import ElegantHeader from './components/ElegantHeader';
import ElegantFooter from './components/ElegantFooter';
import ElegantHome from './pages/ElegantHome';
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
  const [theme, setTheme] = useState('gold'); // 'gold', 'silver', 'purple', 'teal'
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  const themeOptions = [
    { id: 'gold', label: 'Golden White', icon: '✨', color: 'bg-amber-500' },
    { id: 'silver', label: 'Silver White', icon: '🌟', color: 'bg-gray-500' },
    { id: 'purple', label: 'Royal Purple', icon: '💜', color: 'bg-purple-600' },
    { id: 'teal', label: 'Teal Gold', icon: '🌊', color: 'bg-teal-600' }
  ];

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  // Map theme for header/footer (gold/silver for elegant, purple/teal stay same)
  const getComponentTheme = () => {
    if (theme === 'gold' || theme === 'silver') return theme;
    return 'gold'; // Default to gold style for purple/teal since they use dark backgrounds
  };

  return (
    <div className="App">
      {isLoading && <GlobePreloader onComplete={() => setIsLoading(false)} />}
      
      <BrowserRouter>
        <ElegantHeader theme={getComponentTheme()} />
        <main>
          <Routes>
            <Route path="/" element={<ElegantHome theme={getComponentTheme()} />} />
            <Route path="/about" element={<CorporateAbout />} />
            <Route path="/services" element={<CorporateServices />} />
            <Route path="/team" element={<CorporateTeam />} />
            <Route path="/case-studies" element={<CorporateCaseStudies />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<PremiumContact theme={theme === 'purple' || theme === 'teal' ? theme : 'purple'} />} />
          </Routes>
        </main>
        <ElegantFooter theme={getComponentTheme()} />
        
        {/* Theme Switcher */}
        <div className="fixed bottom-6 right-6 z-50">
          {/* Theme Menu */}
          {showThemeMenu && (
            <div className="absolute bottom-16 right-0 bg-white rounded-xl shadow-2xl border border-gray-100 p-2 min-w-[180px]">
              <p className="text-xs text-gray-400 px-3 py-2 uppercase tracking-wider">Choose Theme</p>
              {themeOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => {
                    setTheme(option.id);
                    setShowThemeMenu(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                    theme === option.id ? 'bg-gray-100' : 'hover:bg-gray-50'
                  }`}
                >
                  <span className={`w-6 h-6 ${option.color} rounded-full flex items-center justify-center text-white text-xs`}>
                    {option.icon}
                  </span>
                  <span className="text-sm text-gray-700">{option.label}</span>
                  {theme === option.id && (
                    <svg className="w-4 h-4 text-green-500 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          )}
          
          {/* Theme Toggle Button */}
          <button
            onClick={() => setShowThemeMenu(!showThemeMenu)}
            className="p-4 rounded-full bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all group"
            title="Change Theme"
          >
            <span className="text-xl group-hover:scale-110 transition-transform inline-block">
              {themeOptions.find(t => t.id === theme)?.icon}
            </span>
          </button>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
