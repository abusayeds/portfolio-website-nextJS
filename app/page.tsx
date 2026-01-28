'use client';
import CompaniesMarquee from '@/components/CompaniesMarquee';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import MyQuality from '@/components/MyQuality';
import Navbar from '@/components/Navbar';
import ServicesSection from '@/components/ServicesSection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import WorksSection from '@/components/WorksSection';
import { useEffect, useRef, useState } from 'react';
import { fetchData } from '../api/api';

function useScrollAnimation(defaultDirection = 'left') {
  const [isVisible, setIsVisible] = useState(false);
  const [direction, setDirection] = useState(defaultDirection);
  const ref = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const currentScrollY = window.scrollY;
          const scrollingDown = currentScrollY > lastScrollY.current;
          if (scrollingDown) {
            setDirection(defaultDirection);
          } else {
            setDirection(defaultDirection === 'left' ? 'right' : 'left');
          }
          lastScrollY.current = currentScrollY;
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [defaultDirection]);

  return { ref, isVisible, direction };
}

function AnimatedSection({ children, defaultDirection = 'left' }: any) {
  const { ref, isVisible, direction } = useScrollAnimation(defaultDirection);

  return (
    <div
      ref={ref}
      className={`w-full transition-all duration-1000 ease-out ${isVisible
        ? 'opacity-100 translate-x-0'
        : direction === 'left'
          ? 'opacity-0 -translate-x-8 md:-translate-x-16'
          : 'opacity-0 translate-x-8 md:translate-x-16'
        }`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [profileData, setProfileData] = useState<any>(null);
  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetchData('my-profile');
        if (res?.success && res?.data) {
          setProfileData(res.data);
        }
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    loadData();
  }, []);
  return (
    <div className={`min-h-screen w-full font-sans transition-colors duration-300 ${darkMode ? 'bg-[#0a0a1a] text-white' : 'bg-white text-gray-900'}`}>
      <div className="w-full overflow-x-hidden">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <HeroSection profileData={profileData} darkMode={darkMode} />
        <AnimatedSection defaultDirection="left">
          <CompaniesMarquee profileData={profileData} darkMode={darkMode} />
        </AnimatedSection>

        <AnimatedSection defaultDirection="right">
          <WorksSection darkMode={darkMode} />
        </AnimatedSection>
        <AnimatedSection defaultDirection="right">
          <StatsSection darkMode={darkMode} />
        </AnimatedSection>

        <AnimatedSection defaultDirection="left">
          <ServicesSection darkMode={darkMode} />
        </AnimatedSection>


        <AnimatedSection defaultDirection="left">
          <MyQuality darkMode={darkMode} />
        </AnimatedSection>

        <AnimatedSection defaultDirection="right">
          <TestimonialsSection darkMode={darkMode} />
        </AnimatedSection>

        <AnimatedSection defaultDirection="left">
          <ContactSection darkMode={darkMode} />
        </AnimatedSection>

        <Footer darkMode={darkMode} />
      </div>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        
        html, body {
          overflow-x: hidden;
          width: 100%;
          position: relative;
        }
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-marquee {
            animation: marquee 20s linear infinite;
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
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 768px) {
          @keyframes slide-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }
        @keyframes fill-bar {
          from {
            width: 0;
          }
        }
        .animate-fill-bar {
          animation: fill-bar 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}