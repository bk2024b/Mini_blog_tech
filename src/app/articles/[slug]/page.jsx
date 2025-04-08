// src/app/articles/[slug]/page.jsx
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { articles } from "@/app/page";
import { notFound } from "next/navigation";
import { ChevronLeft, Calendar, Clock, Share2 } from "lucide-react";

export function generateMetadata({ params }) {
  const article = articles.find((article) => article.slug === params.slug);
  
  if (!article) {
    return {
      title: "Article non trouvé | Mini-blog Tech",
      description: "Cet article n'existe pas ou a été déplacé.",
    };
  }
  
  return {
    title: `${article.title} | Mini-blog Tech`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
    },
  };
}

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default function ArticlePage({ params }) {
  const article = articles.find((article) => article.slug === params.slug);
  
  if (!article) {
    notFound();
  }
  
  // Trouver des articles similaires de la même catégorie (si disponible)
  const relatedArticles = articles
    .filter(a => a.slug !== article.slug && a.category === article.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-8 pb-16">
        <article className="max-w-4xl mx-auto px-4">
          {/* Fil d'Ariane */}
          <div className="mb-6 text-sm">
            <Link href="/" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
              Accueil
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/articles" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
              Articles
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-700 dark:text-gray-300">{article.title}</span>
          </div>
          
          {/* En-tête d'article */}
          <header className="mb-8">
            {article.category && (
              <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium px-3 py-1 rounded-full mb-4">
                {article.category}
              </span>
            )}
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-gray-500 dark:text-gray-400 text-sm mb-6">
              {article.date && (
                <div className="flex items-center mr-6 mb-2">
                  <Calendar size={16} className="mr-1" />
                  <span>{article.date}</span>
                </div>
              )}
              
              {article.readTime && (
                <div className="flex items-center mb-2">
                  <Clock size={16} className="mr-1" />
                  <span>{article.readTime} min de lecture</span>
                </div>
              )}
            </div>
          </header>
          
          {/* Contenu de l'article */}
          <div className="prose dark:prose-invert prose-blue max-w-none mb-10">
            {article.content.split('\n\n').map((paragraph, index) => {
              // Traitement pour les listes à puces
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('- ').filter(item => item.trim() !== '');
                return (
                  <ul key={index} className="list-disc pl-5 mb-4">
                    {items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item.trim()}</li>
                    ))}
                  </ul>
                );
              }
              
              // Traitement pour les listes numérotées
              else if (paragraph.match(/^\d+\. /)) {
                const items = paragraph.split(/\d+\. /).filter(item => item.trim() !== '');
                return (
                  <ol key={index} className="list-decimal pl-5 mb-4">
                    {items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item.trim()}</li>
                    ))}
                  </ol>
                );
              }
              
              // Paragraphe normal
              return <p key={index}>{paragraph}</p>;
            })}
          </div>
          
          {/* Actions de partage */}
          <div className="flex items-center justify-between border-t border-b dark:border-gray-700 py-4 mb-10">
            <Link href="/" className="flex items-center text-blue-600 dark:text-blue-400 hover:underline">
              <ChevronLeft size={16} className="mr-1" />
              Retour à l'accueil
            </Link>
            
            <div className="flex items-center">
              <span className="mr-3 text-gray-600 dark:text-gray-300">Partager:</span>
              <div className="flex space-x-2">
                <button 
                  onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(article.title)}`, '_blank')}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Partager sur Twitter"
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                </button>
                <button 
                  onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Partager sur Facebook"
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
                </button>
                <button 
                  onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(article.title + ' ' + window.location.href)}`, '_blank')}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Partager sur WhatsApp"
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </button>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Lien copié !");
                  }}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Copier le lien"
                >
                  <Share2 size={16} />
                </button>
              </div>
            </div>
          </div>
          
          {/* Articles connexes */}
          {relatedArticles.length > 0 && (
            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
                Articles connexes
              </h3>
              <div className="grid gap-6 md:grid-cols-3">
                {relatedArticles.map(article => (
                  <div key={article.slug} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
                    <div className="p-4">
                      {article.category && (
                        <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium px-2 py-0.5 rounded-full mb-2">
                          {article.category}
                        </span>
                      )}
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        {article.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <Link 
                        href={`/articles/${article.slug}`} 
                        className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
                      >
                        Lire l'article
                      </Link>
                    </div>
                  </div>
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