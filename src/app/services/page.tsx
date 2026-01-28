import Image from "next/image";
import AnimatedSection from "../../components/AnimatedSection";
import { AnimatedList, AnimatedListItem } from "../../components/AnimatedList";

export const metadata = {
  title: "Services IT | Conseil, développement et delivery",
  description:
    "Présentation des services MKCM Consulting : conseil IT, développement applicatif, UX et accompagnement documentaire.",
};

const serviceBlocks = [
  {
    title: "Conseil stratégique IT",
    text: "Audit, gouvernance, alignement des besoins métier et planification des investissements numériques.",
    icon: "/illustrations/service-web.svg",
  },
  {
    title: "Développement applicatif",
    text: "Applications web et mobiles fiables, documentées et alignées sur vos contraintes académiques ou métier.",
    icon: "/illustrations/service-mobile.svg",
  },
  {
    title: "UX & design systems",
    text: "Interfaces sobres, parcours clairs et composants réutilisables pour gagner en cohérence.",
    icon: "/illustrations/service-ui.svg",
  },
  {
    title: "Conduite du changement",
    text: "Communication, documentation et supports de formation pour une adoption rapide.",
    icon: "/illustrations/service-ux.svg",
  },
];

const deliverySteps = [
  {
    title: "Analyse",
    text: "Collecte des besoins, cadrage et priorisation des exigences critiques.",
  },
  {
    title: "Conception",
    text: "Architecture, maquettes et plan de delivery avec jalons validés.",
  },
  {
    title: "Réalisation",
    text: "Développement, tests et revue qualité pour sécuriser la mise en œuvre.",
  },
  {
    title: "Transfert",
    text: "Documentation complète et passation pour garantir l'autonomie des équipes.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <AnimatedSection subtitle="Services" title="Un accompagnement IT complet et structuré">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-4 text-slate-600">
            <p className="text-base leading-relaxed">
              Nous travaillons avec des organisations qui ont besoin d'un cadre
              rigoureux pour leurs projets numériques. Notre objectif : produire
              des livrables clairs, compréhensibles et défendables.
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-brand-500" />
                Roadmaps et scénarios de transformation digitale.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-brand-500" />
                Applications web ou mobiles pensées pour la pérennité.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-brand-500" />
                Documentation et supports de soutenance.
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <Image
              src="/illustrations/services-hero.svg"
              alt="Atelier de conseil IT"
              width={420}
              height={320}
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        tone="muted"
        subtitle="Expertises"
        title="Des expertises complémentaires"
      >
        <AnimatedList className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {serviceBlocks.map((block) => (
            <AnimatedListItem
              key={block.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <Image
                src={block.icon}
                alt=""
                width={56}
                height={56}
                className="h-12 w-12"
              />
              <h3 className="mt-4 text-base font-semibold text-brand-900">
                {block.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{block.text}</p>
            </AnimatedListItem>
          ))}
        </AnimatedList>
      </AnimatedSection>

      <AnimatedSection subtitle="Delivery" title="Notre rythme de production">
        <AnimatedList className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {deliverySteps.map((step, index) => (
            <AnimatedListItem
              key={step.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="text-sm font-semibold text-brand-600">
                0{index + 1}
              </div>
              <h3 className="mt-3 text-base font-semibold text-brand-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{step.text}</p>
            </AnimatedListItem>
          ))}
        </AnimatedList>
      </AnimatedSection>
    </main>
  );
}
