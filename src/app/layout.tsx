import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "MKCM Consulting | IT & Ingénierie Numérique",
    template: "%s | MKCM Consulting",
  },
  description:
    "Site vitrine professionnel en consulting IT et ingénierie numérique : services, IT consulting, formation, carrière et présentation de l'équipe.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
