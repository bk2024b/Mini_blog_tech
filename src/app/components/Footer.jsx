export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-6 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">© {currentYear} Josias Boco - Mini-Blog Tech</p>
          <div className="flex space-x-4">
            <a href="https://github.com/josiasboco" className="hover:text-blue-300">GitHub</a>
            <a href="https://linkedin.com/in/josiasboco" className="hover:text-blue-300">LinkedIn</a>
            <a href="mailto:josiasboco@gmail.com" className="hover:text-blue-300">Contact</a>
          </div>
        </div>
        <p className="text-sm text-gray-400 mt-4 text-center">Fait avec ❤️ en utilisant Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}
