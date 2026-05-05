"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: FadeInProps) {
  const getInitialState = () => {
    if (direction === "left") return { opacity: 0, x: 24, y: 0 };
    if (direction === "right") return { opacity: 0, x: -24, y: 0 };
    if (direction === "none") return { opacity: 0, x: 0, y: 0 };
    return { opacity: 0, y: 24, x: 0 };
  };

  return (
    <motion.div
      initial={getInitialState()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.1, margin: "-5% 0px 0px 0px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
