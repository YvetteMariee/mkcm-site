"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const highlights = [
  "Roadmap digital alignée sur vos objectifs",
  "Architecture applicative sécurisée",
  "Accompagnement pour équipes académiques et professionnelles",
];

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1 },
};

export default function Hero() {
  return (
    <section className="bg-white pb-16 pt-10 sm:pt-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
            Cabinet de conseil IT
          </p>
          <motion.h1
            className="text-4xl font-semibold leading-tight text-brand-900 sm:text-5xl"
            variants={headingVariants}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Des projets numériques structurés, fiables et prêts pour un usage
            académique ou professionnel.
          </motion.h1>
          <motion.p
            className="text-base leading-relaxed text-slate-600 sm:text-lg"
            variants={subtitleVariants}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            MKCM Consulting accompagne la conception, le cadrage et la livraison
            d&#39;applications et de services numériques. Nous apportons une
            méthode claire, une documentation solide et des livrables faciles à
            défendre.
          </motion.p>
          <motion.div
            className="flex flex-wrap items-center gap-4"
            variants={buttonVariants}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          >
            <Link
              href="/services"
              className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-500"
            >
              Découvrir nos services
            </Link>
            <Link
              href="mailto:contact@mkcm-consulting.com"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700"
            >
              Planifier un échange
            </Link>
          </motion.div>
          <ul className="grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-brand-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <motion.div
          className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/illustrations/hero.svg"
            alt="Tableau de pilotage d'un projet IT"
            width={420}
            height={320}
            className="h-auto w-full rounded-2xl object-cover"
            priority
          />
          <div className="mt-6 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
              Livrable phare
            </p>
            <h2 className="text-xl font-semibold text-brand-900">
              Dossier de cadrage + prototype applicatif
            </h2>
            <p className="text-sm text-slate-600">
              Un pack complet pour sécuriser la validation, la budgétisation et
              la mise en œuvre de votre projet.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
