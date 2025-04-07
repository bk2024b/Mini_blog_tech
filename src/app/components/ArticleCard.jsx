import Link from "next/link";

export default function ArticleCard({ title, excerpt, slug }) {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white transition-transform duration-300 hover:scale-105 hover:shadow-lg h-full flex flex-col">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600 mb-4 grow">{excerpt}</p>
      <Link href={`/articles/${slug}`} className="text-blue-500 hover:underline mt-auto">
        Lire plus →
      </Link>
    </div>
  );
}