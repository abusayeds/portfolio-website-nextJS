import { Download, Facebook, Github, Linkedin } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface HeroSectionProps {
    darkMode: boolean;
    profileData?: any;
}

export default function HeroSection({ darkMode, profileData }: HeroSectionProps) {
    const orbitRef = useRef<HTMLDivElement>(null);
    const totalSkills = profileData?.skills?.length || 0;
    const skillsPerCircle = Math.ceil(totalSkills / 2);
    const circle2 = Math.ceil(totalSkills / 2) - 1;
    const circle1 = totalSkills - skillsPerCircle + 1
    const generateDots = (count: number) => {
        return Array.from({ length: count }, (_, i) => {
            const angle = (360 / count) * i;
            return { angle };
        });
    };

    const circle1Skills = generateDots(skillsPerCircle);
    const circle2Skils = generateDots(totalSkills - skillsPerCircle);

    useEffect(() => {
        const container = orbitRef.current;
        if (!container) return;

        const circles = container.querySelectorAll('.orbit-circle');

        circles.forEach((circle, index) => {
            const duration = 16 + index * 6;
            const direction = index % 2 === 0 ? 'normal' : 'reverse';

            (circle as HTMLElement).style.animation = `rotate ${duration}s linear infinite ${direction}`;
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
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fade-in-delay 0.8s ease-out 0.2s backwards;
        }
      `}</style>

            <section
                className={`relative min-h-screen flex items-center pt-20 overflow-hidden transition-colors duration-500 ${darkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'
                    }`}
            >
                <div
                    ref={orbitRef}
                    className="absolute right-[10%] top-[10%] w-[800px] h-[800px] hidden lg:block"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full overflow-hidden border-4 border-purple-800/40 shadow-2xl shadow-purple-500/30 z-20">
                        <img
                            src={profileData?.profileImage || "https://avatars.githubusercontent.com/u/108521995?v=4"}
                            alt="Abu Sayed"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="orbit-circle absolute inset-0 ">
                        {circle1Skills.map((dot, i) => {
                            const skill = profileData?.skills?.[i];
                            return (
                                <div
                                    key={`c1-${i}`}
                                    className="orbit-dot absolute top-1/2 left-1/2  "
                                    style={{
                                        transform: `rotate(${dot.angle}deg) translate(240px) rotate(-${dot.angle}deg) translate(-50%, -50%)`,
                                    }}
                                >
                                    {skill?.iconURL && (
                                        <img
                                            src={skill.iconURL}
                                            alt={skill.name}
                                            className=" w-8 h-8 object-contain"
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <div className="orbit-circle absolute inset-0">
                        {circle2Skils.map((dot, i) => {
                            const skillIndex = skillsPerCircle + i;
                            const skill = profileData?.skills?.[skillIndex];

                            if (!skill) return null;

                            return (
                                <div
                                    key={`c2-${i}`}
                                    className="orbit-dot absolute top-1/2 left-1/2"
                                    style={{
                                        transform: `rotate(${dot.angle}deg) translate(300px) rotate(-${dot.angle}deg) translate(-50%, -50%)`,
                                    }}
                                >
                                    <img
                                        src={skill.iconURL}
                                        alt={skill.name}
                                        className="w-8 h-8 object-contain"
                                    />
                                </div>
                            );
                        })}
                    </div>

                </div>

                {/* Main content */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
                    <div className="space-y-6 max-w-2xl animate-fade-in">
                        <div className="flex items-center space-x-3">
                            <span className={`text-xl font-medium ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                                Hi there,
                            </span>
                            <span className="text-2xl font-semibold">I'm Abu Sayed</span>
                        </div>

                        <h1 className="text-5xl font-serif  md:text-5xl lg:text-5xl font-extrabold leading-tight">
                            Professional
                            <br />
                            <span className={darkMode ? 'text-white' : 'text-gray-900'}>
                                Full-Stack Developer
                            </span>
                        </h1>

                        <p className={`text-[18px]   leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                            Welcome to my portfolio
                            <br />
                            {profileData?.description}
                        </p>

                        <div className="flex items-center gap-6 pt-4">
                            <a
                                href={profileData?.cvUrl || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full font-medium text-white transition-all flex items-center gap-2 shadow-lg shadow-purple-500/30 group"
                            >
                                <span>Download CV</span>
                                <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                            </a>

                            <div className="flex items-center gap-5">
                                <a
                                    href={profileData?.facebook || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'}`}
                                >
                                    <Facebook size={24} />
                                </a>
                                <a
                                    href={profileData?.linkedin || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'}`}
                                >
                                    <Linkedin size={24} />
                                </a>
                                <a
                                    href={profileData?.github || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`transition-colors ${darkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'}`}
                                >
                                    <Github size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}