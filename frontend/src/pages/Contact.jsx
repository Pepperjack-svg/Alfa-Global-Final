import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Card, CardContent } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { contactData, companyTypes, areasOfInterest } from '../mock';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyType: '',
    areaOfInterest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const response = await axios.post(`${API}/contact`, formData);
      if (response.data.success) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', phone: '', companyType: '', areaOfInterest: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Failed to submit form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A1628] via-[#142444] to-[#0A1628] py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1730382624709-81e52dd294d4?crop=entropy&cs=srgb&fm=jpg&q=85"
            alt="Business Growth"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get in <span className="text-[#D4AF37]">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Reach out to us today to schedule a consultation with one of our experienced wealth managers.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-[#FAF9F6]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-2 border-[#D4AF37]/20 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0A1628] mb-2">Visit Us</h3>
                  <p className="text-gray-600">{contactData.address}</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#D4AF37]/20 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0A1628] mb-2">Call Us</h3>
                  <p className="text-gray-600 mb-1">{contactData.phone}</p>
                  <p className="text-gray-600">{contactData.phone2}</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#D4AF37]/20 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0A1628] mb-2">Email Us</h3>
                  <p className="text-gray-600">{contactData.email}</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#D4AF37]/20 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0A1628] mb-2">Business Hours</h3>
                  <p className="text-gray-600">{contactData.hours}</p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-[#D4AF37]/20 shadow-2xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-[#0A1628] mb-2">Let's Talk About Your Next Project</h2>
                  <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
                  
                  {submitSuccess && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <p className="text-green-800">Thank you for your message! Our team will contact you shortly.</p>
                    </div>
                  )}

                  {submitError && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-800">{submitError}</p>
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-base font-semibold text-[#0A1628]">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="border-[#D4AF37]/30 focus:border-[#D4AF37]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-base font-semibold text-[#0A1628]">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="border-[#D4AF37]/30 focus:border-[#D4AF37]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-base font-semibold text-[#0A1628]">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="border-[#D4AF37]/30 focus:border-[#D4AF37]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="companyType" className="text-base font-semibold text-[#0A1628]">Company Type *</Label>
                        <Select
                          value={formData.companyType}
                          onValueChange={(value) => setFormData({...formData, companyType: value})}
                          required
                        >
                          <SelectTrigger className="border-[#D4AF37]/30 focus:border-[#D4AF37]">
                            <SelectValue placeholder="Select company type" />
                          </SelectTrigger>
                          <SelectContent>
                            {companyTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="areaOfInterest" className="text-base font-semibold text-[#0A1628]">Area of Interest *</Label>
                      <Select
                        value={formData.areaOfInterest}
                        onValueChange={(value) => setFormData({...formData, areaOfInterest: value})}
                        required
                      >
                        <SelectTrigger className="border-[#D4AF37]/30 focus:border-[#D4AF37]">
                          <SelectValue placeholder="Select area of interest" />
                        </SelectTrigger>
                        <SelectContent>
                          {areasOfInterest.map((area) => (
                            <SelectItem key={area.value} value={area.value}>
                              {area.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-base font-semibold text-[#0A1628]">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your investment goals and how we can help..."
                        rows={6}
                        required
                        className="border-[#D4AF37]/30 focus:border-[#D4AF37] resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-[#D4AF37] text-[#0A1628] font-semibold hover:bg-[#F4C430] transition-all hover:shadow-lg text-lg py-6 disabled:opacity-50"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A1628] to-[#142444] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#D4AF37] rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#F4C430] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Investment Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We look forward to understanding your financial aspirations and charting a course towards lasting prosperity together.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;