import Image from "next/image";
import AnimatedSection from "../../components/AnimatedSection";
import { AnimatedList, AnimatedListItem } from "../../components/AnimatedList";

export const metadata = {
  title: "Formation | Transfert de compétences IT",
  description:
    "Programmes de formation IT pour équipes académiques et professionnelles : gestion de projet, architecture et outils numériques.",
};

const trainingModules = [
  {
    title: "Gestion de projet IT",
    text: "Méthodes agiles, livrables et pilotage des risques.",
  },
  {
    title: "Architecture applicative",
    text: "Comprendre les composants, les flux et la sécurité applicative.",
  },
  {
    title: "Culture data & reporting",
    text: "Structurer les indicateurs et préparer des supports exploitables.",
  },
  {
    title: "UX pour décideurs",
    text: "Construire des parcours clairs et accessibles pour les utilisateurs.",
  },
];

const sessionItems = [
  "Support pédagogique structuré",
  "Ateliers et cas pratiques",
  "Synthèse de session",
  "Feuille de route de mise en œuvre",
];

export default function FormationPage() {
  return (
    <main>
      <AnimatedSection subtitle="Formation" title="Des formations IT orientées pratique">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-4 text-slate-600">
            <p className="text-base leading-relaxed">
              Nos modules de formation sont conçus pour être utilisés dans un
              cadre académique ou professionnel. Chaque session comprend des
              supports pédagogiques, des exercices et des synthèses exploitables.
            </p>
            <p className="text-base leading-relaxed">
              Les contenus peuvent être adaptés aux exigences d'un mémoire, d'un
              projet de fin d'études ou d'un programme de montée en compétences.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <Image
              src="/illustrations/objectives.svg"
              alt="Session de formation IT"
              width={420}
              height={320}
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection tone="muted" subtitle="Modules" title="Modules principaux">
        <AnimatedList className="grid gap-6 md:grid-cols-2">
          {trainingModules.map((module) => (
            <AnimatedListItem
              key={module.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-base font-semibold text-brand-900">
                {module.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{module.text}</p>
            </AnimatedListItem>
          ))}
        </AnimatedList>
      </AnimatedSection>

      <AnimatedSection subtitle="Format" title="Ce que comprend chaque session">
        <AnimatedList className="grid gap-4 sm:grid-cols-2">
          {sessionItems.map((item) => (
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
