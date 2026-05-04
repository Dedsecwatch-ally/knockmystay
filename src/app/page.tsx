import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";
import { getFeaturedProperties, cities } from "@/lib/data";
import PropertyCard from "@/components/PropertyCard";
import FadeIn from "@/components/FadeIn";

// Lazy-load client components for code splitting
const HeroSection = dynamic(() => import("@/components/HeroSection"));
const StorytellingSection = dynamic(
  () => import("@/components/StorytellingSection")
);
const FloatingSearchBar = dynamic(() => import("@/components/FloatingSearchBar"));

export default function Home() {
  const featuredProperties = getFeaturedProperties();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero — client component, loaded after page shell renders */}
      <HeroSection />

      {/* Featured Properties Section */}
      <section className="bg-[var(--color-brand-indigo)] text-white py-16 md:py-24 w-full">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <FadeIn className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4 md:gap-6">
            <div>
              <p className="font-sans text-xs tracking-[0.4em] text-[var(--color-brand-gold)] uppercase mb-4">
                Exclusive Collection
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-3 md:mb-4 text-white/90">Curated Stays</h2>
            </div>
            <Link href="/properties" className="flex items-center gap-2 text-white hover:text-[var(--color-brand-gold)] font-medium transition-colors">
              View All <ArrowRight size={18} />
            </Link>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
            {featuredProperties.map((property, index) => {
              const city = cities.find((c) => c.id === property.cityId);
              return (
                <FadeIn key={property.id} delay={index * 0.1}>
                  <PropertyCard property={property} cityName={city?.name} />
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cities Highlight */}
      <section className="bg-[var(--color-brand-indigo)] text-white py-16 md:py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16 md:mb-24">
            <p className="font-sans text-xs tracking-[0.4em] text-[var(--color-brand-gold)] uppercase mb-4">
              Explore India
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 text-white/90">Our Destinations</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {cities.map((city, index) => (
              <FadeIn key={city.id} delay={index * 0.1}>
                <Link
                  href={`/cities/${city.slug}`}
                  className="group block relative aspect-[4/5] md:aspect-square overflow-hidden bg-gray-900"
                >
                  <Image
                    src={city.image}
                    alt={city.name}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full">
                    <h3 className="font-serif text-2xl md:text-3xl mb-2">{city.name}</h3>
                    <p className="font-sans text-sm md:text-base text-white/80 md:transform md:translate-y-4 md:opacity-0 transition-all duration-300 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                      {city.tagline}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Storytelling — client component, lazy loaded */}
      <StorytellingSection />

      {/* Floating Search Bar — pops up on scroll */}
      <FloatingSearchBar />
    </div>
  );
}
