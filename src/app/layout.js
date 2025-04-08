
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mini-blog Tech - Josias Boco",
  description: "Blog tech moderne créé par Josias Boco avec Next.js et Tailwind CSS",
  keywords: "next.js, tailwind, bénin, développeur web, blog tech",
  authors: [{ name: "Josias Boco" }],
  openGraph: {
    title: "Mini-blog Tech - Josias Boco",
    description: "Blog tech moderne créé par Josias Boco avec Next.js et Tailwind CSS",
    url: "https://miniblog-tech.josiasboco.com",
    siteName: "Mini-Blog Tech",
    locale: "fr-FR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}