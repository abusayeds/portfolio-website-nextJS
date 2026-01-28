export default function CompaniesMarquee({ darkMode, profileData }: any) {
    // Duplicate the skills array for seamless loop
    const skills = profileData?.skills || [];
    const duplicatedSkills = [...skills, ...skills];

    return (
        <section className="relative bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 py-4 overflow-hidden">
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent pointer-events-none"></div>

            {/* Animated marquee container */}
            <div className="relative flex gap-8 md:gap-12 lg:gap-16">
                {/* First marquee track */}
                <div className="flex gap-8 md:gap-12 lg:gap-16 animate-marquee">
                    {duplicatedSkills.map((skill: any, i: number) => (
                        <div
                            key={`track1-${i}`}
                            className="flex items-center gap-3  hover:scale-105 transition-all duration-300 group min-w-fit"
                        >
                            {skill?.iconURL && (
                                <div className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                                    <img
                                        src={skill.iconURL}
                                        alt={skill.name}
                                        className="w-full h-full object-contain drop-shadow-md"
                                    />
                                </div>
                            )}
                            <span className="text-lg md:text-xl lg:text-2xl font-semibold text-white whitespace-nowrap">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="flex gap-8 md:gap-12 lg:gap-16 animate-marquee" aria-hidden="true">
                    {duplicatedSkills.map((skill: any, i: number) => (
                        <div
                            key={`track2-${i}`}
                            className="flex items-center gap-3  rounded-xl   shadow-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 group min-w-fit"
                        >
                            {skill?.iconURL && (
                                <div className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                                    <img
                                        src={skill.iconURL}
                                        alt={skill.name}
                                        className="w-full h-full object-contain drop-shadow-md"
                                    />
                                </div>
                            )}
                            <span className="text-lg md:text-xl lg:text-2xl font-semibold text-white whitespace-nowrap">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }

                /* Pause animation on hover */
                section:hover .animate-marquee {
                    animation-play-state: paused;
                }

                /* Responsive speed adjustments */
                @media (max-width: 768px) {
                    .animate-marquee {
                        animation-duration: 20s;
                    }
                }

                @media (min-width: 1024px) {
                    .animate-marquee {
                        animation-duration: 30s;
                    }
                }
            `}</style>
        </section>
    );
}