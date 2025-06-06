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
    <div className="group relative bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-slate-700">
      {/* Image container avec effet amélioré */}
      <div className="relative h-52 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <Image 
          src={`/images/articles/${slug}.png`} 
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxZTI5M2IiLz48L3N2Zz4="
        />
        
        {/* Category badge amélioré */}
        <div className="absolute top-3 left-3 z-20">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-600 text-white shadow-lg backdrop-blur-sm bg-opacity-90">
            {category || "Tech"}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-xl font-bold text-gray-100 line-clamp-2 mb-2 group-hover:text-blue-400 transition-colors">
          {title}
        </h2>
        
        <div className="flex items-center text-gray-400 text-xs mb-3">
          {formattedDate && (
            <span className="flex items-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {formattedDate}
            </span>
          )}
          
          {readTime && (
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {readTime} min
            </span>
          )}
        </div>
        
        <p className="text-gray-300 text-sm mb-4 flex-grow line-clamp-3">
          {excerpt}
        </p>
        
        <Link 
          href={`/articles/${slug}`} 
          className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 mt-auto transition-colors"
        >
          <span className="relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:origin-bottom-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 group-hover:after:origin-bottom-left group-hover:after:scale-x-100">
            Lire l'article
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}