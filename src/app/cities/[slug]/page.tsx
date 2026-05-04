import { notFound } from "next/navigation";
import Image from "next/image";
import { getCityBySlug, getPropertiesByCity } from "@/lib/data";
import PropertyCard from "@/components/PropertyCard";
import { clsx } from "clsx";

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const city = getCityBySlug(resolvedParams.slug);

  if (!city) {
    notFound();
  }

  const cityProperties = getPropertiesByCity(city.id);

  // Dynamic styling based on city theme
  const isVaranasi = city.slug === "varanasi";
  const bgClass = isVaranasi ? "bg-[#b45309]/5" : "bg-[#94a3b8]/5";
  const textClass = isVaranasi ? "text-[#b45309]" : "text-[#64748b]";

  return (
    <div className="flex flex-col min-h-screen">
      {/* City Hero */}
      <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={city.image}
            alt={city.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <h1 className="font-serif text-6xl md:text-8xl text-white mb-6 tracking-wide drop-shadow-lg">
            {city.name}
          </h1>
          <p className="font-serif text-xl md:text-3xl text-white/90 font-light italic">
            "{city.tagline}"
          </p>
        </div>
      </section>

      {/* City Introduction */}
      <section className={clsx("py-24 px-6 lg:px-8 max-w-7xl mx-auto w-full text-center", bgClass)}>
        <p className={clsx("font-sans text-xl md:text-2xl font-light leading-relaxed max-w-4xl mx-auto", textClass)}>
          {city.description}
        </p>
      </section>

      {/* Properties in City */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="mb-16">
          <h2 className="font-serif text-4xl text-[var(--color-brand-indigo)] mb-4">
            Stays in {city.name}
          </h2>
          <p className="font-sans text-[var(--color-brand-indigo)]/70 max-w-2xl">
            Choose from our selection of premium properties, each designed to offer a unique perspective on the city.
          </p>
        </div>

        {cityProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {cityProperties.map((property) => (
              <PropertyCard 
                key={property.id} 
                property={property} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-gray-50 border border-dashed border-gray-200">
            <p className="font-sans text-[var(--color-brand-indigo)]/50">
              New premium properties in {city.name} are coming soon.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
