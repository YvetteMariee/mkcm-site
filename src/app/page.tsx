import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/animated-section";

const stats = [
  { value: "120+", label: "missions pilotées" },
  { value: "35", label: "experts mobilisables" },
  { value: "98%", label: "satisfaction projet" },
  { value: "4.8/5", label: "note moyenne clients" },
];

const pillars = [
  {
    title: "Conseil IT stratégique",
    text: "Audit de maturité, feuille de route SI et gouvernance pour aligner vos investissements technologiques sur vos priorités métiers.",
  },
  {
    title: "Ingénierie numérique",
    text: "Conception de solutions digitales, modernisation applicative et optimisation des flux avec un haut niveau d'exigence opérationnelle.",
  },
  {
    title: "Conduite du changement",
    text: "Accompagnement des équipes, pilotage de la transformation et transfert de compétences pour garantir l'adoption et l'impact.",
  },
];

const steps = [
  {
    id: "01",
    title: "Cadrer",
    text: "Analyse de l'existant, des enjeux et des contraintes afin de définir un plan d'action réaliste et mesurable.",
  },
  {
    id: "02",
    title: "Concevoir",
    text: "Choix d'architecture, standards techniques et trajectoire de delivery adaptés à votre contexte organisationnel.",
  },
  {
    id: "03",
    title: "Exécuter",
    text: "Pilotage de la mise en œuvre avec points de contrôle réguliers, indicateurs de performance et amélioration continue.",
  },
];

const sectors = ["Services financiers", "Industrie", "E-commerce", "Santé", "Secteur public", "Éducation"];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-dark pb-16 pt-24 text-white md:pb-20">
        <div className="absolute -right-24 top-8 h-72 w-72 rounded-full bg-brand-orange/30 blur-3xl" />
        <div className="absolute left-[-80px] top-1/3 h-52 w-52 rounded-full bg-white/10 blur-3xl" />

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <AnimatedSection>
            <p className="text-sm uppercase tracking-[0.2em] text-brand-orange">
              Consulting IT • Ingénierie Numérique
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">
              Construisez une trajectoire digitale fiable, durable et performante.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/80 md:text-lg">
              Nous accompagnons les entreprises dans la conception et l'exécution de programmes
              technologiques à fort impact, du cadrage stratégique au déploiement opérationnel.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#e97312]"
              >
                Découvrir nos services
              </Link>
              <Link
                href="/it-consulting"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
              >
                Notre approche conseil
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <Image
              src="/illustrations/hero.svg"
              alt="Équipe de consulting IT"
              width={640}
              height={500}
              className="mx-auto w-full max-w-xl"
              priority
            />
          </AnimatedSection>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, i) => (
            <AnimatedSection key={item.label} delay={0.07 * i}>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-center">
                <p className="text-2xl font-semibold text-brand-orange">{item.value}</p>
                <p className="mt-1 text-sm text-white/80">{item.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <AnimatedSection>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">Expertises</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight">
            Une proposition de valeur claire pour vos enjeux IT
          </h2>
        </AnimatedSection>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <AnimatedSection key={pillar.title} delay={0.08 * i}>
              <article className="h-full rounded-2xl border border-brand-dark/10 bg-white p-7 shadow-soft">
                <h3 className="text-xl font-semibold">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-7 text-brand-slate">{pillar.text}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="bg-white/80 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">Méthodologie</p>
            <h2 className="mt-3 text-3xl font-semibold">Un cadre d'intervention structuré</h2>
          </AnimatedSection>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <AnimatedSection key={step.id} delay={0.1 * i}>
                <div className="rounded-2xl border border-brand-dark/10 bg-brand-light p-7">
                  <p className="text-sm font-semibold text-brand-orange">{step.id}</p>
                  <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-brand-slate">{step.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <AnimatedSection>
          <div className="rounded-3xl bg-brand-dark px-8 py-10 text-white md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">Secteurs adressés</p>
              <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
                Une expertise applicable à de multiples environnements.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/80">
                Nos interventions s'adaptent à la culture et aux contraintes de chaque organisation,
                de la PME innovante au grand compte multisite.
              </p>
            </div>
            <Link
              href="/nous"
              className="mt-6 inline-flex rounded-full border border-white/30 px-6 py-3 text-sm font-semibold transition hover:bg-white/10 md:mt-0"
            >
              Découvrir l'équipe
            </Link>
          </div>
        </AnimatedSection>

        <div className="mt-8 flex flex-wrap gap-3">
          {sectors.map((sector, idx) => (
            <AnimatedSection key={sector} delay={idx * 0.04}>
              <span className="inline-flex rounded-full border border-brand-dark/20 bg-white px-4 py-2 text-sm text-brand-slate">
                {sector}
              </span>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
