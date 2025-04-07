import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <main className="max-w-4xl mx-auto p-6 flex-grow">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">À propos</h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          Je suis Josias Boco, étudiant en Génie Électrique et Informatique au Bénin. 
          Passionné par la technologie et l'entrepreneuriat numérique, je crée des 
          solutions web rapides et modernes avec Next.js et Tailwind CSS. Ce blog 
          est une démo de mes compétences, conçue pour inspirer et aider les entrepreneurs locaux.
        </p>
        <p className="text-gray-700">
          Contactez-moi : <a href="https://wa.me/22940545270" className="text-blue-500 hover:underline">+229 40 54 52 70</a> | 
          <a href="mailto:josiasboco@gmail.com" className="text-blue-500 hover:underline ml-1">josiasboco@gmail.com</a>
        </p>
      </main>
      <Footer />
    </div>
  );
}