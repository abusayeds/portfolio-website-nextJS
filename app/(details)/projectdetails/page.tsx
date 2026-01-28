"use client"
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ExternalLink, Github, Code2, Database, Palette, GitCommit, FileText } from "lucide-react";
import { fetchData } from "../../../api/api";
import { useTheme } from "../../../components/ThemeContext";

const Page = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const id = searchParams.get('id');
    const [ProjectData, setProjectData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [animating, setAnimating] = useState(false);
    const [isEntering, setIsEntering] = useState(true);
    const { darkMode } = useTheme();

    useEffect(() => {
        const loadData = async () => {
            setIsEntering(true);
            try {
                const res = await fetchData(`my-projects/single-project/${id}`);
                if (res?.success && res?.data) {
                    setProjectData(res.data);
                }
            } catch (error) {
                console.error('Error loading data:', error);
            } finally {
                setLoading(false);
            }
        };
        if (id) {
            loadData();
        }
    }, [id]);

    const handleProjectClick = (projectId: string) => {
        setAnimating(true);
        setIsEntering(false);

        // Wait for slide-down animation to complete
        setTimeout(() => {
            router.push(`/projectdetails?id=${projectId}`);

            // Reset animation state after navigation
            setTimeout(() => {
                setAnimating(false);
            }, 100);
        }, 600);
    };

    if (loading) {
        return (
            <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-[#12121f]' : 'bg-white'
                }`}>
                <div className={`animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 ${darkMode ? 'border-purple-500' : 'border-purple-600'
                    }`}></div>
            </div>
        );
    }

    if (!ProjectData) {
        return (
            <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-[#12121f]' : 'bg-white'
                }`}>
                <p className={`text-xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Project not found
                </p>
            </div>
        );
    }

    const { singleProject, otherProjects } = ProjectData as any;

    return (
        <div className={`min-h-screen overflow-hidden ${darkMode ? 'bg-[#12121f] text-white' : 'bg-white text-gray-900'
            }`}>
            {/* Main Project Section with Slide Animations */}
            <div
                className={`transition-all duration-600 ease-in-out ${animating
                        ? 'translate-y-full opacity-0'  // Slide down when leaving
                        : isEntering
                            ? 'translate-x-0 opacity-100'   // Slide from right when entering
                            : 'translate-x-0 opacity-100'
                    }`}
                style={{
                    animation: isEntering && !animating ? 'slideInFromRight 0.6s ease-out' : 'none'
                }}
            >
                <div className="relative overflow-hidden">
                    <div className={`absolute inset-0 ${darkMode ? 'bg-[#0a0a1a]' : 'bg-gray-50'}`}></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Left - Image */}
                            <div className="relative group">
                                <div className={`absolute inset-0 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity ${darkMode
                                        ? 'bg-gradient-to-r from-purple-600 to-blue-600'
                                        : 'bg-gradient-to-r from-purple-400 to-blue-400'
                                    }`}></div>
                                <img
                                    src={singleProject.images}
                                    alt={singleProject.name}
                                    className={`relative rounded-2xl w-full h-96 object-cover shadow-2xl ring-2 ${darkMode ? 'ring-purple-500/50' : 'ring-purple-400/50'
                                        }`}
                                />
                            </div>

                            {/* Right - Details */}
                            <div className="space-y-6">
                                <div>
                                    <h1 className={`text-5xl font-bold mb-2 ${darkMode
                                            ? 'bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'
                                            : 'bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'
                                        }`}>
                                        {singleProject.name}
                                    </h1>
                                    <p className={darkMode ? 'text-xl text-gray-300' : 'text-xl text-gray-600'}>
                                        {singleProject.title}
                                    </p>
                                </div>

                                <div className="flex gap-4 text-sm">
                                    <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${darkMode ? 'bg-slate-800/50' : 'bg-gray-200/50'
                                        }`}>
                                        <GitCommit className={`w-4 h-4 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                                        <span>{singleProject.commit} commits</span>
                                    </div>
                                    <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${darkMode ? 'bg-slate-800/50' : 'bg-gray-200/50'
                                        }`}>
                                        <FileText className={`w-4 h-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                                        <span>{singleProject.pages} pages</span>
                                    </div>
                                </div>

                                <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    {singleProject.description}
                                </p>

                                {/* Technology Stack */}
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <Code2 className={`w-5 h-5 mt-1 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                                        <div>
                                            <p className={`text-sm mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Frontend</p>
                                            <p className={darkMode ? 'text-white' : 'text-gray-900'}>{singleProject.frontendTechnology}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Database className={`w-5 h-5 mt-1 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                                        <div>
                                            <p className={`text-sm mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Backend</p>
                                            <p className={darkMode ? 'text-white' : 'text-gray-900'}>{singleProject.backendTechnology}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Palette className={`w-5 h-5 mt-1 ${darkMode ? 'text-pink-400' : 'text-pink-600'}`} />
                                        <div>
                                            <p className={`text-sm mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Design</p>
                                            <p className={darkMode ? 'text-white' : 'text-gray-900'}>{singleProject.designTechnology}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="grid grid-cols-2 gap-3 pt-4">
                                    <a
                                        href={singleProject.projectLiveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Live Demo
                                    </a>
                                    <a
                                        href={singleProject.githubClientCodeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 ${darkMode
                                                ? 'bg-slate-800 hover:bg-slate-700'
                                                : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                                            }`}
                                    >
                                        <Github className="w-4 h-4" />
                                        Client Code
                                    </a>
                                    <a
                                        href={singleProject.serverLiveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 ${darkMode
                                                ? 'bg-slate-800 hover:bg-slate-700'
                                                : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                                            }`}
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Server Live
                                    </a>
                                    <a
                                        href={singleProject.githubServerCodeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 ${darkMode
                                                ? 'bg-slate-800 hover:bg-slate-700'
                                                : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                                            }`}
                                    >
                                        <Github className="w-4 h-4" />
                                        Server Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Projects Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <h2 className={`text-3xl font-bold mb-8 ${darkMode
                            ? 'bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'
                            : 'bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'
                        }`}>
                        Related Projects
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {otherProjects?.map((project: any, index: number) => (
                            <div
                                key={project._id}
                                onClick={() => handleProjectClick(project._id)}
                                style={{ animationDelay: `${index * 100}ms` }}
                                className={`group rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 cursor-pointer animate-fade-in ${darkMode
                                        ? 'bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 border border-slate-700/50 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20'
                                        : 'bg-white hover:bg-gray-50 border border-gray-200 hover:border-purple-300 hover:shadow-2xl hover:shadow-purple-200/50'
                                    }`}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.images}
                                        alt={project.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className={`absolute inset-0 opacity-60 ${darkMode
                                            ? 'bg-gradient-to-t from-slate-900 to-transparent'
                                            : 'bg-gradient-to-t from-white to-transparent'
                                        }`}></div>
                                </div>

                                <div className="p-6 space-y-4">
                                    <div>
                                        <h3 className={`text-xl font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'
                                            }`}>
                                            {project.name}
                                        </h3>
                                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                            {project.title}
                                        </p>
                                    </div>

                                    <div className="flex gap-3 text-xs">
                                        <span className={`px-3 py-1 rounded-full ${darkMode ? 'bg-slate-700/50' : 'bg-gray-200'
                                            }`}>
                                            {project.commit} commits
                                        </span>
                                        <span className={`px-3 py-1 rounded-full ${darkMode ? 'bg-slate-700/50' : 'bg-gray-200'
                                            }`}>
                                            {project.pages} pages
                                        </span>
                                    </div>

                                    <div className="space-y-2 text-sm">
                                        <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'
                                            }`}>
                                            <Code2 className={`w-4 h-4 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                                            <span className="truncate">{project.frontendTechnology}</span>
                                        </div>
                                        <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'
                                            }`}>
                                            <Database className={`w-4 h-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                                            <span className="truncate">{project.backendTechnology}</span>
                                        </div>
                                    </div>

                                    <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slideInFromRight {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }

                .animate-fade-in {
                    animation: fadeIn 0.6s ease-out forwards;
                    opacity: 0;
                }
            `}</style>
        </div>
    );
};

export default Page;