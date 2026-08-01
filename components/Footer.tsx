'use client';
import { GENERAL_INFO } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">{t.footer.haveProject}</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>

                <div className="">
                    <a
                        href="https://github.com/Yassinekh17/portfolio-yassine-main"
                        target="_blank"
                        className="leading-none text-muted-foreground hover:underline hover:text-white"
                    >
                        {t.footer.credit}
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
