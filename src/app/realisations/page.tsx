import CTAButton from "../../components/ui/CTAButton";
import InfoCard from "../../components/ui/InfoCard";
import Section from "../../components/ui/Section";

export const metadata = {
  title: "Réalisations – MKCM Consult",
  description: "Découvrez quelques projets et réalisations de MKCM Consult."
};

export default function RealisationsPage() {
  return (
    <main>
      <Section
        eyebrow="Réalisations"
        title="Des résultats concrets, adaptés à chaque client."
        description="Quelques exemples de missions pour illustrer notre approche orientée performance."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <InfoCard
            title="Refonte site vitrine"
            description="Message clarifié, navigation simplifiée, +32% de demandes."
            icon="📈"
          />
          <InfoCard
            title="Plateforme B2B"
            description="Parcours client raccourci, gain de temps opérationnel."
            icon="🧭"
          />
          <InfoCard
            title="Identité digitale"
            description="Positionnement renforcé et cohérence multi‑supports."
            icon="🎨"
          />
        </div>
        <div className="pt-4">
          <CTAButton href="/contact" label="Demander un exemple" />
        </div>
      </Section>
    </main>
  );
}
