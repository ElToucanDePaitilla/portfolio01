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
        img: require("./assets/images/Kasa.webp"),
        Projet: " | Développement Front-End de la Plateforme de Location Immobilière Kasa. | ",
        Description: " | Technologies : React, React Router, Create React App, Sass. | Compétences : Développement Front-End, Gestion de la Navigation, Composants Réutilisables, Optimisation des Performances, Accessibilité Web. | ",
        link: "https://kasa-eltoucandepaitilla.netlify.app/",
        Contexte: " | Refonte complète du site Kasa, plateforme de location immobilière, pour moderniser l’interface utilisateur et améliorer les performances. | Développement du front-end en React en suivant des maquettes Figma et un design system précis. | Implémentation d’un routage dynamique et gestion des états avec React Router. | ",
        Architecture: " | React & React Router : Gestion de la navigation et des pages. | Create React App : Initialisation du projet. | Sass : Organisation et modularisation du style. | JSON : Gestion des données en l’absence de back-end. | ",
        Implementation: " | Initialisation du Projet: mise en place du projet avec Create React App et structuration des composants React. | Gestion des Routes: création du routeur et intégration des pages dynamiques. | Développement des Composants: mise en place des éléments réutilisables comme Banner, Card, Collapse et Slideshow. | Intégration des Animations et CSS: utilisation de Sass et animations CSS pour améliorer l’expérience utilisateur. | Gestion des Erreurs: implémentation d’une page 404 et redirection en cas d’ID incorrect. | ",
        Challenges:" | Implémentation d’un carrousel dynamique respectant les contraintes UX. | Création d’un système de collapses interactifs avec animations CSS. | Gestion d’une navigation fluide entre les pages, sans back-end actif. |",
        Défis: " | Assurer une cohérence visuelle avec les maquettes Figma. | Optimiser les performances de l’application avec Create React App et la gestion du CSS en Sass. | Gérer la navigation et l’affichage des logements en exploitant un fichier JSON. |",
        Déploiement: " | Tests et validation du rendu final avec vérification de la navigation. | Optimisation des performances et de l’accessibilité selon les bonnes pratiques React. | Livraison du projet avec documentation détaillée sur la structure et les composants. | "
    },
    {
        img: require("./assets/images/SophieBluel.webp"),
        Projet: " | Développement d'une Page Web Dynamique pour une Architecte d’Intérieur. | ",
        Description: " | Technologies : JavaScript, Fetch API, HTML, CSS, Sass. | Compétences : Développement Front-End, Gestion des Événements, Manipulation du DOM, Authentification, Interaction avec une API REST. | ",
        link: "https://eltoucandepaitilla.github.io/portfolio01/#/portfolio",
        Contexte: " | Conception et développement du site portfolio d’une architecte d’intérieur en collaboration avec une équipe de développeurs. | Transformation d’une page statique en une page dynamique en intégrant des données issues d’un back-end. | Implémentation d’une authentification pour l’administration du site. | Création d’une modale permettant l’ajout et la suppression de projets. | ",
        Architecture: " | JavaScript Vanilla : Manipulation du DOM et gestion des événements utilisateurs. | Fetch API : Récupération et envoi de données au serveur. | HTML & CSS : Structure et mise en page du site. | Sass : Modularisation et optimisation du style. | ",
        Implementation: " | Intégration Dynamique des Données: récupération des projets via l’API et affichage dynamique sur la page. | Filtrage des Travaux: mise en place d’un système de filtres pour afficher les projets par catégorie. | Authentification de l’Administrateur: création d’une page de connexion sécurisée avec vérification des identifiants. | Gestion des Projets: ajout et suppression de travaux en interagissant avec l’API, actualisation dynamique du DOM. | Implémentation d’une Modale: affichage et gestion de la fenêtre modale pour l’ajout de projets. | ",
        Challenges:" | Récupération et affichage dynamique des projets tout en respectant la structure HTML fournie. | Implémentation d’un système de filtrage efficace sans requêtes redondantes à l’API. | Gestion fluide des erreurs et des validations dans le formulaire de connexion et d’ajout de projets. | ",
        Défis: " | Assurer la cohérence entre le back-end et le front-end dans les échanges de données via Fetch API. | Maintenir un affichage fluide et interactif sans nécessiter de rechargement de la page. | Respecter les spécifications des maquettes Figma tout en optimisant l'expérience utilisateur. | ",
        Déploiement: " | Tests et validation des fonctionnalités sur différents navigateurs et tailles d’écran. | Optimisation des performances et gestion des erreurs pour garantir une expérience utilisateur fluide. | Livraison d’un site fonctionnel et documenté, prêt pour la mise en production. | "
    },
    {
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
    {
        img: require("./assets/images/Booki.webp"),
        Projet: " | Intégration de la Page d'Accueil d'une Agence de Voyage. | ",
        Description: " | Technologies : HTML, CSS, Sass. | Compétences : Intégration Web, Responsive Design, Accessibilité, Versioning avec Git/GitHub. | ",
        link: "https://booki-travel.netlify.app/",
        Contexte: " | Développement de la page d'accueil du site Booki, permettant aux utilisateurs de rechercher des hébergements et activités. | Intégration des maquettes Figma en version desktop, tablette et mobile. | Collaboration avec une équipe de développement sous la direction de la CTO. | ",
        Architecture: " | HTML : Structuration du contenu et sémantique. | CSS & Sass : Mise en page et gestion du responsive design avec Media Queries. | Git/GitHub : Versioning et collaboration sur le projet. | ",
        Implementation: " | Mise en place de la structure HTML en respectant les maquettes. | Utilisation de Flexbox et Grid pour l’organisation des éléments. | Intégration du formulaire de recherche et des filtres interactifs. | Développement du responsive design pour une adaptation optimale sur tous les écrans. | Validation du code avec les outils W3C pour garantir la qualité et l’accessibilité. | ",
        Challenges:" | Intégration précise des maquettes sans utiliser le code généré par Figma. | Gestion du responsive en respectant les breakpoints définis. | Assurer une expérience utilisateur fluide avec une mise en page cohérente et accessible. | ",
        Défis: " | Respecter fidèlement le design tout en optimisant le code pour les performances. | Utiliser des unités relatives et des bonnes pratiques CSS pour une compatibilité multi-écrans. | Garantir la maintenabilité du code avec une bonne structuration des fichiers CSS et HTML. | ",
        Déploiement: " | Vérification du rendu final sur plusieurs navigateurs et tailles d’écran. | Validation du code HTML et CSS avec les validateurs W3C. | Mise en ligne du projet et documentation des étapes d'intégration. | "
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