import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';

const PremiumHome = ({ theme = 'purple' }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const [calculatorValues, setCalculatorValues] = useState({ amount: 1000000, years: 10, rate: 12 });
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const themes = {
    purple: {
      gradient: 'from-[#1a1a2e] via-[#16213e] to-[#0f0f23]',
      accent: 'purple-400',
      accentBg: 'bg-purple-600',
      accentHover: 'hover:bg-purple-500',
      accentText: 'text-purple-400',
      accentBorder: 'border-purple-500',
      cardBg: 'bg-[#1a1a2e]/50',
      secondary: 'silver'
    },
    teal: {
      gradient: 'from-[#0a2e2b] via-[#0d3d38] to-[#071a18]',
      accent: 'amber-400',
      accentBg: 'bg-teal-600',
      accentHover: 'hover:bg-teal-500',
      accentText: 'text-amber-400',
      accentBorder: 'border-amber-500',
      cardBg: 'bg-[#0a2e2b]/50',
      secondary: 'champagne'
    }
  };

  const t = themes[theme];

  // Animated Counter Hook
  const useCounter = (end, duration = 2000) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
      if (isInView) {
        let startTime;
        const animate = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          setCount(Math.floor(progress * end));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, [isInView, end, duration]);

    return [count, ref];
  };

  const stats = [
    { value: 5000, suffix: '+ Cr', label: 'Assets Under Management' },
    { value: 25, suffix: '+', label: 'Years of Excellence' },
    { value: 500, suffix: '+', label: 'Satisfied Clients' },
    { value: 15, suffix: '+', label: 'Global Markets' }
  ];

  const services = [
    { icon: '💎', title: 'Wealth Management', desc: 'Comprehensive wealth solutions for HNIs and family offices', features: ['Portfolio Optimization', 'Risk Assessment', 'Tax Efficiency'] },
    { icon: '📊', title: 'Investment Advisory', desc: 'Strategic guidance tailored to your financial goals', features: ['Market Analysis', 'Asset Allocation', 'Performance Tracking'] },
    { icon: '🏛️', title: 'Family Office', desc: 'Multi-generational wealth preservation strategies', features: ['Succession Planning', 'Governance', 'Legacy Building'] },
    { icon: '🌍', title: 'Global Investments', desc: 'Access to international markets and opportunities', features: ['Cross-Border Investments', 'Currency Management', 'Global Diversification'] },
    { icon: '📈', title: 'Portfolio Management', desc: 'Active management of diversified portfolios', features: ['Real-time Monitoring', 'Rebalancing', 'Reporting'] },
    { icon: '🔒', title: 'Estate Planning', desc: 'Secure your legacy for future generations', features: ['Will Planning', 'Trust Setup', 'Asset Protection'] }
  ];

  const testimonials = [
    { content: "Alfa Global transformed our investment strategy. Their expertise in global markets is unmatched. We've seen consistent growth even in volatile markets.", author: "Suresh Mehta", role: "CEO, Mehta Industries", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" },
    { content: "Professional, transparent, and results-driven. The team's dedication to understanding our unique needs made all the difference.", author: "Kavita Reddy", role: "Family Office Principal", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" },
    { content: "Their research-driven approach has consistently delivered above-market returns. A truly world-class wealth management experience.", author: "Amit Patel", role: "HNI Investor", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" }
  ];

  const faqs = [
    { q: "What is the minimum investment amount?", a: "Our services cater to high-net-worth individuals with investable assets starting from ₹1 Crore. We offer customized solutions based on your financial goals and risk appetite." },
    { q: "How do you ensure portfolio security?", a: "We employ institutional-grade security measures including encrypted communications, segregated accounts, and regular third-party audits. Your investments are held with SEBI-registered custodians." },
    { q: "What are your fee structures?", a: "We operate on a transparent fee model combining asset-based fees and performance-linked incentives. This aligns our interests with your investment success." },
    { q: "How often will I receive portfolio updates?", a: "You'll receive monthly comprehensive reports, quarterly performance reviews, and have 24/7 access to our client portal for real-time tracking." }
  ];

  const insights = [
    { title: 'Market Outlook 2025', category: 'Research', date: 'Dec 2024', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400', read: '5 min read' },
    { title: 'Alternative Investments Guide', category: 'Education', date: 'Nov 2024', image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400', read: '8 min read' },
    { title: 'Global Economic Trends', category: 'Analysis', date: 'Oct 2024', image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400', read: '6 min read' }
  ];

  const team = [
    { name: 'Rajesh Kumar', role: 'Managing Director', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400' },
    { name: 'Priya Sharma', role: 'Chief Investment Officer', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400' },
    { name: 'Vikram Singh', role: 'Head of Research', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400' },
    { name: 'Anita Desai', role: 'Client Relations', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400' }
  ];

  const calculateReturns = () => {
    const { amount, years, rate } = calculatorValues;
    return Math.round(amount * Math.pow(1 + rate / 100, years));
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const StatCounter = ({ value, suffix, label }) => {
    const [count, ref] = useCounter(value);
    return (
      <motion.div ref={ref} className="text-center">
        <div className={`text-4xl md:text-5xl font-bold ${t.accentText}`}>
          {count}{suffix}
        </div>
        <div className="text-white/60 text-sm mt-2 uppercase tracking-wider">{label}</div>
      </motion.div>
    );
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b ${t.gradient}`}>
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920')] bg-cover bg-center" />
          <div className={`absolute inset-0 bg-gradient-to-r ${t.gradient} opacity-90`} />
          
          {/* Floating Particles */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 rounded-full ${theme === 'purple' ? 'bg-purple-400' : 'bg-amber-400'}`}
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
              animate={{ y: [-20, 20], opacity: [0.2, 0.8, 0.2] }}
              transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
            />
          ))}
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className={`inline-block px-4 py-2 rounded-full ${t.cardBg} backdrop-blur-sm ${t.accentText} text-sm font-medium mb-6 border ${t.accentBorder}/30`}>
                ✨ Trusted by 500+ HNI Families
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              Building Wealth.
              <br />
              <span className={t.accentText}>Creating Legacies.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-white/70 mb-10 max-w-2xl leading-relaxed"
            >
              Experience world-class wealth management with a firm that has pioneered unbiased advisory in India. Your financial legacy deserves nothing less.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className={`px-8 py-4 ${t.accentBg} ${t.accentHover} text-white font-semibold rounded-full transition-all hover:shadow-lg hover:shadow-${t.accent}/30 flex items-center gap-2`}
              >
                Start Your Journey
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
              >
                Explore Services
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10"
            >
              {['SEBI Registered', 'IFSCA Compliant', 'ISO Certified'].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-white/50 text-sm">
                  <svg className={`w-5 h-5 ${t.accentText}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {badge}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className={`w-6 h-10 border-2 ${t.accentBorder}/50 rounded-full flex justify-center pt-2`}>
            <div className={`w-1.5 h-3 ${t.accentBg} rounded-full`} />
          </div>
        </motion.div>
      </section>

      {/* Live Ticker */}
      <section className={`py-4 ${t.cardBg} backdrop-blur-sm border-y border-white/10`}>
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-8">
                {['SENSEX: 72,500 ▲ 0.8%', 'NIFTY: 21,850 ▲ 0.6%', 'GOLD: ₹62,450 ▼ 0.2%', 'USD/INR: 83.25 ▲ 0.1%', 'CRUDE: $78.50 ▲ 1.2%'].map((item, j) => (
                  <span key={j} className={`text-sm ${item.includes('▲') ? 'text-green-400' : 'text-red-400'}`}>
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <StatCounter key={i} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className={`${t.accentText} text-sm tracking-[0.2em] uppercase`}>Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Comprehensive Solutions</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`p-6 rounded-2xl ${t.cardBg} backdrop-blur-sm border border-white/10 hover:border-${t.accent}/50 transition-all group`}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-white/60 text-sm mb-4">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((f, j) => (
                    <li key={j} className={`text-sm ${t.accentText} flex items-center gap-2`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Calculator */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`p-8 md:p-12 rounded-3xl ${t.cardBg} backdrop-blur-sm border border-white/10`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className={`${t.accentText} text-sm tracking-[0.2em] uppercase`}>Planning Tool</span>
                <h2 className="text-3xl font-bold text-white mt-2 mb-6">Investment Calculator</h2>
                <p className="text-white/60 mb-8">Estimate your potential returns with our simple calculator. Adjust the values to see how your wealth could grow.</p>
                
                <div className="space-y-6">
                  <div>
                    <label className="text-white/80 text-sm mb-2 block">Investment Amount (₹)</label>
                    <input
                      type="range"
                      min="100000"
                      max="10000000"
                      step="100000"
                      value={calculatorValues.amount}
                      onChange={(e) => setCalculatorValues({ ...calculatorValues, amount: parseInt(e.target.value) })}
                      className={`w-full h-2 rounded-full appearance-none cursor-pointer ${t.accentBg}`}
                    />
                    <div className={`${t.accentText} font-semibold mt-2`}>₹{(calculatorValues.amount / 100000).toFixed(1)} Lakhs</div>
                  </div>
                  
                  <div>
                    <label className="text-white/80 text-sm mb-2 block">Investment Period (Years)</label>
                    <input
                      type="range"
                      min="1"
                      max="30"
                      value={calculatorValues.years}
                      onChange={(e) => setCalculatorValues({ ...calculatorValues, years: parseInt(e.target.value) })}
                      className={`w-full h-2 rounded-full appearance-none cursor-pointer ${t.accentBg}`}
                    />
                    <div className={`${t.accentText} font-semibold mt-2`}>{calculatorValues.years} Years</div>
                  </div>
                  
                  <div>
                    <label className="text-white/80 text-sm mb-2 block">Expected Return (%)</label>
                    <input
                      type="range"
                      min="5"
                      max="25"
                      value={calculatorValues.rate}
                      onChange={(e) => setCalculatorValues({ ...calculatorValues, rate: parseInt(e.target.value) })}
                      className={`w-full h-2 rounded-full appearance-none cursor-pointer ${t.accentBg}`}
                    />
                    <div className={`${t.accentText} font-semibold mt-2`}>{calculatorValues.rate}% p.a.</div>
                  </div>
                </div>
              </div>

              <div className={`p-8 rounded-2xl bg-gradient-to-br ${t.gradient} border border-white/20 text-center`}>
                <p className="text-white/60 mb-2">Estimated Future Value</p>
                <div className={`text-5xl font-bold ${t.accentText} mb-4`}>
                  ₹{(calculateReturns() / 10000000).toFixed(2)} Cr
                </div>
                <p className="text-white/40 text-sm mb-6">After {calculatorValues.years} years</p>
                <div className="grid grid-cols-2 gap-4 text-left">
                  <div className="p-4 rounded-xl bg-white/5">
                    <p className="text-white/60 text-xs">Principal</p>
                    <p className="text-white font-semibold">₹{(calculatorValues.amount / 100000).toFixed(1)}L</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5">
                    <p className="text-white/60 text-xs">Returns</p>
                    <p className={`${t.accentText} font-semibold`}>₹{((calculateReturns() - calculatorValues.amount) / 100000).toFixed(1)}L</p>
                  </div>
                </div>
                <Link to="/contact" className={`mt-6 inline-block px-6 py-3 ${t.accentBg} ${t.accentHover} text-white rounded-full text-sm font-medium`}>
                  Start Investing →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className={`${t.accentText} text-sm tracking-[0.2em] uppercase`}>Leadership</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Meet Our Experts</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group text-center"
              >
                <div className={`relative overflow-hidden rounded-2xl mb-4 border-2 border-transparent group-hover:${t.accentBorder} transition-all`}>
                  <img src={member.image} alt={member.name} className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                </div>
                <h3 className="text-white font-semibold">{member.name}</h3>
                <p className={`${t.accentText} text-sm`}>{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className={`${t.accentText} text-sm tracking-[0.2em] uppercase`}>Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Client Success Stories</h2>
          </motion.div>

          <div className={`relative p-8 md:p-12 rounded-3xl ${t.cardBg} backdrop-blur-sm border border-white/10`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="text-center"
              >
                <img src={testimonials[activeTestimonial].image} alt="" className="w-20 h-20 rounded-full mx-auto mb-6 border-2 border-white/20" />
                <p className="text-xl md:text-2xl text-white/90 italic mb-6 max-w-3xl mx-auto">"{testimonials[activeTestimonial].content}"</p>
                <p className="text-white font-semibold">{testimonials[activeTestimonial].author}</p>
                <p className={`${t.accentText} text-sm`}>{testimonials[activeTestimonial].role}</p>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-3 h-3 rounded-full transition-all ${activeTestimonial === i ? t.accentBg : 'bg-white/20'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center mb-12">
            <div>
              <span className={`${t.accentText} text-sm tracking-[0.2em] uppercase`}>Insights</span>
              <h2 className="text-3xl font-bold text-white mt-2">Latest Research</h2>
            </div>
            <Link to="/insights" className={`${t.accentText} hover:underline flex items-center gap-2`}>
              View All <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className={`rounded-2xl overflow-hidden ${t.cardBg} backdrop-blur-sm border border-white/10 group`}
              >
                <div className="aspect-video overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs ${t.accentText} uppercase`}>{item.category}</span>
                    <span className="text-white/40 text-xs">{item.date}</span>
                    <span className="text-white/40 text-xs">• {item.read}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-white/80 transition-colors">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className={`${t.accentText} text-sm tracking-[0.2em] uppercase`}>FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Common Questions</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-xl ${t.cardBg} backdrop-blur-sm border border-white/10 overflow-hidden`}
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left"
                >
                  <span className="text-white font-medium">{faq.q}</span>
                  <svg className={`w-5 h-5 ${t.accentText} transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-white/60">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`relative p-12 md:p-16 rounded-3xl overflow-hidden`}
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920')] bg-cover bg-center" />
            <div className={`absolute inset-0 bg-gradient-to-r ${t.gradient} opacity-90`} />
            
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build Your Legacy?</h2>
              <p className="text-white/70 mb-8">Join 500+ families who trust us with their wealth. Schedule a consultation with our experts today.</p>
              <Link to="/contact" className={`inline-flex items-center gap-2 px-8 py-4 ${t.accentBg} ${t.accentHover} text-white font-semibold rounded-full transition-all hover:shadow-lg`}>
                Schedule Consultation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PremiumHome;
