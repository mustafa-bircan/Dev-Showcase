import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const { language, toggleLanguage } = useLanguage();

    return (
        <nav className={`p-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
            <div className="flex justify-end items-center space-x-4">
                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={theme === 'dark'}
                        onChange={toggleTheme}
                        data-testid="darkMode-toggle"
                    />
                    <div
                        className={`w-14 h-7 rounded-full flex items-center px-1 
                        transition-all duration-300 ease-in-out
                        ${theme === 'dark' ? 'bg-[#3A3A3A] justify-start' : 'bg-[#4731D3] justify-end'}`}
                    >
                        <div
                            className="w-6 h-6 flex items-center justify-center 
                            transition-transform duration-300 ease-in-out"
                        >
                            {theme === 'dark' ? (
                                <FaMoon className="text-[#FFE86E] text-lg" />
                            ) : (
                                <FaSun className="text-[#FFE86E] text-lg" />
                            )}
                        </div>
                    </div>
                </label>

                <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    {theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}
                </span>

                <span className="text-gray-500">|</span>

                <button
                    onClick={toggleLanguage}
                    className={`p-2 font-semibold transition-colors ${language === 'tr' ? 'text-blue-500' : 'text-black'}`}
                >
                    {language === 'en' ? 'Türkçe' : 'English'}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
