import CTAButton from "../../components/ui/CTAButton";
import Section from "../../components/ui/Section";

export const metadata = {
  title: "Contact – MKCM Consult",
  description: "Contactez MKCM Consult pour discuter de votre projet numérique."
};

export default function ContactPage() {
  return (
    <main>
      <Section
        eyebrow="Contact"
        title="Parlons de votre projet."
        description="Un besoin clair, une réponse rapide. Dites‑nous ce que vous attendez et nous revenons vers vous."
      >
        <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-600">
              Écrivez‑nous et décrivez votre besoin. Nous vous répondons sous 48h ouvrées.
            </p>
            <div className="mt-6">
              <CTAButton href="mailto:contact@mkcm-consulting.com" label="Envoyer un email" />
            </div>
          </div>
          <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm">
            <div className="text-base font-semibold text-slate-900">MKCM Consulting Services</div>
            <div>contact@mkcm-consulting.com</div>
            <div>+237 6 52 71 04 32</div>
            <div>Douala, Cameroun</div>
          </div>
        </div>
      </Section>
    </main>
  );
}
