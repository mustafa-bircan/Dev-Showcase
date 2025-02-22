import React from 'react';
import { useTheme } from "../context/ThemeContext";
import useFetch from '../hooks/useFetch';

const Profile = () => {
    const { theme } = useTheme();
    const { data, loading, error } = useFetch("/", "profile");

    if (loading) return <p className="text-center text-gray-600">Loading...</p>;
    if (error) return <p className="text-center text-red-500">Error: {error}</p>;

    return (
        <div className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
            <h2 className={`text-5xl font-semibold ${theme === 'dark' ? 'text-[#AEBCCF]' : 'text-[#1F2937]'} text-left`}>
                Profil
            </h2>

            <div className="flex justify-between mt-8 space-x-8">
                <div className="w-1/2">
                    <h3 className={`text-3xl font-medium ${theme === 'dark' ? 'text-[#B7AAFF]' : 'text-[#4338CA]'}`}>Profil</h3>
                    <div className="mt-4 space-y-4">
                        <div className="flex">
                            <p className="font-semibold text-lg">Doğum Tarihi</p>
                            <p className="font-normal text-lg ml-10">{data?.birthDate}</p>
                        </div>

                        <div className="flex">
                            <p className="font-semibold text-lg">İkamet Şehri</p>
                            <p className="font-normal text-lg ml-12">{data?.city}</p>
                        </div>

                        <div className="flex">
                            <p className="font-semibold text-lg">Eğitim Durumu</p>
                            <p className="font-normal text-lg ml-7.5">{data?.education}</p>
                        </div>

                        <div className="flex">
                            <p className="font-semibold text-lg">Tercih Ettiği Rol</p>
                            <div className="font-normal text-lg ml-6">
                                {data?.preferredRoles?.map((role, index) => (
                                    <span key={index} className="mr-2">{role}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-1/2">
                    <h3 className={`text-3xl font-medium ${theme === 'dark' ? 'text-[#B7AAFF]' : 'text-[#4338CA]'}`}>Hakkımda</h3>
                    <div className="mt-4">
                        <p className="font-normal text-lg mb-6 text-[#6B7280]">
                            {data?.aboutMe || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                        </p>
                        <p className="font-normal text-lg text-[#6B7280]">
                            {data?.aboutMe2 || 'Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!'}
                        </p>
                    </div>
                </div>
            </div>

            <div className={`mt-15 mb-5 border-b-2 ${theme === 'dark' ? 'border-[#BAB2E]' : 'border-[#BAB2E7]'}`}></div>
        </div>
    );
};

export default Profile;
