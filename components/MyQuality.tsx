"use client"

import { useEffect, useRef, useState } from "react";

export default function MyQuality({ darkMode }: any) {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const getAnimationClass = (index: any) => {
        const pattern = index % 4;
        const baseClasses = 'transition-all duration-1000 ease-out';

        if (!isVisible) {
            switch (pattern) {
                case 0:
                    return `${baseClasses} opacity-0 -translate-y-32`;
                case 1:
                    return `${baseClasses} opacity-0 translate-y-32`;
                case 2:
                    return `${baseClasses} opacity-0 -translate-x-32`;
                case 3:
                    return `${baseClasses} opacity-0 translate-x-32`;
                default:
                    return baseClasses;
            }
        }

        return `${baseClasses} opacity-100 translate-x-0 translate-y-0`;
    };

    const services = [
        {
            number: '01',
            title: 'Responsive Design',
            description: 'Ensure your website looks great on any device, with layouts that adapt to different screen sizes seamlessly.',
            icon: '↙',
        },
        {
            number: '02',
            title: 'CMS Development',
            description: 'Set up user-friendly CMS solutions like WordPress or custom-built options so clients can manage content easily.',
            icon: '↙'
        },
        {
            number: '03',
            title: 'API Integrations',
            description: 'Build and integrate APIs to connect websites with third-party applications, enhancing functionality and performance.',
            icon: '↙'
        },
        {
            number: '04',
            title: 'Website Redesign',
            description: 'Refresh outdated websites with modern, appealing designs that align with current brand goals and user expectations.',
            icon: '↗',

        }
    ];

    return (
        <section ref={sectionRef} id="skills" className={`py-24 transition-colors duration-300 ${darkMode ? 'bg-[#0a0a1a]' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto px-6">
                <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'} transition-all duration-700`}>
                    <span className="text-purple-500">My Quality</span>
                    <span className={darkMode ? 'text-white' : 'text-gray-900'}> Services</span>
                </h2>
                <p className={`text-center mb-16 max-w-3xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'} transition-all duration-700 delay-100`}>
                    We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.
                </p>

                <div className="max-w-5xl mx-auto space-y-1">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            style={{ transitionDelay: `${i * 150}ms` }}
                            className={`group ${getAnimationClass(i)} ${service.highlighted
                                ? 'bg-gradient-to-r from-purple-600 to-purple-500'
                                : darkMode ? 'bg-transparent border-t border-gray-800' : 'bg-transparent border-t border-gray-200'
                                } ${service.highlighted ? 'p-8' : 'p-6'} hover:bg-purple-600 hover:bg-opacity-10 cursor-pointer`}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-start gap-6 flex-1">
                                    <span className={`text-2xl font-bold ${service.highlighted ? 'text-white' : 'text-purple-500'
                                        }`}>
                                        {service.number}
                                    </span>
                                    <div className="flex-1">
                                        <h3 className={`text-2xl font-bold mb-3 ${service.highlighted
                                            ? 'text-white'
                                            : darkMode ? 'text-white' : 'text-gray-900'
                                            }`}>
                                            {service.title}
                                        </h3>
                                        <p className={`${service.highlighted
                                            ? 'text-purple-100'
                                            : darkMode ? 'text-gray-400' : 'text-gray-600'
                                            } max-w-2xl`}>
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                                <div className={`text-3xl ${service.highlighted ? 'text-white' : 'text-purple-500'
                                    }`}>
                                    {service.icon}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}