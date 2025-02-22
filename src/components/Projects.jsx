import React from 'react';
import useFetch from '../hooks/useFetch';

const Projects = () => {
    const { data, loading, error } = useFetch("/", "projects");

    if (loading) return <p className="text-center text-gray-600">Loading...</p>;
    if (error) return <p className="text-center text-red-500">Error: {error}</p>;

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-left">Projects</h2>
            <div className="flex justify-between mt-6">
                {data.map((project, index) => (
                    <div key={index} className="w-1/3 px-4">
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-600 mb-4">{project.description}</p>

                        <nav className="flex space-x-5">
                            <a
                                href="https://react.dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="py-2 px-4 text-lg font-semibold border-2 rounded-md border-opacity-50"
                            >
                                React
                            </a>

                            <a
                                href="https://redux.js.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="py-2 px-4 text-lg font-semibold border-2 rounded-md border-opacity-50"
                            >
                                Redux
                            </a>

                            <a
                                href="https://axios-http.com/docs/intro"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="py-2 px-4 text-lg font-semibold border-2 rounded-md border-opacity-50"
                            >
                                Axios
                            </a>
                        </nav>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
