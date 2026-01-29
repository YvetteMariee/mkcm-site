import Image from "next/image";
import Hero from "../components/Hero";
import ServicesOverview from "../components/services";
import AnimatedSection from "../components/AnimatedSection";
import CTA from "../components/contact";
import { AnimatedList, AnimatedListItem } from "../components/AnimatedList";

export const metadata = {
  title: "MKCM Consulting | Conseil IT & développement applicatif",
  description:
    "Cabinet de conseil IT spécialisé en stratégie numérique, développement applicatif et accompagnement académique.",
};

const focusAreas = [
  {
    title: "Audit & diagnostic",
    text: "Cartographier l'existant, identifier les risques et prioriser les actions.",
  },
  {
    title: "Cadrage de projet",
    text: "Structurer les objectifs, le budget et les exigences fonctionnelles.",
  },
  {
    title: "Déploiement sécurisé",
    text: "Mettre en production avec une documentation complète et un plan de suivi.",
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesOverview />
      <AnimatedSection
        title="Un partenaire solide pour vos livrables"
        subtitle="Méthode"
        tone="muted"
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-4 text-slate-600">
            <p className="text-base leading-relaxed">
              Nous combinons expertise IT, pédagogie et rigueur documentaire.
              Cela garantit des résultats crédibles, des livrables clairs et une
              valeur immédiate pour vos équipes.
            </p>
            <AnimatedList className="grid gap-4 sm:grid-cols-2">
              {focusAreas.map((item) => (
                <AnimatedListItem
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <h3 className="text-sm font-semibold text-brand-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{item.text}</p>
                </AnimatedListItem>
              ))}
            </AnimatedList>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <Image
              src="/illustrations/services-hero.svg"
              alt="Atelier de cadrage IT"
              width={420}
              height={320}
              className="h-auto w-full rounded-2xl"
            />
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <div className="font-semibold text-brand-900">Livrables clés</div>
              <ul className="space-y-1">
                <li>• Note de cadrage et plan d'actions</li>
                <li>• Architecture applicative + schémas</li>
                <li>• Support de soutenance et annexes</li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection tone="muted">
        <CTA
          title="Obtenez un cadrage précis de votre prochain projet."
          description="Un échange rapide suffit pour clarifier vos objectifs, définir un format de collaboration et préparer des livrables académiquement solides."
        />
      </AnimatedSection>
    </main>
  );
}
