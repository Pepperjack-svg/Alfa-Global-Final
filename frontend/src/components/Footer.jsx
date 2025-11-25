import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { footerLinks, contactData } from '../mock';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const response = await axios.post(`${API}/newsletter`, { email });
      if (response.data.success) {
        setSubmitSuccess(true);
        setEmail('');
        setTimeout(() => setSubmitSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      setSubmitError('Failed to subscribe. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#0A1628] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-[#D4AF37]/20">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3">Stay Informed</h3>
            <p className="text-gray-400 mb-6">
              Subscribe to receive exclusive insights, market updates, and investment opportunities.
            </p>
            {submitSuccess && (
              <div className="mb-4 p-3 bg-green-500/20 border border-green-500 rounded-lg flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <p className="text-green-400">Successfully subscribed to newsletter!</p>
              </div>
            )}
            {submitError && (
              <div className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded-lg">
                <p className="text-red-400">{submitError}</p>
              </div>
            )}
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/5 border-[#D4AF37]/30 text-white placeholder:text-gray-500 focus:border-[#D4AF37]"
                required
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#D4AF37] text-[#0A1628] font-semibold hover:bg-[#F4C430] transition-all hover:shadow-lg disabled:opacity-50"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4 group">
              <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#F4C430] rounded-lg flex items-center justify-center">
                <span className="text-[#0A1628] font-bold text-xl">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl tracking-tight">ALFA GLOBAL</span>
                <span className="text-[#D4AF37] text-xs tracking-wider">GROUP</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Creating enduring value across industries and generations through strategic investments and visionary thinking.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>{contactData.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>{contactData.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <span>{contactData.email}</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-[#D4AF37] font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#D4AF37] font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[#D4AF37] font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#D4AF37]/20">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Alfa Global Group. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;