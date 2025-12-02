import React, { useState, useEffect } from 'react';

const LuxuryHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1593523278268-f91d46d3d606?q=85&w=2000',
      title: 'Beyond Capital.',
      subtitle: 'Building Futures.'
    },
    {
      image: 'https://images.unsplash.com/photo-1760969006935-ca9f9cf5b117?q=85&w=2000',
      title: 'Transformative',
      subtitle: 'Ideas & Ventures'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={slide.image}
            alt={`Hero ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 leading-tight">
            {slides[currentSlide].title}
          </h1>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-8">
            {slides[currentSlide].subtitle}
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Alfa Global Group is a diversified global organization committed to creating enduring value across industries and generations.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-gray-900 px-8 py-4 text-sm font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            Explore Our World
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default LuxuryHero;