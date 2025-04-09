I'm// src/app/articles/[slug]/page.jsx
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { getArticleBySlug, getAllArticles } from "@/lib/data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }) {
  const article = getArticleBySlug(params.slug);
  
  if (!article) {
    return {
      title: "Article non trouvé",
    };
  }
  
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: ["Josias Boco"],
      tags: article.tags,
    },
  };
}

export default function ArticlePage({ params }) {
  const article = getArticleBySlug(params.slug);
  
  if (!article) {
    notFound();
  }
  
  // Format de la date
  const formattedDate = article.date 
    ? new Date(article.date).toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    : null;
    
  // Conversion du contenu texte brut en paragraphes
  const contentParagraphs = article.content.split('\n\n');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Navbar />
      <main className="max-w-4xl mx-auto p-6 flex-grow">
        <article>
          {/* Article Header */}
          <header className="mb-8">
            <div className="mb-6">
              <Link 
                href="/articles" 
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center w-fit mb-4"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Retour aux articles
              </Link>
              
              <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                {article.title}
              </h1>
              
              <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                {formattedDate && <span className="mr-4">{formattedDate}</span>}
                {article.readTime && (
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {article.readTime} min de lecture
                  </span>
                )}
              </div>
            </div>
            
            {/* Article Image */}
            <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden mb-6">
              <Image 
                src={`/images/articles/${article.slug}.png`} 
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 768px"
                // Suppression du gestionnaire onError et utilisation d'une image placeholder
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlOWVkZjUiLz48L3N2Zz4="
              />
            </div>
            
            {/* Category Tag */}
            {article.category && (
              <div className="mb-6">
                <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                  {article.category}
                </span>
              </div>
            )}
          </header>
          
          {/* Article Content */}
          <div className="prose dark:prose-invert max-w-none">
            {contentParagraphs.map((paragraph, idx) => (
              <p key={idx} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
          
          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
}