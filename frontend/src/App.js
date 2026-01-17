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

  // Pass actual theme to all components
  const getComponentTheme = () => theme;

  return (
    <div className="App">
      {isLoading && <Globe3DPreloader onComplete={() => setIsLoading(false)} />}
      
      <BrowserRouter>
        <UltraHeader theme={getComponentTheme()} />
        <main>
          <Routes>
            <Route path="/" element={<UltraHome theme={getComponentTheme()} />} />
            <Route path="/about" element={<AboutPage theme={getComponentTheme()} />} />
            <Route path="/services" element={<ServicesPage theme={getComponentTheme()} />} />
            <Route path="/strategy" element={<StrategyPage theme={getComponentTheme()} />} />
            <Route path="/global-access" element={<GlobalAccessPage theme={getComponentTheme()} />} />
            <Route path="/faqs" element={<FAQsPage theme={getComponentTheme()} />} />
            <Route path="/contact" element={<PremiumContact theme={theme === 'purple' || theme === 'teal' ? theme : 'purple'} />} />
            {/* Alfa Global Group Companies */}
            <Route path="/alfa-global-wealth-advisors" element={<AlfaGlobalWealthAdvisorsPage theme={getComponentTheme()} />} />
            <Route path="/alfa-star-dynamics" element={<AlfaStarDynamicsPage theme={getComponentTheme()} />} />
            <Route path="/alfa-zillion-traders" element={<AlfaZillionTradersPage theme={getComponentTheme()} />} />
            <Route path="/gazillion-capital" element={<GazillionCapitalPage theme={getComponentTheme()} />} />
            <Route path="/mk-dairy-farms" element={<MKDairyFarmsPage theme={getComponentTheme()} />} />
            <Route path="/cyberhakz" element={<CyberhakzPage theme={getComponentTheme()} />} />
          </Routes>
        </main>
        <UltraFooter theme={getComponentTheme()} />
        
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
