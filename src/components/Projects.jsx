import React from 'react';
import useFetch from '../hooks/useFetch';
import { useTheme } from "../context/ThemeContext";

const Projects = () => {
    const { data } = useFetch("/", "projects");
    const { theme } = useTheme();

    return (
        <div className="container mx-auto">
            <h2 className={`text-5xl font-bold text-left ${theme === 'dark' ? 'text-[#AEBCCF]' : 'text-black'}`}>
                {data?.projectT}
            </h2>
            <div className="flex justify-between gap-5 mt-12">
                {data?.items?.map((project, index) => (
                    <div key={index} className="w-1/3 px-4">
                        <img
                            src={project?.imageUrl}
                            alt={project?.title}
                            className="w-full h-auto mb-4"
                        />
                        <h3 className={`text-3xl font-semibold mb-2 ${theme === 'dark' ? 'text-[#CFCBFF]' : 'text-[#4338CA]'}`}>
                            {project?.title}
                        </h3>
                        <p className={`text-sm font-normal mb-4 ${theme === 'dark' ? 'text-[#FFFFFF]' : 'text-[#6B7280]'}`}>
                            {project?.description}
                        </p>

                        <nav className="flex space-x-5">
                            <a
                                href="https://react.dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`py-1 px-3 text-sm font-medium border-2 rounded-md border-opacity-50 ${theme === 'dark' ? 'bg-[#383838] text-[#8F88FF]' : 'text-[#3730A3]'}`}
                            >
                                React
                            </a>

                            <a
                                href="https://redux.js.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`py-1 px-3 text-sm font-medium border-2 rounded-md border-opacity-50 ${theme === 'dark' ? 'bg-[#383838] text-[#8F88FF]' : 'text-[#3730A3]'}`}
                            >
                                Redux
                            </a>

                            <a
                                href="https://axios-http.com/docs/intro"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`py-1 px-3 text-sm font-medium border-2 rounded-md border-opacity-50 ${theme === 'dark' ? 'bg-[#383838] text-[#8F88FF]' : 'text-[#3730A3]'}`}
                            >
                                Axios
                            </a>
                        </nav>

                        <div className="mt-4 flex justify-between">
                            <a
                                href={project?.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-base font-medium underline ${theme === 'dark' ? 'text-[#E1E1FF]' : 'text-[#3730A3]'}`}
                            >
                                GitHub
                            </a>

                            <a
                                href={project?.siteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-base font-medium underline ${theme === 'dark' ? 'text-[#E1E1FF]' : 'text-[#3730A3]'}`}
                            >
                                {data?.siteView}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
