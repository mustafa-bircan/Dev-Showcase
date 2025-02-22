import React from 'react';
import useFetch from '../hooks/useFetch';

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
                    <h2 className="text-2xl font-bold text-[#3730A3]">{hero.name || "Mustafa BİRCAN"}</h2>
                </div>
                <h3 className="text-6xl font-bold text-[#1F2937]">{hero.heading || "Creative thinker Minimalism lover"}</h3>
                <p className="text-[#6B7280] text-lg">{hero.aboutMe || "No description available."}</p>
                <div className="flex space-x-4 mt-6">
                    <button className="py-2 px-6 text-lg font-semibold text-white bg-[#3730A3] rounded-md">
                        Hire Me
                    </button>

                    <button className="py-2 px-6 text-lg font-semibold border border-[#3730A3] rounded-md text-[#3730A3] flex items-center space-x-2">
                        <i className="fab fa-github"></i>
                        Github
                    </button>

                    <button className="py-2 px-6 text-lg font-semibold border border-[#3730A3] rounded-md text-[#3730A3] flex items-center space-x-2">
                        <i className="fab fa-linkedin"></i>
                        LinkedIn
                    </button>
                </div>
            </div>

            <div className="w-1/2">
                <img
                    src="https://placehold.co/600x400"
                    alt="Hero Image"
                    className="w-full h-auto rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
};

export default Hero;
