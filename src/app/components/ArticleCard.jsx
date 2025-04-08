import Image from "next/image";
import Link from "next/link";

export default function ArticleCard({ title, excerpt, slug, date, readTime, category }) {
  // Format date if available
  const formattedDate = date ? new Date(date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }) : null;

  return (
    <div className="p-5 border border-gray-200 rounded-xl shadow-md bg-white dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 hover:scale-102 hover:shadow-lg h-full flex flex-col">
      <div className="mb-4 relative h-48 w-full rounded-lg overflow-hidden">
        <Image 
          src={`/images/articles/${slug}.jpg`} 
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          // Meilleure gestion de l'erreur
          onError={(e) => {
            e.currentTarget.src = "/images/default-article.jpg";
            e.currentTarget.onerror = null; // Évite les boucles d'erreur
          }}
        />
        <div className="absolute top-2 left-2">
          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
            {category || "Tech"}
          </span>
        </div>
      </div>
      
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 line-clamp-2">{title}</h2>
      
      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mt-2 mb-3">
        {formattedDate && <span className="mr-3">{formattedDate}</span>}
        {readTime && <span>{readTime} min de lecture</span>}
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4 grow line-clamp-3">{excerpt}</p>
      
      <Link href={`/articles/${slug}`} className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium mt-auto inline-flex items-center group">
        Lire plus 
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
    </div>
  );
}