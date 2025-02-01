const logotext = "El Toucan";
const meta = {
    title: "Développeur Web Fullstack | Portfolio de El Toucan",
    description: "Découvrez mon portfolio de développeur Web Fullstack spécialisé en MongoDB, Express, React et Node.js. Création d’interfaces web dynamiques et performantes.",
    ogTitle: "Portfolio de El Toucan - Développeur Web Fullstack",
    ogDescription: "Je crée des applications web modernes et optimisées avec la stack MERN (MongoDB, Express, React, Node.js).",
    ogImage: "/og-image.webp",
    ogUrl: "https://eltoucandepaitilla.github.io/portfolio01/",
};


const introdata = {
    title: "Salut, on m'appelle El Toucan",
    animated: {
        first: "J'adore coder",
        second: "Je fais des sites web vraiment cool",
        third: "... aussi bien Frontend que Backend",
        fourth: "J'ai hâte que nous parlions de votre projet !",
    },
    description: "Webmaster et Développeur Web Full Stack, alliant expertise technique, marketing et ventes pour accompagner efficacement les enjeux stratégiques de votre entreprise ou organisation.",
    your_img_url: require("./assets/images/MVGHomePageAccroche.webp"),
};

const dataabout = {
    title: "développeur Web full Stack",
    aboutme: "Certification RNCP38145, spécialisé dans la stack MERN (MongoDB, Express.js, React, Node.js). Je conçois et développe des applications web modernes en appliquant les meilleures pratiques du développement web.",
};
const worktimeline = [{
        jobtitle: "Développeur Web Full Stack – Certification RNCP38145",
        where: "OpenClassrooms",
        date: "2024-2025",
    },
    {
        jobtitle: "Développeur Frontend",
        where: "Himalaya Solutions",
        date: "2018-2024",
    },
    {
        jobtitle: "Développeur Frontend",
        where: "Diverses sociétés: Mis en demeure / Béton Rouge / Extensio IDF / Himalaya Solutions",
        date: "2001-2018",
    },
];
/*
const skills = [{
        name: "Html",
        value: 70,
    },
    {
        name: "CSS",
        value: 70,
    },
    {
        name: "Javascript",
        value: 60,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Sass",
        value: 60,
    },
];
*/
const technologies = [{
    title: "Frontend",
    description: "Maîtrise des langages essentiels pour la création d’interfaces dynamiques et réactives : HTML, CSS, JavaScript, React, Sass. Capacité à structurer des pages web performantes et ergonomiques en respectant les bonnes pratiques de développement.",
},
{
    title: "Backend",
    description: "Bases solides en Node.js, Express.js pour construire des API robustes et gérer la logique serveur d’une application web. Compréhension des bases de données avec MongoDB et manipulation des données via des requêtes optimisées.",
},
{
    title: "Intégration & Responsive Design",
    description: "Utilisation des préprocesseurs et frameworks CSS (Sass, Bootstrap, Tailwind) pour garantir un affichage optimal sur tous les écrans. Veille à l’accessibilité et aux performances pour offrir une expérience utilisateur fluide.",
},
{
    title: "Développement Full-Stack avec MERN",
    description: "Capacité à créer des applications complètes en utilisant MongoDB, Express.js, React et Node.js, en assurant la communication entre le front-end et le back-end de manière efficace.",
},
{
    title: "Versioning & Collaboration",
    description: "Utilisation de Git & GitHub pour gérer les versions du code et collaborer efficacement avec d’autres développeurs sur des projets en équipe.",
},
];

const services = [{
        title: "Développement Full Stack avec MERN",
        description: "Conception et mise en œuvre d’une application complète avec React (frontend), Node.js (backend) et MongoDB (base de données).",
    },
    {
        title: "Développement Frontend avec React.js",
        description: "Créer des interfaces utilisateur attractives et responsives en utilisant HTML et CSS.",
    },
    {
        title: "Développement Backend avec Node.js & Express.js",
        description: "Mise en place d’un serveur web sécurisé, gestion des routes API et connexion avec MongoDB.",
    },
    {
        title: "Optimisation et Debugging",
        description: "Débuggage du code avec Chrome DevTools, amélioration des performances et gestion des erreurs.",
    },
];

