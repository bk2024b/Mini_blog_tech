// src/app/articles/page.jsx
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ArticleCard from "@/app/components/ArticleCard";
import { getAllArticles } from "@/lib/data";

const articles = getAllArticles();

export const metadata = {
  title: "Articles | Mini-blog Tech",
  description: "Découvrez tous nos articles tech adaptés au contexte béninois",
};
export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-12 px-4"> {/* Modifié ici */}
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-100 mb-8">
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