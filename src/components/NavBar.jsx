import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
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
                    <div className="w-14 h-7 bg-gray-200 rounded-full peer-checked:bg-blue-600 transition-all"></div>

                    <div className={`w-6 h-6 bg-white rounded-full absolute transition-all ${theme === 'dark' ? 'left-0' : 'left-7'}`}>
                        <div className="flex justify-center items-center h-full w-full">
                            {theme === 'dark' ? (
                                <FaMoon className="text-gray-800" />
                            ) : (
                                <FaSun className="text-yellow-500" />
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
                    className={`p-2 font-semibold ${language === 'tr' ? 'text-blue-500' : 'text-black'}`}
                >
                    {language === 'en' ? 'Türkçe' : 'English'}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
