export type Language = 'fr' | 'en';

export const translations = {
    en: {
        nav: {
            social: 'SOCIAL',
            menu: 'MENU',
            getInTouch: 'GET IN TOUCH',
            links: ['Home', 'About Me', 'Experience', 'Projects'],
        },
        banner: {
            title: ['Yassine', 'Khiari'],
            description:
                "Hi! I'm Yassine — a Software Engineer building fast, scalable, user-focused Web/Mobile apps, with a growing specialty in applied AI (RAG systems, intelligent agents).",
            available: 'Available for full-time opportunities',
            yearsExp: 'Completed Projects',
            completedProjects: 'Technologies Mastered',
            hoursWorked: 'AI Systems Built',
        },
        about: {
            belief:
                'I believe in a user centered approach, ensuring that every project I work on is tailored to meet the specific needs of its users.',
            thisIsMe: 'This is me.',
            greeting: "Hi, I'm Yassine Khiari.",
            para1: 'I’m a Software Engineer dedicated to turning ideas into creative solutions. I specialize in creating seamless and intuitive user experiences.',
            para2: 'My approach focuses on creating scalable, high-performing solutions tailored to both user needs and business objectives. By prioritizing performance, accessibility, and responsiveness, I strive to deliver experiences that not only engage users but also drive tangible results.',
        },
        skills: {
            title: 'My Stack',
        },
        experience: {
            title: 'My Experience',
        },
        projects: {
            title: 'PROJECTS',
        },
        projectDetails: {
            back: 'Back',
            year: 'Year',
            tech: 'Tech & Technique',
            description: 'Description',
            myRole: 'My Role',
        },
        footer: {
            haveProject: 'Have a project in mind?',
            credit: 'Made by Yassine Khiari',
            revisedBy: 'Revised by Yassine Khiari',
        },
    },
    fr: {
        nav: {
            social: 'RÉSEAUX',
            menu: 'MENU',
            getInTouch: 'CONTACT',
            links: ['Accueil', 'À Propos', 'Expérience', 'Projets'],
        },
        banner: {
            title: ['Yassine', 'Khiari'],
            description:
            "Salut ! Je suis Yassine — un Ingénieur Logiciel qui conçoit des applications Web/Mobile rapides, évolutives et centrées sur l'utilisateur, avec une spécialisation croissante en IA appliquée (systèmes RAG, agents intelligents).",
            available: 'Disponible pour des opportunités à temps plein',
            yearsExp: "Projets Réalisés",
            completedProjects: 'Technologies Maîtrisées',
            hoursWorked: 'Systèmes IA Développés',
        },
        about: {
            belief:
                "Je crois en une approche de conception centrée sur l'utilisateur, garantissant que chaque projet sur lequel je travaille est adapté pour répondre aux besoins spécifiques de ses utilisateurs.",
            thisIsMe: "C'est moi.",
            greeting: 'Salut, je suis Yassine Khiari.',
            para1: 'Je suis un Ingénieur Logiciel dédié à transformer des idées en solutions créatives. Je me spécialise dans la création d\'expériences utilisateur fluides et intuitives.',
            para2: "Mon approche se concentre sur la création de solutions évolutives et performantes, adaptées aux besoins des utilisateurs et aux objectifs commerciaux. En priorisant la performance, l'accessibilité et la réactivité, je m'efforce de offrir des expériences qui non seulement engagent les utilisateurs mais génèrent aussi des résultats tangibles.",
        },
        skills: {
            title: 'Ma Stack',
        },
        experience: {
            title: 'Mon Expérience',
        },
        projects: {
            title: 'PROJETS SÉLECTIONNÉS',
        },
        projectDetails: {
            back: 'Retour',
            year: 'Année',
            tech: 'Tech & Technique',
            description: 'Description',
            myRole: 'Mon Rôle',
        },
        footer: {
            haveProject: 'Un projet en tête ?',
            credit: 'Fait par Yassine Khiari',
            revisedBy: 'Révisé par Yassine Khiari',
        },
    },
};

export const getTranslation = (lang: Language) => translations[lang];
