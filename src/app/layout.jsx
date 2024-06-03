import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Speed Structural",
  description: "App Web creada para optimizar el tiempo de cálculo de tuPredimensionamiento y metrado de cargas para el análisis y diseño sísmico. Speed Structural, tiene como finalidad optimizar el tiempo de cálculo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="predimensionamiento, metrado de cargas, diseño sísmico, optimización de cálculo, Speed Structural" />
        <meta name="author" content="Barreto Rodriguez Darli Wilson" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://speedstructural.vercel.app/" />
        <link rel="canonical" href="https://speedstructural.vercel.app/" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
