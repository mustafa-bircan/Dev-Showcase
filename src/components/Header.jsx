import React from 'react';
import { useTheme } from "../context/ThemeContext";

const Header = () => {
    const { theme } = useTheme();

    return (
        <header className={`flex justify-between items-center p-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#EEEBFF] flex justify-center items-center transform rotate-12">
                    <span className="text-[#7B61FF] font-bold text-xl">M</span>
                </div>

            </div>

            <nav className="flex space-x-5">
                <button className={`py-2 px-4 text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#6B7280]'} `}>
                    Skills
                </button>

                <button className={`py-2 px-4 text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#6B7280]'} `}>
                    Projects
                </button>

                <button className={`py-2 px-4 text-lg font-semibold border-2 rounded-md ${theme === 'dark' ? 'text-white border-white' : 'text-[#3730A3] border-[#3730A3]'} border-opacity-50`}>
                    Hire Me
                </button>
            </nav>
        </header>
    );
};

export default Header;
