const logotext = "El Toucan";
const meta = {
    title: "Développeur Web Fullstack | Portfolio de El Toucan",
    description: "Découvrez mon portfolio de développeur Web Fullstack spécialisé en MongoDB, Express, React et Node.js. Création d’interfaces web dynamiques et performantes.",
    ogTitle: "Portfolio de El Toucan - Développeur Web Fullstack",
    ogDescription: "Je crée des applications web modernes et optimisées avec la stack MERN (MongoDB, Express, React, Node.js).",
    ogImage: "URL_DE_MON_IMAGE",
    ogUrl: "https://mon-site-portfolio.com",
};


const introdata = {
    title: "Salut, on m'appelle El Toucan",
    animated: {
        first: "J'adore coder",
        second: "Je fais des sites web vraiment cool",
        third: "... aussi bien Frontend que Backend",
        fourth: "J'ai hâte que nous parlions de votre projet !",
    },
    description: "Je suis Développeur Web",
    your_img_url: require("./assets/images/MVGHomePageAccroche.webp"),
};

const dataabout = {
    title: "about my self",
    aboutme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",
};
const worktimeline = [{
        jobtitle: "Etudiant Developpeur Web - Full Stack",
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

const skills = [{
        name: "Html",
        value: 90,
    },
    {
        name: "CSS",
        value: 85,
    },
    {
        name: "Javascript",
        value: 65,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Sass",
        value: 70,
    },
];

const services = [{
        title: "Ful Stack avec M.E.R.N",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Intégration web avec HTML-CSS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Développement Web avec JAVASCRIPT",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "UI dynamique interface avec REACT",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Développement back-end avec NODEJS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Optimisation et Debug",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const soft_skills = [{
        title: "Marketing-vente",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Développement des ventes",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Gestion de projet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Réalisation des contrats",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Développement back-end avec NODEJS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Optimisation et Debug",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];


const formation = [{
    title: "Master Marketing et e-commerce",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
},
{
    title: "Maîtrise Marketing-Vente",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
},
{
    title: "Bac E Mathématiques et Techniques",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
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
        img: require("./assets/images/Photo-MVG.webp"),
        Projet: " | Mon Vieux Grimoire. |",
        Description: " | Développement from scratch du backend d'un site de notation de livres. | ",
        link: "https://www.free.fr/freebox/",
        Contexte: " | Développement du back-end pour une plateforme de notation de livres, collaboration avec un développeur front-end (React), respect des bonnes pratiques de développement et du Green Code. | ",
        Architecture: " | Node.js & Express.js : Mise en place du serveur. | MongoDB & Mongoose : Stockage et gestion des données. | Architecture MVC : Organisation du code en modèles, vues et contrôleurs. | API RESTful : Conception d’une API structurée pour le front-end. | ",
        Implementation: " | Gestion des Livres et des Notations (CRUD): création, lecture, mise à jour et suppression de livres. | ",
        Challenges:" | Validation des Notations : vérification pour éviter les doublons par utilisateur. | Connexion Sécurisée à la Base de Données : utilisation de variables d’environnement. | Performance et Scalabilité : optimisation des requêtes et gestion efficace des ressources. | ",
        Défis: " | Expérience complète en développement back-end. | Mise en œuvre des bonnes pratiques de sécurité et d’optimisation. | Gestion de projet en collaboration avec un développeur front-end. | ",
        Déploiement: " | Tests des endpoints avec Postman. | Déploiement sur un serveur distant (ex : Heroku, Vercel, …). | "
    },
    {
        img: require("./assets/images/NinaCarducci.webp"),
        Projet: " | Optimisation et Débogage du Site de Nina Carducci. | ",
        Description: " | Technologies : Lighthouse, GTMetrix, Chrome DevTools, Schema.org, OpenGraph, Twitter Cards. | Compétences : SEO, Accessibilité Web, Optimisation des Performances, Débogage, Analyse. | ",
        link: "https://eltoucandepaitilla.github.io/nina-carducci-dev/",
        Contexte: " | Optimisation et débogage du site d’une photographe pour améliorer ses performances et son référencement. | Utilisation d’audits Lighthouse et Wave pour identifier les axes d’amélioration. | Application des bonnes pratiques SEO et accessibilité pour une meilleure visibilité et expérience utilisateur. | ",
        Architecture: " | Node.js & Express.js : Mise en place du serveur. | MongoDB & Mongoose : Stockage et gestion des données. | Architecture MVC : Organisation du code en modèles, vues et contrôleurs. | API RESTful : Conception d’une API structurée pour le front-end. | ",
        Implementation: " | Audit et Analyse des Performances: réalisation d’un audit initial avec Lighthouse (SEO, accessibilité, performances), identification des éléments ralentissant le site et impactant le référencement. | Optimisation du Chargement et du Code: optimisation des images : Réduction du poids des fichiers pour accélérer le chargement, minification des fichiers HTML, CSS et JavaScript pour améliorer la rapidité d’affichage, réorganisation du code et amélioration de la structure pour un rendu plus efficace. | Optimisation du Référencement (SEO): ajout des balises meta essentielles (title, description, robots), mise en place du référencement local avec Schema.org, amélioration du HTML sémantique pour faciliter l’indexation du site. | Débogage et Correction des Bugs: correction des problèmes de navigation dans la modale de la galerie photo, correction de l’affichage des filtres des catégories d’images. |",
        Challenges:" | Validation des Notations : vérification pour éviter les doublons par utilisateur. | Connexion Sécurisée à la Base de Données : utilisation de variables d’environnement. | Performance et Scalabilité : optimisation des requêtes et gestion efficace des ressources. |",
        Défis: " | Optimiser les performances sans altérer le design du site. | Corriger les bugs de navigation tout en maintenant une expérience utilisateur fluide. | Trouver le bon équilibre entre optimisation SEO et accessibilité pour satisfaire les moteurs de recherche et les utilisateurs. |",
        Déploiement: " | Vérification des optimisations avec un audit final Lighthouse. | Test des performances après modifications avec GTMetrix. | Validation de l’accessibilité avec Wave pour garantir une meilleure expérience utilisateur. | Livraison d’un rapport détaillé à la cliente, incluant les améliorations et leurs impacts. | "
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
    skills,
    services,
    soft_skills,
    formation,
    langues,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};