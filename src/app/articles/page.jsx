// src/app/articles/page.jsx
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ArticleCard from "@/app/components/ArticleCard";
import { articles } from "@/app/page";

export const metadata = {
  title: "Articles | Mini-blog Tech",
  description: "Découvrez tous nos articles tech adaptés au contexte béninois",
};

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">
            Tous les articles
          </h1>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
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
      </main>
      
      <Footer />
    </div>
  );
}