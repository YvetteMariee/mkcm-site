import Image from "next/image";
import AnimatedSection from "../../components/AnimatedSection";
import { AnimatedList, AnimatedListItem } from "../../components/AnimatedList";

export const metadata = {
  title: "Opportunités | Partenariats & collaborations",
  description:
    "Découvrez les opportunités de collaboration avec MKCM Consulting : projets académiques, partenariats et missions IT.",
};

const opportunities = [
  {
    title: "Partenariats académiques",
    text: "Co-construction de projets, accompagnement de mémoires et support méthodologique.",
  },
  {
    title: "Missions de conseil",
    text: "Renfort ponctuel pour audits, cadrage et transformation numérique.",
  },
  {
    title: "Développement collaboratif",
    text: "Mise en place d'équipes mixtes pour accélérer les livrables critiques.",
  },
];

const collaborationBenefits = [
  "Cadre de gouvernance et reporting",
  "Livrables prêts pour validation",
  "Expertise IT multi-sectorielle",
  "Support pédagogique et méthodologique",
];

export default function OpportunitesPage() {
  return (
    <main>
      <AnimatedSection
        subtitle="Opportunités"
        title="Collaborons sur des projets à fort impact"
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-4 text-slate-600">
            <p className="text-base leading-relaxed">
              MKCM Consulting s'associe à des institutions académiques, des
              incubateurs et des entreprises pour sécuriser des projets IT
              stratégiques. Nous apportons un cadre méthodologique clair et des
              livrables prêts à être évalués.
            </p>
            <p className="text-base leading-relaxed">
              Nos opportunités privilégient la rigueur, la transparence et la
              montée en compétences des parties prenantes.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <Image
              src="/illustrations/stat-web.svg"
              alt="Collaboration IT"
              width={420}
              height={320}
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection tone="muted" subtitle="Axes" title="Domaines ouverts à collaboration">
        <AnimatedList className="grid gap-6 md:grid-cols-3">
          {opportunities.map((item) => (
            <AnimatedListItem
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-base font-semibold text-brand-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{item.text}</p>
            </AnimatedListItem>
          ))}
        </AnimatedList>
      </AnimatedSection>

      <AnimatedSection subtitle="Valeur ajoutée" title="Pourquoi collaborer avec nous ?">
        <AnimatedList className="grid gap-4 sm:grid-cols-2">
          {collaborationBenefits.map((item) => (
            <AnimatedListItem
              key={item}
              className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm"
            >
              {item}
            </AnimatedListItem>
          ))}
        </AnimatedList>
      </AnimatedSection>
    </main>
  );
}
