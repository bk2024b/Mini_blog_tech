// app/components/NewsletterSignup.jsx
"use client";
import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // null, "success", "error"
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simuler une requête API
    setTimeout(() => {
      if (email.includes("@") && email.includes(".")) {
        setStatus("success");
      } else {
        setStatus("error");
      }
      setLoading(false);
    }, 1000);
  };
  
  return (
    <div className="bg-blue-700 dark:bg-blue-900 text-white p-8 rounded-lg shadow-lg text-center">
      <h3 className="text-2xl font-bold mb-2">Restez informé</h3>
      <p className="mb-6">Recevez nos derniers articles et conseils tech directement dans votre boîte mail.</p>
      
      {status === "success" ? (
        <div className="bg-green-600 text-white p-4 rounded-md">
          <p>Merci de vous être inscrit à notre newsletter!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre email"
            className="flex-grow px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-white text-blue-700 px-6 py-2 rounded-md hover:bg-gray-100 transition-colors disabled:bg-gray-300"
          >
            {loading ? "Inscription..." : "S'inscrire"}
          </button>
        </form>
      )}
      
      {status === "error" && (
        <div className="text-red-300 mt-2">
          <p>Veuillez entrer une adresse email valide.</p>
        </div>
      )}
    </div>
  );
}
