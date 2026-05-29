import React from 'react';
import { FaBook, FaStar, FaQuoteLeft, FaHeart, FaFeatherAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { GiCrossedSwords } from 'react-icons/gi';
import { FaCampground } from 'react-icons/fa'; 
import { authorData } from '../data/authorData';

const BookDetails = () => {
  const book = authorData.book;

  return (
    <section id="book" className="py-20 bg-gradient-to-b from-cream to-terracotta/10">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Thunder in the Wind</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="section-subtitle">A Historical Epic of Resistance, Identity, and the Fight for Selfhood</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="bg-white rounded-md p-8 shadow-xl border-2 border-gold/20">
              <div className="mb-6 relative">
                <img 
                  src="/images/thunder-wind.jpg"
                  alt="Thunder in the Wind - Book Cover"
                  className="w-full max-w-sm mx-auto rounded-md shadow-2xl border-4 border-white"
                />
                <div className="absolute -top-3 -right-3 bg-gold text-brown-dark rounded-full p-2 shadow-lg">
                  <FaStar size={16} />
                </div>
              </div>
              
              <div className="text-center bg-terracotta/10 rounded-md p-4">
                <h3 className="text-2xl font-display font-bold text-gold mb-2">{book.fullTitle}</h3>
                <div className="w-16 h-0.5 bg-gold mx-auto my-2"></div>
                <p className="text-brown-dark/60 text-sm">By Curtis Orloff</p>
                <div className="flex justify-center gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={16} className="text-gold" />
                  ))}
                </div>
                <p className="text-xs text-gold mt-2 font-semibold">🪶 A Story of Tribal Unity 🪶</p>
              </div>
              
              <div className="flex justify-center gap-2 mt-4">
                <div className="w-8 h-8 bg-gold rounded-full opacity-50 flex items-center justify-center text-brown-dark">🪶</div>
                <div className="w-8 h-8 bg-terracotta rounded-full opacity-50 flex items-center justify-center text-cream">🏹</div>
                <div className="w-8 h-8 bg-brown-dark rounded-full opacity-50 flex items-center justify-center text-gold">🌄</div>
              </div>
            </div>
            
            {/* Historical Image - Native American Era */}
            <div className="mt-6">
              <img 
                src="/images/native-american-era.jpg"
                alt="Native American Reservation Era - Turn of 20th Century"
                className="w-full max-w-full mx-auto rounded-md shadow-2xl border-2 border-gold/30"
              />
              <p className="text-center text-xs text-brown-dark/50 mt-2">Native American life at the turn of the 20th century</p>
            </div>
          </div>

          <div>
            <div className="prose text-brown-dark/80 mb-6">
              <p className="leading-relaxed text-base">{book.description}</p>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gold mb-3 flex items-center gap-2">
                <GiCrossedSwords size={20} />
                Themes Explored:
              </h4>
              <div className="flex flex-wrap gap-2">
                {book.themes.map((theme, idx) => (
                  <span key={idx} className="bg-terracotta/20 px-3 py-1 rounded-full text-sm text-brown-dark/70">
                    {theme}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-terracotta/15 rounded-md p-5 shadow-md mb-6 border-l-4 border-gold">
              <FaQuoteLeft className="text-gold mb-2" size={24} />
              <p className="text-brown-dark/70 italic mb-3 text-sm">
                "Miskaw deals with the same trials Tecumseh experienced early in the previous century while uniting the tribes east of the Mississippi and, in dealing with them learns several truths about himself and the human condition."
              </p>
              <div className="flex items-center gap-2 mt-2">
                <FaHeart className="text-gold" size={14} />
                <span className="text-xs text-gold font-semibold">— From Thunder in the Wind</span>
                <FaHeart className="text-gold" size={14} />
              </div>
            </div>

            <div className="bg-gold/5 rounded-md p-4 mb-6 border border-gold/20">
              <h4 className="font-semibold text-gold mb-2 flex items-center gap-2">
                <FaBook size={18} />
                Book Details:
              </h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-brown-dark/50">Genre:</span>
                  <p className="text-brown-dark/80 font-medium">{book.details.genre}</p>
                </div>
                <div>
                  <span className="text-brown-dark/50">Setting:</span>
                  <p className="text-brown-dark/80 font-medium">{book.details.setting}</p>
                </div>
                <div>
                  <span className="text-brown-dark/50">Format:</span>
                  <p className="text-brown-dark/80 font-medium">{book.details.format}</p>
                </div>
                <div>
                  <span className="text-brown-dark/50">Pages:</span>
                  <p className="text-brown-dark/80 font-medium">556</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex-1 text-center flex items-center justify-center gap-2 bg-gold hover:bg-terracotta text-brown-dark">
                <FaBook size={16} />
                Buy Thunder in the Wind
              </button>
              <button className="btn-outline flex-1 text-center flex items-center justify-center gap-2 border-2 border-gold text-gold hover:bg-gold hover:text-brown-dark">
                <FaStar size={16} />
                Read Excerpt
              </button>
            </div>

            <div className="text-center mt-4">
              <div className="inline-flex items-center gap-2 text-sm text-brown-dark/50 bg-terracotta/15 px-4 py-2 rounded-md">
                <FaFeatherAlt size={14} className="text-gold" />
                <span>"A compelling blend of drama and human resilience"</span>
                <FaFeatherAlt size={14} className="text-gold" />
              </div>
            </div>

            {/* Historical Addition - The Assimilation Era Info */}
            <div className="mt-6 p-5 bg-gold/5 rounded-md border border-gold/20">
              <h4 className="font-semibold text-gold mb-3 flex items-center gap-2">
                <FaCampground size={20} />
                Historical Context: The Assimilation Era
              </h4>
              <p className="text-brown-dark/70 text-sm leading-relaxed">
                At the turn of the twentieth century, Native American tribes faced an unprecedented assault on their culture and identity. The U.S. government's assimilation policies sought to strip tribes of their selfhood, treating them as hopeless dependents despite their rich heritage and sovereignty. This era saw the suppression of traditional practices, forced attendance at boarding schools, and the breakup of tribal lands. "Thunder in the Wind" explores this critical period through the eyes of the Assiniboine and one man's desperate attempt to unite the tribes—not to defeat the whites militarily, but to scare them into restoring what had been stolen: Native American selfhood and dignity.
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs text-gold">
                <FaMapMarkerAlt size={12} />
                <span>— From the historical archives of the American West</span>
                <FaMapMarkerAlt size={12} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;