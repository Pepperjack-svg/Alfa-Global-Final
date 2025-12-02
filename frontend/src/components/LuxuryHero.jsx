import React from 'react';

const LuxuryHero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Single luxury building image - no carousel */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=85&w=2400"
          alt="Luxury Corporate Building"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight tracking-tight">
              Beyond Capital.
            </h1>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight">
              Building Futures.
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 mb-12 font-light leading-relaxed max-w-2xl">
              Alfa Global Group is a diversified global organization committed to creating enduring value across industries and generations.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-gray-900 px-10 py-4 text-base font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Our World
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryHero;