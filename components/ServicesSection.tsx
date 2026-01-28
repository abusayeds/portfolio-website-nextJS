'use client';
import { useState, useEffect } from 'react';
import { Code, Palette, Smartphone, Zap, Server, Database, Globe, Cpu, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ServicesSection({ darkMode }: any) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('next');
    const [isPaused, setIsPaused] = useState(false);

    const services = [
        {
            icon: <Code size={48} />,
            title: 'Web Development',
            description: 'Building responsive and modern web applications with cutting-edge technologies.'
        },
        {
            icon: <Palette size={48} />,
            title: 'UI/UX Design',
            description: 'Creating beautiful and intuitive user interfaces that users love to interact with.'
        },
        {
            icon: <Smartphone size={48} />,
            title: 'Mobile Apps',
            description: 'Developing cross-platform mobile applications for iOS and Android.'
        },
        {
            icon: <Zap size={48} />,
            title: 'Performance',
            description: 'Optimizing applications for speed, efficiency, and exceptional user experience.'
        },
        {
            icon: <Server size={48} />,
            title: 'Backend Development',
            description: 'Creating robust server-side solutions with scalable architecture.'
        },
        {
            icon: <Database size={48} />,
            title: 'Database Design',
            description: 'Designing efficient database structures for optimal data management.'
        },
        {
            icon: <Globe size={48} />,
            title: 'API Integration',
            description: 'Seamlessly connecting services with RESTful and GraphQL APIs.'
        },
        {
            icon: <Cpu size={48} />,
            title: 'Cloud Solutions',
            description: 'Deploying and managing applications on modern cloud platforms.'
        }
    ];

    const handlePrev = () => {
        setDirection('prev');
        setCurrentIndex((prev) => (prev === 0 ? services.length - 3 : prev - 1));
    };

    const handleNext = () => {
        setDirection('next');
        setCurrentIndex((prev) => (prev === services.length - 3 ? 0 : prev + 1));
    };

    // Auto-play functionality
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                handleNext();
            }, 2000); // 3 seconds por por automatic change hobe

            return () => clearInterval(interval);
        }
    }, [currentIndex, isPaused]);

    const visibleServices = [
        services[currentIndex],
        services[(currentIndex + 1) % services.length],
        services[(currentIndex + 2) % services.length]
    ];

    return (
        <section id="services" className={`py-24 transition-colors duration-300 overflow-hidden ${darkMode ? 'bg-[#12121f]' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-4">
                    <span className="text-purple-500 text-sm font-semibold uppercase tracking-wider">
                        What I Do
                    </span>
                </div>
                <h2 className={`text-4xl md:text-5xl font-bold text-center mb-20 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    My Services
                </h2>

                <div className="relative">
                    {/* Navigation Buttons */}
                    <button
                        onClick={() => {
                            handlePrev();
                            setIsPaused(true);
                            setTimeout(() => setIsPaused(false), 5000);
                        }}
                        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 p-4 rounded-full transition-all duration-300 hover:scale-110 ${darkMode
                            ? 'bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-500/50'
                            : 'bg-purple-500 hover:bg-purple-600 text-white shadow-xl'
                            }`}
                    >
                        <ChevronLeft size={28} />
                    </button>

                    <button
                        onClick={() => {
                            handleNext();
                            setIsPaused(true);
                            setTimeout(() => setIsPaused(false), 5000);
                        }}
                        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 p-4 rounded-full transition-all duration-300 hover:scale-110 ${darkMode
                            ? 'bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-500/50'
                            : 'bg-purple-500 hover:bg-purple-600 text-white shadow-xl'
                            }`}
                    >
                        <ChevronRight size={28} />
                    </button>

                    {/* Services Container */}
                    <div
                        className="flex flex-col md:flex-row gap-8 px-4 md:px-16"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {visibleServices.map((service, i) => (
                            <div
                                key={`${currentIndex}-${i}`}
                                className={`relative flex-1 ${i === 1 ? 'md:scale-110 md:z-10' : 'md:scale-95'}`}
                                style={{
                                    animation: `${direction === 'next' ? 'slideInRight' : 'slideInLeft'} 0.6s ease-out`,
                                    animationDelay: `${i * 0.1}s`
                                }}
                            >
                                <div
                                    className={`p-8 rounded-2xl transition-all duration-500 h-full ${i === 1
                                        ? darkMode
                                            ? 'bg-gradient-to-br from-purple-600 to-pink-600 border-2 border-purple-400 shadow-2xl shadow-purple-500/50'
                                            : 'bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-purple-300 shadow-2xl'
                                        : darkMode
                                            ? 'bg-[#12121f] border border-gray-800 hover:border-purple-500/50'
                                            : 'bg-white border border-gray-200 hover:border-purple-300 hover:shadow-xl'
                                        } group hover:scale-105`}
                                >
                                    {/* Icon with Glow Effect */}
                                    <div className={`mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${i === 1 ? 'text-white' : darkMode ? 'text-purple-400' : 'text-purple-600'
                                        }`}>
                                        <div className={`inline-block p-4 rounded-xl ${i === 1
                                            ? 'bg-white/20 backdrop-blur-sm'
                                            : darkMode
                                                ? 'bg-purple-500/10'
                                                : 'bg-purple-100'
                                            }`}>
                                            {service.icon}
                                        </div>
                                    </div>

                                    <h3 className={`text-2xl font-bold mb-4 ${i === 1 ? 'text-white' : darkMode ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        {service.title}
                                    </h3>

                                    <p className={`leading-relaxed ${i === 1 ? 'text-white/90' : darkMode ? 'text-gray-400' : 'text-gray-600'
                                        }`}>
                                        {service.description}
                                    </p>

                                    {/* Decorative Elements */}
                                    {i === 1 && (
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -z-10"></div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-12">
                        {services.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    setDirection(i > currentIndex ? 'next' : 'prev');
                                    setCurrentIndex(i);
                                }}
                                className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex
                                    ? darkMode
                                        ? 'w-8 bg-purple-500'
                                        : 'w-8 bg-purple-600'
                                    : darkMode
                                        ? 'w-2 bg-gray-700 hover:bg-gray-600'
                                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(100px) scale(0.8);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0) scale(1);
                    }
                }

                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-100px) scale(0.8);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0) scale(1);
                    }
                }
            `}</style>
        </section>
    );
}