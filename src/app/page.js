import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ArticleCard from "./components/ArticleCard";

export const articles = [
  {
    title: "Pourquoi Next.js est l'avenir",
    excerpt: "Next.js booste les performances des sites web, même avec une connexion limitée",
    slug: "pourquoi-next-js-est-l-avenir",
    content: "Next.js est un framework révolutionnaire qui combine rendu statique et serveur pour des performances optimales. Au Bénin, où la connexion internet peut être instable, il permet de créer des sites rapides et accessibles. Avec son routage intégré et son optimisations d'images, c'est l'outil idéal pour les développeurs modernes."
  },
  {
    title: "SEO pour entrepreneurs locaux",
    excerpt: "Comment ranker sur Google avec des mots clés comme 'Cotonou business'",
    slug: "seo-pour-entrepreneurs-locaux",
    content: "Le SEO est crucial pour se démarquer en ligne, même au Bénin. En ciblant des mots-clés comme Cotonou business ou developpeur web Porto-Novo les entrepreneurs peuvent attirer des clients locaux. Une structure claire, des balises meta et du contenu pertinent sont les clés."
  },
  {
    title: "Coder offline au Bénin",
    excerpt: "Mes astuces pour développer sans internet constant.",
    slug: "coder-offline-au-benin",
    content: "Avec une connexion limitée, coder offline devient une compétence essentielle. J'utilise VS Code avec la doc téléchargée et Next.js pour structurer mes projets en locals. Les cybercafés servent juste pour l'upload. Voici mes astuces pour rester productif."
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <main className="max-w-4xl mx-auto p-6 flex-grow">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Bienvenue sur Mini-Blog Tech
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard
              key={article.slug}
              title={article.title}
              excerpt={article.excerpt}
              slug={article.slug}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
