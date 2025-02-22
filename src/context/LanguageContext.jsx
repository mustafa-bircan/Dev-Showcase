import { createContext, useState, useEffect, useContext } from "react";

const LanguageContext = createContext();


export const useLanguage = () => {
    return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            setLanguage(savedLanguage);
        }
    }, []);

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => {
            const newLanguage = prevLanguage === 'en' ? 'tr' : 'en';
            localStorage.setItem('language', newLanguage);
            return newLanguage;
        });
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
