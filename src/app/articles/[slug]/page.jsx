import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { articles } from "@/app/page";
import { notFound } from "next/navigation";

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

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <main className="max-w-4xl mx-auto p-6 flex-grow">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {article.title}
        </h1>
        <p className="text-gray-700 leading-relaxed mb-6">{article.content}</p>
        <Link href="/" className="text-blue-500 hover:underline">
          Retour à l'accueil
        </Link>
      </main>
      <Footer />
    </div>
  );
}