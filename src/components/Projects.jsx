import React from 'react';
import useFetch from '../hooks/useFetch';

const Projects = () => {
    const { data, loading, error } = useFetch("/", "projects");

    if (loading) return <p className="text-center text-gray-600">Loading...</p>;
    if (error) return <p className="text-center text-red-500">Error: {error}</p>;

    return (
        <div className="container mx-auto">
            <h2 className="text-5xl font-bold text-left">Projeler</h2>
            <div className="flex justify-between mt-12">
                {data.map((project, index) => (
                    <div key={index} className="w-1/3 px-4">
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-auto mb-4"
                        />
                        <h3 className="text-3xl font-semibold mb-2 text-[#4338CA]">{project.title}</h3>
                        <p className="text-sm font-normal text-[#6B7280] mb-4">{project.description}</p>

                        <nav className="flex space-x-5">
                            <a
                                href="https://react.dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="py-1 px-3 text-sm font-medium text-[#3730A3] border-2 rounded-md border-opacity-50"
                            >
                                React
                            </a>

                            <a
                                href="https://redux.js.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="py-1 px-3 text-sm font-medium text-[#3730A3] border-2 rounded-md border-opacity-50"
                            >
                                Redux
                            </a>

                            <a
                                href="https://axios-http.com/docs/intro"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="py-1 px-3 text-sm font-medium text-[#3730A3] border-2 rounded-md border-opacity-50"
                            >
                                Axios
                            </a>
                        </nav>

                        <div className="mt-4 flex justify-between">
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-base font-medium text-[#3730A3] underline"
                            >
                                GitHub
                            </a>

                            <a
                                href={project.siteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-base font-medium text-[#3730A3] underline"
                            >
                                Siteyi Görüntüle
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