const soft_skills = [{
        title: "Collaboration & Esprit d’équipe",
        description: "Capacité à travailler efficacement en équipe, en mode agile et en communication constante avec les différents acteurs d’un projet.",
    },
    {
        title: "Autonomie & Apprentissage Continu",
        description: "Forte capacité d’auto-formation et d’adaptation aux évolutions technologiques.",
    },
    {
        title: "Gestion de projet et organisation",
        description: "Planification efficace des tâches, respect des deadlines et suivi rigoureux des livrables.",
    },
];


const formation = [{
    title: "Certification RNCP38145 – Développeur Web Full Stack",
    description: "OpenClassrooms / Paris",
},
{
    title: "Master Marketing et e-commerce",
    description: "CESCI / Paris",
},
{
    title: "Maîtrise Marketing-Vente",
    description: "CNAM - ISCV / Paris",
},
{
    title: "Bac E Mathématiques et Techniques",
    description: "Lycée Alexis de Tocqueville / Cherbourg",
},
];

const langues = [{
    title: "Français",
    description: "Langue maternelle, lu écrit, parlé.",
},
{
    title: "Anglais",
    description: "Lu, écrit, parlé.",
},
{
    title: "Espagnol",
    description: "Lu, écrit, parlé, apprentissage en cours.",
},
];

