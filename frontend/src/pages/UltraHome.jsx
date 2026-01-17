import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useInView, AnimatePresence, useSpring, useTransform } from 'framer-motion';

const UltraHome = ({ theme = 'gold' }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeService, setActiveService] = useState(0);
  const [calculatorValues, setCalculatorValues] = useState({ amount: 1000000, years: 10, rate: 12 });
  const [currentTime, setCurrentTime] = useState(new Date());
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const { scrollYProgress: heroScrollProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const heroY = useTransform(heroScrollProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Theme configurations
  const themes = {
    gold: {
      accent: 'amber-600', accentText: 'text-amber-600', accentBg: 'bg-amber-600', accentBgLight: 'bg-amber-50',
      accentBorder: 'border-amber-200', accentHover: 'hover:bg-amber-700', gradient: 'from-amber-600 to-amber-700',
      heroAccent: 'text-amber-400', heroAccentBg: 'bg-amber-400', heroBg: 'from-slate-950 via-slate-900 to-slate-950',
      statsBg: 'bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600', statsText: 'text-white',
      checkColor: 'text-amber-500', glowColor: 'rgba(251, 191, 36, 0.1)'
    },
    silver: {
      accent: 'gray-600', accentText: 'text-gray-700', accentBg: 'bg-gray-700', accentBgLight: 'bg-gray-100',
      accentBorder: 'border-gray-300', accentHover: 'hover:bg-gray-800', gradient: 'from-gray-700 to-gray-800',
      heroAccent: 'text-gray-300', heroAccentBg: 'bg-gray-300', heroBg: 'from-gray-950 via-gray-900 to-gray-950',
      statsBg: 'bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700', statsText: 'text-white',
      checkColor: 'text-gray-500', glowColor: 'rgba(156, 163, 175, 0.1)'
    },
    purple: {
      accent: 'purple-600', accentText: 'text-purple-600', accentBg: 'bg-purple-600', accentBgLight: 'bg-purple-50',
      accentBorder: 'border-purple-200', accentHover: 'hover:bg-purple-700', gradient: 'from-purple-600 to-purple-700',
      heroAccent: 'text-purple-400', heroAccentBg: 'bg-purple-400', heroBg: 'from-purple-950 via-slate-950 to-purple-950',
      statsBg: 'bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700', statsText: 'text-white',
      checkColor: 'text-purple-500', glowColor: 'rgba(168, 85, 247, 0.1)'
    },
    teal: {
      accent: 'teal-600', accentText: 'text-teal-600', accentBg: 'bg-teal-600', accentBgLight: 'bg-teal-50',
      accentBorder: 'border-teal-200', accentHover: 'hover:bg-teal-700', gradient: 'from-teal-600 to-teal-700',
      heroAccent: 'text-teal-400', heroAccentBg: 'bg-teal-400', heroBg: 'from-teal-950 via-slate-950 to-teal-950',
      statsBg: 'bg-gradient-to-r from-teal-700 via-teal-600 to-teal-700', statsText: 'text-white',
      checkColor: 'text-teal-500', glowColor: 'rgba(45, 212, 191, 0.1)'
    }
  };

  const t = themes[theme] || themes.gold;

  // Animated Counter
  const useAnimatedCounter = (end, duration = 2500) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    useEffect(() => {
      if (isInView) {
        let startTime;
        const animate = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          const easeOut = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(easeOut * end));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, [isInView, end, duration]);
    return [count, ref];
  };

  // Stats - exact values from reference
  const stats = [
    { value: 585, prefix: '₹', suffix: 'Cr+', label: 'Assets Under Management' },
    { value: 2, suffix: '+', label: 'Years of Excellence' },
    { value: 58, suffix: '+', label: 'Satisfied Clients' },
    { value: 1, suffix: '+', label: 'Global Markets' }
  ];

  // Market indices
  const marketData = [
    { name: 'SENSEX', value: '72,568.45', change: '+0.85%', up: true },
    { name: 'NIFTY 50', value: '22,045.30', change: '+0.72%', up: true },
    { name: 'GOLD', value: '₹62,450', change: '-0.12%', up: false },
    { name: 'USD/INR', value: '83.12', change: '+0.05%', up: true }
  ];

  // Client logos from reference site
  const clientLogos = [
    { name: 'Partner 1', logo: 'https://websitesbytechpioneers.com/alfaglobalnew/image/client-1.png' },
    { name: 'Partner 2', logo: 'https://websitesbytechpioneers.com/alfaglobalnew/image/client-2.png' },
    { name: 'Partner 3', logo: 'https://websitesbytechpioneers.com/alfaglobalnew/image/client-3.png' },
    { name: 'Partner 4', logo: 'https://websitesbytechpioneers.com/alfaglobalnew/image/client-4.png' },
    { name: 'Partner 5', logo: 'https://websitesbytechpioneers.com/alfaglobalnew/image/client-5.png' },
    { name: 'Partner 6', logo: 'https://websitesbytechpioneers.com/alfaglobalnew/image/client-6.png' },
    { name: 'Partner 7', logo: 'https://websitesbytechpioneers.com/alfaglobalnew/image/client-7.png' },
    { name: 'Partner 8', logo: 'https://websitesbytechpioneers.com/alfaglobalnew/image/client-8.png' }
  ];

  // Services from reference site - exact content
  const services = [
    {
      icon: 'https://websitesbytechpioneers.com/alfaglobalnew/image/investment-chart.png',
      title: 'Alternative Investments & Funds',
      desc: 'Structured investment platforms, AIFs, hedge-style LLPs, and specialized capital strategies.',
      features: ['Private Equity Funds', 'Hedge Fund Strategies', 'Alternative Investment Funds', 'Structured Products'],
      image: 'https://websitesbytechpioneers.com/alfaglobalnew/image/financial-advisory.jpg'
    },
    {
      icon: 'https://websitesbytechpioneers.com/alfaglobalnew/image/strategic-partnerships.png',
      title: 'Strategic Ventures & Holdings',
      desc: 'Proprietary investments in companies, joint ventures, and scalable businesses across sectors.',
      features: ['Direct Equity Investments', 'Joint Venture Partnerships', 'Growth Capital', 'Management Buyouts'],
      image: 'https://websitesbytechpioneers.com/alfaglobalnew/image/wealth-management.jpg'
    },
    {
      icon: 'https://websitesbytechpioneers.com/alfaglobalnew/image/project%20(1).png',
      title: 'High-Impact Projects',
      desc: 'Initiating and funding projects in industries such as finance, infrastructure, shipping, manufacturing, and technology.',
      features: ['Infrastructure Development', 'Manufacturing Projects', 'Maritime Investments', 'Technology Ventures'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800'
    },
    {
      icon: 'https://websitesbytechpioneers.com/alfaglobalnew/image/partnership.png',
      title: 'Global Partnerships & Advisory',
      desc: 'Cross-border alliances, family office structures, and institutional collaborations.',
      features: ['Family Office Services', 'Cross-Border M&A', 'Strategic Advisory', 'Institutional Consulting'],
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800'
    }
  ];

  const coreValues = [
    { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>, title: 'Excellence', desc: 'Highest standards.' },
    { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>, title: 'Integrity', desc: 'Transparency & ethics.' },
    { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>, title: 'Innovation', desc: 'Evolving approaches.' },
    { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>, title: 'Partnership', desc: 'Lasting relationships.' },
    { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>, title: 'Impact', desc: 'Positive change.' },
    { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>, title: 'Vision', desc: 'Multi-generational.' }
  ];

  const team = [
    { name: 'Jordan Lee', role: 'Head of Creative', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400' },
    { name: 'Chloe Tan', role: 'Senior SEO Specialist', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400' },
    { name: 'Daniel Cruz', role: 'Performance Marketing Lead', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400' },
    { name: 'Olivia Bennett', role: 'Creative Director', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400' }
  ];

  const testimonials = [
    { content: "Alfa Global has transformed our investment strategy. Their expertise in global markets is unmatched.", author: "Suresh Mehta", role: "CEO, Mehta Industries", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" },
    { content: "Professional, transparent, and results-driven. The team's dedication made all the difference.", author: "Kavita Reddy", role: "Family Office Principal", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" },
    { content: "Research-driven approach with consistent above-market returns. World-class experience.", author: "Amit Patel", role: "HNI Investor", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" }
  ];

  const faqs = [
    { q: "What is the minimum investment amount?", a: "Our services cater to HNIs with investable assets starting from ₹1 Crore." },
    { q: "How do you ensure portfolio security?", a: "We employ institutional-grade security with encrypted communications and segregated accounts." },
    { q: "What are your fee structures?", a: "Transparent fee model combining asset-based fees and performance-linked incentives." },
    { q: "How often will I receive updates?", a: "Monthly reports, quarterly reviews, and 24/7 portal access." }
  ];

  const insights = [
    { title: 'Market Outlook 2025', category: 'Research', date: 'Dec 2024', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400', read: '5 min' },
    { title: 'Alternative Investments', category: 'Education', date: 'Nov 2024', image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400', read: '8 min' },
    { title: 'Global Economic Trends', category: 'Analysis', date: 'Oct 2024', image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400', read: '6 min' }
  ];

  const calculateReturns = () => {
    const { amount, years, rate } = calculatorValues;
    return Math.round(amount * Math.pow(1 + rate / 100, years));
  };

  useEffect(() => {
    const timer = setInterval(() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const StatItem = ({ value, prefix = '', suffix = '', label }) => {
    const [count, ref] = useAnimatedCounter(value);
    return (
      <div ref={ref} className="text-center px-4 py-6 md:py-8">
        <div className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${t.statsText}`}>{prefix}{count}{suffix}</div>
        <div className={`${t.statsText} text-xs sm:text-sm mt-2 uppercase tracking-wider opacity-90`}>{label}</div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Scroll Progress */}
      <motion.div className={`fixed top-0 left-0 right-0 h-1 ${t.accentBg} origin-left z-[100]`} style={{ scaleX }} />

      {/* HERO SECTION - Content from reference site */}
      <section ref={heroRef} className={`relative min-h-screen flex items-center bg-gradient-to-br ${t.heroBg} overflow-hidden`}>
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full" style={{ background: `radial-gradient(circle, ${t.glowColor} 0%, transparent 70%)`, transform: 'translate(-30%, -30%)' }} />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full" style={{ background: `radial-gradient(circle, ${t.glowColor} 0%, transparent 70%)`, transform: 'translate(30%, 30%)' }} />
          </div>
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
            <pattern id="diagonalLines" width="40" height="40" patternUnits="userSpaceOnUse">
              <line x1="0" y1="40" x2="40" y2="0" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#diagonalLines)" />
          </svg>
        </div>

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 w-full">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 pt-32 sm:pt-40 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                {/* Logo from reference */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4 mb-6">
                  <img src="https://websitesbytechpioneers.com/alfaglobalnew/image/alfa-global-logo-removebg-preview.png" alt="Alfa Global" className="h-16 w-auto" />
                </motion.div>

                {/* Main Headline - from reference */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
                >
                  Beyond Capital.
                  <br />
                  <span className={t.heroAccent}>Building Futures.</span>
                </motion.h1>

                {/* Description - exact from reference */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg sm:text-xl text-white/60 mb-10 max-w-xl leading-relaxed"
                >
                  Alfa Global Group is a diversified global organization committed to creating enduring value across industries and generations. 
                  We invest in transformative ideas, strategic ventures, and high impact projects that shape the future of capital, business, and society.
                </motion.p>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-wrap gap-4 mb-10"
                >
                  <Link to="/contact" className={`px-8 py-4 ${t.accentBg} ${t.accentHover} text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl`}>
                    Explore Our World
                  </Link>
                  <Link to="/services" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                    Our Services
                  </Link>
                </motion.div>

                {/* Trust Badges */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="flex flex-wrap items-center gap-6">
                  {['SEBI Registered', 'IFSCA Compliant', 'ISO 27001'].map((badge, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <svg className={`w-4 h-4 ${t.heroAccent}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/60 text-sm">{badge}</span>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Performance Card */}
              <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="lg:col-span-5 hidden lg:block">
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
                  <h3 className="text-white/80 text-sm font-medium uppercase tracking-wider mb-6">Performance Overview</h3>
                  <div className="space-y-6">
                    {[
                      { label: 'Assets Under Management', value: '₹585Cr+', sublabel: '+24% YoY' },
                      { label: 'Client Portfolios', value: '58+', sublabel: 'Active accounts' },
                      { label: 'Avg. Annual Returns', value: '18.5%', sublabel: 'Since inception' },
                      { label: 'Client Satisfaction', value: '98%', sublabel: 'NPS Score' }
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center pb-4 border-b border-white/5 last:border-0 last:pb-0">
                        <div>
                          <p className="text-white/50 text-xs uppercase tracking-wide">{item.label}</p>
                          <p className="text-white/40 text-xs mt-1">{item.sublabel}</p>
                        </div>
                        <p className={`text-2xl font-bold ${t.heroAccent}`}>{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="flex flex-col items-center text-white/30">
            <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
          </div>
        </motion.div>
      </section>

      {/* LIVE MARKET TICKER */}
      <div className="bg-slate-900 border-y border-white/5 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-3">
          <div className="flex items-center gap-8 overflow-x-auto scrollbar-hide">
            <span className="text-white/40 text-xs uppercase tracking-wider shrink-0">Live Markets</span>
            {marketData.map((item, i) => (
              <div key={i} className="flex items-center gap-3 shrink-0">
                <span className="text-white/70 text-sm font-medium">{item.name}</span>
                <span className="text-white text-sm">{item.value}</span>
                <span className={`text-xs ${item.up ? 'text-green-400' : 'text-red-400'}`}>{item.change}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STATS SECTION */}
      <section className={`py-6 sm:py-8 ${t.statsBg}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
            {stats.map((stat, i) => <StatItem key={i} {...stat} />)}
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS - from reference site */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <p className="text-center text-gray-400 text-sm uppercase tracking-widest mb-8">Powering Success for Top Brands</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((client, i) => (
              <motion.img
                key={i}
                src={client.logo}
                alt={client.name}
                className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.6, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION - Content from reference */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>Group Overview</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Alfa Global Group is a diversified global organization driven by vision, innovation, and impact. We invest in ideas, businesses, 
                and projects that shape industries, empower legacies, and create sustainable value across generations. Our strength lies in combining 
                capital markets expertise with entrepreneurial execution to build opportunities that go beyond conventional boundaries.
              </p>
              <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>Our Purpose</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">Why We Exist</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We believe wealth is not just financial capital, it is the ability to create, transform, and leave behind something meaningful. 
                Alfa Global Group exists to channel resources, knowledge, and strategy into ventures that redefine growth, spark innovation, 
                and contribute to a better future for our clients, partners, and communities.
              </p>
              <Link to="/about" className={`inline-flex items-center gap-2 ${t.accentText} font-semibold hover:gap-3 transition-all`}>
                Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
              </Link>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="https://websitesbytechpioneers.com/alfaglobalnew/image/financial-advisory.jpg" alt="Financial Advisory" className="rounded-2xl shadow-2xl w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES - with icons from reference */}
      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>What We Do</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Our Services</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveService(i)}
                  className={`p-6 rounded-xl cursor-pointer transition-all ${
                    activeService === i ? `bg-white shadow-lg border-l-4 ${theme === 'gold' ? 'border-amber-500' : theme === 'silver' ? 'border-gray-500' : theme === 'purple' ? 'border-purple-500' : 'border-teal-500'}` : 'bg-white/50 hover:bg-white border-l-4 border-transparent'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <img src={service.icon} alt={service.title} className="w-12 h-12 object-contain" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{service.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div key={activeService} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-2xl overflow-hidden shadow-xl lg:sticky lg:top-32">
              <div className="aspect-video overflow-hidden">
                <img src={services[activeService].image} alt={services[activeService].title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{services[activeService].title}</h3>
                <ul className="space-y-3 mb-6">
                  {services[activeService].features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-gray-600">
                      <svg className={`w-5 h-5 ${t.checkColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/services" className={`inline-flex items-center gap-2 px-6 py-3 ${t.accentBg} text-white rounded-lg font-medium ${t.accentHover} transition-all`}>Learn More</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 sm:py-24 bg-slate-900 text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className={`${t.heroAccent} text-sm font-semibold tracking-widest uppercase`}>Why Alfa Global</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3">The Alfa Advantage</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>, title: 'Institutional-Grade Security', desc: 'Bank-level encryption, segregated accounts, and multi-factor authentication protect your investments.' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>, title: 'Research-Driven Approach', desc: 'Our proprietary research framework combines quantitative analysis with fundamental insights.' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>, title: 'Dedicated Relationship Managers', desc: 'Personal attention from experienced professionals who understand your unique needs.' }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <div className={`${t.heroAccent} mb-4`}>{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>Our Foundation</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Core Values</h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {coreValues.map((value, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`p-6 rounded-xl border ${t.accentBorder} text-center hover:shadow-md transition-all`}>
                <div className={`${t.accentText} mb-3 flex justify-center`}>{value.icon}</div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{value.title}</h3>
                <p className="text-gray-500 text-xs">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>Planning Tool</span>
                <h2 className="text-3xl font-bold text-gray-900 mt-3 mb-8">Investment Calculator</h2>
                <div className="space-y-6">
                  {[
                    { label: 'Investment (₹)', key: 'amount', min: 100000, max: 10000000, step: 100000, format: (v) => `₹${(v/100000).toFixed(1)}L` },
                    { label: 'Period', key: 'years', min: 1, max: 30, step: 1, format: (v) => `${v} Years` },
                    { label: 'Expected Return', key: 'rate', min: 5, max: 25, step: 1, format: (v) => `${v}%` }
                  ].map((s) => (
                    <div key={s.key}>
                      <div className="flex justify-between mb-2">
                        <label className="text-gray-700 text-sm font-medium">{s.label}</label>
                        <span className={`${t.accentText} font-semibold text-sm`}>{s.format(calculatorValues[s.key])}</span>
                      </div>
                      <input type="range" min={s.min} max={s.max} step={s.step} value={calculatorValues[s.key]} onChange={(e) => setCalculatorValues({...calculatorValues, [s.key]: parseInt(e.target.value)})} className={`w-full h-2 rounded-full appearance-none cursor-pointer ${t.accentBg}`} />
                    </div>
                  ))}
                </div>
              </div>
              <div className={`p-8 rounded-2xl bg-gradient-to-br ${t.gradient} text-white text-center`}>
                <p className="text-white/80 text-sm mb-2">Estimated Future Value</p>
                <div className="text-5xl font-bold mb-4">₹{(calculateReturns()/10000000).toFixed(2)}Cr</div>
                <p className="text-white/60 text-sm mb-8">After {calculatorValues.years} years</p>
                <Link to="/contact" className="inline-block px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-all">Start Investing</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>Our Team</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Meet the Minds Behind Your Digital Success</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group text-center">
                <div className={`relative overflow-hidden rounded-xl mb-4`}>
                  <img src={member.image} alt={member.name} className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h3 className="text-gray-900 font-semibold">{member.name}</h3>
                <p className={`${t.accentText} text-sm`}>{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Client Stories</h2>
          </motion.div>
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div key={activeTestimonial} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="text-center">
                <img src={testimonials[activeTestimonial].image} alt="" className={`w-20 h-20 rounded-full mx-auto mb-6 border-4 ${t.accentBorder}`} />
                <p className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">"{testimonials[activeTestimonial].content}"</p>
                <p className="text-gray-900 font-semibold">{testimonials[activeTestimonial].author}</p>
                <p className={`${t.accentText} text-sm`}>{testimonials[activeTestimonial].role}</p>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (<button key={i} onClick={() => setActiveTestimonial(i)} className={`w-3 h-3 rounded-full transition-all ${activeTestimonial === i ? t.accentBg : 'bg-gray-200'}`} />))}
            </div>
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <div>
              <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>Insights</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-3">Latest Research</h2>
            </div>
            <Link to="/insights" className={`${t.accentText} font-semibold hover:underline flex items-center gap-2`}>View All <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg></Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {insights.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`rounded-xl overflow-hidden border ${t.accentBorder} group hover:shadow-lg transition-all`}>
                <div className="aspect-video overflow-hidden"><img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs ${t.accentText} uppercase font-semibold`}>{item.category}</span>
                    <span className="text-gray-400 text-xs">• {item.read}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Questions & Answers</h2>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full px-6 py-4 flex justify-between items-center text-left">
                  <span className="text-gray-900 font-medium pr-4">{faq.q}</span>
                  <svg className={`w-5 h-5 ${t.accentText} flex-shrink-0 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </button>
                <AnimatePresence>
                  {activeFaq === i && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-6 pb-4"><p className="text-gray-600">{faq.a}</p></motion.div>)}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className={`p-12 md:p-16 rounded-2xl bg-gradient-to-r ${t.gradient}`}>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Let's Talk About Your Next Project</h2>
              <p className="text-white/80 mb-8">Contact us today to schedule a consultation. We look forward to understanding your financial aspirations.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all">
                Get in Touch <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UltraHome;
