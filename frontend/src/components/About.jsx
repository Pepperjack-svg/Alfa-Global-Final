import React from 'react';
import { aboutData } from '../mock';
import { Shield, Target, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const advantages = [
    { title: 'Proven Growth', description: 'Data-driven wealth strategies' },
    { title: 'Expert Advisors', description: 'Certified financial professionals' },
    { title: 'Secure & Transparent', description: '100% client-focused trust' },
    { title: 'Tailored Solutions', description: 'Plans built for your goals' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=srgb&fm=jpg&q=85"
                alt="Business Handshake"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#D4AF37]/20 rounded-2xl -z-10" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-6">
              <Shield className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-sm font-medium">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628] mb-6">
              Your Trusted Partner in Financial Success
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              For over two decades, Alfa Global has been empowering clients with tailored financial solutions that drive long-term success. Our team of seasoned financial experts is dedicated to providing transparent, data-driven strategies that help you navigate investments, retirement planning, and wealth management with confidence.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We believe in security, trust, and results—because your financial future deserves nothing less. Whether you're planning for retirement, optimizing your investments, or seeking expert tax strategies, Alfa Global is here to guide you every step of the way.
            </p>
            <Button
              size="lg"
              className="bg-[#D4AF37] text-[#0A1628] font-semibold hover:bg-[#F4C430] transition-all duration-300 hover:shadow-lg text-lg px-8"
              asChild
            >
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>

        {/* Advantages Section */}
        <div className="bg-gradient-to-br from-[#0A1628] to-[#142444] rounded-3xl p-12 lg:p-16 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg"
              alt="Business Growth"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                The Alfa Global <span className="text-[#D4AF37]">Advantage</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Expert strategies, proven results, and a commitment to your financial success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <CheckCircle className="w-10 h-10 text-[#D4AF37] mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{advantage.title}</h3>
                  <p className="text-gray-400 text-sm">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;