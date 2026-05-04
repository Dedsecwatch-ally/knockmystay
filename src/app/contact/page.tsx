import { Send } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen max-w-7xl mx-auto px-6 lg:px-8">
      <FadeIn className="mb-16">
        <h1 className="font-serif text-5xl text-[var(--color-brand-indigo)] mb-6">
          Contact &amp; Booking
        </h1>
        <p className="font-sans text-lg text-[var(--color-brand-indigo)]/70 max-w-2xl">
          Whether you're ready to book or just have a few questions, we're here to help you plan the perfect stay.
        </p>
      </FadeIn>

      {/* Enquiry Form */}
      <div className="max-w-2xl bg-white p-8 md:p-12 border border-[var(--color-brand-indigo)]/10 shadow-xl shadow-black/5">
        <h2 className="font-serif text-3xl text-[var(--color-brand-indigo)] mb-8">Send an Enquiry</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-sm font-sans text-[var(--color-brand-indigo)]">First Name</label>
              <input type="text" id="firstName" className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:border-[var(--color-brand-indigo)] transition-colors font-sans" placeholder="John" />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-sm font-sans text-[var(--color-brand-indigo)]">Last Name</label>
              <input type="text" id="lastName" className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:border-[var(--color-brand-indigo)] transition-colors font-sans" placeholder="Doe" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-sans text-[var(--color-brand-indigo)]">Email Address</label>
            <input type="email" id="email" className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:border-[var(--color-brand-indigo)] transition-colors font-sans" placeholder="john@example.com" />
          </div>

          <div className="space-y-2">
            <label htmlFor="property" className="block text-sm font-sans text-[var(--color-brand-indigo)]">Interested Property / City (Optional)</label>
            <select id="property" className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:border-[var(--color-brand-indigo)] transition-colors font-sans bg-white">
              <option value="">Select a property or city...</option>
              <option value="varanasi">Any property in Varanasi</option>
              <option value="lucknow">Any property in Lucknow</option>
              <option value="the-ganges-retreat">The Ganges Retreat (2BHK)</option>
              <option value="heritage-haven">Heritage Haven (1BHK)</option>
              <option value="nawabi-suite">Nawabi Suite (2BHK)</option>
              <option value="gomti-view-studio">Gomti View Studio (1BHK)</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-sans text-[var(--color-brand-indigo)]">Message</label>
            <textarea id="message" rows={4} className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:border-[var(--color-brand-indigo)] transition-colors font-sans resize-none" placeholder="Tell us about your trip (dates, number of guests, etc.)..."></textarea>
          </div>

          <button type="submit" className="w-full px-6 py-4 bg-[var(--color-brand-indigo)] text-white font-medium hover:bg-[var(--color-brand-indigo)]/90 transition-colors flex items-center justify-center gap-2">
            Send Message <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}
