import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const { language, toggleLanguage } = useLanguage();

    return (
        <nav className="p-4">
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
                        className={`w-14 h-7 rounded-full flex items-center px-1 transition-all duration-300 ease-in-out
                        ${theme === 'dark' ? 'bg-gray-700 justify-start' : 'bg-indigo-600 justify-end'}`}
                    >
                        <div className="w-6 h-6 flex items-center justify-center transition-transform duration-300">
                            {theme === 'dark' ? (
                                <FaMoon className="text-yellow-400 text-lg" />
                            ) : (
                                <FaSun className="text-yellow-400 text-lg" />
                            )}
                        </div>
                    </div>
                </label>

                <span
                    className={`text-sm font-medium transition-all duration-300 
                    ${theme === 'dark' ? 'font-bold text-[15px] text-[#D9D9D9]' : ''}`}
                >
                    {language === 'en'
                        ? (theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE')
                        : (theme === 'dark' ? 'AÇIK TEMA' : 'KARANLIK TEMA')}
                </span>


                <span className="text-gray-500">|</span>

                <button
                    onClick={toggleLanguage}
                    className={`p-2 font-semibold transition-colors
                        ${theme === 'dark' ? 'text-[#BAB2E7]' : 'text-[#4731D3]'}`}
                >
                    {language === 'en' ? "TÜRKÇE" : 'ENGLISH'}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
