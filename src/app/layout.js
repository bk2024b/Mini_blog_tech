import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";
import { Analytics } from "./components/Analytics";

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
  description: "Blog tech moderne créé par Josias Boco avec Next.js et Tailwind CSS pour les entrepreneurs et développeurs béninois",
  keywords: "next.js, tailwind, bénin, développeur web, blog tech, cotonou, porto-novo, entrepreneuriat numérique",
  authors: [{ name: "Josias Boco", url: "https://josiasboco.com" }],
  creator: "Josias Boco",
  publisher: "Josias Boco",
  openGraph: {
    title: "Mini-blog Tech - Josias Boco",
    description: "Blog tech moderne créé par Josias Boco avec Next.js et Tailwind CSS pour les entrepreneurs et développeurs béninois",
    url: "https://miniblog-tech.josiasboco.com",
    siteName: "Mini-Blog Tech",
    locale: "fr-FR",
    type: "website",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Mini-blog Tech - Josias Boco"
    }]
  },
  twitter: {
    card: "summary_large_image",
    creator: "@josiasboco",
    images: "/og-image.png"
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}