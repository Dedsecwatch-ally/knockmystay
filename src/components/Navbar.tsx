"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Properties", href: "/properties" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isHomePage = pathname === "/";
  const showNavItems = !isHomePage || isScrolled;

  // On home page when not scrolled: white text. Otherwise: dark text.
  const isTransparentHero = isHomePage && !isScrolled && !mobileMenuOpen;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || mobileMenuOpen
          ? "bg-[var(--color-brand-ivory)] border-b border-[var(--color-brand-indigo)]/10 shadow-sm"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo — always inherits current text color */}
          <Link
            href="/"
            className={cn(
              "font-serif text-2xl tracking-wide font-medium relative z-50 md:-ml-20 whitespace-nowrap shrink-0 transition-colors duration-300",
              isTransparentHero
                ? "text-white"
                : "text-[var(--color-brand-indigo)]"
            )}
          >
            KnockmyStay
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 overflow-hidden h-full items-center">
            <AnimatePresence mode="wait">
              {showNavItems && (
                <motion.nav
                  initial={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="flex gap-8"
                >
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={cn(
                        "group relative text-sm tracking-wide transition-colors py-1",
                        isTransparentHero
                          ? "text-white"
                          : "text-[var(--color-brand-indigo)]",
                        pathname === link.href
                          ? "opacity-100 font-medium"
                          : "opacity-80 hover:opacity-100"
                      )}
                    >
                      {link.name}
                      <span
                        className={cn(
                          "absolute bottom-0 left-0 w-full h-[1px] bg-current transform origin-left transition-transform duration-300 ease-out",
                          "scale-x-0 group-hover:scale-x-100"
                        )}
                      />
                    </Link>
                  ))}
                </motion.nav>
              )}
            </AnimatePresence>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center min-w-[120px] justify-end">
            <AnimatePresence mode="wait">
              {showNavItems && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
                  transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href="/contact"
                    className={cn(
                      "px-5 py-2 text-sm font-medium border transition-colors duration-300",
                      isTransparentHero
                        ? "border-white text-white hover:bg-white hover:text-[var(--color-brand-indigo)]"
                        : "border-[var(--color-brand-indigo)] text-[var(--color-brand-indigo)] hover:bg-[var(--color-brand-indigo)] hover:text-white"
                    )}
                  >
                    Enquire Now
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "md:hidden relative z-50 p-2 -mr-2 transition-colors duration-300",
              isTransparentHero
                ? "text-white"
                : "text-[var(--color-brand-indigo)]"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — full screen overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[var(--color-brand-ivory)] z-40 md:hidden flex flex-col p-8 pt-32"
          >
            <nav className="flex flex-col gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "text-5xl font-serif tracking-tight block",
                      pathname === link.href
                        ? "text-[var(--color-brand-indigo)]"
                        : "text-[var(--color-brand-indigo)]/30"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mt-auto"
            >
              <Link
                href="/contact"
                className="block w-full py-5 bg-[var(--color-brand-indigo)] text-white text-center text-xl font-medium tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                Enquire Now
              </Link>
              <div className="mt-10 flex flex-col gap-3 text-sm text-[var(--color-brand-indigo)]/50 font-sans">
                <p>knockmystay@gmail.com</p>
                <p>+91 99999 99999</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
