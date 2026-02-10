import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/animated-section";

const stats = [
  { value: "120+", label: "projets logiciels livrés" },
  { value: "35", label: "experts full-stack & cloud" },
  { value: "98%", label: "satisfaction client" },
  { value: "24/7", label: "supervision et support" },
];

const pillars = [
  {
    title: "Développement web & apps",
    text: "Conception de plateformes front-end/back-end modernes, performantes et évolutives pour vos produits digitaux.",
    icon: "</>",
  },
  {
    title: "Cloud, DevOps & logiciels",
    text: "Industrialisation des déploiements, infrastructure cloud et automatisation pour accélérer vos cycles de livraison.",
    icon: "☁",
  },
  {
    title: "Cybersécurité & performance",
    text: "Sécurisation applicative, audit technique et optimisation continue pour garantir fiabilité et disponibilité.",
    icon: "🛡",
  },
];

const steps = [
  {
    id: "01",
    title: "Discovery technique",
    text: "Analyse de votre architecture, stack et enjeux métiers pour construire une roadmap IT claire.",
  },
  {
    id: "02",
    title: "Build & Design",
    text: "Développement et design d'interfaces modernes, API robustes et workflows automatisés.",
  },
  {
    id: "03",
    title: "Scale & Secure",
    text: "Mise en production maîtrisée, observabilité, cybersécurité et amélioration continue pilotée par KPI.",
  },
];

const techTags = ["React/Next.js", "Node.js", "TypeScript", "Cloud", "DevOps", "Cybersecurity", "UI/UX", "Data"];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-dark pb-16 pt-24 text-white md:pb-20">
        <div className="absolute -right-24 top-8 h-72 w-72 rounded-full bg-brand-orange/30 blur-3xl" />
        <div className="absolute left-[-80px] top-1/3 h-52 w-52 rounded-full bg-[#26e0ff]/20 blur-3xl" />

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <AnimatedSection>
            <p className="text-sm uppercase tracking-[0.2em] text-[#26e0ff]">IT Services • Software • Digital Solutions</p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">
              Votre partenaire technologique pour développer, sécuriser et scaler vos solutions digitales.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/80 md:text-lg">
              Nous aidons les entreprises à construire des plateformes web, des logiciels métiers et des
              infrastructures cloud fiables avec une approche orientée résultat.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#5f7eff]"
              >
                Explorer nos solutions
              </Link>
              <Link
                href="/it-consulting"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
              >
                Notre expertise IT
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <Image
              src="/tech/code-lab.svg"
              alt="Développement logiciel high-tech"
              width={640}
              height={500}
              className="mx-auto w-full max-w-xl rounded-2xl border border-white/10"
              priority
            />
          </AnimatedSection>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, i) => (
            <AnimatedSection key={item.label} delay={0.07 * i}>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-center">
                <p className="text-2xl font-semibold text-[#26e0ff]">{item.value}</p>
                <p className="mt-1 text-sm text-white/80">{item.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <AnimatedSection>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9fb5ff]">Expertises</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-white">
            Une identité tech forte, de l'interface au backend.
          </h2>
        </AnimatedSection>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <AnimatedSection key={pillar.title} delay={0.08 * i}>
              <article className="h-full rounded-2xl border border-[#213a7b] bg-[#0c1737] p-7 shadow-soft">
                <p className="text-lg font-bold text-[#26e0ff]">{pillar.icon}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#b7c8ef]">{pillar.text}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="bg-[#08122a] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9fb5ff]">Méthodologie</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Pipeline de delivery digital</h2>
          </AnimatedSection>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <AnimatedSection key={step.id} delay={0.1 * i}>
                <div className="rounded-2xl border border-[#213a7b] bg-[#0c1737] p-7">
                  <p className="text-sm font-semibold text-[#26e0ff]">{step.id}</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#b7c8ef]">{step.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <AnimatedSection>
          <div className="rounded-3xl border border-[#284699] bg-[#0b183d] px-8 py-10 text-white md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#26e0ff]">Technologies</p>
              <h2 className="mt-3 text-2xl font-semibold md:text-3xl">Stack moderne pour des produits fiables.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/80">
                Nous concevons des solutions digitales robustes avec des standards modernes de qualité,
                sécurité, observabilité et performance.
              </p>
            </div>
            <Image
              src="/tech/dashboard-ui.svg"
              alt="Dashboard technologique"
              width={240}
              height={180}
              className="mt-6 w-full max-w-[240px] rounded-xl border border-white/10 md:mt-0"
            />
          </div>
        </AnimatedSection>

        <div className="mt-8 flex flex-wrap gap-3">
          {techTags.map((tag, idx) => (
            <AnimatedSection key={tag} delay={idx * 0.03}>
              <span className="inline-flex rounded-full border border-[#284699] bg-[#0c1737] px-4 py-2 text-sm text-[#c9d6f4]">
                {tag}
              </span>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
