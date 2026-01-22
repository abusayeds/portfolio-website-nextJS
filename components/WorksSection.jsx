'use client';
import { ExternalLink } from 'lucide-react';

export default function WorksSection({ darkMode }) {
    const works = [
        { title: 'E-Commerce Platform', category: 'Web Development', color: 'from-blue-500 to-cyan-500' },
        { title: 'Mobile Banking App', category: 'Mobile Design', color: 'from-purple-500 to-pink-500' },
        { title: 'Portfolio Website', category: 'UI/UX Design', color: 'from-orange-500 to-red-500' },
        { title: 'Dashboard Analytics', category: 'Web Application', color: 'from-green-500 to-emerald-500' },
        { title: 'Social Media App', category: 'Mobile Development', color: 'from-violet-500 to-purple-500' },
        { title: 'Landing Page', category: 'Web Design', color: 'from-pink-500 to-rose-500' }
    ];

    return (
        <section id="works" className={`py-24 transition-colors duration-300 ${darkMode ? 'bg-[#12121f]' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-4 animate-slide-up">
                    <span className="text-purple-500 text-sm font-semibold uppercase tracking-wider">
                        Portfolio
                    </span>
                </div>
                <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 animate-slide-up ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Recent Works
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {works.map((work, i) => (
                        <div
                            key={i}
                            className="group relative overflow-hidden rounded-2xl aspect-square animate-slide-up cursor-pointer"
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${work.color} opacity-80 group-hover:opacity-100 transition-opacity`}></div>
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                            <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                <span className="text-white/80 text-sm mb-2">{work.category}</span>
                                <h3 className="text-white text-2xl font-bold mb-4">{work.title}</h3>
                                <div className="flex items-center space-x-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span>View Project</span>
                                    <ExternalLink size={18} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

