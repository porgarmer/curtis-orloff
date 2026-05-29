import React from 'react';
import { FaHeart, FaBook, FaGraduationCap, FaStar, FaLightbulb, FaUser, FaMapMarkerAlt, FaPenFancy, FaUsers, FaFeatherAlt } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const About = () => {
  return (
    <section id="about" className="py-20 bg-cream">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-terracotta/20 rounded-md mb-4">
            <FaFeatherAlt size={14} className="text-gold" />
            <span className="text-gold font-semibold text-sm">Meet the Author</span>
            <FaFeatherAlt size={14} className="text-gold" />
          </div>
          <h2 className="section-title">About Curtis Orloff</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="section-subtitle">
            Geologist, Army Veteran, and Storyteller - Exploring Human Nature Through History
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-md p-8 shadow-lg border-l-8 border-gold">
              <FaBook className="text-gold mb-4" size={40} />
              <p className="text-brown-dark/80 leading-relaxed whitespace-pre-line">
                {authorData.authorBio.fullBio}
              </p>
              <div className="mt-6 pt-4 border-t border-terracotta/30">
                <div className="flex items-start gap-3">
                  <FaLightbulb size={20} className="text-gold" />
                  <p className="text-gold font-semibold italic text-sm">
                    "{authorData.authorBio.research}"
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-md p-6 shadow-md border border-terracotta/30">
              <h3 className="text-xl font-display font-bold text-gold mb-4 flex items-center gap-2">
                <FaGraduationCap size={24} className="text-gold" />
                Education & Background
              </h3>
              <p className="text-brown-dark/70 mb-3">
                <span className="font-semibold">Degrees:</span> {authorData.authorBio.education}
              </p>
              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-terracotta/20">
                <FaMapMarkerAlt className="text-gold" size={16} />
                <span className="text-brown-dark/60 text-sm">Currently resides in {authorData.authorBio.location}</span>
              </div>
            </div>

            <div className="bg-white rounded-md p-6 shadow-md border border-terracotta/30">
              <h3 className="text-xl font-display font-bold text-gold mb-4 flex items-center gap-2">
                <FaUsers size={24} className="text-gold" />
                Experience & Service
              </h3>
              <div className="space-y-2">
                {authorData.authorBio.memberships.map((membership, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-terracotta/10 rounded-md p-3">
                    <FaFeatherAlt className="text-gold" size={16} />
                    <span className="text-brown-dark/70">{membership}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-gold to-terracotta text-brown-dark rounded-md p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <FaStar size={24} className="text-brown-dark" />
                <h3 className="text-xl font-display font-bold">Writing Journey</h3>
              </div>
              <p className="text-brown-dark/90 leading-relaxed text-sm">
                Curtis has been writing books for over two decades. With a background as a well-site geologist for fourteen years and petroleum engineer for seven years (mostly overseas), he brings authentic detail to his historical fiction.
              </p>
              <div className="flex items-center gap-2 mt-4 text-brown-dark">
                <FaBook size={14} />
                <span className="text-sm">Also wrote: "Streetcar Sandwiches" (Oilfield Novel)</span>
                <FaBook size={14} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;