'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import { Language, translations } from '@/lib/translations';

interface LanguageContextType {
    lang: Language;
    t: typeof translations.en;
    toggleLang: () => void;
    setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined,
);

export const LanguageProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [lang, setLang] = useState<Language>('en');

    const toggleLang = () => {
        setLang((prev) => (prev === 'en' ? 'fr' : 'en'));
    };

    const t = translations[lang];

    return (
        <LanguageContext.Provider value={{ lang, t, toggleLang, setLang }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
