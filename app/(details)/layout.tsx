"use client"
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import ThemeContext from '../../components/ThemeContext';

export default function Layout({ children }: any) {
    const [darkMode, setDarkMode] = useState(true);
    const extraNavberColor = true;

    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            <div className="relative w-full">
                <div
                    className="h-72 bg-center bg-cover bg-no-repeat  relative"
                    style={{
                        backgroundImage:
                            "url('https://w0.peakpx.com/wallpaper/267/596/HD-wallpaper-macbook-pro-laptop-purple-light-ultra-computers-hardware-dark-internet-business-laptop-purple-apple-night-open-modern-design-background-digital-technology-computer-macbook-macbookpro.jpg')",
                    }}
                >
                    <Navbar darkMode={darkMode} setDarkMode={setDarkMode} extraNavberColor={extraNavberColor} />
                    <p className=' absolute bottom-10 left-1/2'>details</p>
                </div>
                <div className="relative">
                    {typeof children === "function"
                        ? children({ darkMode, setDarkMode })
                        : children}
                </div>
            </div>
        </ThemeContext.Provider>
    );
}