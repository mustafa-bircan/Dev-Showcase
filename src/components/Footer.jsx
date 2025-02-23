import { FaHandPointRight } from 'react-icons/fa';
import useFetch from '../hooks/useFetch';
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
    const { data } = useFetch("/", "footer");
    const { theme } = useTheme();

    return (
        <footer className="w-full py-8  mt-auto">
            <div className="container mx-auto flex justify-between items-center px-4">
                <div className="flex flex-col items-start space-y-4 gap-20 pt-20 pb-20 pl-20">
                    <p className={`text-5xl font-semibold ${theme === 'dark' ? 'text-[#AEBCCF]' : 'text-black'}`}>
                        {data?.heading}
                        <span className={`text-5xl font-semibold block mt-2 ${theme === 'dark' ? 'text-[#AEBCCF]' : 'text-black'}`}>
                            {data?.heading2}
                        </span>
                    </p>
                    <div className="flex items-center space-x-4">
                        <FaHandPointRight className="text-yellow-500" size={25} />
                        <p className={`text-xl font-medium ${theme === 'dark' ? 'text-[#BAB2E7]' : 'text-[#AF0C48]'}`}>
                            {data?.email}
                        </p>
                    </div>
                </div>

                <div className="flex space-x-8 items-center pt-30 pr-20">
                    <a
                        href={data?.personalBlogUrl}
                        className={`text-lg font-medium hover:underline ${theme === 'dark' ? 'text-[#E1E1FF]' : 'text-[#0A0A14]'}`}
                    >
                        {data?.personalBlog}
                    </a>
                    <a
                        href={data?.github}
                        className={`text-lg font-medium hover:underline ${theme === 'dark' ? 'text-[#17D18B]' : 'text-[#00AB6B]'}`}
                    >
                        Github
                    </a>
                    <a
                        href={data?.linkedin}
                        className={`text-lg font-medium hover:underline ${theme === 'dark' ? 'text-[#0BA6F6]' : 'text-[#0077B5]'}`}
                    >
                        Linkedin
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
