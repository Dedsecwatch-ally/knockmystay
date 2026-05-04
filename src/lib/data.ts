export type City = {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  themeColor: string;
};

export type Property = {
  id: string;
  title: string;
  slug: string;
  cityId: string;
  type: "1BHK" | "2BHK";
  guests: number;
  price: number;
  images: string[];
  description: string;
  amenities: string[];
  featured: boolean;
};

export const cities: City[] = [
  {
    id: "c1",
    name: "Varanasi",
    slug: "varanasi",
    tagline: "Where eternity meets the present",
    description: "Experience the spiritual heart of India. Our properties in Varanasi offer peaceful sanctuaries amidst the vibrant, ancient energy of the ghats.",
    image: "/images/varanasi.png",
    themeColor: "varanasi-accent"
  },
  {
    id: "c2",
    name: "Lucknow",
    slug: "lucknow",
    tagline: "The city of Nawabs",
    description: "Immerse yourself in Nawabi elegance. Our Lucknow stays blend historic charm with refined, modern comfort.",
    image: "/images/lucknow.png",
    themeColor: "lucknow-accent"
  }
];

export const properties: Property[] = [
  {
    id: "p1",
    title: "The Ganges Retreat",
    slug: "the-ganges-retreat",
    cityId: "c1",
    type: "2BHK",
    guests: 4,
    price: 4500,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1de2424075?q=80&w=1964&auto=format&fit=crop"
    ],
    description: "A serene 2BHK stay overlooking the tranquil corners of Varanasi. Designed with warm terracotta hues, this space offers a quiet refuge after a day of exploring the bustling streets.",
    amenities: ["Air Conditioning", "Free WiFi", "Kitchen", "Daily Housekeeping", "Balcony"],
    featured: true
  },
  {
    id: "p2",
    title: "Heritage Haven",
    slug: "heritage-haven",
    cityId: "c1",
    type: "1BHK",
    guests: 2,
    price: 2500,
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop"
    ],
    description: "Compact, cozy, and deeply connected to the city's roots. Perfect for solo travelers or couples looking to experience Varanasi intimately.",
    amenities: ["Air Conditioning", "Free WiFi", "Workspace", "En-suite Bathroom"],
    featured: false
  },
  {
    id: "p3",
    title: "Nawabi Suite",
    slug: "nawabi-suite",
    cityId: "c2",
    type: "2BHK",
    guests: 4,
    price: 5000,
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
    ],
    description: "Step into luxury with our premium Lucknow suite. Adorned with soft silver-grey tones and elegant furnishings, it perfectly captures the Nawabi spirit.",
    amenities: ["Premium Bedding", "Smart TV", "Fully Equipped Kitchen", "Lounge Area", "Free Parking"],
    featured: true
  },
  {
    id: "p4",
    title: "Gomti View Studio",
    slug: "gomti-view-studio",
    cityId: "c2",
    type: "1BHK",
    guests: 2,
    price: 3000,
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop"
    ],
    description: "A modern, minimalist space offering everything you need for a comfortable stay in Lucknow.",
    amenities: ["Air Conditioning", "Free WiFi", "Kitchenette", "City View"],
    featured: false
  }
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(c => c.slug === slug);
}

export function getPropertiesByCity(cityId: string): Property[] {
  return properties.filter(p => p.cityId === cityId);
}

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find(p => p.slug === slug);
}

export function getFeaturedProperties(): Property[] {
  return properties.filter(p => p.featured);
}
