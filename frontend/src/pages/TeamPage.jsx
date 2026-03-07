import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TeamPage = ({ theme = 'teal' }) => {
  // Teal theme configuration
  const t = { accentText: 'text-teal-600', accentBg: 'bg-teal-600', accentBgLight: 'bg-teal-50', gradient: 'from-teal-600 to-teal-700', heroBg: 'from-teal-950 via-slate-950 to-teal-950' };

  const team = [
    { 
      name: 'Rajesh Kumar', 
      role: 'Managing Director', 
      image: 'https://images.pexels.com/photos/7580643/pexels-photo-7580643.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Over 20 years of experience in wealth management and strategic investments across global markets.'
    },
    { 
      name: 'Priya Sharma', 
      role: 'Chief Investment Officer', 
      image: 'https://images.unsplash.com/photo-1620333198023-1fb846888d25?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxzb3V0aCUyMGFzaWFuJTIwcHJvZmVzc2lvbmFsJTIwd29tYW4lMjBvZmZpY2UlMjBibGF6ZXJ8ZW58MHx8fHwxNzY5MDA1MjY2fDA&ixlib=rb-4.1.0&q=85',
      description: 'Expert in alternative investments with a proven track record in private equity and hedge fund strategies.'
    },
    { 
      name: 'Vikram Patel', 
      role: 'Head of Strategy', 
      image: 'https://images.unsplash.com/photo-1771244678811-50c22f17c791?w=400',
      description: 'Specializes in cross-border alliances and institutional collaborations with expertise in emerging markets.'
    },
    { 
      name: 'Ananya Reddy', 
      role: 'Director - Client Relations', 
      image: 'https://images.unsplash.com/photo-1622925492560-854334a7cf56?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxzb3V0aCUyMGFzaWFuJTIwcHJvZmVzc2lvbmFsJTIwd29tYW4lMjBvZmZpY2UlMjBibGF6ZXJ8ZW58MHx8fHwxNzY5MDA1MjY2fDA&ixlib=rb-4.1.0&q=85',
      description: 'Dedicated to building lasting relationships with HNIs and family offices through personalized service.'
    },
    { 
      name: 'Arjun Mehta', 
      role: 'Head of Research', 
      image: 'https://images.unsplash.com/photo-1659355894406-977b8c4503d5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjBidXNpbmVzc21hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0JTIwc3VpdHxlbnwwfHx8fDE3NjkwMDUyMzh8MA&ixlib=rb-4.1.0&q=85',
      description: 'Leads our research division with deep expertise in market analysis and investment opportunities.'
    },
    { 
      name: 'Neha Gupta', 
      role: 'Head of Operations', 
      image: 'https://images.unsplash.com/photo-1660066142936-732a1cc0abb9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjBidXNpbmVzc3dvbWFuJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBjb3Jwb3JhdGV8ZW58MHx8fHwxNzY5MDA1MjQwfDA&ixlib=rb-4.1.0&q=85',
      description: 'Ensures seamless execution of investment strategies and operational excellence across all verticals.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className={`relative py-24 bg-gradient-to-br ${t.heroBg} overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.15) 0%, transparent 50%),
                              radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          }}></div>
        </div>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="text-amber-400 text-sm font-semibold tracking-widest uppercase"
          >
            Our Team
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-4 mb-6"
          >
            Meet the Minds Behind Your Success
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg max-w-2xl mx-auto text-justify"
          >
            Our leadership team brings decades of combined experience in wealth management, investment advisory, and strategic consulting to help you achieve your financial goals.
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className={`${t.accentText} font-medium mb-2`}>{member.role}</p>
                <p className="text-gray-600 text-sm text-justify">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={`py-16 sm:py-24 ${t.accentBgLight}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-justify">
              At Alfa Global Group, our values guide every decision we make. We are committed to excellence, integrity, and creating lasting value for our partners.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { title: 'Excellence', desc: 'Highest standards in everything we do' },
              { title: 'Integrity', desc: 'Transparency and ethical conduct' },
              { title: 'Innovation', desc: 'Evolving approaches to wealth creation' },
              { title: 'Partnership', desc: 'Building lasting relationships' },
              { title: 'Impact', desc: 'Creating positive change' },
              { title: 'Vision', desc: 'Multi-generational wealth planning' }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-4"
              >
                <div className={`w-12 h-12 ${t.accentBg} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{value.title}</h3>
                <p className="text-gray-600 text-xs">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 bg-gradient-to-r ${t.gradient}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Work With Us?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 text-justify">
            Connect with our team of experts and discover how we can help you achieve your financial goals through strategic investments and personalized wealth management solutions.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all"
          >
            Get in Touch
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
