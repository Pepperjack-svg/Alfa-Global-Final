import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CorporateHeader from './components/CorporateHeader';
import CorporateFooter from './components/CorporateFooter';
import ProfessionalHome from './pages/ProfessionalHome';
import NewAbout from './pages/NewAbout';
import NewServices from './pages/NewServices';
import TeamPage from './pages/TeamPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CareersPage from './pages/CareersPage';
import InsightsPage from './pages/InsightsPage';
import FAQPage from './pages/FAQPage';
import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <LuxuryHeader />
        <main>
          <Routes>
            <Route path="/" element={<ProfessionalHome />} />
            <Route path="/about" element={<NewAbout />} />
            <Route path="/services" element={<NewServices />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <CorporateFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;