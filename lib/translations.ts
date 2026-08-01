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
            items: [
                {
                    title: 'Full-Stack Developer',
                    company: 'Telnet',
                    duration: 'Feb 2026 - Aug 2026',
                    points: [
                        'Designed and built "Talent Manager", a full-stack HR platform with a Flutter Web frontend and a Node.js/Express/MongoDB Atlas backend deployed on Vercel.',
                        'Built HR analytics modules including goals & reviews, entry/exit stats, age/gender pyramids, and a 9-Box talent grid with fl_chart visualizations.',
                        'Developed an AI layer featuring a RAG chatbot, a CV analysis agent, and an agentic RAG system with tool-calling that performs real database operations.',
                    ],
                },
                {
                    title: 'Full-Stack Developer',
                    company: 'Defendr',
                    duration: 'Jul 2025 - Sep 2025',
                    points: [
                        'Built an e-sport tournament management dashboard using Next.js, React, and TypeScript.',
                        'Integrated a responsive interface with real-time updates and REST API connections.',
                        'Improved performance and UX through React Hooks, TypeScript, and code reviews in an Agile environment.',
                    ],
                },
                {
                    title: 'Blockchain / Full-Stack Developer',
                    company: 'Slide',
                    duration: 'Jan 2023 - Jun 2023',
                    points: [
                        'Developed a Bitcoin-based crypto wallet using the MERN stack.',
                        'Implemented automated DCA (Dollar-Cost Averaging) investing for recurring purchases.',
                        'Set up secure operations and authentication mechanisms, deployed with Docker in an Agile workflow.',
                    ],
                },
                {
                    title: 'Full-Stack Developer',
                    company: 'Tetra',
                    duration: 'Jan 2022 - Jul 2022',
                    points: [
                        'Designed and maintained several web applications using React and Laravel.',
                        'Optimized frontend performance and backend reliability across multiple projects.',
                        'Managed collaborative development through Git and CI/CD pipelines.',
                    ],
                },
                {
                    title: 'Full-Stack Developer',
                    company: 'Swiftsaler',
                    duration: 'Feb 2022 - Mar 2022',
                    points: [
                        'Built an e-commerce website using Symfony, HTML, CSS, and JavaScript.',
                        'Optimized site performance and SEO.',
                        'Implemented responsive product pages and checkout flow.',
                    ],
                },
                {
                    title: 'WordPress Developer',
                    company: 'ConceptMedia',
                    duration: 'Feb 2021 - Mar 2021',
                    points: [
                        'Created and customized online stores on WordPress.',
                        'Managed content, themes, and plugins for client websites.',
                        'Handled site configuration and basic performance optimization.',
                    ],
                },
            ],
        },
        projects: {
            title: 'PROJECTS',
            content: {
                'talent-manager': {
                    description: `
            A full-stack HR talent management platform built for Telnet, designed to help HR teams track engineers, manage reviews, and make data-driven talent decisions. <br/> <br/>

            Key Features:<br/>
            <ul>
              <li>📊 HR Analytics Dashboard: Entry/exit rates, gender and age pyramid, department breakdown</li>
              <li>🎯 Goals & Reviews Module: Objective tracking and satisfaction stats by month, age, and gender</li>
              <li>🧩 9-Box Talent Grid: Interactive bubble chart for talent evaluation</li>
              <li>📈 Skills Evaluation Dashboard: Radar charts and stacked bars mapping 27 skills across 7 categories</li>
              <li>🤖 AI Layer: RAG chatbot, CV analysis agent, and an agentic RAG system with tool-calling that performs real database operations</li>
            </ul><br/>

            Technical Highlights:
            <ul>
              <li>Built a full data model chain: Client → Project → Job → JobLevel → Engineer</li>
              <li>Implemented a skills comparison system matching required vs. actual skills with automatic sync</li>
              <li>Integrated Cloudinary for media, Nodemailer for transactional emails, and JWT-based authentication</li>
              <li>Packaged the app as a Windows executable for a live CTO demo</li>
            </ul>
            `,
                    role: `
            Full-Stack Developer <br/>
            Owned the entire development lifecycle:
            <ul>
              <li>✅ Backend: Built the Node.js/Express/MongoDB Atlas API, including HR stats and recruitment endpoints</li>
              <li>🎨 Frontend: Built the Flutter Web dashboard with fl_chart visualizations and interactive modals</li>
              <li>🤖 AI: Designed and implemented the RAG chatbot and agentic tool-calling system with Groq's LLaMA model</li>
              <li>🚀 Deployment: Deployed the platform on Vercel</li>
            </ul>
            `,
                },
                defendr: {
                    description:
                        'Defendr is an e-sport tournament management dashboard built with Next.js, React, and TypeScript, featuring a responsive interface, API integrations, and real-time updates for tournament organizers.',
                    role: `As the Full-Stack Developer, I:<br/>
                    - Built the tournament management dashboard with Next.js, React, and TypeScript.<br/>
                    - Integrated real-time updates and API connections for live tournament data.<br/>
                    - Improved performance and UX using React Hooks and REST APIs.<br/>
                    - Collaborated via Git with code reviews in an Agile environment.`,
                },
                slide: {
                    description:
                        'Slide is a Bitcoin-based crypto wallet built with the MERN stack, featuring automated DCA (Dollar-Cost Averaging) investing for recurring purchases, secure operations, and robust authentication.',
                    role: `As a Blockchain / Full-Stack Developer, I:<br/>
                    - Built the crypto wallet using the MERN stack.<br/>
                    - Implemented automated DCA investment logic for recurring purchases.<br/>
                    - Set up secure operations and authentication mechanisms.<br/>
                    - Used Git, Docker, and Agile methods for collaboration and deployment.`,
                },
                tuniimmo: {
                    description:
                        'Tuniimmo is a real estate platform for searching and publishing property listings, built with Angular and Express.js offering a wide range of properties for sale and rent with a wide range of features and functionalities like the 360° view.',
                    role: '',
                },
                petty: {
                    description:
                        'Petty is a Tinder-style mobile app for pet adoption, built with React.js and Express.js.',
                    role: '',
                },
                khotwa: {
                    description:
                        'Khotwa is an e-learning platform for managing courses and users, built with Angular and Spring Boot. 🔍 Core Features:✔️ Course Management: Course creation, enrollment, and progress tracking✔️ User Management: Secure sign-up/sign-in and profile management✔️ Content Delivery: Organized course modules with structured navigation✔️ Admin Dashboard: Manage courses, users, and platform activity ',
                    role: '',
                },
            },
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
            items: [
                {
                    title: 'Développeur Full-Stack',
                    company: 'Telnet',
                    duration: 'Feb 2026 - Aug 2026',
                    points: [
                        'Conçu et développé "Talent Manager", une plateforme RH full-stack avec un frontend Flutter Web et un backend Node.js/Express/MongoDB Atlas déployé sur Vercel.',
                        'Développé des modules d\'analyse RH incluant objectifs et évaluations, statistiques d\'entrée/sortie, pyramides des âges/genres et une grille de talents 9-Box avec des visualisations fl_chart.',
                        'Développé une couche IA comprenant un chatbot RAG, un agent d\'analyse de CV et un système RAG agentique avec appel d\'outils qui effectue de réelles opérations en base de données.',
                    ],
                },
                {
                    title: 'Développeur Full-Stack',
                    company: 'Defendr',
                    duration: 'Jul 2025 - Sep 2025',
                    points: [
                        'Développé un tableau de bord de gestion de tournois e-sport avec Next.js, React et TypeScript.',
                        'Intégré une interface responsive avec des mises à jour en temps réel et des connexions API REST.',
                        'Amélioré les performances et l\'expérience utilisateur grâce aux React Hooks, à TypeScript et aux revues de code dans un environnement Agile.',
                    ],
                },
                {
                    title: 'Développeur Blockchain / Full-Stack',
                    company: 'Slide',
                    duration: 'Jan 2023 - Jun 2023',
                    points: [
                        'Développé un portefeuille crypto basé sur Bitcoin en utilisant la stack MERN.',
                        'Implémenté l\'investissement automatisé DCA (Dollar-Cost Averaging) pour des achats récurrents.',
                        'Mis en place des opérations sécurisées et des mécanismes d\'authentification, déployés avec Docker dans un workflow Agile.',
                    ],
                },
                {
                    title: 'Développeur Full-Stack',
                    company: 'Tetra',
                    duration: 'Jan 2022 - Jul 2022',
                    points: [
                        'Conçu et maintenu plusieurs applications web en utilisant React et Laravel.',
                        'Optimisé les performances du frontend et la fiabilité du backend sur plusieurs projets.',
                        'Géré le développement collaboratif via Git et les pipelines CI/CD.',
                    ],
                },
                {
                    title: 'Développeur Full-Stack',
                    company: 'Swiftsaler',
                    duration: 'Feb 2022 - Mar 2022',
                    points: [
                        'Développé un site e-commerce en utilisant Symfony, HTML, CSS et JavaScript.',
                        'Optimisé les performances du site et le référencement (SEO).',
                        'Implémenté des pages produit responsives et un processus de commande fluide.',
                    ],
                },
                {
                    title: 'Développeur WordPress',
                    company: 'ConceptMedia',
                    duration: 'Feb 2021 - Mar 2021',
                    points: [
                        'Créé et personnalisé des boutiques en ligne sur WordPress.',
                        'Géré le contenu, les thèmes et les plugins des sites clients.',
                        'Géré la configuration des sites et l\'optimisation de base des performances.',
                    ],
                },
            ],
        },
        projects: {
            title: 'PROJETS SÉLECTIONNÉS',
            content: {
                'talent-manager': {
                    description: `
            Une plateforme RH full-stack de gestion des talents développée pour Telnet, conçue pour aider les équipes RH à suivre les ingénieurs, gérer les évaluations et prendre des décisions sur les talents basées sur les données. <br/> <br/>

            Fonctionnalités clés :<br/>
            <ul>
              <li>📊 Tableau de bord d'analyse RH : taux d'entrée/sortie, pyramide des âges et des genres, répartition par département</li>
              <li>🎯 Module Objectifs & Évaluations : suivi des objectifs et statistiques de satisfaction par mois, âge et genre</li>
              <li>🧩 Grille de talents 9-Box : graphique à bulles interactif pour l'évaluation des talents</li>
              <li>📈 Tableau de bord d'évaluation des compétences : graphiques radar et barres empilées cartographiant 27 compétences réparties sur 7 catégories</li>
              <li>🤖 Couche IA : chatbot RAG, agent d'analyse de CV et un système RAG agentique avec appel d'outils qui effectue de réelles opérations en base de données</li>
            </ul><br/>

            Points forts techniques :
            <ul>
              <li>Construit une chaîne complète de modèles de données : Client → Projet → Poste → Niveau de poste → Ingénieur</li>
              <li>Implémenté un système de comparaison des compétences faisant correspondre les compétences requises et réelles avec synchronisation automatique</li>
              <li>Intégré Cloudinary pour les médias, Nodemailer pour les emails transactionnels et une authentification basée sur JWT</li>
              <li>Conditionné l'application en exécutable Windows pour une démonstration en direct au CTO</li>
            </ul>
            `,
                    role: `
            Développeur Full-Stack <br/>
            J'ai pris en charge l'intégralité du cycle de vie du développement :
            <ul>
              <li>✅ Backend : développé l'API Node.js/Express/MongoDB Atlas, y compris les endpoints de statistiques RH et de recrutement</li>
              <li>🎨 Frontend : développé le tableau de bord Flutter Web avec les visualisations fl_chart et des modales interactives</li>
              <li>🤖 IA : conçu et implémenté le chatbot RAG et le système agentique avec appel d'outils utilisant le modèle LLaMA de Groq</li>
              <li>🚀 Déploiement : déployé la plateforme sur Vercel</li>
            </ul>
            `,
                },
                defendr: {
                    description:
                        'Defendr est un tableau de bord de gestion de tournois e-sport développé avec Next.js, React et TypeScript, doté d\'une interface responsive, d\'intégrations API et de mises à jour en temps réel pour les organisateurs de tournois.',
                    role: `En tant que Développeur Full-Stack, j'ai :<br/>
                    - Développé le tableau de bord de gestion de tournois avec Next.js, React et TypeScript.<br/>
                    - Intégré des mises à jour en temps réel et des connexions API pour les données de tournois en direct.<br/>
                    - Amélioré les performances et l'expérience utilisateur en utilisant React Hooks et les API REST.<br/>
                    - Collaboré via Git avec des revues de code dans un environnement Agile.`,
                },
                slide: {
                    description:
                        'Slide est un portefeuille crypto basé sur Bitcoin développé avec la stack MERN, doté d\'un investissement automatisé DCA (Dollar-Cost Averaging) pour les achats récurrents, d\'opérations sécurisées et d\'une authentification robuste.',
                    role: `En tant que Développeur Blockchain / Full-Stack, j'ai :<br/>
                    - Développé le portefeuille crypto en utilisant la stack MERN.<br/>
                    - Implémenté la logique d'investissement automatisé DCA pour les achats récurrents.<br/>
                    - Mis en place des opérations sécurisées et des mécanismes d'authentification.<br/>
                    - Utilisé Git, Docker et les méthodes Agile pour la collaboration et le déploiement.`,
                },
                tuniimmo: {
                    description:
                        'Tuniimmo est une plateforme immobilière de recherche et de publication d\'annonces, développée avec Angular et Express.js, offrant une large gamme de biens à vendre et à louer avec de nombreuses fonctionnalités comme la visite à 360°.',
                    role: '',
                },
                petty: {
                    description:
                        'Petty est une application mobile de type Tinder pour l\'adoption d\'animaux, développée avec React.js et Express.js.',
                    role: '',
                },
                khotwa: {
                    description:
                        'Khotwa est une plateforme d\'e-learning pour la gestion des cours et des utilisateurs, développée avec Angular et Spring Boot. 🔍 Fonctionnalités principales :✔️ Gestion des cours : création de cours, inscription et suivi de progression✔️ Gestion des utilisateurs : inscription/connexion sécurisée et gestion des profils✔️ Diffusion de contenu : modules de cours organisés avec une navigation structurée✔️ Tableau de bord administrateur : gérer les cours, les utilisateurs et l\'activité de la plateforme ',
                    role: '',
                },
            },
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
