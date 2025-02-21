import { FaHandPointRight } from 'react-icons/fa';
import useFetch from '../hooks/useFetch';
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
    const { data, loading, error } = useFetch();
    const { theme } = useTheme();  // ThemeContext'i burada da kullanıyoruz

    if (loading) return <div>Yükleniyor...</div>;
    if (error) return <div>Hata: {error}</div>;

    return (
        <footer className={`py-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-[#F9F9F9] text-black'}`}>
            <div className="container mx-auto flex justify-between items-center px-4">
                <div className="flex flex-col items-start space-y-4">
                    <p className="text-4xl font-semibold">
                        Let’s work together
                        <span className="block mt-2">on your next product.</span>
                    </p>
                    <div className="flex items-center space-x-4">
                        <FaHandPointRight className="text-yellow-500" size={24} />
                        <p className="text-lg text-[#AF0C48]">{data?.email}</p>
                    </div>
                </div>

                <div className="flex space-x-8 items-center">
                    <a href={data?.personalBlog} className="text-lg hover:underline">
                        Personal Blog
                    </a>
                    <a href={data?.github} className="text-lg hover:underline">
                        Github
                    </a>
                    <a href={data?.linkedin} className="text-lg hover:underline">
                        Linkedin
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
