// src/app/page.js
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ArticleCard from "./components/ArticleCard";
import Link from "next/link";
import { getAllArticles } from "@/lib/data";

export const metadata = {
  title: "Accueil | Mini-blog Tech",
  description: "Blog tech moderne par Josias Boco pour aider les entrepreneurs et développeurs béninois",
};

export default function Home() {
  // Récupérer les articles (normalement depuis un CMS ou une API)
  const featuredArticles = getAllArticles().slice(0, 3);
  
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <Navbar />
      
      {/* Hero Section - Améliorée */}
      <main className="flex-grow pt-28 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section hero améliorée avec un gradient subtil et meilleur espacement */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 md:p-12 mb-12 border border-slate-700/50 shadow-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Mini-Blog Tech
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Solutions web adaptées au contexte béninois
            </p>
            <Link
              href="/articles"
              className="px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all inline-flex items-center shadow hover:shadow-blue-500/20 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Découvrir les articles
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          
          {/* Featured Articles */}
          <div className="mt-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-100">
                Articles récents
              </h2>
              <Link
                href="/articles"
                className="text-blue-400 hover:underline flex items-center"
              >
                Tous les articles
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredArticles.map((article) => (
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
          
          {/* About Section */}
          <section className="mt-16 bg-slate-800 rounded-xl p-8 shadow-md border border-slate-700">
            <h2 className="text-2xl font-bold text-gray-100 mb-4">
              À propos de ce blog
            </h2>
            <p className="text-gray-300 mb-4">
              Je suis Josias Boco, étudiant en Génie Électrique et Informatique au Bénin. 
              Ce blog partage mon expertise en développement web moderne, adapté aux réalités locales.
            </p>
            <Link
              href="/about"
              className="text-blue-400 hover:underline flex items-center w-fit"
            >
              En savoir plus
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}