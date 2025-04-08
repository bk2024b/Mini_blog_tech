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
  // Récupérer les articles
  const featuredArticles = getAllArticles().slice(0, 3);
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      {/* Hero Section Modernisée */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-8 md:mb-0 md:pr-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Solutions Web Modernes pour le Contexte Béninois
            </h1>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Un blog tech qui propose des approches adaptées aux réalités locales et aux entrepreneurs africains.
            </p>
            <div className="flex space-x-4">
              <Link
                href="/articles"
                className="px-6 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-gray-100 transition-colors inline-block shadow-md"
              >
                Parcourir les articles
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors inline-block"
              >
                Me contacter
              </Link>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="w-64 h-64 rounded-full bg-blue-600/30 flex items-center justify-center p-2">
              <div className="w-full h-full rounded-full bg-blue-500/40 flex items-center justify-center p-2">
                <div className="w-full h-full rounded-full bg-white/90 flex items-center justify-center">
                  <span className="text-blue-700 font-bold text-xl">Josias Boco</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Articles Section */}
      <main className="max-w-6xl mx-auto px-6 py-16 flex-grow">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
              Articles récents
            </h2>
            <div className="h-1 w-24 bg-blue-600 mt-2 rounded-full"></div>
          </div>
          <Link
            href="/articles"
            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center group"
          >
            Voir tous les articles
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
        <section className="mt-20 grid md:grid-cols-5 gap-8 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="md:col-span-3">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              À propos de ce blog
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Je suis Josias Boco, étudiant en Génie Électrique et Informatique au Bénin. 
              Ce blog partage mon expertise en développement web moderne, adapté aux réalités locales
              et aux besoins spécifiques des entrepreneurs africains.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Mon objectif est de fournir des solutions techniques pertinentes et accessibles 
              pour aider les entreprises et projets locaux à prospérer dans l'écosystème numérique.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center px-5 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
            >
              En savoir plus
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          <div className="md:col-span-2 flex justify-center items-center">
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl shadow-inner flex flex-col items-center">
              <div className="h-20 w-20 rounded-full bg-blue-600 mb-4 flex items-center justify-center text-white text-xl font-bold">
                JB
              </div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Josias Boco</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-4">
                Développeur Web & Étudiant en Génie Électrique et Informatique
              </p>
              <div className="flex space-x-3">
                <a href="https://github.com/josiasboco" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="https://linkedin.com/in/josiasboco" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
                <a href="mailto:josiasboco@gmail.com" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 5.5v13a2.5 2.5 0 01-2.5 2.5h-15a2.5 2.5 0 01-2.5-2.5v-13a2.5 2.5 0 012.5-2.5h15a2.5 2.5 0 012.5 2.5zm-2.63 1.254l-6.877 6.878-6.877-6.878A.75.75 0 004.38 7.88l6.873 6.873a1.252 1.252 0 001.747 0L19.873 7.88a.75.75 0 10-1.504-.126z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="mt-16 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 border border-blue-100 dark:border-blue-800/40">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                Restez informé
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Recevez mes derniers articles et conseils tech directement dans votre boîte mail.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                  required
                />
                <button 
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                >
                  S'abonner
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}