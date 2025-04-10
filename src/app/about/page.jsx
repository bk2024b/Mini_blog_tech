// src/app/about/page.jsx
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "À propos | Mini-blog Tech",
  description: "En savoir plus sur Josias Boco et le Mini-blog Tech",
};

export default function About() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <Navbar />
      
      {/* En-tête de la page - Harmonisé avec la page Articles */}
      <main className="flex-grow pt-28 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-100 mb-8">
            À propos
          </h1>
          
          <div className="bg-slate-800 rounded-xl p-8 shadow-md border border-slate-700">
            <h2 className="text-2xl font-bold text-gray-100 mb-4">Qui suis-je?</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Je suis Josias Boco, étudiant en Génie Électrique et Informatique au Bénin. 
              Passionné par la technologie et l'entrepreneuriat numérique, je crée des 
              solutions web rapides et modernes avec Next.js et Tailwind CSS.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-100 mb-4">Ma mission</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Ce blog est une démo de mes compétences, conçue pour inspirer et aider les entrepreneurs 
              et développeurs béninois. Je partage des astuces et conseils adaptés au contexte local
              pour favoriser l'innovation technologique en Afrique francophone.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-100 mb-4">Contact</h2>
            <p className="text-gray-300 mb-2">
              Vous pouvez me contacter via:
            </p>
            <ul className="text-gray-300 mb-6">
              <li className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <a href="https://wa.me/22940545270" className="text-blue-400 hover:underline">+229 40 54 52 70</a>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:josiasboco@gmail.com" className="text-blue-400 hover:underline">josiasboco@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}