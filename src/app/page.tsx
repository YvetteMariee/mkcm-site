import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/animated-section";

const stats = [
  { value: "120+", label: "missions pilotées" },
  { value: "35", label: "experts partenaires" },
  { value: "98%", label: "clients satisfaits" },
];

const pillars = [
  {
    title: "Conseil stratégique IT",
    text: "Audit, feuille de route, gouvernance SI et priorisation des initiatives pour aligner l'IT sur vos enjeux business.",
  },
  {
    title: "Ingénierie numérique",
    text: "Conception de plateformes, modernisation applicative et optimisation des processus avec des approches orientées performance.",
  },
  {
    title: "Accompagnement durable",
    text: "Transfert de compétences, pilotage du changement et suivi opérationnel pour garantir des résultats mesurables.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-dark pb-20 pt-24 text-white">
        <div className="absolute -right-24 top-8 h-72 w-72 rounded-full bg-brand-orange/30 blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <AnimatedSection>
            <p className="text-sm uppercase tracking-[0.2em] text-brand-orange">Consulting IT • Ingénierie Numérique</p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">
              Accélérez votre transformation digitale avec méthode.
            </h1>
            <p className="mt-6 max-w-xl text-base text-white/80 md:text-lg">
              MKCM accompagne les entreprises dans la définition, la conception et l&apos;exécution de programmes numériques performants.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/services" className="rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white">
                Découvrir nos services
              </Link>
              <Link href="/nous" className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold">
                En savoir plus
              </Link>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <Image src="/illustrations/hero.svg" alt="Transformation digitale" width={640} height={500} className="mx-auto w-full max-w-xl" priority />
          </AnimatedSection>
        </div>
        <div className="mx-auto mt-14 grid max-w-6xl gap-4 px-6 sm:grid-cols-3">
          {stats.map((item, i) => (
            <AnimatedSection key={item.label} delay={0.1 * i}>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-center">
                <p className="text-2xl font-semibold text-brand-orange">{item.value}</p>
                <p className="text-sm text-white/80">{item.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <AnimatedSection>
          <h2 className="text-3xl font-semibold">Une expertise transversale pour vos enjeux IT</h2>
        </AnimatedSection>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <AnimatedSection key={pillar.title} delay={0.1 * i}>
              <article className="h-full rounded-2xl border border-brand-dark/10 bg-white p-7 shadow-soft">
                <h3 className="text-xl font-semibold">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-6 text-brand-slate">{pillar.text}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
