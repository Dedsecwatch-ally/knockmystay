"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  // Only run on client — avoids SSR/client mismatch
  useEffect(() => {
    setMounted(true);
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "-5% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const getInitialTransform = () => {
    if (direction === "left") return "translateX(24px)";
    if (direction === "right") return "translateX(-24px)";
    return "translateY(24px)";
  };

  return (
    <div
      ref={ref}
      className={className}
      suppressHydrationWarning
      style={
        mounted
          ? {
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : getInitialTransform(),
              transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
              willChange: "opacity, transform",
            }
          : undefined // server renders with no inline style → no mismatch
      }
    >
      {children}
    </div>
  );
}
