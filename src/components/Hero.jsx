import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import useFetch from '../hooks/useFetch';
import ppImage from '../assets/pp.jpg';

const Hero = () => {
    const { data } = useFetch('/', 'hero')


    return (
        <div className="container mx-auto flex items-center justify-between py-16 px-4">
            <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                    <div className="w-16 h-1 bg-[#3730A3]"></div>
                    <h2 className="text-xl font-medium text-[#3730A3] leading-tight">{data?.name}</h2>
                </div>

                <h3 className="text-[60px] leading-tight font-bold text-[#1F2937] ">{data?.heading}</h3>
                <h3 className="text-[60px] leading-tight font-bold text-[#1F2937]">{data?.heading2}</h3>


                <p className="text-[#6B7280] text-lg">{data?.aboutMe}</p>

                <div className="flex space-x-4 mt-6">
                    <button className="py-2 px-6 text-lg font-semibold text-white bg-[#3730A3] rounded-md">
                        {data?.heroHire}
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
                    className="max-w-[60%] max-h-[50%] object-contain rounded-[16px] shadow-lg"
                />
            </div>


        </div>
    );
};

export default Hero;
