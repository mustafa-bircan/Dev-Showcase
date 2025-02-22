import React from "react";
import useFetch from "../hooks/useFetch";
import { useTheme } from "../context/ThemeContext";

const Skills = () => {
    const { data, loading, error } = useFetch("/", "skills");
    const { theme } = useTheme();

    if (loading) return <p className="text-center text-gray-600">Loading...</p>;
    if (error) return <p className="text-center text-red-500">Error: {error}</p>;

    return (
        <div className={`p-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
            <h2 className={`text-5xl font-semibold ${theme === 'dark' ? 'text-[#AEBCCF]' : 'text-[#34371f]'} text-left`}>
                Skills
            </h2>

            <div className="flex gap-x-50 mt-8">
                {data?.map((skill, index) => (
                    <div key={index} className="w-1/3 text-left">
                        <h3 className={`text-3xl font-medium ${theme === 'dark' ? 'text-[#B7AAFF]' : 'text-[#4338CA]'} text-left`}>
                            {skill.name}
                        </h3>
                        <p className={`text-xs ${theme === 'dark' ? 'text-[#FFFFFF]' : 'text-[#6B7280]'} mt-2 text-left overflow-hidden line-clamp-3`}>
                            {skill.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className={`mt-15 mb-5 border-b-2 ${theme === 'dark' ? 'border-[#BAB2E]' : 'border-[#BAB2E7]'}`}></div>
        </div>
    );
};

export default Skills;
