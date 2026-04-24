import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const PremiumContact = ({ theme = 'teal' }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', companyType: '', areaOfInterest: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Teal theme configuration
  const t = {
    gradient: 'from-[#0a2e2b] via-[#0d3d38] to-[#071a18]',
    accentBg: 'bg-teal-600',
    accentHover: 'hover:bg-teal-500',
    accentText: 'text-amber-400',
    accentBorder: 'border-amber-500',
    cardBg: 'bg-[#0a2e2b]/50'
  };

  // Contact info from reference site
  const offices = [
    { city: 'Chennai (HQ)', address: 'No. 6/8, Second Floor, Lakshmi Nagar, 10th Street, Nanganallur, Chennai - 600 061', lat: 12.9817, lng: 80.1869, phone: '+91 44-2224-2929' }
  ];

  const contactInfo = {
    phone1: '+91 44-2224-2929',
    phone2: '+91 73580-65999',
    email: 'contact@alfaglobalwealth.com',
    address: 'No. 6/8, Second Floor, Lakshmi Nagar, 10th Street, Nanganallur, Chennai - 600 061'
  };

  const companyTypes = ['Company', 'Family Office', 'Individual'];
  const areasOfInterest = ['Wealth Advisory', 'Private Equity/Capital', 'Trading/Fintech', 'Cybersecurity', 'Agri/Natural Resources', 'Other'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', companyType: '', areaOfInterest: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b ${t.gradient} pt-24`}>
      {/* Hero */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className={`${t.accentText} text-sm tracking-[0.2em] uppercase`}>Get in Touch</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Contact Us</h1>
            <p className="text-white/60">Ready to start your wealth journey? Our team of experts is here to help.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-8">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className={`p-8 rounded-2xl ${t.cardBg} backdrop-blur-sm border border-white/10`}
            >
              <h2 className="text-2xl font-semibold text-white mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-white/70 text-sm mb-2 block">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="text-white/70 text-sm mb-2 block">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-white/70 text-sm mb-2 block">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="text-white/70 text-sm mb-2 block">Company Type *</label>
                    <select
                      required
                      value={formData.companyType}
                      onChange={(e) => setFormData({ ...formData, companyType: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                    >
                      <option value="" className="bg-gray-900">Select type</option>
                      {companyTypes.map((t) => (
                        <option key={t} value={t} className="bg-gray-900">{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-white/70 text-sm mb-2 block">Area of Interest *</label>
                  <select
                    required
                    value={formData.areaOfInterest}
                    onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                  >
                    <option value="" className="bg-gray-900">Select area of interest</option>
                    {areasOfInterest.map((area) => (
                      <option key={area} value={area} className="bg-gray-900">{area}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-white/70 text-sm mb-2 block">Your Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 ${t.accentBg} ${t.accentHover} text-white font-semibold rounded-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center">
                    Thank you! We'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center">
                    Something went wrong. Please try again.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div className={`p-6 rounded-2xl ${t.cardBg} backdrop-blur-sm border border-white/10`}>
                <h3 className="text-xl font-semibold text-white mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full ${t.accentBg}/20 flex items-center justify-center`}>
                      <svg className={`w-5 h-5 ${t.accentText}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Phone Number</p>
                      <p className="text-white font-medium">+91 44-2224-2929</p>
                      <p className="text-white font-medium">+91 73580-65999</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full ${t.accentBg}/20 flex items-center justify-center`}>
                      <svg className={`w-5 h-5 ${t.accentText}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Email Address</p>
                      <p className="text-white font-medium">contact@alfaglobalwealth.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-full ${t.accentBg}/20 flex items-center justify-center shrink-0`}>
                      <svg className={`w-5 h-5 ${t.accentText}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Office Address</p>
                      <p className="text-white font-medium">No. 6/8, Second Floor, Lakshmi Nagar, 10th Street, Nanganallur, Chennai - 600 061.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full ${t.accentBg}/20 flex items-center justify-center`}>
                      <svg className={`w-5 h-5 ${t.accentText}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Business Hours</p>
                      <p className="text-white font-medium">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Locations */}
              <div className={`p-6 rounded-2xl ${t.cardBg} backdrop-blur-sm border border-white/10`}>
                <h3 className="text-xl font-semibold text-white mb-4">Our Offices</h3>
                <div className="grid grid-cols-2 gap-4">
                  {offices.slice(0, 4).map((office, i) => (
                    <div key={i} className="p-3 rounded-lg bg-white/5">
                      <p className={`${t.accentText} font-medium text-sm`}>{office.city}</p>
                      <p className="text-white/60 text-xs mt-1">{office.address}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <span className={`${t.accentText} text-sm tracking-[0.2em] uppercase`}>Global Presence</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Our Locations</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm"
            style={{ height: '400px' }}
          >
            <MapContainer
              center={[20, 78]}
              zoom={3}
              style={{ height: '100%', width: '100%' }}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              />
              {offices.map((office, i) => (
                <Marker key={i} position={[office.lat, office.lng]}>
                  <Popup>
                    <div className="text-center">
                      <strong>{office.city}</strong>
                      <br />
                      {office.address}
                      <br />
                      <span className="text-purple-600">{office.phone}</span>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PremiumContact;
