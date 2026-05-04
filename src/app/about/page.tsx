import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-32">
        
        {/* Brand Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h1 className="font-serif text-5xl md:text-6xl text-[var(--color-brand-indigo)] mb-8 text-balance">
              Redefining the art of homestays.
            </h1>
            <div className="space-y-6 font-sans text-lg text-[var(--color-brand-indigo)]/80 leading-relaxed">
              <p>
                At Knock My Stay, we believe that where you sleep is just as important as where you travel. We are not a generic booking platform; we are a boutique hospitality brand dedicated to creating premium, culturally immersive spaces.
              </p>
              <p>
                Born out of a desire to bridge the gap between luxury hotels and sterile rental apartments, our properties offer the best of both worlds: the uncompromised quality of a high-end hotel with the soul, privacy, and authenticity of a local home.
              </p>
              <p>
                Whether you're finding peace by the ghats of Varanasi or soaking in the Nawabi elegance of Lucknow, our curated 1BHK and 2BHK spaces are designed to be your sanctuary in the city.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2} direction="left" className="relative aspect-[3/4] w-full">
            <Image
              src="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2070&auto=format&fit=crop"
              alt="Elegant interior detail"
              fill
              className="object-cover"
              priority
            />
          </FadeIn>
        </div>

        {/* Meet the Founder */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right" className="relative aspect-[4/5] w-full lg:order-1 order-2">
            <Image
              src="/images/founder.png"
              alt="Atharv Srivastav, Founder of Knock My Stay"
              fill
              className="object-cover"
            />
          </FadeIn>
          
          <FadeIn delay={0.2} className="lg:order-2 order-1">
            <h2 className="font-serif text-4xl text-[var(--color-brand-indigo)] mb-6">
              Meet the Founder
            </h2>
            <div className="space-y-6 font-sans text-lg text-[var(--color-brand-indigo)]/80 leading-relaxed">
              <p>
                <strong>Atharv Srivastav</strong>, an IHM graduate, started Knock My Stay with a singular vision: to build a nationwide hospitality experience deeply rooted in local culture and premium comfort.
              </p>
              <p>
                Drawing from his extensive background in hospitality management, Atharv noticed that modern travelers often had to choose between the predictable luxury of a hotel and the cultural immersion of a local rental. Knock My Stay was born to eliminate that compromise.
              </p>
              <p>
                "Our goal isn't just to provide a place to sleep," Atharv says, "it's to offer a space that honors the city's heritage while delivering the refined, seamless experience our guests expect."
              </p>
            </div>
          </FadeIn>
        </div>

      </div>
    </div>
  );
}
