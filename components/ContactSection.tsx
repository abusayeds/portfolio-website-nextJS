'use client';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function ContactSection({ darkMode }: any) {
    return (
        <section id="contact" className={`py-24 transition-colors duration-300 ${darkMode ? 'bg-[#0a0a1a]' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-4 animate-slide-up">
                    <span className="text-purple-500 text-sm font-semibold uppercase tracking-wider">
                        Get In Touch
                    </span>
                </div>
                <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 animate-slide-up ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Contact Me
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-8 animate-slide-up">
                        <div className="flex items-start space-x-4">
                            <div className="bg-purple-500 p-3 rounded-lg">
                                <Mail className="text-white" size={24} />
                            </div>
                            <div>
                                <h3 className={`font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Email</h3>
                                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>gerold@example.com</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-purple-500 p-3 rounded-lg">
                                <Phone className="text-white" size={24} />
                            </div>
                            <div>
                                <h3 className={`font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Phone</h3>
                                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>+1 (555) 123-4567</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-purple-500 p-3 rounded-lg">
                                <MapPin className="text-white" size={24} />
                            </div>
                            <div>
                                <h3 className={`font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Location</h3>
                                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>San Francisco, CA</p>
                            </div>
                        </div>
                    </div>

                    <form className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <div>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${darkMode
                                    ? 'bg-[#12121f] border-gray-800 text-white'
                                    : 'bg-white border-gray-300 text-gray-900'
                                    }`}
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${darkMode
                                    ? 'bg-[#12121f] border-gray-800 text-white'
                                    : 'bg-white border-gray-300 text-gray-900'
                                    }`}
                            />
                        </div>
                        <div>
                            <textarea
                                rows="5"
                                placeholder="Your Message"
                                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${darkMode
                                    ? 'bg-[#12121f] border-gray-800 text-white'
                                    : 'bg-white border-gray-300 text-gray-900'
                                    }`}
                            ></textarea>
                        </div>
                        <button className="w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center space-x-2">
                            <span>Send Message</span>
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
