import CTAButton from "../../components/ui/CTAButton";
import InfoCard from "../../components/ui/InfoCard";
import Section from "../../components/ui/Section";

export const metadata = {
  title: "À propos – MKCM Consult",
  description: "Découvrez MKCM Consult, sa vision et son expertise numérique."
};

export default function AProposPage() {
  return (
    <main>
      <Section
        eyebrow="Notre mission"
        title="Créer des solutions digitales utiles, mesurables et durables."
        description="Nous aidons les entreprises à clarifier leurs objectifs, structurer leur présence en ligne et livrer des expériences qui inspirent confiance."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <InfoCard
            title="Conseil stratégique"
            description="Un cadrage clair pour aligner vos objectifs, vos contraintes et vos résultats attendus."
            icon="🎯"
          />
          <InfoCard
            title="Design sobre"
            description="Des interfaces lisibles, crédibles et orientées conversion."
            icon="🧭"
          />
          <InfoCard
            title="Livraison rapide"
            description="Un déploiement fiable avec un accompagnement post-lancement."
            icon="⚡"
          />
        </div>
        <div className="pt-4">
          <CTAButton href="/contact" label="Parler de votre projet" />
        </div>
      </Section>
    </main>
  );
}
