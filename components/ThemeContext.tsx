"use client"
import { createContext, useContext } from 'react';

const ThemeContext = createContext<{
    darkMode: boolean;
    setDarkMode: (value: boolean) => void;
} | null>(null);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};

export default ThemeContext;