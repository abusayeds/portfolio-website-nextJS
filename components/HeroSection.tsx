// import { Download, Facebook, Github, Linkedin } from 'lucide-react';
// import { useEffect, useRef } from 'react';

// export default function HeroSection({ darkMode }: any) {
//     const orbitRef = useRef(null);

//     useEffect(() => {
//         const orbitContainer = orbitRef.current;
//         if (!orbitContainer) return;

//         const circles = orbitContainer.querySelectorAll('.orbit-circle');
//         const dots = orbitContainer.querySelectorAll('.orbit-dot');

//         circles.forEach((circle, index) => {
//             circle.style.animation = `rotate ${10 + index * 2}s linear infinite`;
//         });

//         dots.forEach((dot, index) => {
//             dot.style.animation = `rotate ${10 + Math.floor(index / 2) * 2}s linear infinite reverse`;
//         });
//     }, []);

//     return (
//         <>
//             <style>{`
//                 @keyframes rotate {
//                     from {
//                         transform: rotate(0deg);
//                     }
//                     to {
//                         transform: rotate(360deg);
//                     }
//                 }

//                 @keyframes fade-in {
//                     from {
//                         opacity: 0;
//                         transform: translateY(20px);
//                     }
//                     to {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }

//                 @keyframes fade-in-delay {
//                     from {
//                         opacity: 0;
//                         transform: translateX(20px);
//                     }
//                     to {
//                         opacity: 1;
//                         transform: translateX(0);
//                     }
//                 }

//                 .animate-fade-in {
//                     animation: fade-in 0.8s ease-out;
//                 }

//                 .animate-fade-in-delay {
//                     animation: fade-in-delay 0.8s ease-out 0.2s backwards;
//                 }
//             `}</style>

//             <section className={`relative min-h-screen flex items-center pt-20 overflow-hidden transition-colors ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
//                 <div ref={orbitRef} className="absolute right-1/4 top-1/4 w-96 h-96">
//                     <div className="orbit-circle absolute inset-0 border border-purple-500/20 rounded-full">
//                         <div className="orbit-dot absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
//                         <div className="orbit-dot absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-orange-400 rounded-full shadow-lg shadow-orange-400/50"></div>
//                     </div>
//                     <div className="orbit-circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-purple-500/10 rounded-full">
//                         <div className="orbit-dot absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"></div>
//                         <div className="orbit-dot absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 bg-pink-400 rounded-full shadow-lg shadow-pink-400/50"></div>
//                     </div>
//                 </div>

//                 <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
//                     <div className="space-y-8 animate-fade-in">
//                         <div className="flex items-center space-x-2 text-sm">
//                             <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-1xl  `}> <span className=' text-2xl  font-semibold'>Hi</span> There, I am Abu sayed</span>
//                         </div>

//                         <h2 className="text-5xl md:text-6xl font-bold leading-tight">
//                             A professional <br />
//                             <span className={darkMode ? 'text-white' : 'text-gray-900'}>Fullstack developer</span>
//                         </h2>

//                         <p className={`text-lg leading-relaxed max-w-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                             Welcome to my portfolio! <br /> I'm a passionate front-end and back-end developer with a keen eye for design and a love for creating user-friendly web experiences. Here, you'll find a showcase of my work, demonstrating my skills and expertise in web development.</p>

//                         <div className="flex items-center space-x-4">
//                             <button className="bg-purple-600 px-8 py-4 rounded-full font-medium hover:bg-purple-700 transition-all flex items-center space-x-2 group">
//                                 <span>Download CV</span>
//                                 <Download size={18} className="group-hover:translate-y-1 transition-transform" />
//                             </button>
//                             <a href="#" className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'}`}>
//                                 <Facebook size={18} />
//                             </a>
//                             <a href="#" className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'}`}>
//                                 <Linkedin size={18} />
//                             </a>
//                             <a href="#" className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'}`}>
//                                 <Github size={18} />
//                             </a>
//                         </div>
//                     </div>

//                     <div className="relative animate-fade-in-delay">
//                         <div className="relative">
//                             <div className="w-full aspect-square max-w-md mx-auto relative">
//                                 <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-orange-500/20 rounded-full blur-3xl"></div>

//                                 <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-cyan-500/10 to-orange-500/10 border border-purple-500/20">
//                                     <img
//                                         src="https://avatars.githubusercontent.com/u/108521995?v=4"
//                                         alt="Profile"
//                                         className="absolute inset-0 w-full h-full object-cover"
//                                     />
//                                     <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-orange-500/20"></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }
import { Download, Facebook, Github, Linkedin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiNestjs,
    SiMongodb,
    SiPostgresql,
    SiMysql,
    SiTailwindcss,
    SiDocker
} from 'react-icons/si';

