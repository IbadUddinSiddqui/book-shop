// Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center text-white" style={{ backgroundImage: "url('/background2.jfif')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional overlay for text readability */}
      
      <div className="relative container mx-auto flex flex-col items-center justify-center h-full px-4 text-center">
        {/* Tagline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Find Your Next Great Read
        </h1>
        
        {/* Subtitle or Description */}
        <p className="text-lg md:text-xl lg:text-2xl mb-8">
          Discover a world of books to inspire and captivate you
        </p>
        
        {/* CTA Button */}
        <button className="px-8 py-3 rounded-lg text-lg font-semibold bg-[#4CAF50] hover:bg-white hover:text-green-500  duration-500 transition-colors">
          Explore Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
