import { FaHandPointRight } from 'react-icons/fa';
import useFetch from '../hooks/useFetch';
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
    const { data, loading, error } = useFetch("/", "footer");
    const { theme } = useTheme();

    if (loading) return <p className="text-center text-gray-600">Loading...</p>;
    if (error) return <p className="text-center text-red-500">Error: {error}</p>;


    return (
        <footer className={`w-full py-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-[#F9F9F9] text-black'} mt-auto`}>
            <div className="container mx-auto flex justify-between items-center px-4">
                <div className="flex flex-col items-start space-y-4">
                    <p className="text-5xl font-semibold">
                        Let’s work together
                        <span className="text-5xl font-semibold block mt-2">on your next product.</span>
                    </p>
                    <div className="flex items-center space-x-4">
                        <FaHandPointRight className="text-yellow-500" size={25} />
                        <p className="text-xl font-medium text-[#AF0C48]">{data?.email}</p>
                    </div>
                </div>

                <div className="flex space-x-8 items-center">
                    <a href={data?.personalBlog} className="text-lg font-medium text-[#0A0A14] hover:underline">
                        Personal Blog
                    </a>
                    <a href={data?.github} className="text-lg font-medium text-[#00AB6B] hover:underline">
                        Github
                    </a>
                    <a href={data?.linkedin} className="text-lg font-medium text-[#0077B5] hover:underline">
                        Linkedin
                    </a>
                </div>
            </div>
        </footer>


    );
};

export default Footer;
