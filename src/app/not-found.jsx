import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-blue-700 mb-2">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page non trouvée</h2>
          <p className="text-gray-600 mb-6">La page que vous recherchez n'existe pas ou a été déplacée.</p>
          <Link href="/" className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors">
            Retour à l'accueil
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
