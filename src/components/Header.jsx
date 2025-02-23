import React from 'react';
import { useTheme } from "../context/ThemeContext";
import useFetch from '../hooks/useFetch';

const Header = () => {
    const { data } = useFetch('/', 'header');
    const { theme } = useTheme();

    const scrollSkills = () => {
        const skillsSection = document.getElementById("skills-section");
        if (skillsSection) {
            skillsSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollProjects = () => {
        const projectsSection = document.getElementById("projects-section");
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="flex justify-between items-center p-4">
            <div className="flex items-center">
                <div className={`w-12 h-12 rounded-full ${theme === 'dark' ? 'bg-[#4731D3]' : 'bg-[#EEEBFF]'} flex justify-center items-center transform rotate-20`}>
                    <span className={`${theme === 'dark' ? 'text-[#8F88FF]' : 'text-[#7B61FF]'} font-bold text-xl`}>M</span>
                </div>
            </div>

            <nav className="flex space-x-10">
                <button className={`py-2 px-4 text-lg font-semibold 
                ${theme === 'dark' ? 'text-[#E1E1FF] hover:border-[#E1E1FF] hover:text-[#E1E1FF]' : 'text-[#6B7280]'}
                border-2 border-transparent hover:border-[#3730A3] hover:text-[#3730A3] rounded-md transition-all duration-800`}
                    onClick={scrollSkills}
                >
                    {data?.hSkills}
                </button>

                <button className={`py-2 px-4 text-lg font-semibold 
                ${theme === 'dark' ? 'text-[#E1E1FF] hover:border-[#E1E1FF] hover:text-[#E1E1FF]' : 'text-[#6B7280]'}
                border-2 border-transparent hover:border-[#3730A3] hover:text-[#3730A3] rounded-md transition-all duration-800`}
                    onClick={scrollProjects}
                >
                    {data?.hProjects}
                </button>

                <button className={`py-2 px-4 text-lg font-semibold border-2 rounded-md 
                ${theme === 'dark' ? 'bg-[#E1E1FF] text-[#3730A3] border-white' : 'bg-[#FFFFFF] text-[#3730A3] border-[#3730A3]'}`}
                >
                    {data?.hHireMe}
                </button>
            </nav>

        </header>
    );
};

export default Header;
