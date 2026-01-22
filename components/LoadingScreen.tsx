"use client";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const fadeTimer = setTimeout(() => {
            setIsFading(true);
        }, 3500);

        const removeTimer = setTimeout(() => {
            setIsLoading(false);
        }, 4000);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    if (!isLoading) return null;

    const firstName = "Welcome to my Portfolio";
    const lastName = " Abu Sayed";

    return (
        <>
            <style jsx>{`
                @keyframes wave-text {
                    0%, 100% { 
                        transform: translateY(0);
                        opacity: 0;
                    }
                    50% { 
                        transform: translateY(-10px);
                        opacity: 1;
                    }
                }

                @keyframes wave-text-large {
                    0%, 100% { 
                        transform: translateY(0) scale(1);
                        opacity: 0;
                    }
                    50% { 
                        transform: translateY(-15px) scale(1.05);
                        opacity: 1;
                    }
                }

                @keyframes loading-wave-modern {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }

                @keyframes pulse-dot {
                    0%, 100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                    50% {
                        transform: scale(1.5);
                        opacity: 0.5;
                    }
                }

                @keyframes wave-animation {
                    0% {
                        transform: translateX(-100%) translateY(0);
                    }
                    50% {
                        transform: translateX(50%) translateY(-20px);
                    }
                    100% {
                        transform: translateX(100%) translateY(0);
                    }
                }

                @keyframes particle-float {
                    0% {
                        transform: translateY(100vh) scale(0);
                        opacity: 0;
                    }
                    10% {
                        opacity: 1;
                    }
                    90% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(-100vh) scale(1);
                        opacity: 0;
                    }
                }

                .wave-text {
                    animation: wave-text 1s ease-in-out forwards;
                }

                .wave-text-large {
                    animation: wave-text-large 1s ease-in-out forwards;
                }

                .loading-wave-modern {
                    background: linear-gradient(90deg, transparent, #22d3ee, transparent);
                    animation: loading-wave-modern 1.5s ease-in-out infinite;
                }

                .pulse-dot {
                    animation: pulse-dot 2s ease-in-out infinite;
                }

                .wave {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 200%;
                    height: 100px;
                    background: linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.1), transparent);
                    animation: wave-animation 8s ease-in-out infinite;
                }

                .wave1 {
                    animation-delay: 0s;
                    opacity: 0.3;
                }

                .wave2 {
                    animation-delay: 2s;
                    opacity: 0.2;
                }

                .wave3 {
                    animation-delay: 4s;
                    opacity: 0.1;
                }

                .particle {
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    background: radial-gradient(circle, #22d3ee, transparent);
                    border-radius: 50%;
                    animation: particle-float linear infinite;
                }
            `}</style>

            <div
                className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-700 overflow-hidden ${isFading ? "opacity-0" : "opacity-100"
                    }`}
            >
                <div className="absolute inset-0">
                    <div className="wave wave1"></div>
                    <div className="wave wave2"></div>
                    <div className="wave wave3"></div>
                </div>

                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="particle"
                            style={{
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${3 + Math.random() * 4}s`
                            }}
                        ></div>
                    ))}
                </div>

                <div className="relative z-10 text-center px-4">
                    <div className="mb-2 overflow-hidden">
                        <h1 className="text-sm md:text-base lg:text-lg font-light tracking-widest uppercase">
                            {firstName.split("").map((letter, index) => (
                                <span
                                    key={`first-${index}`}
                                    className="inline-block text-gray-400 wave-text"
                                    style={{
                                        animationDelay: `${index * 0.05}s`
                                    }}
                                >
                                    {letter === " " ? "\u00A0" : letter}
                                </span>
                            ))}
                        </h1>
                    </div>

                    <div className="overflow-hidden mb-8">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-teal-400 bg-clip-text text-transparent">
                            {lastName.split("").map((letter, index) => (
                                <span
                                    key={`last-${index}`}
                                    className="inline-block wave-text-large"
                                    style={{
                                        animationDelay: `${(firstName.length * 0.05) + (index * 0.08)}s`
                                    }}
                                >
                                    {letter === " " ? "\u00A0" : letter}
                                </span>
                            ))}
                        </h1>
                    </div>

                    <div className="flex items-center justify-center gap-2 mb-6">
                        <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full pulse-dot"></div>
                        <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
                    </div>

                    <p className="text-gray-500 text-sm tracking-wider uppercase animate-pulse">Loading Experience</p>

                    <div className="mt-10 relative w-64 h-1 mx-auto overflow-hidden rounded-full bg-gray-900">
                        <div className="absolute inset-0 loading-wave-modern rounded-full"></div>
                    </div>
                </div>
            </div>
        </>
    );
}