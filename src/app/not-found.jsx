// src/app/not-found.jsx
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-100 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
            Page non trouvée
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Link 
            href="/" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Retour à l'accueil
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}