const skillsData = {
    inner: [
        { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
        { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
        { name: 'React', Icon: SiReact, color: '#61DAFB' },
        { name: 'Next.js', Icon: SiNextdotjs, color: '#000000' },
        { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
    ],
    outer: [
        { name: 'Express', Icon: SiExpress, color: '#000000' },
        { name: 'NestJS', Icon: SiNestjs, color: '#E0234E' },
        { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
        { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
        { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
    ]
};

export default function HeroSection({ darkMode = false }) {
    const orbitRef = useRef(null);
    const [hoveredSkill, setHoveredSkill] = useState(null);

    useEffect(() => {
        const orbitContainer = orbitRef.current;
        if (!orbitContainer) return;

        const circles = orbitContainer.querySelectorAll('.orbit-circle');
        const dots = orbitContainer.querySelectorAll('.orbit-dot');

        circles.forEach((circle, index) => {
            circle.style.animation = `rotate ${20 + index * 5}s linear infinite`;
        });

        dots.forEach((dot, index) => {
            dot.style.animation = `rotate ${20 + Math.floor(index / 2) * 5}s linear infinite reverse`;
        });
    }, []);

    return (
        <>
            <style>{`
                @keyframes rotate {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes fade-in-delay {
                    from {
                        opacity: 0;
                        transform: translateX(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                .animate-fade-in {
                    animation: fade-in 0.8s ease-out;
                }
                
                .animate-fade-in-delay {
                    animation: fade-in-delay 0.8s ease-out 0.2s backwards;
                }
                
                .skill-icon {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .skill-icon:hover {
                    transform: scale(1.2);
                }
                
                .skill-tooltip {
                    opacity: 0;
                    transform: translateY(10px);
                    transition: all 0.3s ease;
                    pointer-events: none;
                }
                
                .skill-icon:hover + .skill-tooltip {
                    opacity: 1;
                    transform: translateY(0);
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
                            Welcome to my portfolio! <br /> I'm a passionate front-end and back-end developer with a keen eye for design and a love for creating user-friendly web experiences. Here, you'll find a showcase of my work, demonstrating my skills and expertise in web development.
                        </p>

                        <div className="flex items-center space-x-4">
                            <button className="bg-purple-600 px-8 py-4 rounded-full font-medium hover:bg-purple-700 transition-all flex items-center space-x-2 group">
                                <span>Download CV</span>
                                <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                            </button>
                            <a href="#" className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'}`}>
                                <Facebook size={18} />
                            </a>
                            <a href="#" className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'}`}>
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'}`}>
                                <Github size={18} />
                            </a>
                        </div>
                    </div>

                    <div className="relative animate-fade-in-delay flex justify-center items-center">
                        <div className="relative w-full aspect-square max-w-md">
                            <div ref={orbitRef} className="absolute inset-0 pointer-events-auto">
                                <div className="orbit-circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-purple-500/20 rounded-full">
                                    {skillsData.inner.map((skill, index) => {
                                        const positions = [
                                            { top: '0%', left: '50%', transform: 'translate(-50%, -50%)' },
                                            { top: '50%', right: '0%', transform: 'translate(50%, -50%)' },
                                            { bottom: '0%', left: '50%', transform: 'translate(-50%, 50%)' },
                                            { top: '50%', left: '0%', transform: 'translate(-50%, -50%)' },
                                            { top: '25%', right: '25%', transform: 'translate(0%, 0%)' },
                                        ];

                                        const Icon = skill.Icon;

                                        return (
                                            <div
                                                key={skill.name}
                                                className="orbit-dot absolute group"
                                                style={positions[index]}
                                            >
                                                <div
                                                    className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center skill-icon cursor-pointer ${darkMode ? 'bg-gray-800/90 backdrop-blur-sm' : 'bg-white/90 backdrop-blur-sm'
                                                        }`}
                                                    onMouseEnter={() => setHoveredSkill(skill.name)}
                                                    onMouseLeave={() => setHoveredSkill(null)}
                                                    style={{
                                                        borderWidth: '2px',
                                                        borderColor: hoveredSkill === skill.name ? skill.color : 'transparent'
                                                    }}
                                                >
                                                    <Icon
                                                        size={32}
                                                        style={{ color: skill.color }}
                                                    />
                                                </div>
                                                <div className={`skill-tooltip absolute top-full mt-2 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                                                    } shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                                    {skill.name}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Outer orbit */}
                                <div className="orbit-circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-purple-500/10 rounded-full">
                                    {skillsData.outer.map((skill, index) => {
                                        const positions = [
                                            { top: '0%', left: '50%', transform: 'translate(-50%, -50%)' },
                                            { top: '50%', right: '0%', transform: 'translate(50%, -50%)' },
                                            { bottom: '0%', left: '50%', transform: 'translate(-50%, 50%)' },
                                            { top: '50%', left: '0%', transform: 'translate(-50%, -50%)' },
                                            { top: '25%', left: '25%', transform: 'translate(-50%, -50%)' },
                                        ];
                                        const Icon = skill.Icon;
                                        return (
                                            <div
                                                key={skill.name}
                                                className="orbit-dot absolute group"
                                                style={positions[index]}
                                            >
                                                <div
                                                    className={`w-12 h-12 rounded-full shadow-xl flex items-center justify-center skill-icon cursor-pointer ${darkMode ? 'bg-gray-800/90 backdrop-blur-sm' : 'bg-white/90 backdrop-blur-sm'
                                                        }`}
                                                    onMouseEnter={() => setHoveredSkill(skill.name)}
                                                    onMouseLeave={() => setHoveredSkill(null)}
                                                    style={{
                                                        borderWidth: '2px',
                                                        borderColor: hoveredSkill === skill.name ? skill.color : 'transparent'
                                                    }}
                                                >
                                                    <Icon
                                                        size={28}
                                                        style={{ color: skill.color }}
                                                    />
                                                </div>
                                                <div className={`skill-tooltip absolute top-full mt-2 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                                                    } shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                                    {skill.name}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Profile Image in Center */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-orange-500/20 rounded-full blur-3xl"></div>

                            <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-cyan-500/10 to-orange-500/10 border border-purple-500/20">
                                <img
                                    src="https://avatars.githubusercontent.com/u/108521995?v=4"
                                    alt="Profile"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-orange-500/20"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}