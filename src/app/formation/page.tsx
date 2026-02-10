import AnimatedSection from "@/components/animated-section";
import PageHero from "@/components/page-hero";

const programs = ["Fondamentaux cloud & DevOps", "Gestion de projet agile", "Cybersécurité opérationnelle"];

export default function FormationPage() {
  return (
    <>
      <PageHero
        title="Formation"
        subtitle="Des parcours professionnalisants pour renforcer rapidement les compétences des équipes IT et métiers."
      />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-5 md:grid-cols-3">
          {programs.map((program, idx) => (
            <AnimatedSection key={program} delay={idx * 0.1}>
              <div className="rounded-2xl border border-brand-dark/10 bg-white p-6 shadow-soft">
                <h3 className="text-lg font-semibold">{program}</h3>
                <p className="mt-3 text-sm text-brand-slate">Format atelier, sessions intensives et coaching terrain.</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
