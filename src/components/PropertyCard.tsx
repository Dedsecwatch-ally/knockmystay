import Link from "next/link";
import Image from "next/image";
import { Users, MapPin } from "lucide-react";
import type { Property } from "@/lib/data";

interface PropertyCardProps {
  property: Property;
  cityName?: string;
}

export default function PropertyCard({ property, cityName }: PropertyCardProps) {
  return (
    <Link href={`/properties/${property.slug}`} className="group block">
      <div className="relative aspect-[4/3] mb-6 overflow-hidden bg-gray-100">
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="font-serif text-xl font-medium group-hover:opacity-80 transition-opacity">
            {property.title}
          </h3>
          <p className="font-sans font-medium whitespace-nowrap ml-4">
            ₹{property.price.toLocaleString("en-IN")}<span className="text-sm font-normal opacity-70"> / night</span>
          </p>
        </div>

        <div className="flex items-center gap-4 text-sm font-sans opacity-70">
          {cityName && (
            <div className="flex items-center gap-1.5">
              <MapPin size={16} />
              <span>{cityName}</span>
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
    </Link>
  );
}
