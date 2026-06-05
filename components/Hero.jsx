"use client";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-[#111] flex items-center justify-center flex-col overflow-hidden">
      
      {/* 
        Hero Background Image:
        Replace 'src' with a dark, moody photo of a blister pack or the ring 
      */}
      <div className="absolute inset-0 opacity-70 z-0">
        <Image 
          src="/frank-ocean-flowers.png" 
          alt="Mortic Hero"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 px-4 text-center mt-12">
        <h1 className="text-5xl md:text-8xl font-black text-white lowercase tracking-tight drop-shadow-lg">
          statement pieces
        </h1>
        <Link 
          href="/shop" 
          className="border-2 border-white text-white bg-transparent px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300"
        >
          Shop Collection
        </Link>
      </div>
    </section>
  );
}
