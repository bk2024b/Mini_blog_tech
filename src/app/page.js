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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Mini-Blog Tech
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8">
            Solutions web adaptées au contexte béninois
          </p>
          <Link
            href="/articles"
            className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors inline-block"
          >
            Découvrir les articles
          </Link>
        </div>
      </section>
      
      {/* Featured Articles */}
      <main className="max-w-6xl mx-auto px-6 py-12 flex-grow">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            Articles récents
          </h2>
          <Link
            href="/articles"
            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
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
        
        {/* About Section */}
        <section className="mt-16 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            À propos de ce blog
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Je suis Josias Boco, étudiant en Génie Électrique et Informatique au Bénin. 
            Ce blog partage mon expertise en développement web moderne, adapté aux réalités locales.
          </p>
          <Link
            href="/about"
            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center w-fit"
          >
            En savoir plus
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}