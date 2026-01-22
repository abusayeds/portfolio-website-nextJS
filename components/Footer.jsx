'use client';
import React from 'react';
import { Facebook, Linkedin, Github, Dribbble, Heart, ArrowUp } from 'lucide-react';

export default function Footer({ darkMode }) {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <footer className={`relative transition-colors duration-300 ${darkMode ? 'bg-[#12121f]' : 'bg-gray-900'}`}>
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className={`w-12 h-12 border-2 rounded-md flex items-center justify-center ${darkMode ? 'border-white' : 'border-purple-400'
                                }`}>
                                <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-purple-400'}`}>G</div>
                            </div>
                            <span className="text-white text-xl font-bold">Gerold</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Creating digital experiences that connect billions of people worldwide.
                        </p>
                        <div className="flex items-center space-x-4">
                            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                                <Dribbble size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-purple-400 transition-colors">
                                    Services
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('works')} className="text-gray-400 hover:text-purple-400 transition-colors">
                                    Works
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('skills')} className="text-gray-400 hover:text-purple-400 transition-colors">
                                    Skills
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('testimonials')} className="text-gray-400 hover:text-purple-400 transition-colors">
                                    Testimonials
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li className="text-gray-400">Web Development</li>
                            <li className="text-gray-400">UI/UX Design</li>
                            <li className="text-gray-400">Mobile Apps</li>
                            <li className="text-gray-400">Performance Optimization</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Get In Touch</h3>
                        <ul className="space-y-2">
                            <li className="text-gray-400">gerold@example.com</li>
                            <li className="text-gray-400">+1 (555) 123-4567</li>
                            <li className="text-gray-400">San Francisco, CA</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center">
                        © 2026 Gerold. Made with <Heart size={16} className="mx-1 text-red-500 fill-red-500" /> by Gerold
                    </p>
                    <div className="flex items-center space-x-6">
                        <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-purple-500 p-3 rounded-full shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-110 z-40"
            >
                <ArrowUp size={24} className="text-white" />
            </button>
        </footer>
    );
}