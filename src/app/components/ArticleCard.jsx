import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export default function ArticleCard({ title, excerpt, slug, date, readTime, category }) {
  return (
    <div className="rounded-lg overflow-hidden border dark:border-gray-700 shadow-md bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] h-full flex flex-col">
      {/* Bannière de catégorie */}
      {category && (
        <div className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 text-xs font-medium">
          {category}
        </div>
      )}
      
      <div className="p-5 flex flex-col h-full">
        {/* Titre */}
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 line-clamp-2">
          {title}
        </h2>
        
        {/* Métadonnées */}
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
          {date && (
            <span className="flex items-center">
              <Calendar size={14} className="mr-1" />
              {date}
            </span>
          )}
          {readTime && (
            <span className="ml-4">{readTime} min de lecture</span>
          )}
        </div>
        
        {/* Extrait */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 grow line-clamp-3">
          {excerpt}
        </p>
        
        {/* Lien de lecture */}
        <Link 
          href={`/articles/${slug}`} 
          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium group flex items-center mt-auto"
        >
          Lire plus 
          <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}