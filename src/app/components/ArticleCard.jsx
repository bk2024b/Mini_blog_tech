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
      {/* ... reste du contenu avec adaptations au mode sombre ... */}
    </div>
  );
}