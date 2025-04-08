import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Mini-blog Tech - Josias Boco",
    template: "%s | Mini-blog Tech - Josias Boco",
  },
  description: "Blog tech moderne créé par Josias Boco avec Next.js et Tailwind CSS",
  keywords: ["next.js", "tailwind", "bénin", "développeur web", "blog tech", "Josias Boco"],
  authors: [{ name: "Josias Boco", url: "https://linkedin.com/in/josiasboco" }],
  creator: "Josias Boco",
  openGraph: {
    title: "Mini-blog Tech - Josias Boco",
    description: "Blog tech moderne créé par Josias Boco avec Next.js et Tailwind CSS",
    url: "https://miniblog-tech.josiasboco.com",
    siteName: "Mini-Blog Tech",
    locale: "fr-FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}