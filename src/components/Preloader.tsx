"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if we've already shown the preloader in this session
    const hasSeenPreloader = sessionStorage.getItem("hasSeenPreloader");
    
    if (hasSeenPreloader) {
      setIsLoading(false);
      return;
    }

    // Timer to remove the preloader after the animation is fully complete
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("hasSeenPreloader", "true");
    }, 2800); // Gives enough time for the stagger and a brief pause before fading out

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  const text = "KnockmyStay";
  const letters = Array.from(text);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.4 }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-[9999] bg-[var(--color-brand-indigo)] flex items-center justify-center"
        >
          <div className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-widest text-[var(--color-brand-ivory)] flex overflow-hidden">
            {letters.map((letter, index) => (
              <motion.span 
                key={index} 
                variants={letterVariants}
                className="inline-block"
                style={{ marginRight: letter === ' ' ? '0.5em' : '0' }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
