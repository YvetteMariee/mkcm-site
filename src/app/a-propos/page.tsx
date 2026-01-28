import Image from "next/image";
import AnimatedSection from "../../components/AnimatedSection";
import { AnimatedList, AnimatedListItem } from "../../components/AnimatedList";

export const metadata = {
  title: "À propos | MKCM Consulting",
  description:
    "Découvrez l'approche MKCM Consulting : rigueur, méthode et accompagnement IT pour des projets crédibles.",
};

const values = [
  {
    title: "Clarté",
    text: "Des messages simples et des livrables facilement exploitables.",
  },
  {
    title: "Fiabilité",
    text: "Documentation complète et validation continue des hypothèses.",
  },
  {
    title: "Transmission",
    text: "Formation et accompagnement pour rendre vos équipes autonomes.",
  },
];

const credibilityItems = [
  "Méthodologie documentée",
  "Livrables et annexes prêtes à être soutenues",
  "Traçabilité des décisions",
  "Accompagnement personnalisé",
];

export default function AProposPage() {
  return (
    <main>
      <AnimatedSection
        subtitle="À propos"
        title="Un cabinet IT orienté rigueur et pédagogie"
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-4 text-slate-600">
            <p className="text-base leading-relaxed">
              MKCM Consulting est un cabinet dédié au conseil IT, au développement
              applicatif et à la formation. Nous intervenons sur des projets
              nécessitant une approche claire, méthodique et crédible.
            </p>
            <p className="text-base leading-relaxed">
              Notre équipe combine expertise technique, pédagogie et expérience
              terrain pour livrer des solutions prêtes à être défendues devant un
              jury ou un comité de direction.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <Image
              src="/illustrations/mission.svg"
              alt="Équipe MKCM Consulting"
              width={420}
              height={320}
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        tone="muted"
        subtitle="Nos valeurs"
        title="Ce qui guide nos interventions"
      >
        <AnimatedList className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <AnimatedListItem
              key={value.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-base font-semibold text-brand-900">
                {value.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{value.text}</p>
            </AnimatedListItem>
          ))}
        </AnimatedList>
      </AnimatedSection>

      <AnimatedSection
        subtitle="Crédibilité"
        title="Une approche pensée pour la validation"
      >
        <AnimatedList className="grid gap-4 sm:grid-cols-2">
          {credibilityItems.map((item) => (
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
