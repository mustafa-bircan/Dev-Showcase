import React from 'react';
import { useTheme } from "../context/ThemeContext";
import useFetch from '../hooks/useFetch';

const Profile = () => {
    const { data } = useFetch("/", "profile");
    const { theme } = useTheme();

    return (
        <div>
            <h2 className={`text-5xl font-semibold ${theme === 'dark' ? 'text-[#AEBCCF]' : 'text-[#1F2937]'} text-left`}>
                {data?.title}
            </h2>

            <div className="flex justify-between mt-8 space-x-8">
                <div className="w-1/2">
                    <h3 className={`text-3xl font-medium ${theme === 'dark' ? 'text-[#B7AAFF]' : 'text-[#4338CA]'}`}>
                        {data?.title2}
                    </h3>
                    <div className="mt-4 space-y-4">
                        <div className="flex">
                            <p className={`text-lg ${theme === 'dark' ? 'font-semibold text-[#FFFFFF]' : 'font-semibold'}`}>
                                {data?.birtDateT}
                            </p>
                            <p className={`ml-10 text-lg ${theme === 'dark' ? 'font-normal text-[#FFFFFF]' : 'font-normal'}`}>
                                {data?.birthDate}
                            </p>
                        </div>

                        <div className="flex">
                            <p className={`text-lg ${theme === 'dark' ? 'font-semibold text-[#FFFFFF]' : 'font-semibold'}`}>
                                {data?.cityResidence}
                            </p>
                            <p className={`ml-12 text-lg ${theme === 'dark' ? 'font-normal text-[#FFFFFF]' : 'font-normal'}`}>
                                {data?.city}
                            </p>
                        </div>

                        <div className="flex">
                            <p className={`text-lg ${theme === 'dark' ? 'font-semibold text-[#FFFFFF]' : 'font-semibold'}`}>
                                {data?.educationI}
                            </p>
                            <p className={`ml-7.5 text-lg ${theme === 'dark' ? 'font-normal text-[#FFFFFF]' : 'font-normal'}`}>
                                {data?.education}
                            </p>
                        </div>

                        <div className="flex">
                            <p className={`text-lg ${theme === 'dark' ? 'font-semibold text-[#FFFFFF]' : 'font-semibold'}`}>
                                {data?.preferredRolesT}
                            </p>
                            <div className={`ml-6 text-lg ${theme === 'dark' ? 'font-normal text-[#FFFFFF]' : 'font-normal'}`}>
                                {data?.preferredRoles?.map((role, index) => (
                                    <span key={index} className="mr-2">{role}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-1/2">
                    <h3 className={`text-3xl font-medium ${theme === 'dark' ? 'text-[#B7AAFF]' : 'text-[#4338CA]'}`}>
                        {data?.about}
                    </h3>
                    <div className="mt-4">
                        <p className={`font-normal text-lg mb-6 ${theme === 'dark' ? 'text-[#FFFFFF]' : 'text-[#6B7280]'}`}>
                            {data?.aboutMe}
                        </p>
                        <p className={`font-normal text-lg ${theme === 'dark' ? 'text-[#FFFFFF]' : 'text-[#6B7280]'}`}>
                            {data?.aboutMe2}
                        </p>
                    </div>
                </div>
            </div>

            <div className={`mt-12 mb-12 border-b-2 ${theme === 'dark' ? 'border-[#BAB2E7]' : 'border-[#BAB2E7]'}`}></div>
        </div>
    );
};

export default Profile;
