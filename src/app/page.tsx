import Hero from "../components/Hero";
import Services from "../components/services";
import Process from "../components/process";
import Contact from "../components/contact";

export const metadata = {
  title: "MKCM Consulting Services – Conseil digital & sites web",
  description:
    "MKCM accompagne les PME et équipes ambitieuses avec des sites web clairs, rapides et rentables.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Process />
      <Contact />
    </main>
  );
}
