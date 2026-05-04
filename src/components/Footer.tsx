import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-brand-indigo)] text-[var(--color-brand-ivory)] py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Brand */}
        <div className="mb-12">
          <Link href="/" className="font-serif text-2xl tracking-wide font-medium block">
            KnockmyStay
          </Link>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60 font-sans">
          <p>&copy; {new Date().getFullYear()} KnockmyStay. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
            <Link href="#" className="hover:opacity-100 transition-opacity">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
