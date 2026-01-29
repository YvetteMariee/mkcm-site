"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Section from "./process";

type AnimatedSectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  tone?: "light" | "muted";
  children: ReactNode;
};

export default function AnimatedSection({
  id,
  title,
  subtitle,
  tone = "light",
  children,
}: AnimatedSectionProps) {
  const toneClass = tone === "muted" ? "bg-slate-50" : "bg-white";

  return (
    <motion.section
      id={id}
      className={`${toneClass} py-16 sm:py-20`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Section title={title} subtitle={subtitle}>
        {children}
      </Section>
    </motion.section>
  );
}
