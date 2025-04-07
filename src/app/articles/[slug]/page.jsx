import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";

export default function () {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Navbar />
            <main className="max-w-4xl mx-auto p-6 flex-grow">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    {ArticleCard.title}
                </h1>
                <p className="text-gray-700 leading-relaxed mb-6">{ArticleCard.content}</p>
                <Link href="/" className="text-blue-500 hover:underline">
                    Retour à l'accueil
                </Link>
            </main>
            <Footer />
        </div>
    );
}

export async function getStaticPaths() {
    const paths = [
        { params: { slug: "pourquoi-next-js-est-l-avenir" } },
        { params: { slug: "seo-pour-entrepreneurs-locaux" } },
        { params: { slug: "coder-offline-au-benin" } },
    ];
    return { paths, fallblack: false };
}

export async function getStaticProps({ params }) {
    const articles = {
        "pourquoi-next-js-est-l-avenir": {
            title: "Pourquoi Next.js est l'avenir",
            content:
                "Next.js est un framework révolutionnaire qui combine rendu statique et serveur pour des performances optimales. Au Bénin, où la connexion internet peut être instable, il permet de créer des sites rapides et accessibles. Avec son routage intégré et son optimisations d'images, c'est l'outil idéal pour les développeurs modernes. "
        },
        "seo-pour-entrepreneurs-locaux": {
            title: "SEO pour entrepreneurs locaux",
            content:
                "Le SEO est crucial pour se démarquer en ligne, même au Bénin. En ciblant des mots-clés comme Cotonou business ou developpeur web Porto-Novo les entrepreneurs peuvent attirer des clients locaux. Une structure claire, des balises meta et du contenu pertinent sont les clés."
        },
        "coder-offline-au-benin": {
            title: "Coder offline au Bénin",
            content:
                "Avec une connexion limitée, coder offline devient une compétence essentielle. J'utilise VS Code avec la doc téléchargée et Next.js pour structurer mes projets en locals. Les cybercafés servent juste pour l'upload. Voici mes astuces pour rester productif."
        },
    };
    return { props: { article: articles[params.slug] } };
}