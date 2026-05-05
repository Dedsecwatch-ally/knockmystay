"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown } from "lucide-react";
import SearchBar from "./SearchBar";

export default function FloatingSearchBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      // Show when scrolled past 80% of the viewport (near the 2nd section)
      const threshold = window.innerHeight * 0.8;
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 md:bottom-8 left-0 right-0 z-40 px-4 flex justify-center pointer-events-none"
        >
          <AnimatePresence mode="wait">
            {isMinimized ? (
              <motion.button
                key="minimized"
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 20 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setIsMinimized(false)}
                className="pointer-events-auto bg-[var(--color-brand-indigo)] text-[var(--color-brand-ivory)] px-6 py-3 rounded-full shadow-xl flex items-center gap-2 font-medium tracking-wide hover:scale-105 transition-transform"
              >
                <Search size={18} />
                <span>Book Now</span>
              </motion.button>
            ) : (
              <motion.div 
                key="expanded"
                initial={{ scale: 0.95, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 30 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="pointer-events-auto w-full max-w-5xl relative"
              >
                {/* Mobile minimize button */}
                <button 
                  onClick={() => setIsMinimized(true)}
                  className="md:hidden absolute -top-12 right-2 bg-white/90 backdrop-blur-md p-2 rounded-full shadow-md text-[var(--color-brand-indigo)] border border-white/20 hover:bg-white transition-colors"
                  aria-label="Minimize search bar"
                >
                  <ChevronDown size={22} />
                </button>
                
                <div className="shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl bg-white/90 backdrop-blur-md border border-white/20">
                  <SearchBar />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
