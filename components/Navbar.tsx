"use client"

import { ArrowRight, Menu, Moon, Sun, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar({ darkMode, setDarkMode, extraNavberColor }: any) {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter()
    useEffect(() => {
        const handleScroll = () => {
            const shouldBeScrolled = window.scrollY > 50;
            if (shouldBeScrolled !== scrolled) {
                setTimeout(() => setScrolled(shouldBeScrolled), 50);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideDown {
                0% {
                    transform: translateY(-20px);
                    opacity: 0;
                }
                100% {
                    transform: translateY(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    const scrollToSection = (id: any) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setMenuOpen(false);
        router.push('/')
    };

    const menuItems = ['services', 'works', 'skills', 'testimonials', 'contact'];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? darkMode
            ? 'bg-[#0a0a1a]/95 backdrop-blur-md shadow-lg shadow-purple-500/10'
            : 'bg-white/95 text-purple-600 backdrop-blur-md shadow-lg shadow-purple-200/50'
            : 'bg-transparent'
            }`}
            style={{
                animation: scrolled ? 'slideDown 0.5s ease-out' : 'none'
            }}>
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className={`w-32 sm:w-44 h-10 sm:h-12 border-2 rounded-md flex items-center justify-center ${darkMode ? 'border-white' : 'border-purple-600'
                            }`}>
                            <div className={`text-lg sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-purple-600'}`}>ABU SAYED</div>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className={
                                    `transition-colors capitalize ${darkMode ? 'text-white duration-500 hover:text-gray-400'
                                        : scrolled
                                            ? "text-purple-600"
                                            : !scrolled && !extraNavberColor
                                                ? "text-purple-600" :
                                                'text-white'}`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center space-x-2 sm:space-x-4">
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className={`p-2 rounded-full transition-all ${darkMode ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-600'}`}
                        >
                            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                        </button>

                        <button className="hidden sm:flex bg-gradient-to-r from-purple-600 to-purple-500 px-6 py-2.5 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all items-center space-x-2 text-white">
                            <span>Hire Me!</span>
                            <ArrowRight size={16} />
                        </button>
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className={`md:hidden p-2 rounded-full transition-all ${darkMode ? 'text-white' : 'text-purple-600'}`}
                        >
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
                <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                    <div className={`flex flex-col space-y-4 py-4 ${darkMode ? 'bg-[#0a0a1a]/80' : 'bg-white/80'} rounded-lg backdrop-blur-sm`}>
                        {menuItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className={`px-4 py-2 text-left transition-colors capitalize ${darkMode ? 'text-gray-400 hover:text-white hover:bg-purple-600/20' : 'text-gray-600 hover:text-purple-600 hover:bg-purple-100'} rounded-md`}
                            >
                                {item}
                            </button>
                        ))}
                        <button className="mx-4 bg-gradient-to-r from-purple-600 to-purple-500 px-6 py-2.5 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center space-x-2 text-white">
                            <span>Hire Me!</span>
                            <ArrowRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}