import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import Strategy from './pages/Strategy';
import GlobalAccess from './pages/GlobalAccess';
import Companies from './pages/Companies';
import CompanyDetail from './pages/CompanyDetail';
import BusinessNews from './pages/BusinessNews';
import FAQPage from './pages/FAQPage';
import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/strategy" element={<Strategy />} />
            <Route path="/global-access" element={<GlobalAccess />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/companies/:companySlug" element={<CompanyDetail />} />
            <Route path="/business-news" element={<BusinessNews />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;