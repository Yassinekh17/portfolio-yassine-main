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
            downloadCv: 'Download my CV',
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
                     'Designed and built "Talent Management", a full-stack HR ecosystem made of "Talent Manager" (Flutter Web) for HR teams and "Talent Companion" (Flutter mobile) for engineers, sharing a Node.js/Express/MongoDB Atlas backend deployed on Vercel.',
                        'Built HR modules including recruitment with AI-assisted CV import, skills evaluation, goals & reviews, HR analytics (entry/exit stats, age/gender pyramids), and a 9-Box talent grid with fl_chart visualizations.',
                        'Developed the Talent Companion mobile app with location-based attendance check-in, HR requests, a team feed synced with Slack, and a points & badges system with an AI-generated daily quiz.',
                        'Developed an AI layer of three agents on Groq (LLaMA): a RAG HR assistant, a CV analyzer, and an agentic HR agent with tool-calling that performs real database operations after user confirmation.',
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
                'talent-management': {
                description: `
            A full-stack HR and talent management ecosystem built for Telnet, made of two connected apps sharing one backend: <b>Talent Manager</b> (web) for HR teams and <b>Talent Companion</b> (mobile) for engineers. <br/> <br/>

            <b>Talent Manager (Web)</b><br/>
            <ul>
                <li>📊 HR Analytics Dashboard: entry/exit rates, gender and age pyramid, department breakdown</li>
                <li>🧑‍💼 Recruitment Module: needs tracking, candidate pipeline, and AI-assisted CV import</li>
                <li>🧩 9-Box Talent Grid: interactive grid and bubble chart for talent evaluation</li>
                <li>📈 Skills Evaluation: radar charts and stacked bars mapping 27 skills across 7 categories</li>
                <li>🎯 Goals & Reviews: yearly review cycle, goal tracking, and satisfaction stats</li>
                <li>🤖 3 AI Agents: HR Assistant (RAG), CV Analyzer, and an HR Agent with tool-calling that performs real database operations after user confirmation</li>
            </ul><br/>

            <b>Talent Companion (Mobile)</b><br/>
            <ul>
                <li>📍 Location-based attendance check-in with an attendance calendar</li>
                <li>📝 HR requests (remote work, sick leave, day off) with approval notifications</li>
                <li>💬 Team feed synced both ways with Slack, plus GitHub profile connection</li>
                <li>🏆 Points, badges, leaderboard, peer recognition, and an AI-generated daily quiz</li>
            </ul><br/>

            <b>Technical Highlights</b>
            <ul>
                <li>Built a full data model chain: Client → Project → Job → JobLevel → Engineer</li>
                <li>Implemented a skills comparison system matching required vs. actual skills</li>
                <li>Added automatic model fallback and token management for the AI agents</li>
                <li>Integrated Cloudinary, Nodemailer, Slack API (OAuth, webhooks, Events API), and JWT authentication</li>
                <li>Packaged the web app as a Windows executable for a live CTO demo</li>
            </ul>
            `,
                role: `
            Full-Stack Developer <br/>
            Owned the entire development lifecycle across both apps:
            <ul>
                <li>✅ Backend: built the Node.js/Express/MongoDB Atlas API shared by both apps</li>
                <li>🎨 Web: built the Flutter Web dashboard with fl_chart visualizations</li>
                <li>📱 Mobile: built the Talent Companion app in Flutter</li>
                <li>🤖 AI: designed and implemented the three agents using Groq's LLaMA model</li>
                <li>🚀 Deployment: deployed the platform on Vercel</li>
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
            downloadCv: 'Télécharger mon CV',
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
                        "Conception et développement de « Talent Management », un écosystème RH full-stack composé de « Talent Manager » (Flutter Web) pour les équipes RH et de « Talent Companion » (Flutter mobile) pour les ingénieurs, partageant un backend Node.js/Express/MongoDB Atlas déployé sur Vercel.",
                        "Développement de modules RH incluant le recrutement avec import de CV assisté par IA, l'évaluation des compétences, les objectifs et évaluations, les statistiques RH (taux d'entrées/sorties, pyramides des âges et du genre) et une grille de talents 9-Box avec visualisations fl_chart.",
                        "Développement de l'application mobile Talent Companion avec pointage de présence géolocalisé, demandes RH, flux d'équipe synchronisé avec Slack, et système de points et badges avec quiz quotidien généré par IA.",
                        "Développement d'une couche IA de trois agents basés sur Groq (LLaMA) : un assistant RH RAG, un analyseur de CV et un agent RH avec appels d'outils, capable d'effectuer de vraies opérations en base de données après confirmation de l'utilisateur.",
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
            'talent-management': {
                description: `
            Un écosystème RH full-stack de gestion des talents développé pour Telnet, composé de deux applications connectées partageant un même backend : <b>Talent Manager</b> (web) pour les équipes RH et <b>Talent Companion</b> (mobile) pour les ingénieurs. <br/> <br/>

            <b>Talent Manager (Web)</b><br/>
            <ul>
                <li>📊 Tableau de bord d'analyse RH : taux d'entrée/sortie, pyramide des âges et des genres, répartition par département</li>
                <li>🧑‍💼 Module Recrutement : suivi des besoins, pipeline de candidats et import de CV assisté par IA</li>
                <li>🧩 Grille de talents 9-Box : grille interactive et graphique à bulles pour l'évaluation des talents</li>
                <li>📈 Évaluation des compétences : graphiques radar et barres empilées cartographiant 27 compétences réparties sur 7 catégories</li>
                <li>🎯 Objectifs & Évaluations : cycle d'évaluation annuel, suivi des objectifs et statistiques de satisfaction</li>
                <li>🤖 3 agents IA : assistant RH (RAG), analyseur de CV et agent RH avec appel d'outils qui effectue de réelles opérations en base de données après confirmation de l'utilisateur</li>
            </ul><br/>

            <b>Talent Companion (Mobile)</b><br/>
            <ul>
                <li>📍 Pointage de présence géolocalisé avec calendrier d'assiduité</li>
                <li>📝 Demandes RH (télétravail, congé maladie, jour de repos) avec notifications d'approbation</li>
                <li>💬 Flux d'équipe synchronisé dans les deux sens avec Slack, et connexion du profil GitHub</li>
                <li>🏆 Points, badges, classement, reconnaissance entre pairs et quiz quotidien généré par IA</li>
            </ul><br/>

            <b>Points forts techniques</b>
            <ul>
                <li>Construit une chaîne complète de modèles de données : Client → Projet → Poste → Niveau de poste → Ingénieur</li>
                <li>Implémenté un système de comparaison des compétences faisant correspondre les compétences requises et réelles</li>
                <li>Ajouté une bascule automatique entre modèles et une gestion des tokens pour les agents IA</li>
                <li>Intégré Cloudinary, Nodemailer, l'API Slack (OAuth, webhooks, Events API) et une authentification basée sur JWT</li>
                <li>Conditionné l'application web en exécutable Windows pour une démonstration en direct au CTO</li>
            </ul>
            `,
                role: `
            Développeur Full-Stack <br/>
            J'ai pris en charge l'intégralité du cycle de vie du développement des deux applications :
            <ul>
                <li>✅ Backend : développé l'API Node.js/Express/MongoDB Atlas partagée par les deux applications</li>
                <li>🎨 Web : développé le tableau de bord Flutter Web avec les visualisations fl_chart</li>
                <li>📱 Mobile : développé l'application Talent Companion avec Flutter</li>
                <li>🤖 IA : conçu et implémenté les trois agents utilisant le modèle LLaMA de Groq</li>
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
