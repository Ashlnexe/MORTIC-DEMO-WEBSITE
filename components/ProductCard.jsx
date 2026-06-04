"use client";
import { Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product, onQuickView }) {
  const { title, salePrice, originalPrice, rating, badges = [], slug, image } = product;

  return (
    <div className="group flex flex-col shrink-0 w-[70vw] md:w-full snap-start relative">
      {/* Image Container - Links to Product Page */}
      <div className="relative w-full aspect-[4/5] bg-[#f9f9f9] flex items-center justify-center overflow-hidden">
        <Link href={`/product/${slug}`} className="absolute inset-0 z-0 flex items-center justify-center">
          {image ? (
            <Image src={image} alt={title} fill className="object-cover object-center" />
          ) : (
            <span className="text-gray-400 text-sm">Image</span>
          )}
        </Link>
        
        {/* Badges */}
        {badges.length > 0 && (
          <div className="absolute top-2 left-2 flex flex-col gap-1 z-10 pointer-events-none">
            {badges.map((badge, idx) => (
              <span
                key={idx}
                className="bg-black text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest"
              >
                {badge}
              </span>
            ))}
          </div>
        )}

        {/* Hover Button - Triggers Modal */}
        <div className="absolute bottom-4 left-4 right-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200 z-20">
          <button 
            onClick={(e) => {
              e.preventDefault();
              onQuickView(product);
            }}
            className="w-full bg-white text-black font-bold uppercase text-xs py-3 border border-gray-200 hover:border-black transition-colors shadow-sm"
          >
            Choose options
          </button>
        </div>
      </div>

      {/* Details - Links to Product Page */}
      <Link href={`/product/${slug}`} className="pt-3 pb-1 block">
        <h3 className="text-sm font-semibold lowercase text-black truncate hover:underline">{title}</h3>
        <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 mt-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-bold text-black whitespace-nowrap">{salePrice}</span>
            {originalPrice && (
              <span className="text-xs text-gray-500 line-through whitespace-nowrap">{originalPrice}</span>
            )}
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <Star className="w-3 h-3 fill-black text-black shrink-0" />
            <span className="text-xs font-medium text-black whitespace-nowrap">{rating}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
