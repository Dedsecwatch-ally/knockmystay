"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const beats = [
  {
    num: "01",
    line1: "We begin where others end —",
    line2: "at the door of a local home.",
  },
  {
    num: "02",
    line1: "Every detail is curated.",
    line2: "Every moment, intentional.",
  },
  {
    num: "03",
    line1: "This is not a hotel.",
    line2: "This is your city, lived.",
  },
];

export default function StorytellingSection() {
  return (
    <section className="bg-[var(--color-brand-indigo)] text-white overflow-hidden">
      {/* Section label at top */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="px-6 md:px-16 lg:px-24 pt-16 md:pt-24 pb-8"
      >
        <p className="font-sans text-xs tracking-[0.4em] text-[var(--color-brand-gold)] uppercase">
          The knockmystay Difference
        </p>
      </motion.div>

      {/* Story beats */}
      {beats.map((beat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="relative border-b border-white/10 px-6 md:px-16 lg:px-24 py-16 md:py-24 flex flex-col md:flex-row md:items-end gap-6 md:gap-16"
        >
          {/* Number */}
          <span className="font-sans text-xs tracking-[0.3em] text-[var(--color-brand-gold)] opacity-60 md:min-w-[60px]">
            {beat.num}
          </span>

          {/* Story lines */}
          <div className="flex-1">
            <p className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white/90">
              {beat.line1}
            </p>
            <p className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white/40 mt-1">
              {beat.line2}
            </p>
          </div>

          {/* Gold line that grows in on scroll */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="absolute bottom-0 left-0 h-[1px] w-full bg-[var(--color-brand-gold)]/30 origin-left"
          />
        </motion.div>
      ))}

      {/* Closing CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="px-6 md:px-16 lg:px-24 py-16 md:py-20"
      >
        <Link
          href="/properties"
          className="inline-flex items-center gap-3 text-white font-serif text-xl hover:text-[var(--color-brand-gold)] transition-colors duration-300 group"
        >
          Explore our properties
          <ArrowRight
            size={20}
            className="transform group-hover:translate-x-1 transition-transform duration-300"
          />
        </Link>
      </motion.div>
    </section>
  );
}
