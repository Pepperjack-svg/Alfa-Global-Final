import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { contactData } from '../mock';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    alert('Thank you for your message! Our team will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
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
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#F4C430] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get in <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4C430] bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Ready to start your investment journey? Our team of experts is here to help you achieve your financial goals.
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
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F4C430] rounded-lg flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-[#0A1628]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0A1628] mb-2">Visit Us</h3>
                  <p className="text-gray-600">{contactData.address}</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#D4AF37]/20 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F4C430] rounded-lg flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-[#0A1628]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0A1628] mb-2">Call Us</h3>
                  <p className="text-gray-600">{contactData.phone}</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#D4AF37]/20 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F4C430] rounded-lg flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-[#0A1628]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0A1628] mb-2">Email Us</h3>
                  <p className="text-gray-600">{contactData.email}</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#D4AF37]/20 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F4C430] rounded-lg flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-[#0A1628]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0A1628] mb-2">Business Hours</h3>
                  <p className="text-gray-600">{contactData.hours}</p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-[#D4AF37]/20 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-3xl text-[#0A1628]">Send Us a Message</CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
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
                          placeholder="+1 (555) 000-0000"
                          className="border-[#D4AF37]/30 focus:border-[#D4AF37]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-base font-semibold text-[#0A1628]">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Investment Inquiry"
                          required
                          className="border-[#D4AF37]/30 focus:border-[#D4AF37]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-base font-semibold text-[#0A1628]">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your investment goals..."
                        rows={6}
                        required
                        className="border-[#D4AF37]/30 focus:border-[#D4AF37] resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4C430] text-[#0A1628] font-semibold hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all text-lg py-6"
                    >
                      Send Message
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
              Schedule a consultation with our experts to discuss your financial goals.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#D4AF37] to-[#F4C430] text-[#0A1628] font-semibold hover:shadow-2xl hover:shadow-[#D4AF37]/50 transition-all text-lg px-8"
            >
              Book Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;