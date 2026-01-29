import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { AnimatedList, AnimatedListItem } from "./AnimatedList";

const serviceCards = [
  {
    title: "Stratégie & gouvernance",
    text: "Diagnostic, priorisation et trajectoire numérique alignée avec vos objectifs académiques ou métier.",
    icon: "/illustrations/service-web.svg",
  },
  {
    title: "Applications sur mesure",
    text: "Conception et développement d'outils fiables, documentés et faciles à maintenir.",
    icon: "/illustrations/service-mobile.svg",
  },
  {
    title: "Expérience utilisateur",
    text: "Parcours sobres, interfaces accessibles et design system cohérent.",
    icon: "/illustrations/service-ui.svg",
  },
];

const approach = [
  {
    title: "Cadrage clair",
    desc: "Ateliers courts, objectifs validés, documentation structurée.",
  },
  {
    title: "Livrables concrets",
    desc: "Roadmap, architecture, prototypes et recommandations actionnables.",
  },
  {
    title: "Suivi rigoureux",
    desc: "Reporting continu, indicateurs fiables et transfert de compétences.",
  },
];

export default function ServicesOverview() {
  return (
    <AnimatedSection title="Des services pensés pour vos enjeux IT" subtitle="Expertise">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6 text-slate-600">
          <p className="text-base leading-relaxed">
            Nous intervenons comme partenaire de confiance pour vos missions de
            conseil IT, de formation et de développement applicatif. Chaque
            intervention est conçue pour être comprise, défendue et réutilisée
            dans un cadre académique ou professionnel.
          </p>
          <AnimatedList className="grid gap-4 sm:grid-cols-3">
            {approach.map((item) => (
              <AnimatedListItem
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-sm font-semibold text-brand-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </AnimatedListItem>
            ))}
          </AnimatedList>
        </div>
        <AnimatedList className="grid gap-4 sm:grid-cols-2">
          {serviceCards.map((card) => (
            <AnimatedListItem
              key={card.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <Image
                src={card.icon}
                alt=""
                width={56}
                height={56}
                className="h-12 w-12"
              />
              <h3 className="mt-4 text-base font-semibold text-brand-900">
                {card.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{card.text}</p>
            </AnimatedListItem>
          ))}
          <AnimatedListItem className="rounded-2xl border border-brand-200 bg-brand-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
              100% conseil
            </p>
            <p className="mt-3 text-sm text-slate-700">
              Des livrables clairs, adaptés à la validation académique et à la
              prise de décision en entreprise.
            </p>
          </AnimatedListItem>
        </AnimatedList>
      </div>
    </AnimatedSection>
  );
}
