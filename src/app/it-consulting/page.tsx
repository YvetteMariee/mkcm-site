"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ITConsultingPage() {
  return (
    <main className="bg-white text-gray-900 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="bg-orange-500 py-[120px] text-white">
        <div className="max-w-[1280px] mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Texte */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl xl:text-6xl font-extrabold leading-tight mb-6">
              RENFORCEZ VOS ÉQUIPES <br /> AVEC NOS EXPERTS IT
            </h1>

            <p className="text-lg leading-relaxed max-w-xl mb-10 opacity-95">
              Accédez rapidement aux meilleurs talents IT.
              Développeurs, architectes, experts cloud, data et cybersécurité,
              disponibles sous 48h pour renforcer vos projets stratégiques.
            </p>

            <button className="bg-white text-orange-600 font-semibold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition">
              Discuter avec un expert
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 gap-6 bg-white/10 p-8 rounded-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            {[
              { value: "200+", label: "Consultants actifs" },
              { value: "95%", label: "Satisfaction client" },
              { value: "48h", label: "Délai moyen" },
              { value: "16", label: "Corps de métier" },
            ].map((stat, i) => (
              <div key={i} className="bg-white/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-extrabold">{stat.value}</div>
                <p className="text-sm opacity-90 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= CORPS DE MÉTIER ================= */}
      <section className="py-[120px]">
        <div className="max-w-[1280px] mx-auto px-8">
          
          <motion.h2
            className="text-4xl font-bold text-center mb-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            16 corps de métier à votre service
          </motion.h2>

          <p className="text-center max-w-2xl mx-auto text-gray-600 mb-16">
            De l’IA au développement mobile, nos experts couvrent
            l’ensemble des domaines technologiques critiques.
          </p>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              "Développeur Front-end",
              "Développeur Back-end",
              "Développeur Full-stack",
              "Architecte logiciel",
              "Expert Cloud",
              "Ingénieur DevOps",
              "Expert Cybersécurité",
              "Data Engineer",
              "Data Scientist",
              "Consultant BI",
              "Product Owner",
              "Scrum Master",
              "UX Designer",
              "UI Designer",
              "Mobile Developer",
              "Tech Lead",
            ].map((job, i) => (
              <motion.div
                key={i}
                className="border rounded-xl p-6 text-center hover:shadow-lg transition"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <p className="font-semibold">{job}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COMMENT ON VOUS ACCOMPAGNE ================= */}
      <section className="bg-gray-50 py-[120px]">
        <div className="max-w-[1280px] mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Un accompagnement flexible et maîtrisé
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Nous analysons précisément vos besoins afin de vous proposer
              les profils les plus adaptés à vos enjeux techniques et métiers.
              Nos consultants s’intègrent rapidement à vos équipes.
            </p>

            <ul className="space-y-4 text-gray-700">
              <li>✔ Sélection rigoureuse des profils</li>
              <li>✔ Intégration rapide dans vos équipes</li>
              <li>✔ Suivi continu de la mission</li>
              <li>✔ Flexibilité contractuelle</li>
            </ul>
          </motion.div>

          <motion.img
            src="/it-consulting-focus.png"
            className="w-full max-w-lg mx-auto"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gray-900 text-white py-[120px] text-center">
        <h2 className="text-4xl font-extrabold mb-6">
          Besoin de renforcer vos équipes ?
        </h2>
        <p className="max-w-xl mx-auto text-gray-300 mb-10">
          Parlez-nous de votre projet et accédez rapidement
          aux compétences dont vous avez besoin.
        </p>
        <button className="bg-orange-500 px-10 py-4 rounded-xl font-semibold hover:scale-105 transition">
          Nous contacter
        </button>
      </section>

    </main>
  );
}
