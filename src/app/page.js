import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ArticleCard from "./components/ArticleCard";
import NewsletterSection from "./components/NewsletterSection";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Mini-blog Tech - Accueil | Josias Boco",
  description: "Découvrez des articles tech adaptés au contexte béninois - Next.js, SEO local et développement web",
};

export const articles = [
  {
    title: "Pourquoi Next.js est l'avenir du développement web au Bénin",
    excerpt: "Next.js booste les performances des sites web, même avec une connexion Internet limitée. Découvrez comment en tirer parti dans le contexte béninois.",
    slug: "pourquoi-next-js-est-l-avenir",
    date: "08 Avril 2025",
    readTime: 5,
    category: "Développement Web",
    content: "Next.js est un framework révolutionnaire qui combine rendu statique et serveur pour des performances optimales. Au Bénin, où la connexion internet peut être instable, il permet de créer des sites rapides et accessibles. Avec son routage intégré et son optimisations d'images, c'est l'outil idéal pour les développeurs modernes.\n\nLes avantages de Next.js sont nombreux:\n\n1. **Performances exceptionnelles** - Le rendu côté serveur et la génération statique permettent des chargements ultra-rapides, même avec une connexion lente.\n\n2. **SEO optimisé** - Le rendu côté serveur facilite l'indexation par les moteurs de recherche.\n\n3. **Expérience développeur améliorée** - Hot reloading, routage simplifié et écosystème React rendent le développement agréable.\n\n4. **Déployable partout** - Compatible avec Vercel, Netlify ou tout hébergeur traditionnel accessible au Bénin.\n\nAvec Next.js, créez des sites performants même dans des conditions de connectivité difficiles."
  },
  {
    title: "SEO pour entrepreneurs béninois: Dominer les recherches locales",
    excerpt: "Comment ranker sur Google avec des mots clés comme 'Cotonou business' et attirer des clients locaux au Bénin.",
    slug: "seo-pour-entrepreneurs-locaux",
    date: "04 Avril 2025",
    readTime: 7,
    category: "Marketing Digital",
    content: "Le SEO est crucial pour se démarquer en ligne, même au Bénin. En ciblant des mots-clés comme 'Cotonou business' ou 'développeur web Porto-Novo', les entrepreneurs peuvent attirer des clients locaux. Une structure claire, des balises meta et du contenu pertinent sont les clés du succès.\n\nVoici les stratégies essentielles pour les entrepreneurs béninois:\n\n1. **Recherche de mots-clés localisés** - Identifiez les termes que vos clients potentiels utilisent, en incluant des références géographiques comme Cotonou, Porto-Novo, ou Bénin.\n\n2. **Google My Business** - Créez et optimisez votre fiche entreprise pour apparaître dans les recherches locales et sur Google Maps.\n\n3. **Contenu adapté au contexte local** - Abordez les problématiques spécifiques à votre région et proposez des solutions adaptées.\n\n4. **Optimisation mobile** - Au Bénin, la majorité des recherches sont effectuées sur mobile. Assurez-vous que votre site est parfaitement responsive.\n\n5. **Balisage schema.org** - Implémentez des données structurées pour aider Google à comprendre votre contenu et à l'afficher de manière optimale dans les résultats de recherche.\n\nEn appliquant ces techniques, votre entreprise gagnera en visibilité et attirera davantage de clients locaux."
  },
  {
    title: "Coder offline au Bénin: Être productif malgré les coupures",
    excerpt: "Mes astuces pratiques pour développer sans internet constant et rester productif au Bénin.",
    slug: "coder-offline-au-benin",
    date: "01 Avril 2025",
    readTime: 6,
    category: "Productivité",
    content: "Avec une connexion limitée au Bénin, coder offline devient une compétence essentielle. J'utilise VS Code avec la documentation téléchargée et Next.js pour structurer mes projets en local. Les cybercafés servent juste pour l'upload. Voici mes astuces pour rester productif.\n\nMes techniques pour développer efficacement offline:\n\n1. **Documentation locale** - Téléchargez à l'avance la documentation des technologies que vous utilisez (MDN pour JavaScript, React, etc.).\n\n2. **VS Code et extensions offline** - Configurez votre environnement de développement pour fonctionner sans connexion et installez les extensions essentielles.\n\n3. **Solutions de versionnement local** - Utilisez Git en mode local pour suivre vos modifications, puis synchronisez quand la connexion est disponible.\n\n4. **Frameworks avec développement local** - Next.js, Vue.js ou Create React App fonctionnent parfaitement sans connexion permanente.\n\n5. **Tests unitaires autonomes** - Écrivez et exécutez des tests sans dépendre d'API externes.\n\nCes stratégies m'ont permis de rester productif même pendant les périodes de déconnexion prolongées ou de faible débit au Bénin."
  },
  {
    title: "Créer une API REST avec Node.js et MongoDB pour les startups béninoises",
    excerpt: "Guide étape par étape pour développer une API robuste adaptée aux besoins des entreprises locales.",
    slug: "api-rest-node-mongodb-startups-beninoises",
    date: "28 Mars 2025",
    readTime: 8,
    category: "Backend",
    content: "Les API REST sont essentielles pour les applications modernes. Dans ce guide, je vous montre comment créer une API performante avec Node.js et MongoDB, optimisée pour le contexte béninois avec ses défis spécifiques de connectivité."
  },
];

export default function Home() {
  // Séparer les articles récents des autres
  const featuredArticle = articles[0];
  const recentArticles = articles.slice(1, 3);
  const moreArticles = articles.slice(3);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Mini-Blog Tech</h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto mb-8">
                Des articles tech adaptés au contexte béninois pour développeurs et entrepreneurs
              </p>
              <Link 
                href="/articles" 
                className="inline-flex items-center bg-white text-blue-700 font-medium px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Parcourir les articles <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-10 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              À la une
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-1 p-6 md:p-8">
                  {featuredArticle.category && (
                    <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium px-3 py-1 rounded-full mb-3">
                      {featuredArticle.category}
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                    {featuredArticle.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span>{featuredArticle.date}</span>
                    <span className="mx-2">•</span>
                    <span>{featuredArticle.readTime} min de lecture</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {featuredArticle.excerpt}
                  </p>
                  <Link 
                    href={`/articles/${featuredArticle.slug}`}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium group"
                  >
                    Lire la suite...
                    <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
                <div className="md:w-2/5 bg-blue-100 dark:bg-blue-900 flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="text-6xl text-blue-600 dark:text-blue-400 mb-3">📱</div>
                    <p className="text-blue-700 dark:text-blue-300 font-medium">Développement Web Moderne</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Articles */}
        <section className="py-10 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                Articles récents
              </h2>
              <Link 
                href="/articles" 
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline flex items-center"
              >
                Voir tous <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {recentArticles.map((article) => (
                <ArticleCard
                  key={article.slug}
                  title={article.title}
                  excerpt={article.excerpt}
                  slug={article.slug}
                  date={article.date}
                  readTime={article.readTime}
                  category={article.category}
                />
              ))}
              {moreArticles.map((article) => (
                <ArticleCard
                  key={article.slug}
                  title={article.title}
                  excerpt={article.excerpt}
                  slug={article.slug}
                  date={article.date}
                  readTime={article.readTime}
                  category={article.category}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <NewsletterSection />
      </main>
      
      <Footer />
    </div>
  );
}