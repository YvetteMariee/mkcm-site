"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

type AnimatedListProps = {
  className?: string;
  children: ReactNode;
};

export function AnimatedList({ className, children }: AnimatedListProps) {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

type AnimatedListItemProps = {
  className?: string;
  children: ReactNode;
};

export function AnimatedListItem({
  className,
  children,
}: AnimatedListItemProps) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
