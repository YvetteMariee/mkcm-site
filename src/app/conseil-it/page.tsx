import Image from "next/image";
import AnimatedSection from "../../components/AnimatedSection";
import { AnimatedList, AnimatedListItem } from "../../components/AnimatedList";

export const metadata = {
  title: "Conseil IT | Gouvernance et pilotage numérique",
  description:
    "Approche MKCM Consulting pour structurer la gouvernance IT, sécuriser les décisions et piloter les projets numériques.",
};

const consultingPillars = [
  {
    title: "Diagnostic 360°",
    text: "Analyse des systèmes, des flux et des risques pour établir un état des lieux clair.",
  },
  {
    title: "Gouvernance & conformité",
    text: "Cadres de décision, indicateurs de suivi et alignement avec vos obligations.",
  },
  {
    title: "Feuille de route",
    text: "Plan d'action priorisé avec budgets, dépendances et livrables définis.",
  },
];

const deliverables = [
  "Rapport d'audit IT détaillé",
  "Recommandations priorisées",
  "Plan de transformation numérique",
  "Supports de soutenance ou comité",
];

export default function ConseilItPage() {
  return (
    <main>
      <AnimatedSection subtitle="Conseil IT" title="Structurer vos décisions numériques">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-4 text-slate-600">
            <p className="text-base leading-relaxed">
              Nous accompagnons les organisations dans la clarification de leurs
              priorités IT. Notre approche est pensée pour être facilement
              compréhensible par un jury académique ou par un comité de
              direction.
            </p>
            <p className="text-base leading-relaxed">
              Chaque mission se conclut par des livrables structurés : diagnostic
              détaillé, recommandations et plan d'exécution.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <Image
              src="/illustrations/mission.svg"
              alt="Réunion de cadrage IT"
              width={420}
              height={320}
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        tone="muted"
        subtitle="Axes de mission"
        title="Ce que couvre le conseil IT"
      >
        <AnimatedList className="grid gap-6 md:grid-cols-3">
          {consultingPillars.map((pillar) => (
            <AnimatedListItem
              key={pillar.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-base font-semibold text-brand-900">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{pillar.text}</p>
            </AnimatedListItem>
          ))}
        </AnimatedList>
      </AnimatedSection>

      <AnimatedSection subtitle="Livrables" title="Des documents prêts pour validation">
        <AnimatedList className="grid gap-4 sm:grid-cols-2">
          {deliverables.map((item) => (
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
