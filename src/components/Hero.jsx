import React from 'react';
import { FaArrowRight, FaChevronRight, FaStar, FaFeatherAlt, FaHeart } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-brown-dark">
      {/* Full image with fade overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/curtis.png"
          alt="Curtis Orloff"
          className="w-full h-full object-cover object-center opacity-90"
        />
        {/* Gradient fade from image to brown where text appears */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brown-dark/60 to-brown-dark"></div>
        {/* Additional bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brown-dark to-transparent"></div>
      </div>

      <div className="container-custom mx-auto relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - mostly transparent, shows more of the image */}
          <div className="hidden md:block"></div>

          {/* Right side - faded into brown, contains text */}
          <div className="text-center md:text-left md:pl-12 lg:pl-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 backdrop-blur-sm rounded-md text-gold font-semibold text-sm mb-6 border border-gold/30">
              <FaFeatherAlt size={14} className="text-terracotta" />
              <span>Historical Fiction | Native American Epic</span>
              <FaFeatherAlt size={14} className="text-terracotta" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6 leading-tight drop-shadow-lg">
              {authorData.fullName}
              <span className="block text-gold text-2xl md:text-3xl mt-3 drop-shadow-md">
                Historical Fiction Author
              </span>
            </h1>
            
            <p className="text-lg text-cream/90 mb-8 leading-relaxed max-w-xl drop-shadow">
              Author of <span className="text-gold font-semibold">"Thunder in the Wind"</span> - a powerful story of Native American resistance, cultural identity, and the fight to preserve selfhood at the turn of the twentieth century.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#book" className="bg-gold hover:bg-terracotta text-brown-dark px-8 py-3 rounded-md font-semibold transition-all duration-300 flex items-center justify-center gap-2 group transform hover:-translate-y-0.5 shadow-lg hover:shadow-gold/30">
                Explore Thunder in the Wind
                <FaArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#about" className="border-2 border-gold text-gold hover:bg-gold hover:text-brown-dark px-8 py-3 rounded-md font-semibold transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm">
                Meet the Author
                <FaChevronRight size={18} />
              </a>
            </div>

            {/* Decorative elements */}
            <div className="mt-8 flex items-center gap-3 opacity-60">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/50"></div>
              <FaFeatherAlt size={20} className="text-gold" />
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/50"></div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 5s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;