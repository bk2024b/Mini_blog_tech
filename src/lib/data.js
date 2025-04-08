// src/lib/data.js

export const articles = [
    {
      id: "1",
      title: "Pourquoi Next.js est l'avenir",
      excerpt: "Next.js booste les performances des sites web, même avec une connexion limitée",
      content: "Next.js est un framework révolutionnaire qui combine rendu statique et serveur pour des performances optimales. Au Bénin, où la connexion internet peut être instable, il permet de créer des sites rapides et accessibles. Avec son routage intégré et son optimisations d'images, c'est l'outil idéal pour les développeurs modernes.\n\nLe rendu côté serveur (SSR) et la génération statique (SSG) de Next.js offrent une expérience utilisateur fluide même dans les zones à faible bande passante. Les pages se chargent rapidement et les utilisateurs peuvent interagir avec votre site sans attendre que de lourds fichiers JavaScript soient téléchargés.\n\nDe plus, avec l'API Routes de Next.js, vous pouvez créer rapidement des endpoints backend sans avoir besoin de configurer un serveur séparé. C'est idéal pour les développeurs au Bénin qui veulent créer des applications web complètes avec un minimum d'infrastructure.\n\nEnfin, l'optimisation automatique des images de Next.js réduit considérablement la taille des fichiers, ce qui est crucial pour les utilisateurs disposant de forfaits internet limités.",
      slug: "pourquoi-next-js-est-l-avenir",
      date: "2025-02-15",
      readTime: 5,
      category: "Développement",
      author: "Josias Boco",
      tags: ["Next.js", "Performance", "Web Development"]
    },
    {
      id: "2",
      title: "SEO pour entrepreneurs locaux",
      excerpt: "Comment ranker sur Google avec des mots clés comme 'Cotonou business'",
      content: "Le SEO est crucial pour se démarquer en ligne, même au Bénin. En ciblant des mots-clés comme 'Cotonou business' ou 'développeur web Porto-Novo', les entrepreneurs peuvent attirer des clients locaux. Une structure claire, des balises meta et du contenu pertinent sont les clés.\n\nLe référencement local est particulièrement important pour les entreprises béninoises. Assurez-vous de créer et optimiser votre profil Google My Business avec votre adresse exacte, vos heures d'ouverture et des photos de qualité. Encouragez vos clients satisfaits à laisser des avis positifs, car ils améliorent considérablement votre visibilité dans les recherches locales.\n\nCréez du contenu qui répond aux questions spécifiques que posent les clients potentiels dans votre région. Par exemple, si vous êtes un développeur web à Cotonou, rédigez des articles sur les défis web spécifiques auxquels sont confrontées les entreprises locales.\n\nEnfin, n'oubliez pas l'importance des backlinks locaux. Cherchez à être référencé sur les sites d'annuaires béninois et établissez des partenariats avec d'autres entreprises locales pour des échanges de liens mutuellement bénéfiques.",
      slug: "seo-pour-entrepreneurs-locaux",
      date: "2025-03-02",
      readTime: 7,
      category: "Marketing",
      author: "Josias Boco",
      tags: ["SEO", "Marketing Digital", "Entreprise"]
    },
    {
      id: "3",
      title: "Coder offline au Bénin",
      excerpt: "Mes astuces pour développer sans internet constant.",
      content: "Avec une connexion limitée, coder offline devient une compétence essentielle. J'utilise VS Code avec la doc téléchargée et Next.js pour structurer mes projets en local. Les cybercafés servent juste pour l'upload. Voici mes astuces pour rester productif.\n\nTéléchargez la documentation complète des technologies que vous utilisez régulièrement. Pour JavaScript, React, Next.js et autres frameworks, il existe souvent des versions PDF ou des sites que vous pouvez sauvegarder pour une consultation hors ligne. MDN (Mozilla Developer Network) permet de télécharger sa documentation pour un accès hors ligne.\n\nUtilisez des extensions VS Code qui fonctionnent sans connexion internet. Des extensions comme Prettier pour le formatage du code et ESLint pour la détection des erreurs peuvent fonctionner entièrement hors ligne une fois installées.\n\nPlanifiez votre travail à l'avance. Quand vous avez accès à internet, téléchargez toutes les dépendances et ressources dont vous aurez besoin pour vos prochaines sessions de travail. Utilisez npm ou yarn pour installer les packages localement.\n\nPour les problèmes complexes, téléchargez préalablement plusieurs threads StackOverflow sur des sujets similaires à ce sur quoi vous travaillez. Ils peuvent souvent contenir des solutions à des problèmes que vous pourriez rencontrer.\n\nUtilisez Git localement, même sans accès à GitHub. Vous pouvez faire des commits réguliers sur votre machine, puis les pousser vers le dépôt distant lorsque vous avez accès à internet.",
      slug: "coder-offline-au-benin",
      date: "2025-03-22",
      readTime: 6,
      category: "Productivité",
      author: "Josias Boco",
      tags: ["Développement", "Productivité", "VS Code"]
    },
    {
      id: "4",
      title: "Les frameworks CSS pour projets béninois",
      excerpt: "Comparaison de Tailwind, Bootstrap et autres pour le contexte local",
      content: "Les frameworks CSS comme Tailwind et Bootstrap offrent des avantages distincts pour les développeurs béninois. Avec une connexion internet parfois limitée, choisir le bon framework peut faire une grande différence en termes de performance et de facilité de développement.\n\nTailwind CSS, avec son approche utility-first, permet de créer des interfaces personnalisées sans avoir à télécharger de grandes feuilles de style. Grâce à PurgeCSS, vous ne conservez que les classes réellement utilisées, ce qui réduit considérablement la taille du fichier final. C'est idéal pour les projets où chaque kilooctet compte.\n\nBootstrap reste populaire pour sa facilité d'utilisation et ses composants prêts à l'emploi. Si vous devez développer rapidement un prototype ou si vous travaillez avec une équipe moins expérimentée en CSS, Bootstrap peut être un bon choix. Cependant, les sites Bootstrap ont tendance à se ressembler et sont généralement plus lourds.\n\nBulma est une alternative légère qui gagne en popularité. Son code est propre et lisible, ce qui facilite les modifications personnalisées. Il n'inclut pas de JavaScript, ce qui le rend plus léger que Bootstrap.\n\nChakra UI est excellent pour les projets React, offrant des composants accessibles et personnalisables avec un système de thème puissant. Il permet de créer rapidement des interfaces professionnelles tout en maintenant une bonne performance.\n\nPour les projets où chaque ko compte, envisagez des micro-frameworks comme Picnic CSS ou Pure.css qui offrent les fonctionnalités essentielles en pesant moins de 10kb.",
      slug: "frameworks-css-pour-projets-beninois",
      date: "2025-04-05",
      readTime: 8,
      category: "Développement",
      author: "Josias Boco",
      tags: ["CSS", "Tailwind", "Bootstrap", "Performance"]
    },
  ];
  
  export function getAllArticles() {
    return articles.sort((a, b) => new Date(b.date) - new Date(a.date));
  }
  
  export function getArticleBySlug(slug) {
    return articles.find(article => article.slug === slug);
  }
  
  export function getAllCategories() {
    const categories = new Set();
    articles.forEach(article => {
      if (article.category) {
        categories.add(article.category);
      }
    });
    return Array.from(categories);
  }
  
  export function getArticlesByCategory(category) {
    return articles
      .filter(article => article.category === category)
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }