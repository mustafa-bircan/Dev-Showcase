import React from 'react';
import { useTheme } from "../context/ThemeContext";

const Header = () => {
    const { theme } = useTheme();

    return (
        <header className={`flex justify-between items-center p-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex justify-center items-center transform rotate-12">
                    <span className="text-white font-bold text-xl">M</span>
                </div>
            </div>

            <nav className="flex space-x-5">
                <button className={`py-2 px-4 text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} `}>
                    Skills
                </button>

                <button className={`py-2 px-4 text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} `}>
                    Projects
                </button>

                <button className={`py-2 px-4 text-lg font-semibold border-2 rounded-md ${theme === 'dark' ? 'text-white border-white' : 'text-black border-black'} border-opacity-50`}>
                    Hire Me
                </button>
            </nav>
        </header>
    );
};

export default Header;
