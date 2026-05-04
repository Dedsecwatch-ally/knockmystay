"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/** Pick the best video source based on device & connection speed */
function selectVideoSrc(): string {
  if (typeof window !== "undefined" && window.innerWidth < 768) {
    return "/videos/hero-720p.mp4";
  }
  const conn =
    (navigator as any).connection ||
    (navigator as any).mozConnection ||
    (navigator as any).webkitConnection;

  if (conn) {
    const { effectiveType, downlink } = conn;
    if (effectiveType === "2g" || effectiveType === "3g" || downlink < 2) {
      return "/videos/hero-720p.mp4";
    }
    if ((effectiveType === "4g" || effectiveType === "5g") && downlink >= 10) {
      return "/videos/hero-4k.mp4";
    }
    return "/videos/hero-1080p.mp4";
  }
  return "/videos/hero-1080p.mp4";
}

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const video = videoRef.current;
    if (!video) return;
    video.src = selectVideoSrc();
    video.load();
    video.play().catch(() => {});
  }, []);

  return (
    <section className="relative min-h-[100svh] md:h-screen w-full flex items-end overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0a0a0a]" />
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          preload="auto"
          poster="/videos/hero-poster.jpg"
          onCanPlay={() => setVideoReady(true)}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: videoReady ? 1 : 0,
            transition: "opacity 1.2s ease",
          }}
        />
        {/* Bottom legibility gradient only */}
        <div
          className="absolute inset-x-0 bottom-0 h-2/5"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-7 md:px-14 lg:px-20 pb-20 md:pb-28 lg:pb-32">


        {/* Main headline */}
        <div
          suppressHydrationWarning
          style={
            mounted
              ? {
                  opacity: 1,
                  transform: "translateY(0)",
                  transition: "opacity 1.2s ease 0.25s, transform 1.2s cubic-bezier(0.16,1,0.3,1) 0.25s",
                }
              : { opacity: 0, transform: "translateY(32px)" }
          }
        >
          <h1
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.01em",
              fontWeight: 700,
              color: "#ffffff",
              textShadow: "none",
              filter: "drop-shadow(0 2px 24px rgba(0,0,0,0.35))",
              marginBottom: "1.25rem",
            }}
          >
            Don't visit.<br />Belong.
          </h1>
        </div>

        {/* Subtext */}
        <div
          suppressHydrationWarning
          style={
            mounted
              ? {
                  opacity: 1,
                  transform: "translateY(0)",
                  transition: "opacity 1.2s ease 0.5s, transform 1.2s cubic-bezier(0.16,1,0.3,1) 0.5s",
                }
              : { opacity: 0, transform: "translateY(24px)" }
          }
        >
          <p
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              fontWeight: 300,
              color: "rgba(255,255,255,0.72)",
              letterSpacing: "0.03em",
              lineHeight: 1.6,
              marginBottom: "2.5rem",
              maxWidth: "38ch",
            }}
          >
            Experience the city, not just stay in it.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          suppressHydrationWarning
          style={
            mounted
              ? {
                  opacity: 1,
                  transform: "translateY(0)",
                  transition: "opacity 1.2s ease 0.72s, transform 1.2s cubic-bezier(0.16,1,0.3,1) 0.72s",
                }
              : { opacity: 0, transform: "translateY(20px)" }
          }
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/properties"
            style={{
              fontFamily: "var(--font-playfair)",
              display: "inline-block",
              padding: "14px 36px",
              background: "#ffffff",
              color: "#1a1209",
              fontSize: "0.9rem",
              fontWeight: 500,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "background 0.25s ease, color 0.25s ease",
              textAlign: "center",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = "rgba(245,230,200,0.95)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "#ffffff";
            }}
          >
            Explore Properties
          </Link>

          <Link
            href="/cities/varanasi"
            style={{
              fontFamily: "var(--font-playfair)",
              display: "inline-block",
              padding: "14px 36px",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.45)",
              color: "rgba(255,255,255,0.9)",
              fontSize: "0.9rem",
              fontWeight: 400,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "border-color 0.25s ease, background 0.25s ease",
              textAlign: "center",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.7)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.45)";
            }}
          >
            Discover Varanasi
          </Link>
        </div>
      </div>
    </section>
  );
}
