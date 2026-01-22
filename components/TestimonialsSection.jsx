'use client';
import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection({ darkMode }) {
    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'CEO at TechCorp',
            content: 'Working with Gerold was an absolute pleasure. His attention to detail and creativity brought our vision to life.',
            rating: 5
        },
        {
            name: 'Michael Chen',
            role: 'Product Manager',
            content: 'Exceptional work! The project was delivered on time and exceeded all our expectations. Highly recommended!',
            rating: 5
        },
        {
            name: 'Emily Rodriguez',
            role: 'Startup Founder',
            content: 'Gerold transformed our idea into a beautiful, functional product. His expertise is truly remarkable.',
            rating: 5
        }
    ];

    return (
        <section id="testimonials" className={`py-24 transition-colors duration-300 ${darkMode ? 'bg-[#12121f]' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-4 animate-slide-up">
                    <span className="text-purple-500 text-sm font-semibold uppercase tracking-wider">
                        Client Feedback
                    </span>
                </div>
                <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 animate-slide-up ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Testimonials
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, i) => (
                        <div
                            key={i}
                            className={`p-8 rounded-2xl transition-all duration-300 hover:scale-105 animate-slide-up ${darkMode
                                    ? 'bg-[#0a0a1a] border border-gray-800'
                                    : 'bg-gray-50 border border-gray-200 hover:shadow-xl'
                                }`}
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            <Quote className="text-purple-500 mb-4" size={40} />
                            <p className={`mb-6 italic ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                "{testimonial.content}"
                            </p>
                            <div className="flex items-center space-x-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <div>
                                <h4 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{testimonial.name}</h4>
                                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}