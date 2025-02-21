import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const { language, toggleLanguage } = useLanguage();

    return (
        <nav className={`p-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
            <div className="flex justify-end items-center space-x-4">
                {/* Tema Değiştirme Butonu */}
                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={theme === 'dark'}
                        onChange={toggleTheme}
                        data-testid="darkMode-toggle"
                    />
                    {/* Arka plan (slider) */}
                    <div className="w-14 h-7 bg-gray-200 rounded-full peer-checked:bg-blue-600 transition-all relative">
                        {/* Ay ve Güneş ikonu */}
                        <div
                            className={`w-6 h-6 bg-white rounded-full absolute top-1 transition-all flex justify-center items-center 
                            ${theme === 'dark' ? 'left-1' : 'left-7'}`}
                        >
                            {theme === 'dark' ? (
                                <FaMoon className="text-gray-800" />
                            ) : (
                                <FaSun className="text-yellow-500" />
                            )}
                        </div>
                    </div>
                </label>

                {/* Tema Metni */}
                <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    {theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}
                </span>

                <span className="text-gray-500">|</span>

                {/* Dil Değiştirme Butonu */}
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
