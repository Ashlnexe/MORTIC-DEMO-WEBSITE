"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-24 pb-12 px-4 md:px-8 text-center border-b border-gray-200">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black">Collections</h1>
        <p className="text-gray-500 mt-4 max-w-md mx-auto text-sm font-medium lowercase">curated drops. limited runs. don't sleep.</p>
      </div>

      {/* Collection 1 */}
      <div className="flex flex-col md:flex-row border-b border-gray-200">
        <div className="w-full md:w-1/2 aspect-square md:aspect-auto bg-gray-100 relative overflow-hidden border-b md:border-b-0 md:border-r border-gray-200">
           {/* Replace with a lifestyle shot of the rings */}
           <Image src="/three-cars-bag.png" alt="Keychains Lifestyle Shot" fill className="object-cover" />
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-[#f9f9f9]">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-4 text-black">The Album Series</h2>
          <p className="text-gray-600 mb-8 max-w-md text-sm leading-relaxed">
            Wear your heavy rotation. Statement rings cast in premium stainless steel, inspired by the eras and albums that shaped our generation. 
          </p>
          <Link href="/shop?filter=rings" className="w-max bg-black text-white px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-gray-800 transition">
            Shop Rings
          </Link>
        </div>
      </div>

      {/* Collection 2 (Alternating Layout) */}
      <div className="flex flex-col md:flex-row-reverse border-b border-gray-200">
        <div className="w-full md:w-1/2 aspect-square md:aspect-auto bg-gray-100 relative overflow-hidden border-b md:border-b-0 md:border-l border-gray-200">
           {/* Replace with a shot of the Hot Wheels blister packs */}
           <Image src="/pink-car-store.png" alt="Blister Packs In Store" fill className="object-cover object-[center_30%]" />
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-4 text-black">Blister Packs</h2>
          <p className="text-gray-600 mb-8 max-w-md text-sm leading-relaxed">
            Custom miniature motors sealed in hand-drawn, pop-culture blister packaging. Part keychain, part collectible art piece.
          </p>
          <Link href="/shop?filter=keychains" className="w-max bg-white text-black border-2 border-black px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-black hover:text-white transition">
            Shop Keychains
          </Link>
        </div>
      </div>
    </main>
  );
}
