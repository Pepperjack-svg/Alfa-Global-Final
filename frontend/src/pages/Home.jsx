import React from 'react';
import Hero from '../components/Hero';
import Statistics from '../components/Statistics';
import Services from '../components/Services';
import About from '../components/About';
import Values from '../components/Values';
import InvestmentCalculator from '../components/InvestmentCalculator';
import Testimonials from '../components/Testimonials';
import Insights from '../components/Insights';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <div>
      <Hero />
      <Statistics />
      <Services />
      <About />
      <Values />
      <InvestmentCalculator />
      <Testimonials />
      <Insights />
      <FAQ />
    </div>
  );
};

export default Home;