const dataportfolio = [{
        img: require("./assets/images/Kasa.webp"),
        Projet: "  | Développement Front-End de la Plateforme de Location Immobilière Kasa. | ",
        Description: " | Technologies : React, React Router, Create React App, Sass. | Compétences : Développement Front-End, Gestion de la Navigation, Composants Réutilisables, Optimisation des Performances, Accessibilité Web. | ",
        link: "https://kasa-eltoucandepaitilla.netlify.app/",
        Contexte: "  | Refonte complète du site Kasa, plateforme de location immobilière, pour moderniser l’interface utilisateur et améliorer les performances. | Développement du front-end en React en suivant des maquettes Figma et un design system précis. | Implémentation d’un routage dynamique et gestion des états avec React Router. | ",
        Architecture: "  | React & React Router : Gestion de la navigation et des pages. | Create React App : Initialisation du projet. | Sass : Organisation et modularisation du style. | JSON : Gestion des données en l’absence de back-end. | ",
        Implementation: " | Initialisation du Projet: mise en place du projet avec Create React App et structuration des composants React. | Gestion des Routes: création du routeur et intégration des pages dynamiques. | Développement des Composants: mise en place des éléments réutilisables comme Banner, Card, Collapse et Slideshow. | Intégration des Animations et CSS: utilisation de Sass et animations CSS pour améliorer l’expérience utilisateur. | Gestion des Erreurs: implémentation d’une page 404 et redirection en cas d’ID incorrect. | ",
        Challenges:"  | Implémentation d’un carrousel dynamique respectant les contraintes UX. | Création d’un système de collapses interactifs avec animations CSS. | Gestion d’une navigation fluide entre les pages, sans back-end actif. |",
        Défis: "  | Assurer une cohérence visuelle avec les maquettes Figma. | Optimiser les performances de l’application avec Create React App et la gestion du CSS en Sass. | Gérer la navigation et l’affichage des logements en exploitant un fichier JSON. |",
        Déploiement: " | Tests et validation du rendu final avec vérification de la navigation. | Optimisation des performances et de l’accessibilité selon les bonnes pratiques React. | Livraison du projet avec documentation détaillée sur la structure et les composants. | ",
        Lien: "  | Prototype fonctionnel en ligne – design en cours de finalisation par le commanditaire. | ",
    },
    {
        img: require("./assets/images/SophieBluel.webp"),
        Projet: "  | Développement d'une Page Web Dynamique pour une Architecte d’Intérieur. | ",
        Description: " | Technologies : JavaScript, Fetch API, HTML, CSS, Sass. | Compétences : Développement Front-End, Gestion des Événements, Manipulation du DOM, Authentification, Interaction avec une API REST. | ",
        link: "https://eltoucandepaitilla.github.io/portfolio01/#/portfolio",
        Contexte: "  | Conception et développement du site portfolio d’une architecte d’intérieur en collaboration avec une équipe de développeurs. | Transformation d’une page statique en une page dynamique en intégrant des données issues d’un back-end. | Implémentation d’une authentification pour l’administration du site. | Création d’une modale permettant l’ajout et la suppression de projets. | ",
        Architecture: "  | JavaScript Vanilla : Manipulation du DOM et gestion des événements utilisateurs. | Fetch API : Récupération et envoi de données au serveur. | HTML & CSS : Structure et mise en page du site. | Sass : Modularisation et optimisation du style. | ",
        Implementation: " | Intégration Dynamique des Données: récupération des projets via l’API et affichage dynamique sur la page. | Filtrage des Travaux: mise en place d’un système de filtres pour afficher les projets par catégorie. | Authentification de l’Administrateur: création d’une page de connexion sécurisée avec vérification des identifiants. | Gestion des Projets: ajout et suppression de travaux en interagissant avec l’API, actualisation dynamique du DOM. | Implémentation d’une Modale: affichage et gestion de la fenêtre modale pour l’ajout de projets. | ",
        Challenges:"  | Récupération et affichage dynamique des projets tout en respectant la structure HTML fournie. | Implémentation d’un système de filtrage efficace sans requêtes redondantes à l’API. | Gestion fluide des erreurs et des validations dans le formulaire de connexion et d’ajout de projets. | ",
        Défis: "  | Assurer la cohérence entre le back-end et le front-end dans les échanges de données via Fetch API. | Maintenir un affichage fluide et interactif sans nécessiter de rechargement de la page. | Respecter les spécifications des maquettes Figma tout en optimisant l'expérience utilisateur. | ",
        Déploiement: " | Tests et validation des fonctionnalités sur différents navigateurs et tailles d’écran. | Optimisation des performances et gestion des erreurs pour garantir une expérience utilisateur fluide. | Livraison d’un site fonctionnel et documenté, prêt pour la mise en production. | ",
        Lien: "  | Le contenu est actuellement en cours de mise à jour. Nous vous prions de bien vouloir patienter et de revenir ultérieurement. | ",
    },
    {
        img: require("./assets/images/MVG.webp"),
        Projet: "  | Mon Vieux Grimoire. |",
        Description: " | Développement from scratch du backend d'un site de notation de livres. | ",
        link: "https://github.com/ElToucanDePaitilla/MVG02",
        Contexte: "  | Développement du back-end pour une plateforme de notation de livres, collaboration avec un développeur front-end (React), respect des bonnes pratiques de développement et du Green Code. | ",
        Architecture: " | Node.js & Express.js : Mise en place du serveur. | MongoDB & Mongoose : Stockage et gestion des données. | Architecture MVC : Organisation du code en modèles, vues et contrôleurs. | API RESTful : Conception d’une API structurée pour le front-end. | ",
        Implementation: " | Gestion des Livres et des Notations (CRUD): création, lecture, mise à jour et suppression de livres. | ",
        Challenges:"  | Validation des Notations : vérification pour éviter les doublons par utilisateur. | Connexion Sécurisée à la Base de Données : utilisation de variables d’environnement. | Performance et Scalabilité : optimisation des requêtes et gestion efficace des ressources. | ",
        Défis: "  | Expérience complète en développement back-end. | Mise en œuvre des bonnes pratiques de sécurité et d’optimisation. | Gestion de projet en collaboration avec un développeur front-end. | ",
        Déploiement: " | Tests des endpoints avec Postman. | Déploiement sur un serveur distant (ex : Heroku, Vercel, …). | ",
        Lien: "  | Repository sur github. | ",
        },
    {
        img: require("./assets/images/NinaCarducci.webp"),
        Projet: "  | Optimisation et Débogage du Site de Nina Carducci. | ",
        Description: " | Technologies : Lighthouse, GTMetrix, Chrome DevTools, Schema.org, OpenGraph, Twitter Cards. | Compétences : SEO, Accessibilité Web, Optimisation des Performances, Débogage, Analyse. | ",
        link: "https://eltoucandepaitilla.github.io/nina-carducci-dev/",
        Contexte: "  | Optimisation et débogage du site d’une photographe pour améliorer ses performances et son référencement. | Utilisation d’audits Lighthouse et Wave pour identifier les axes d’amélioration. | Application des bonnes pratiques SEO et accessibilité pour une meilleure visibilité et expérience utilisateur. | ",
        Architecture: " | Node.js & Express.js : Mise en place du serveur. | MongoDB & Mongoose : Stockage et gestion des données. | Architecture MVC : Organisation du code en modèles, vues et contrôleurs. | API RESTful : Conception d’une API structurée pour le front-end. | ",
        Implementation: " | Audit et Analyse des Performances: réalisation d’un audit initial avec Lighthouse (SEO, accessibilité, performances), identification des éléments ralentissant le site et impactant le référencement. | Optimisation du Chargement et du Code: optimisation des images : Réduction du poids des fichiers pour accélérer le chargement, minification des fichiers HTML, CSS et JavaScript pour améliorer la rapidité d’affichage, réorganisation du code et amélioration de la structure pour un rendu plus efficace. | Optimisation du Référencement (SEO): ajout des balises meta essentielles (title, description, robots), mise en place du référencement local avec Schema.org, amélioration du HTML sémantique pour faciliter l’indexation du site. | Débogage et Correction des Bugs: correction des problèmes de navigation dans la modale de la galerie photo, correction de l’affichage des filtres des catégories d’images. |",
        Challenges:" | Validation des Notations : vérification pour éviter les doublons par utilisateur. | Connexion Sécurisée à la Base de Données : utilisation de variables d’environnement. | Performance et Scalabilité : optimisation des requêtes et gestion efficace des ressources. |",
        Défis: "  | Optimiser les performances sans altérer le design du site. | Corriger les bugs de navigation tout en maintenant une expérience utilisateur fluide. | Trouver le bon équilibre entre optimisation SEO et accessibilité pour satisfaire les moteurs de recherche et les utilisateurs. |",
        Déploiement: " | Vérification des optimisations avec un audit final Lighthouse. | Test des performances après modifications avec GTMetrix. | Validation de l’accessibilité avec Wave pour garantir une meilleure expérience utilisateur. | Livraison d’un rapport détaillé à la cliente, incluant les améliorations et leurs impacts. | ",
        Lien: "  | Prototype fonctionnel en ligne – design en cours de finalisation par le commanditaire. | ",
    },
    {
        img: require("./assets/images/Booki.webp"),
        Projet: "  | Intégration de la Page d'Accueil d'une Agence de Voyage. | ",
        Description: " | Technologies : HTML, CSS, Sass. | Compétences : Intégration Web, Responsive Design, Accessibilité, Versioning avec Git/GitHub. | ",
        link: "https://eltoucandepaitilla.github.io/bki01/",
        Contexte: "  | Développement de la page d'accueil du site Booki, permettant aux utilisateurs de rechercher des hébergements et activités. | Intégration des maquettes Figma en version desktop, tablette et mobile. | Collaboration avec une équipe de développement sous la direction de la CTO. | ",
        Architecture: " | HTML : Structuration du contenu et sémantique. | CSS & Sass : Mise en page et gestion du responsive design avec Media Queries. | Git/GitHub : Versioning et collaboration sur le projet. | ",
        Implementation: " | Mise en place de la structure HTML en respectant les maquettes. | Utilisation de Flexbox et Grid pour l’organisation des éléments. | Intégration du formulaire de recherche et des filtres interactifs. | Développement du responsive design pour une adaptation optimale sur tous les écrans. | Validation du code avec les outils W3C pour garantir la qualité et l’accessibilité. | ",
        Challenges:"  | Intégration précise des maquettes sans utiliser le code généré par Figma. | Gestion du responsive en respectant les breakpoints définis. | Assurer une expérience utilisateur fluide avec une mise en page cohérente et accessible. | ",
        Défis: "  | Respecter fidèlement le design tout en optimisant le code pour les performances. | Utiliser des unités relatives et des bonnes pratiques CSS pour une compatibilité multi-écrans. | Garantir la maintenabilité du code avec une bonne structuration des fichiers CSS et HTML. | ",
        Déploiement: " | Vérification du rendu final sur plusieurs navigateurs et tailles d’écran. | Validation du code HTML et CSS avec les validateurs W3C. | Mise en ligne du projet et documentation des étapes d'intégration. | ",
        Lien: "  | Prototype fonctionnel en ligne – backend en cours de finalisation par le commanditaire. | ",
    },

    {
            img: require("./assets/images/MenuMaker.webp"),
        Projet: "  | Planification du Développement d'un Site Web pour le Menu Maker de Qwenta. | ",
        Description: " | Technologies : Gestion de Projet Agile (Kanban), Notion, Veille Technologique (Feedly), Spécifications Techniques. | Compétences : Gestion de Projet, Rédaction de Spécifications Techniques, Estimation des Tâches, Veille Technologique, Présentation de Solutions Techniques. | ",
        link: "https://www.figma.com/design/Q6NEUPqwz1U3HFaCaVoF7N/Maquette-desktop---Menu-Maker-by-Qwenta?node-id=0-570&t=aeZZC3SIs23EiJgT-0/",
        Contexte: "  | Planification complète du développement du site Menu Maker, un outil permettant aux restaurateurs de créer et gérer facilement leurs menus. | Rédaction des spécifications techniques, décomposition des fonctionnalités en tâches et mise en place d’un Kanban pour la gestion de projet. | Collaboration avec l’équipe de développement (Front-end et Back-end) pour organiser les phases du projet. | ",
        Architecture: "  | Outils : Notion (gestion de projet et Kanban), Feedly (veille technologique). | Méthodologie Agile : Organisation des tâches par user stories et priorisation des fonctionnalités. | Spécifications Techniques : Définition des besoins fonctionnels, choix technologiques, et estimation de la complexité des tâches. | ",
        Implementation: " | Analyse des besoins fonctionnels : compréhension des attentes clients à partir des user stories et des maquettes Figma. | Veille Technologique : identification des solutions techniques adaptées grâce à des recherches ciblées. | Rédaction des Spécifications Techniques : description des choix technologiques et des critères de succès des fonctionnalités. | Création du Kanban : découpage des tâches, estimation en story points, et attribution des responsabilités aux développeurs. | Préparation de la Présentation Finale : structuration des livrables dans un support clair pour le client. | ",
        Challenges:"  | Traduire des besoins fonctionnels en spécifications techniques précises. | Évaluer la complexité des tâches et organiser le projet de manière agile. | Assurer une veille technologique pertinente pour orienter les choix techniques. | ",
        Défis: "  | Optimiser la gestion de projet sans développement direct, en se concentrant sur la planification et la coordination des tâches. | Garantir la cohérence entre les besoins utilisateurs, les solutions techniques proposées et les ressources disponibles. | Préparer une présentation claire et synthétique pour le client, mettant en valeur les décisions techniques. | ",
        Déploiement: " | Finalisation des livrables : spécifications techniques, Kanban détaillé, et support de présentation. | Réunion de validation avec le Product Owner pour s’assurer de la conformité avec les attentes du client. | Livraison du projet sous forme de documentation complète, prête à être utilisée par l’équipe de développement. | ",
        Lien: "  | Maquette du prototype, site en attente de validation pour le lancement du développement. | ",
    },
    {
        img: require("./assets/images/OrganizOptimiz.webp"),
        Projet: "  | Structuration et Planification de la Formation Développeur Web avec Notion. | ",
        Description: "  | Technologies : Notion. | Compétences : Gestion de Projet, Structuration de l’Information, Planification Efficace, Collaboration Asynchrone, Cartographie Mentale. | ",
        link: "https://notion.so",
        Contexte: "  | Utilisation de Notion comme outil central pour la structuration, l’organisation et la planification de la formation Développeur Web. | Gestion des différents projets professionnalisants à travers un tableau de bord unique, facilitant le suivi des étapes clés de la formation. | Optimisation de la collaboration entre étudiants et mentors, avec un accès simplifié aux ressources et aux informations essentielles. | ",
        Architecture: "  | Notion : Centralisation des documents, des projets, des tâches et des notes dans un espace unique. | Tableaux de Bord Personnalisés : Vues Kanban, calendriers, timelines et listes pour organiser et suivre l’évolution de la formation. | Cartographie Mentale : Outils pour la gestion des idées et la visualisation des parcours d’apprentissage. | Collaboration Asynchrone : Partage d’informations en temps réel grâce aux commentaires, mentions et pages interactives. | ",
        Implementation: " | Centralisation de l’Information : regroupement des projets de formation, des ressources pédagogiques et des tâches à accomplir dans Notion. | Planification Efficace : définition des dates cibles de soutenance des projets, attribution des responsabilités et suivi des objectifs professionnels. | Structuration de l’Information : utilisation de sections, d’en-têtes, de couleurs et d’icônes pour une présentation claire et intuitive des contenus. | Collaboration et Partage : facilitation des échanges entre les étudiants et les mentors grâce aux commentaires et aux partages de pages. | Suivi des Performances : création de dashboards interactifs pour visualiser les progrès réalisés et les compétences acquises tout au long de la formation. | ",
        Challenges:"  | Créer un tableau de bord simple et direct pour un accès rapide aux informations clés de la formation. | Structurer et organiser les informations de manière panoramique pour une vue d’ensemble claire du parcours. | Faciliter la gestion des idées et la planification des projets professionnels à travers des outils de cartographie mentale. | ",
        Défis: "  | Adapter Notion aux besoins spécifiques de la formation Développeur Web, en mettant l’accent sur la planification efficace. | Assurer la fluidité de la collaboration entre les étudiants et les mentors, tout en favorisant la communication asynchrone. | Centraliser les ressources de manière intuitive pour faciliter le suivi des projets professionnalisants. | ",
        Déploiement: " | Configuration de Notion avec des tableaux de bord personnalisés pour le suivi de la formation et des projets. | Formation des utilisateurs (étudiants et mentors) à l’utilisation de Notion pour la gestion des tâches et la collaboration. | Suivi continu des performances et des objectifs pédagogiques grâce à des dashboards interactifs. | ",
        Lien: "  | Lien vers le site de Notion présentant les différents outils de planification, de communications et de collaboratins. | ",
    },
];

const contactConfig = {
    YOUR_EMAIL: "eltoucandepaitilla@gmail.com",
    YOUR_FONE: "(+33) 07 67 07 33 45",
    description: "Vous avez une idée, un projet ou une opportunité de collaboration ? Je suis disponible pour échanger avec vous. N'hésitez pas à me contacter pour toute question ou demande d'information.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_0lp1uwx",
    YOUR_TEMPLATE_ID: "template_z0mg3us",
    YOUR_USER_ID: "fQ7zRqBhiMO8Zap6E",
};

const socialprofils = {
    github: "https://github.com/ElToucanDePaitilla",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    technologies,
    services,
    soft_skills,
    formation,
    langues,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};