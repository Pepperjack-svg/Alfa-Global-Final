import React from 'react';
import { motion } from 'framer-motion';

const ClientTestimonials = ({ theme = 'teal' }) => {
  // Teal theme configuration
  const t = { accentText: 'text-teal-600', accentBg: 'bg-teal-600', accentBgLight: 'bg-teal-50', starColor: 'text-teal-400' };

  const testimonials = [
    {
      name: 'Rajesh Sharma',
      role: 'CEO, TechVentures India',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      content: 'Alfa Global Wealth Advisors transformed our investment strategy. Their personalized approach and deep market insights helped us achieve 35% portfolio growth in just 18 months.',
      rating: 5
    },
    {
      name: 'Priya Patel',
      role: 'Managing Director, Patel Holdings',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
      content: 'The team at Alfa Star Dynamics demonstrated exceptional expertise in private equity. Their strategic guidance in our maritime investments exceeded all expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Founder, Chen Capital',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      content: 'Working with Gazillion Capital has been a game-changer. Their investor education programs and product distribution network are unmatched in the industry.',
      rating: 5
    },
    {
      name: 'Anita Desai',
      role: 'CFO, Global Enterprises',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      content: 'Cyberhakz provided enterprise-grade security solutions that protected our business from multiple cyber threats. Their proactive approach is truly commendable.',
      rating: 5
    }
  ];

  const StarRating = ({ rating }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < rating ? t.starColor : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section className={`py-20 ${t.accentBgLight}`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className={`${t.accentText} text-sm font-semibold tracking-widest uppercase`}>Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">What Our Clients Say</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Trusted by leading businesses and high-net-worth individuals across the globe
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              data-testid={`testimonial-card-${i}`}
            >
              {/* Quote Icon */}
              <svg className={`w-10 h-10 ${t.accentText} opacity-30 mb-4`} fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 text-justify">"{testimonial.content}"</p>

              {/* Rating */}
              <StarRating rating={testimonial.rating} />

              {/* Author */}
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-100">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '4.9/5', label: 'Client Rating' },
            { value: '700+', label: 'Happy Clients' },
            { value: '98%', label: 'Satisfaction Rate' },
            { value: '25+', label: 'Years Experience' }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className={`text-3xl font-bold ${t.accentText}`}>{stat.value}</div>
              <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
