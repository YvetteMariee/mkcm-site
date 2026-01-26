import CTAButton from "../../components/ui/CTAButton";
import InfoCard from "../../components/ui/InfoCard";
import Section from "../../components/ui/Section";

export const metadata = {
  title: "Notre méthode – MKCM Consult",
  description: "Une méthode claire, structurée et efficace pour vos projets numériques."
};

export default function MethodePage() {
  return (
    <main>
      <Section
        eyebrow="Méthode"
        title="Un process simple, rassurant et professionnel."
        description="Nous avançons par étapes courtes pour sécuriser votre projet : cadrer, concevoir, livrer."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <InfoCard
            title="Cadrer"
            description="Clarification des objectifs, des contraintes et des indicateurs de succès."
            icon="🧩"
          />
          <InfoCard
            title="Concevoir"
            description="Proposition claire, maquettes validées et priorités alignées."
            icon="🧠"
          />
          <InfoCard
            title="Livrer"
            description="Mise en ligne rapide, vérifications, accompagnement post‑lancement."
            icon="🚀"
          />
        </div>
        <div className="pt-4">
          <CTAButton href="/contact" label="Lancer un projet" />
        </div>
      </Section>
    </main>
  );
}
