import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import useFetch from '../hooks/useFetch';
import ppImage from '../assets/pp.jpg';

const Hero = () => {
    const { data, loading, error } = useFetch('/');

    if (loading) return <p className="text-center text-gray-600">Loading...</p>;
    if (error) return <p className="text-center text-red-500">Error: {error}</p>;

    const hero = data.length > 1 ? data[1].hero : {};

    return (
        <div className="container mx-auto flex items-center justify-between py-16 px-4">
            <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                    <div className="w-16 h-1 bg-[#3730A3]"></div>
                    <h2 className="text-xl font-medium text-[#3730A3] leading-tight">{hero.name || "Mustafa BİRCAN"}</h2>
                </div>

                <h3 className="text-[72px] font-bold text-[#1F2937]">{hero.heading || "Creative thinker\nMinimalism lover"}</h3>

                <p className="text-[#6B7280] text-lg">{hero.aboutMe || "Hi, I’m Almila. I’m a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let’s shake hands with me."}</p>

                <div className="flex space-x-4 mt-6">
                    <button className="py-2 px-6 text-lg font-semibold text-white bg-[#3730A3] rounded-md">
                        Hire Me
                    </button>

                    <a
                        href="https://github.com/mustafa-bircan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-6 text-lg font-semibold border border-[#3730A3] rounded-md text-[#3730A3] flex items-center space-x-2 hover:bg-[#3730A3] hover:text-white transition"
                    >
                        <Github className="w-5 h-5" />
                        <span>GitHub</span>
                    </a>

                    <a
                        href="https://github.com/mustafa-bircan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-6 text-lg font-semibold border border-[#3730A3] rounded-md text-[#3730A3] flex items-center space-x-2 hover:bg-[#3730A3] hover:text-white transition"
                    >
                        <Linkedin className="w-5 h-5" />
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>
            <div className="w-1/2 flex justify-center items-center">
                <img
                    src={ppImage}
                    alt="Hero Image"
                    className="max-w-[70%] max-h-[30%] object-contain rounded-[16px] shadow-lg"
                />
            </div>


        </div>
    );
};

export default Hero;
