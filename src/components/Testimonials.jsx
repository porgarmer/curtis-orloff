import React from 'react';
import { FaStar, FaUser, FaCalendarAlt, FaQuoteRight, FaFeatherAlt } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Testimonials = () => {
  const testimonials = authorData.testimonials;

  return (
    <section className="py-20 bg-terracotta/5">
      <div className="container-custom mx-auto">
        <div className="text-center mb-10">
          <h2 className="section-title">Reader Reviews</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
          <p className="text-brown-dark/60">What readers are saying about "Thunder in the Wind"</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white rounded-md p-6 shadow-lg border-t-4 border-gold hover:shadow-xl transition-all duration-300">
              <FaQuoteRight className="text-gold/30 mb-3" size={28} />
              
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} size={16} className="text-gold" />
                ))}
              </div>
              
              <p className="text-brown-dark/70 text-sm italic mb-4 leading-relaxed">
                "{testimonial.review.substring(0, 200)}..."
              </p>
              
              <div className="flex items-center gap-2 pt-3 border-t border-terracotta/20">
                <div className="bg-gold/10 p-2 rounded-full">
                  <FaUser size={14} className="text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-gold text-sm">{testimonial.name}</p>
                  <div className="flex items-center gap-2 text-xs text-brown-dark/50">
                    <span>{testimonial.title}</span>
                    <span>•</span>
                    <FaCalendarAlt size={10} />
                    <span>{testimonial.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;