import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Navbar />
            <main className="max-w-4xl mx-auto p-6 flex-grow">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">A propos</h1>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Je suis Josias Boco, étudiant en Génie Electrique et Informatique au Bénin. Passionné par la technologie et l'entrepreneuriat numérique, je crée des solutions web rapides et modernes avec Next.js et Tailwind CSS. Ce blog est une démo de mes compétences, conçue pour inspirer et aider les entrepreneurs locaux.
                </p>
                <p className="text-gray-700">Contactez-moi : +22940545270 {/* whatsapp */} | josiasboco@gmail.com</p>
            </main>
        </div>
    );
}