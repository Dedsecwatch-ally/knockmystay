"use client";

import { MapPin, Calendar, Search, Users } from "lucide-react";
import { useState } from "react";
import { cities } from "@/lib/data";

export default function SearchBar() {
  const [city, setCity] = useState(cities[0]?.id || "");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a production app, this would update URL search params to trigger filtering
    console.log("Searching for:", { city, checkIn, checkOut, guests });
  };

  return (
    <form 
      onSubmit={handleSearch}
      className="bg-white p-2 rounded-2xl shadow-lg shadow-[var(--color-brand-indigo)]/5 border border-[var(--color-brand-indigo)]/10 flex flex-col md:flex-row gap-2 w-full max-w-4xl mx-auto"
    >
      {/* City Selection */}
      <div className="flex-1 flex items-center px-4 py-3 bg-[var(--color-brand-ivory)]/50 rounded-xl hover:bg-[var(--color-brand-ivory)] transition-colors">
        <MapPin size={20} className="text-[var(--color-brand-indigo)]/50 mr-3 shrink-0" />
        <div className="w-full">
          <label className="block text-xs font-medium text-[var(--color-brand-indigo)]/70 mb-1">Where</label>
            <select 
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full bg-transparent text-sm text-[var(--color-brand-indigo)] focus:outline-none cursor-pointer appearance-none"
            >
              {cities.map(c => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="hidden md:block w-px bg-[var(--color-brand-indigo)]/10 my-2" />
      <div className="md:hidden h-px w-full bg-[var(--color-brand-indigo)]/10 my-1 mx-auto max-w-[90%]" />

      {/* Dates (Combined Check-in & Check-out) */}
      <div className="flex-1 flex items-center px-4 py-3 bg-[var(--color-brand-ivory)]/50 rounded-xl hover:bg-[var(--color-brand-ivory)] transition-colors">
        <Calendar size={20} className="text-[var(--color-brand-indigo)]/50 mr-3 shrink-0" />
        <div className="w-full">
          <label className="block text-xs font-medium text-[var(--color-brand-indigo)]/70 mb-1">Dates</label>
          <div className="flex items-center gap-2">
            <input 
              type="date" 
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-transparent text-sm text-[var(--color-brand-indigo)] focus:outline-none cursor-pointer"
            />
            <span className="text-[var(--color-brand-indigo)]/30">-</span>
            <input 
              type="date" 
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-transparent text-sm text-[var(--color-brand-indigo)] focus:outline-none cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="hidden md:block w-px bg-[var(--color-brand-indigo)]/10 my-2" />
      <div className="md:hidden h-px w-full bg-[var(--color-brand-indigo)]/10 my-1 mx-auto max-w-[90%]" />

      {/* Guests */}
      <div className="flex-[0.7] flex items-center px-4 py-3 bg-[var(--color-brand-ivory)]/50 rounded-xl hover:bg-[var(--color-brand-ivory)] transition-colors">
        <Users size={20} className="text-[var(--color-brand-indigo)]/50 mr-3 shrink-0" />
        <div className="w-full">
          <label className="block text-xs font-medium text-[var(--color-brand-indigo)]/70 mb-1">Guests</label>
          <div className="flex items-center gap-3 mt-1">
            <button
              type="button"
              onClick={() => setGuests(Math.max(1, guests - 1))}
              disabled={guests <= 1}
              className="w-6 h-6 rounded-full border border-[var(--color-brand-indigo)]/30 flex items-center justify-center text-[var(--color-brand-indigo)] hover:bg-[var(--color-brand-indigo)] hover:text-white transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[var(--color-brand-indigo)] leading-none text-lg pb-[2px]"
              aria-label="Decrease guests"
            >
              -
            </button>
            <span className="text-sm font-medium text-[var(--color-brand-indigo)] w-3 text-center">{guests}</span>
            <button
              type="button"
              onClick={() => setGuests(Math.min(10, guests + 1))}
              disabled={guests >= 10}
              className="w-6 h-6 rounded-full border border-[var(--color-brand-indigo)]/30 flex items-center justify-center text-[var(--color-brand-indigo)] hover:bg-[var(--color-brand-indigo)] hover:text-white transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[var(--color-brand-indigo)] leading-none text-lg pb-[2px]"
              aria-label="Increase guests"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Search Button */}
      <button 
        type="submit"
        className="md:w-auto w-full px-8 py-4 bg-[var(--color-brand-indigo)] text-[var(--color-brand-ivory)] rounded-xl font-medium hover:opacity-90 transition-opacity flex items-center justify-center whitespace-nowrap"
      >
        <Search size={20} className="mr-2" />
        <span>Book Now</span>
      </button>
    </form>
  );
}
