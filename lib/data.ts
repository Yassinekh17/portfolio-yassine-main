import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'khiarimohamedyassine@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Yassine, I am reaching out to you because...',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Yassinekh17' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/yassine-khiarii/' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Angular',
            icon: '/logo/angular.png',
        },
        {
            name: 'Flutter',
            icon: '/logo/flutter.png',
        },
        {
            name: 'HTML5',
            icon: '/logo/html5.png',
        },
        {
            name: 'CSS3',
            icon: '/logo/css3.png',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
        {
            name: 'Spring Boot',
            icon: '/logo/spring-boot.png',
        },
        {
            name: 'Laravel',
            icon: '/logo/laravel.png',
        },
        {
            name: 'Symfony',
            icon: '/logo/symfony.png',
        },
    
    ],
    database: [
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'Hugging Face',
            icon: '/logo/huggingface.png',
        },
        {
            name: 'Groq',
            icon: '/logo/groq.png',
        },
        {
            name: 'Ollama',
            icon: '/logo/ollama.png',
        },
        {
            name: 'Kubernetes',
            icon: '/logo/Kubernetes_logo_without_workmark.svg.webp',
        },
        {
            name: 'Jenkins',
            icon: '/logo/jenkins.png',
        },
        {
            name: 'CI/CD',
            icon: '/logo/cicd.png',
        },

    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Talent Management',
        slug: 'talent-management',
        year: 2026,
        description: `
      A full-stack HR and talent management ecosystem built for Telnet, made of two connected apps sharing one backend: <b>Talent Manager</b> (web) for HR teams and <b>Talent Companion</b> (mobile) for engineers. <br/> <br/>
    
      <b>Talent Manager (Web)</b><br/>
      <ul>
        <li>📊 HR Analytics Dashboard: Entry/exit rates, gender and age pyramid, department breakdown</li>
        <li>🧑‍💼 Recruitment Module: Needs tracking, candidate pipeline, and AI-assisted CV import</li>
        <li>🧩 9-Box Talent Grid: Interactive grid and bubble chart for talent evaluation</li>
        <li>📈 Skills Evaluation: Radar charts and stacked bars mapping 27 skills across 7 categories</li>
        <li>🎯 Goals & Reviews: Yearly review cycle, goal tracking, and satisfaction stats</li>
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
        <li>✅ Backend: Built the Node.js/Express/MongoDB Atlas API shared by both apps</li>
        <li>🎨 Web: Built the Flutter Web dashboard with fl_chart visualizations</li>
        <li>📱 Mobile: Built the Talent Companion app in Flutter</li>
        <li>🤖 AI: Designed and implemented the three Groq (LLaMA) agents</li>
        <li>🚀 Deployment: Deployed the platform on Vercel</li>
      </ul>
      `,
        techStack: [
            'Flutter',
            'Node.js',
            'Express.js',
            'MongoDB Atlas',
            'Groq LLaMA',
            'Slack API',
            'Cloudinary',
            'JWT',
            'Vercel',
        ],
        thumbnail: '/projects/thumbnail/imresizer-telnet.png',
        longThumbnail: '/projects/long/imresizer-telnet.png',
        videos: [
            '/projects/videos/login et home.mp4',
            '/projects/videos/HR.mp4',
            '/projects/videos/Skills.mp4',
            '/projects/videos/Goals&Reviews.mp4',
            '/projects/videos/ai 1.mp4',
            '/projects/videos/ai 2.mp4',
            '/projects/videos/ai3.mp4',
            '/projects/videos/mobile1.mp4',
            '/projects/videos/mobile2.mp4',
            '/projects/videos/mobile3.mp4',
            '/projects/videos/mobile4.mp4',
            '/projects/videos/mobile5.mp4',
        ],
    },
    {
        title: 'Defendr',
        slug: 'defendr',
        liveUrl: 'https://defendr.gg',
        year: 2025,
        techStack: ['Next.js', 'React', 'TypeScript', 'REST API'],
        thumbnail: '/projects/thumbnail/defendr (1).png',
        longThumbnail: '/projects/long/defendr (1).jpg',
        images: [
            '/projects/images/defendrthumb.png',
            '/projects/images/defendr.png',
            '/projects/images/defendr2.png',
            '/projects/images/defendr3.png',
            '/projects/images/OperaInstantané_2026-08-01_020217_defendr.gg.png',
            '/projects/images/OperaInstantané_2026-08-01_020250_defendr.gg.png',
            '/projects/images/OperaInstantané_2026-08-01_020304_defendr.gg.png',
            '/projects/images/OperaInstantané_2026-08-01_020356_defendr.gg.png',
            '/projects/images/OperaInstantané_2026-08-01_020422_defendr.gg.png',
            '/projects/images/OperaInstantané_2026-08-01_020439_defendr.gg.png',
        ],
        description:
            'Defendr is an e-sport tournament management dashboard built with Next.js, React, and TypeScript, featuring a responsive interface, API integrations, and real-time updates for tournament organizers.',
        role: `As the Full-Stack Developer, I:<br/>
        - Built the tournament management dashboard with Next.js, React, and TypeScript.<br/>
        - Integrated real-time updates and API connections for live tournament data.<br/>
        - Improved performance and UX using React Hooks and REST APIs.<br/>
        - Collaborated via Git with code reviews in an Agile environment.`,
    },
    {
        title: 'Slide',
        slug: 'slide',
        liveUrl: 'https://www.slide-money.com/',
        year: 2023,
        techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Docker'],
        thumbnail: '/projects/thumbnail/slide.png',
        longThumbnail: '/projects/long/slide.png',
        images: [
            '/projects/images/slide1.png',
            '/projects/images/EmailScreen.png',
            '/projects/images/HomeScreen.jpg',
            '/projects/images/Screen38.png',
            '/projects/images/Screen5.png',
            '/projects/images/ddddd.png',
            '/projects/images/Transferscreen5.png',
        ],
        description:
            'Slide is a Bitcoin-based crypto wallet built with the MERN stack, featuring automated DCA (Dollar-Cost Averaging) investing for recurring purchases, secure operations, and robust authentication.',
        role: `As a Blockchain / Full-Stack Developer, I:<br/>
        - Built the crypto wallet using the MERN stack.<br/>
        - Implemented automated DCA investment logic for recurring purchases.<br/>
        - Set up secure operations and authentication mechanisms.<br/>
        - Used Git, Docker, and Agile methods for collaboration and deployment.`,
    },
    {
        title: 'Tuniimmo',
        slug: 'tuniimmo',
        year: 2024,
        techStack: ['Angular', 'Express.js'],
        thumbnail: '/projects/thumbnail/imresizer-tuniimo.png',
        longThumbnail: '/projects/long/tuniimothumb.png',
        images: ['/projects/images/Image6.png','/projects/images/Image4.png','/projects/images/Image5.png','/projects/images/Image1.png','/projects/images/Image2.png','/projects/images/Image3.png','/projects/images/Image7.png','/projects/images/Image8.png','/projects/images/Image9.png','/projects/images/Image10.png'],
        description:
            'Tuniimmo is a real estate platform for searching and publishing property listings, built with Angular and Express.js offering a wide range of properties for sale and rent with a wide range of features and functionalities like the 360° view.',
        role: ``,
    },
    {
        title: 'Petty',
        slug: 'petty',
        year: 2024,
        techStack: ['React.js', 'Express.js'],
        thumbnail: '/projects/thumbnail/petty-removebg-preview.png',
        longThumbnail: '/projects/long/petty.png',
        images: ['/projects/images/cf22b185-8fd4-4b6a-a661-e7fad7d68f0b.png','/projects/images/petty1.png','/projects/images/petty2.png','/projects/images/petty3.png'],
        description:
            'Petty is a Tinder-style mobile app for pet adoption, built with React.js and Express.js.',
        role: ``,
    },
    {
        title: 'Plateforme E-Learning Khotwa',
        slug: 'khotwa',
        year: 2023,
        techStack: ['Angular', 'Spring Boot'],
        thumbnail: '/projects/thumbnail/khotwaa.png',
        longThumbnail: '/projects/long/tunisie.jpg',
        images: ['/projects/images/1747172340171.jpg' ,'/projects/images/1747172340956.jpg','/projects/images/1747172341378.jpg','/projects/images/1747172341479.jpg','/projects/images/1747172341497.jpg','/projects/images/1747172341740.jpg', '/projects/images/1747172341861.jpg', '/projects/images/1747172341912.jpg','/projects/images/1747172342185.jpg', '/projects/images/1747172342226.jpg'],
        description:
            'Khotwa is an e-learning platform for managing courses and users, built with Angular and Spring Boot. 🔍 Core Features:✔️ Course Management: Course creation, enrollment, and progress tracking✔️ User Management: Secure sign-up/sign-in and profile management✔️ Content Delivery: Organized course modules with structured navigation✔️ Admin Dashboard: Manage courses, users, and platform activity ',
        role: ``,
    },
    
];

