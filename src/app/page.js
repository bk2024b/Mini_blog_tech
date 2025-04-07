import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ArticleCard from "./components/ArticleCard";


const articles = [
  {
    title: "Pourquoi Next.js est l'avenir ",
    excerpt: "Next.js booste les performances des sites web, même avec une connexion limitée",
    slug: "pourquoi-next-js-est-l-avenir",
  },
  {
    title: " SEO pour entrepreneurs locaux ",
    excerpt: "Comment ranker sur Google avec des mots clés comme 'Cotonou business",
    slug: "seo-pour-entrepreneurs-locaux",
  },
  {
    title: "Coder offline au Bénin ",
    excerpt: "Mes astuces pour développer sans internet constant.",
    slug: "coder-offline-au-benin",
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
        <div className="grid gap-6 md:grid-cols-2">
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
