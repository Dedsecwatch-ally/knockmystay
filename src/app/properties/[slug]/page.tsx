import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Users, Check, ArrowLeft } from "lucide-react";
import { getPropertyBySlug, cities } from "@/lib/data";

export default async function PropertyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const property = getPropertyBySlug(resolvedParams.slug);

  if (!property) {
    notFound();
  }

  const city = cities.find(c => c.id === property.cityId);

  return (
    <div className="pt-24 pb-24 px-6 lg:px-8 max-w-7xl mx-auto w-full min-h-screen">
      <div className="mb-8">
        <Link href="/properties" className="inline-flex items-center gap-2 text-sm text-[var(--color-brand-indigo)]/70 hover:text-[var(--color-brand-indigo)] transition-colors mb-6 font-sans">
          <ArrowLeft size={16} /> Back to Properties
        </Link>
        <h1 className="font-serif text-4xl md:text-5xl text-[var(--color-brand-indigo)] mb-4">
          {property.title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm font-sans text-[var(--color-brand-indigo)]/70">
          {city && (
            <div className="flex items-center gap-1.5">
              <MapPin size={16} />
              <span>{city.name}</span>
            </div>
          )}
          <div className="flex items-center gap-1.5">
            <Users size={16} />
            <span>Up to {property.guests} guests</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50"></span>
            <span>{property.type}</span>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 h-[50vh] md:h-[60vh]">
        <div className="relative w-full h-full bg-gray-100">
          <Image
            src={property.images[0]}
            alt={property.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="hidden md:grid grid-rows-2 gap-4 h-full">
          {property.images[1] ? (
            <div className="relative w-full h-full bg-gray-100">
              <Image
                src={property.images[1]}
                alt={`${property.title} interior`}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="relative w-full h-full bg-gray-100/50 flex items-center justify-center text-gray-400">
              <span className="font-serif">More images coming soon</span>
            </div>
          )}
          <div className="relative w-full h-full bg-[var(--color-brand-indigo)]/5 flex items-center justify-center p-8 text-center">
            <p className="font-serif text-xl md:text-2xl text-[var(--color-brand-indigo)]">
              "Experience true luxury in the heart of {city?.name}"
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-12">
          {/* Description */}
          <section>
            <h2 className="font-serif text-2xl text-[var(--color-brand-indigo)] mb-6">About this space</h2>
            <p className="font-sans text-[var(--color-brand-indigo)]/80 leading-relaxed text-lg">
              {property.description}
            </p>
          </section>

          {/* Amenities */}
          <section>
            <h2 className="font-serif text-2xl text-[var(--color-brand-indigo)] mb-6">What this place offers</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {property.amenities.map(amenity => (
                <li key={amenity} className="flex items-center gap-3 text-[var(--color-brand-indigo)]/80 font-sans">
                  <Check size={18} className="text-[var(--color-brand-gold)]" />
                  {amenity}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Booking Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-28 border border-[var(--color-brand-indigo)]/10 p-8 bg-white shadow-xl shadow-black/5">
            <div className="flex items-end gap-2 mb-6 text-[var(--color-brand-indigo)]">
              <span className="text-3xl font-serif font-medium">₹{property.price.toLocaleString("en-IN")}</span>
              <span className="text-sm font-sans opacity-70 mb-1">/ night</span>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between font-sans text-sm pb-4 border-b border-gray-100">
                <span className="opacity-70">Check-in</span>
                <span className="font-medium">2:00 PM</span>
              </div>
              <div className="flex justify-between font-sans text-sm pb-4 border-b border-gray-100">
                <span className="opacity-70">Checkout</span>
                <span className="font-medium">11:00 AM</span>
              </div>
            </div>

            <Link
              href={`/contact?property=${property.slug}`}
              className="block w-full text-center px-6 py-4 bg-[var(--color-brand-indigo)] text-white font-medium hover:bg-[var(--color-brand-indigo)]/90 transition-colors"
            >
              Enquire to Book
            </Link>
            <p className="text-center text-xs font-sans mt-4 text-[var(--color-brand-indigo)]/50">
              You won't be charged yet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
