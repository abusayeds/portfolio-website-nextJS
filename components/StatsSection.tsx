import React from 'react';

export default function StatsSection({ darkMode }: any) {
    const stats = [
        { value: '14%', label: 'Job achievements' },
        { value: '50+', label: 'Years of Experience' },
        { value: '1.5K', label: 'Happy Clients' },
        { value: '50+', label: 'Project Completed' }
    ];

    return (
        <section className={`py-12 sm:py-16 md:py-20 lg:py-24 transition-colors ${darkMode ? 'bg-[#0a0a1a]' : 'bg-gray-50'}`}>
            <div className="md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-3 sm:mb-4">
                    <span className="text-purple-500 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                        Behind The Pixels
                    </span>
                </div>
                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 px-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Measuring Success
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className={`rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center transition-all group ${darkMode
                                    ? 'bg-[#12121f] border border-gray-800 hover:border-purple-500/50'
                                    : 'bg-white border border-gray-200 hover:border-purple-500/50 shadow-sm hover:shadow-md'
                                }`}
                        >
                            <div className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r bg-clip-text text-transparent group-hover:scale-110 transition-transform ${darkMode
                                    ? 'from-white to-purple-400'
                                    : 'from-gray-900 to-purple-600'
                                }`}>
                                {stat.value}
                            </div>
                            <div className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}