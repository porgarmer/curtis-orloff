import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaHome, FaUser, FaBook, FaEnvelope, FaStar, FaFeatherAlt } from 'react-icons/fa';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'book', 'contact'];
      const scrollPosition = window.scrollY + 150;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveTab(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: <FaHome size={16} />, id: 'home' },
    { name: 'About', href: '#about', icon: <FaUser size={16} />, id: 'about' },
    { name: 'Book', href: '#book', icon: <FaBook size={16} />, id: 'book' },
    { name: 'Contact', href: '#contact', icon: <FaEnvelope size={16} />, id: 'contact' },
  ];

  const handleClick = (e, href, id) => {
    e.preventDefault();
    setActiveTab(id);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-cream shadow-lg py-3' : 'bg-cream/98 backdrop-blur-sm py-5'
    }`}>
      <div className="container-custom mx-auto flex justify-between items-center">
        <a 
          href="#home" 
          className="flex items-center gap-2 group cursor-pointer"
          onClick={(e) => handleClick(e, '#home', 'home')}
        >
          <div className="relative">
            <FaFeatherAlt className="text-gold group-hover:scale-110 transition-transform duration-300" size={22} />
            <FaStar className="text-terracotta absolute -top-2 -right-2 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </div>
          <span className="text-xl md:text-2xl font-display font-bold text-gold">
            Curtis Orloff
          </span>
        </a>

        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href, item.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 ${
                activeTab === item.id
                  ? 'bg-gold text-brown-dark shadow-md'
                  : 'text-brown-dark/70 hover:text-gold hover:bg-terracotta/20'
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </a>
          ))}
        </div>

        <button 
          className="md:hidden text-gold p-2 rounded-md hover:bg-terracotta/20 transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-cream shadow-xl border-t border-gold/20 animate-slide-down">
          <div className="flex flex-col gap-2 py-4 px-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-300 ${
                  activeTab === item.id
                    ? 'bg-gold text-brown-dark font-semibold'
                    : 'text-brown-dark/70 hover:text-gold hover:bg-terracotta/20'
                }`}
                onClick={(e) => handleClick(e, item.href, item.id)}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-base">{item.name}</span>
                {activeTab === item.id && (
                  <span className="ml-auto">
                    <FaFeatherAlt size={16} className="text-terracotta" />
                  </span>
                )}
              </a>
            ))}
            
            <div className="mt-4 pt-4 border-t border-gold/20 text-center">
              <p className="text-brown-dark/50 text-xs flex items-center justify-center gap-2">
                <FaFeatherAlt size={10} className="text-gold" />
                Thunder in the Wind - A Historical Epic
                <FaStar size={10} className="text-terracotta" />
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navigation;