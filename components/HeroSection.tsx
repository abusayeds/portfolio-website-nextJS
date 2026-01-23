import { Download, Facebook, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

export default function HeroSection({ darkMode, profileData }: any) {
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const getSkillGradient = (index: number) => {
        const gradients = [
            'from-purple-500 to-pink-500',
            'from-blue-500 to-cyan-500',
            'from-green-500 to-emerald-500',
            'from-orange-500 to-red-500',
            'from-indigo-500 to-purple-500',
            'from-pink-500 to-rose-500',
            'from-teal-500 to-green-500',
            'from-yellow-500 to-orange-500',
            'from-cyan-500 to-blue-500',
            'from-violet-500 to-purple-500',
            'from-lime-500 to-green-500',
        ];
        return gradients[index % gradients.length];
    };

    const getSkillsData = () => {
        if (!profileData?.skills) return { inner: [], outer: [] };
        const midPoint = Math.ceil(profileData.skills.length / 2);
        return {
            inner: profileData.skills.slice(0, midPoint),
            outer: profileData.skills.slice(midPoint)
        };
    };

    const skillsData = getSkillsData();

    const handleDownloadCV = () => {
        if (profileData?.cvUrl) {
            window.open(profileData.cvUrl, '_blank');
        }
    };

    return (
        <>
            <style>{`
                @keyframes rotateOrbit {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes fade-in-delay {
                    from { opacity: 0; transform: translateX(20px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                
                .animate-fade-in {
                    animation: fade-in 0.8s ease-out;
                }
                
                .animate-fade-in-delay {
                    animation: fade-in-delay 0.8s ease-out 0.2s backwards;
                }
                
                .orbit-ring {
                    animation: rotateOrbit 30s linear infinite;
                }
                
                .orbit-ring-outer {
                    animation: rotateOrbit 40s linear infinite;
                }
                
                .orbit-ring.paused,
                .orbit-ring-outer.paused {
                    animation-play-state: paused;
                }
                
                .skill-badge {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .skill-badge:hover {
                    transform: scale(1.25) !important;
                    z-index: 20;
                }
            `}</style>

            <section className={`relative min-h-screen flex items-center pt-20 overflow-hidden transition-colors ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
                    <div className="space-y-8 animate-fade-in">
                        <div className="flex items-center space-x-2 text-sm">
                            <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-1xl`}>
                                <span className='text-2xl font-semibold'>Hi</span> There, I am Abu sayed
                            </span>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                            A professional <br />
                            <span className={darkMode ? 'text-white' : 'text-gray-900'}>Fullstack developer</span>
                        </h2>

                        <p className={`text-lg leading-relaxed max-w-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Welcome to my portfolio! <br />
                            {profileData?.description || 'Welcome to my portfolio!'}
                        </p>

                        <div className="flex items-center space-x-4">
                            <button
                                onClick={handleDownloadCV}
                                className="bg-purple-600 px-8 py-4 rounded-full font-medium hover:bg-purple-700 transition-all flex items-center space-x-2 group text-white"
                            >
                                <span>Download CV</span>
                                <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                            </button>
                            {profileData?.facebook && (
                                <a href={profileData.facebook} target="_blank" rel="noopener noreferrer" className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'}`}>
                                    <Facebook size={18} />
                                </a>
                            )}
                            {profileData?.linkedin && (
                                <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'}`}>
                                    <Linkedin size={18} />
                                </a>
                            )}
                            {profileData?.github && (
                                <a href={profileData.github} target="_blank" rel="noopener noreferrer" className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'}`}>
                                    <Github size={18} />
                                </a>
                            )}
                        </div>
                    </div>
                    <div className="relative animate-fade-in-delay flex justify-center items-center min-h-[600px]">
                        <div className="relative w-[600px] h-[600px]">
                            <div className={`orbit-ring absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] ${hoveredSkill ? 'paused' : ''}`}>
                                <svg className="w-full h-full" viewBox="0 0 450 450">
                                    <circle
                                        cx="225"
                                        cy="225"
                                        r="223"
                                        fill="none"
                                        stroke="url(#gradient1)"
                                        strokeWidth="2"
                                        strokeDasharray="6 6"
                                    />
                                    <defs>
                                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
                                            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.4" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                {skillsData.inner.map((skill: any, index: number) => {
                                    const angle = (360 / skillsData.inner.length) * index;
                                    const isHovered = hoveredSkill === skill._id;
                                    const radius = 175;
                                    const angleRad = (angle - 90) * (Math.PI / 180);
                                    const x = 225 + radius * Math.cos(angleRad);
                                    const y = 225 + radius * Math.sin(angleRad);

                                    return (
                                        <div
                                            key={skill._id}
                                            className="skill-wrapper-inner absolute"
                                            style={{
                                                left: `${x}px`,
                                                top: `${y}px`,
                                                transform: `translate(-50%, -50%) rotate(-${angle}deg)`
                                            }}
                                        >
                                            <div
                                                className={`skill-badge px-4 py-2 rounded-full shadow-xl cursor-pointer ${darkMode ? 'bg-gray-800/95 backdrop-blur-sm border border-purple-400/30' : 'bg-white/95 backdrop-blur-sm border border-purple-400/30'}`}
                                                onMouseEnter={() => setHoveredSkill(skill._id)}
                                                onMouseLeave={() => setHoveredSkill(null)}
                                            >
                                                <div className={`bg-gradient-to-r ${getSkillGradient(index)} bg-clip-text text-transparent font-bold whitespace-nowrap transition-all ${isHovered ? 'text-sm' : 'text-xs'}`}>
                                                    {skill.name}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className={`orbit-ring-outer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] ${hoveredSkill ? 'paused' : ''}`}>
                                <svg className="w-full h-full" viewBox="0 0 600 600">
                                    <circle
                                        cx="300"
                                        cy="300"
                                        r="298"
                                        fill="none"
                                        stroke="url(#gradient2)"
                                        strokeWidth="2"
                                        strokeDasharray="6 6"
                                    />
                                    <defs>
                                        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
                                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                {skillsData.outer.map((skill: any, index: number) => {
                                    const angle = (360 / skillsData.outer.length) * index;
                                    const isHovered = hoveredSkill === skill._id;
                                    const gradientIndex = index + skillsData.inner.length;
                                    const radius = 245;
                                    const angleRad = (angle - 90) * (Math.PI / 180);
                                    const x = 300 + radius * Math.cos(angleRad);
                                    const y = 300 + radius * Math.sin(angleRad);

                                    return (
                                        <div
                                            key={skill._id}
                                            className="skill-wrapper-outer absolute"
                                            style={{
                                                left: `${x}px`,
                                                top: `${y}px`,
                                                transform: `translate(-50%, -50%) rotate(-${angle}deg)`
                                            }}
                                        >
                                            <div
                                                className={`skill-badge px-4 py-2 rounded-full shadow-xl cursor-pointer ${darkMode ? 'bg-gray-800/95 backdrop-blur-sm border border-purple-400/30' : 'bg-white/95 backdrop-blur-sm border border-purple-400/30'}`}
                                                onMouseEnter={() => setHoveredSkill(skill._id)}
                                                onMouseLeave={() => setHoveredSkill(null)}
                                            >
                                                <div className={`bg-gradient-to-r ${getSkillGradient(gradientIndex)} bg-clip-text text-transparent font-bold whitespace-nowrap transition-all ${isHovered ? 'text-sm' : 'text-xs'}`}>
                                                    {skill.name}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] z-10">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 via-transparent to-orange-500/30 rounded-full blur-2xl"></div>
                                <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-cyan-500/10 to-orange-500/10 border-4 border-purple-500/40 shadow-2xl">
                                    <img
                                        src={profileData?.profileImage || "https://avatars.githubusercontent.com/u/108521995?v=4"}
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-orange-500/20"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}