import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Values from '../components/Values';
import Testimonials from '../components/Testimonials';
import Insights from '../components/Insights';

// Simplified Home page with only sections from reference website
const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Values />
      <Testimonials />
      <Insights />
    </div>
  );
};

export default Home;