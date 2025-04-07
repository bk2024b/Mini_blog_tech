import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4 sticky top-0 shadow-md z-10">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link href="/" className="text-2xl font-bold mb-4 md:mb-0">Mini-Blog Tech</Link>
        <div className="space-x-6">
          <Link href="/" className="hover:text-blue-200 transition-colors">Accueil</Link>
          <Link href="/about" className="hover:text-blue-200 transition-colors">À propos</Link>
        </div>
      </div>
    </nav>
  );
}