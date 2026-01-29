import { Inter } from "next/font/google";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-[#071221] text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
