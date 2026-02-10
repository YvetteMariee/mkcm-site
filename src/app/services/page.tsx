"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesPage() {
  return (
    <main className="bg-white text-gray-900 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-[120px] bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-[1280px] mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
            <span className="uppercase tracking-widest text-sm opacity-80">
              Nos expertises
            </span>
            <h1 className="text-5xl xl:text-6xl font-extrabold leading-tight mt-4 mb-6">
              Des solutions digitales <br /> pensées pour durer
            </h1>
            <p className="text-lg leading-relaxed max-w-xl mb-10">
              Nous accompagnons les entreprises ambitieuses dans la conception,
              le développement et l’optimisation de produits digitaux performants,
              sécurisés et évolutifs.
            </p>
            <button className="bg-white text-orange-600 font-semibold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition">
              Demander un devis
            </button>
          </motion.div>

          <motion.img
            src="/services-hero.png"
            alt="Services illustration"
            className="w-full max-w-xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </section>

      {/* ================= DOMAINES ================= */}
      <section className="py-[110px]">
        <div className="max-w-[1280px] mx-auto px-8">
          <motion.h2
            className="text-4xl font-bold mb-16"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
          >
            Nos domaines d’intervention
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-10">
            {[
              {
                title: "Développement Web & Mobile",
                desc: "Applications web modernes, plateformes métier et solutions mobiles performantes.",
              },
              {
                title: "IT Consulting & Architecture",
                desc: "Conseil stratégique, audit technique et accompagnement à la décision.",
              },
              {
                title: "Cybersécurité & Performance",
                desc: "Sécurisation des systèmes, audits, bonnes pratiques et optimisation continue.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-10 border rounded-2xl hover:shadow-xl transition"
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOCUS SERVICES ================= */}
      <section className="py-[110px] bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold mb-6">
                Une approche orientée résultats
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Chaque projet est conçu avec une vision long terme. Nous combinons
                expertise technique, compréhension métier et exigence qualité
                pour livrer des solutions robustes et évolutives.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li>✔ Analyse métier approfondie</li>
                <li>✔ Choix technologiques maîtrisés</li>
                <li>✔ Sécurité intégrée dès la conception</li>
                <li>✔ Accompagnement post-livraison</li>
              </ul>
            </motion.div>

            <motion.img
              src="/focus-services.png"
              className="w-full max-w-lg mx-auto"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </section>

      {/* ================= CHIFFRES ================= */}
      <section className="py-[110px]">
        <div className="max-w-[1280px] mx-auto px-8 grid md:grid-cols-4 gap-10">
          {[
            { value: "+20", label: "Sites e-commerce livrés" },
            { value: "+80", label: "Identités graphiques créées" },
            { value: "+30", label: "Applications web déployées" },
            { value: "+15", label: "Applications mobiles livrées" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center p-10 rounded-2xl bg-gray-50"
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-extrabold text-orange-500 mb-3">
                {stat.value}
              </div>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-[120px] bg-orange-50">
        <div className="max-w-[1280px] mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Notre méthodologie
          </h2>

          <div className="grid md:grid-cols-5 gap-6">
            {["Découvrir", "Conseiller", "Développer", "Analyser", "Optimiser"].map(
              (step, i) => (
                <motion.div
                  key={i}
                  className="bg-white p-8 rounded-xl shadow-md text-center"
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeUp}
                  viewport={{ once: true }}
                >
                  <div className="text-orange-500 font-bold mb-4">
                    0{i + 1}
                  </div>
                  <h4 className="font-semibold">{step}</h4>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-[120px] text-center bg-gray-900 text-white">
        <h2 className="text-4xl font-extrabold mb-6">
          Parlons de votre projet
        </h2>
        <p className="max-w-xl mx-auto mb-10 text-gray-300">
          Vous avez une idée, un besoin ou un projet en cours ?
          Discutons ensemble de la meilleure solution.
        </p>
        <button className="bg-orange-500 px-10 py-4 rounded-xl font-semibold hover:scale-105 transition">
          Nous contacter
        </button>
      </section>

    </main>
  );
}
