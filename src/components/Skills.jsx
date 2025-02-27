import React from "react";
import useFetch from "../hooks/useFetch";
import { useTheme } from "../context/ThemeContext";

const Skills = () => {
    const { data } = useFetch("/", "skills");
    const { theme } = useTheme();

    return (
        <div id="skills-section" className="mt-16" >
            <h2 className={`text-5xl font-semibold ${theme === "dark" ? "text-[#AEBCCF]" : "text-[#34371f]"}`}>
                {data?.title}
            </h2>

            <div className="flex gap-x-12 mt-8">
                {data?.items?.map((skill, index) => (
                    <div key={index} className="w-1/3 text-left">
                        <h3 className={`text-3xl font-medium ${theme === "dark" ? "text-[#B7AAFF]" : "text-[#4338CA]"}`}>
                            {skill?.name}
                        </h3>
                        <p className={`text-xs ${theme === "dark" ? "text-white" : "text-gray-600"} mt-2 line-clamp-3`}>
                            {skill?.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className={`mt-12 mb-12 border-b-2 ${theme === "dark" ? "border-[#BAB2E7]" : "border-[#BAB2E7]"}`}></div>
        </div>
    );
};

export default Skills;
