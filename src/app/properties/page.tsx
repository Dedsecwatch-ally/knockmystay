import { properties, cities } from "@/lib/data";
import PropertyCard from "@/components/PropertyCard";
import FadeIn from "@/components/FadeIn";
import SearchBar from "@/components/SearchBar";

export default function PropertiesPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-8 max-w-7xl mx-auto w-full min-h-screen">
      <FadeIn className="mb-16">
        <h1 className="font-serif text-5xl text-[var(--color-brand-indigo)] mb-6 text-balance">
          All Properties
        </h1>
        <p className="font-sans text-lg text-[var(--color-brand-indigo)]/70 max-w-2xl">
          Explore our complete collection of premium homestays. Each space is carefully curated to offer comfort, authenticity, and a true sense of place.
        </p>
      </FadeIn>

      <FadeIn delay={0.2} className="mb-16">
        <SearchBar />
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {properties.map((property, index) => {
          const city = cities.find(c => c.id === property.cityId);
          return (
            <FadeIn key={property.id} delay={index * 0.1}>
              <PropertyCard 
                property={property} 
                cityName={city?.name} 
              />
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
