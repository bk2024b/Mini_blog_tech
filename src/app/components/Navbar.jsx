import Link from "next/link"


export default function Navbar() {
    return (
        <nav className="bg-blue-700 text-white p-4 sticky top-0 shadow-md">
            <div className="max-w-4xl mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">Mini-Blog Tech</Link>
                <div className="space-x-6">
                    <Link href="/" className="hover:text-blue-200">Accueil</Link>
                    <Link href="/about" className="hover:text-blue-200">A propos</Link>
                </div>
            </div>
        </nav>
    );
}