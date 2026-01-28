'use client';

import { Code, ExternalLink, Github, Globe, Server } from 'lucide-react';
import { useEffect, useState } from 'react';
import { fetchData } from '../api/api';
import Link from 'next/link';

export default function WorksSection({ darkMode }: any) {
    const [ProjectData, setProjectData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const res = await fetchData('my-projects/all-project');
                if (res?.success && res?.data) {
                    setProjectData(res.data);
                }
            } catch (error) {
                console.error('Error loading data:', error);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    const gradients = [
        'from-blue-500 to-cyan-500',
        'from-purple-500 to-pink-500',
        'from-orange-500 to-red-500',
        'from-green-500 to-emerald-500',
        'from-violet-500 to-purple-500',
        'from-pink-500 to-rose-500',
        'from-indigo-500 to-blue-500',
        'from-teal-500 to-green-500'
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

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div
                                key={i}
                                className={`rounded-2xl aspect-square ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} animate-pulse`}
                            ></div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ProjectData?.map((project: any, i: number) => (
                            <div
                                key={project._id}
                                className={`group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-white shadow-lg'
                                    } animate-slide-up`}
                                style={{ animationDelay: `${i * 0.1}s` }}
                            >
                                {/* Project Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${gradients[i % gradients.length]} opacity-20`}></div>
                                    <img
                                        src={project.images}
                                        alt={project.title || project.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        onError={(e: any) => {
                                            e.target.style.display = 'none';
                                            e.target.parentElement.style.background = `linear-gradient(to bottom right, var(--tw-gradient-stops))`;
                                            e.target.parentElement.classList.add(gradients[i % gradients.length]);
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* View Details Button - Slides up from bottom */}
                                    <Link href={{
                                        pathname: '/projectdetails',
                                        query: { id: project._id }
                                    }} className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out p-6">
                                        <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl">
                                            <span>View Details</span>
                                            <ExternalLink size={18} />
                                        </button>
                                    </Link  >
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                        {project.name}
                                    </h3>
                                    <h3 className={`text-sm font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                        {project.title}
                                    </h3>

                                    <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {project.description
                                            ? project.description.split(' ').slice(0, 15).join(' ') + '...'
                                            : 'No description available'}
                                    </p>

                                    {/* Technologies */}
                                    <div className="mb-4 space-y-2 h-12">
                                        {project.frontendTechnology && (
                                            <div className="flex items-start gap-2">
                                                <Code size={16} className="text-purple-500 mt-0.5 flex-shrink-0" />
                                                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                                    {project.backendTechnology} {project.frontendTechnology} {project.designTechnology}
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Action Links */}
                                    <div className="flex items-center gap-3 pt-4 border-t border-gray-700/30">
                                        {project.projectLiveLink && (
                                            <a
                                                href={project.projectLiveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1 text-sm text-purple-500 hover:text-purple-400 transition-colors"
                                                title="Live Demo"
                                            >
                                                <Globe size={16} />
                                                <span>Live</span>
                                            </a>
                                        )}
                                        {project.githubClientCodeLink && (
                                            <a
                                                href={project.githubClientCodeLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1 text-sm text-purple-500 hover:text-purple-400 transition-colors"
                                                title="GitHub Client"
                                            >
                                                <Github size={16} />
                                                <span>Client</span>
                                            </a>
                                        )}
                                        {project.githubServerCodeLink && (
                                            <a
                                                href={project.githubServerCodeLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1 text-sm text-purple-500 hover:text-purple-400 transition-colors"
                                                title="GitHub Server"
                                            >
                                                <Server size={16} />
                                                <span>Server</span>
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 pointer-events-none"></div>
                            </div>
                        ))}
                    </div>
                )}

                {!loading && (!ProjectData || ProjectData.length === 0) && (
                    <div className={`text-center py-16 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        <p className="text-xl">No projects found</p>
                    </div>
                )}
            </div>
        </section>
    );
}