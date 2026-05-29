import React from 'react';
import { FaHeart, FaEnvelope, FaBook, FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn, FaStar, FaFeatherAlt } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Footer = () => {
  return (
    <footer className="bg-brown-dark text-cream/80 py-10">
      <div className="container-custom mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <div className="relative">
                <FaFeatherAlt className="text-gold" size={22} />
                <FaStar className="text-terracotta absolute -top-2 -right-2 text-xs" />
              </div>
              <h3 className="text-xl font-display font-bold text-cream">Curtis Orloff</h3>
            </div>
            <p className="text-sm text-cream/70">Historical Fiction Author | Geologist | Army Veteran</p>
            <div className="flex items-center gap-1 justify-center md:justify-start mt-2">
              <FaFeatherAlt size={12} className="text-gold" />
              <p className="text-xs text-cream/50">Thunder in the Wind</p>
              <FaFeatherAlt size={12} className="text-gold" />
            </div>
          </div>
          
          <div className="mt-6 flex justify-center">
            <a
              href="https://buy.stripe.com/7sY5kEdVm6vNfRU8Ey2kw07"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-gradient-to-r from-gold via-terracotta to-brown
                text-brown-dark text-2xl font-bold py-8 px-26 rounded-full
                shadow-2xl
                transform transition-all duration-300
                hover:scale-105 hover:shadow-gold/50
                animate-pulse
              "
            >
              Launch & Go-Live Portal
            </a>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="hover:text-gold transition-all duration-300 hover:scale-110 transform"><FaTwitter size={18} /></a>
            <a href="#" className="hover:text-gold transition-all duration-300 hover:scale-110 transform"><FaInstagram size={18} /></a>
            <a href="#" className="hover:text-gold transition-all duration-300 hover:scale-110 transform"><FaFacebookF size={18} /></a>
            <a href="#" className="hover:text-gold transition-all duration-300 hover:scale-110 transform"><FaLinkedinIn size={18} /></a>
            <a href={`mailto:${authorData.email}`} className="hover:text-gold transition-all duration-300 hover:scale-110 transform"><FaEnvelope size={18} /></a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-6 border-t border-cream/10 text-center text-xs text-cream/40">
          <div className="flex items-center justify-center gap-2">
            <FaFeatherAlt size={12} className="text-gold" />
            <span>Native American History</span>
            <FaFeatherAlt size={12} className="text-gold" />
          </div>
          <div className="flex items-center justify-center gap-1">
            <FaBook size={12} className="text-gold" />
            <span>© 2025 Curtis Orloff. All rights reserved.</span>
            <FaBook size={12} className="text-gold" />
          </div>
          <div className="flex items-center justify-center gap-2">
            <FaStar size={10} className="text-terracotta" />
            <span>Based on true events</span>
            <FaStar size={10} className="text-terracotta" />
          </div>
        </div>
        
        <div className="mt-4 text-center text-xs text-cream/30">
          <p className="flex items-center justify-center gap-1">
            <FaFeatherAlt size={10} className="text-gold" /> 
            "If not for hubris, the outcome of his endeavor may have been dramatically different"
            <FaFeatherAlt size={10} className="text-gold" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;