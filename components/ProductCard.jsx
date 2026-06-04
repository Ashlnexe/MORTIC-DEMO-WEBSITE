import Link from "next/link";
import { Star } from "lucide-react";

export default function ProductCard({
  title,
  salePrice,
  originalPrice,
  rating,
  badges = [],
}) {
  return (
    <div className="flex flex-col group snap-start sm:snap-center">
      {/* Image Container with 4:5 Aspect Ratio */}
      <div className="relative w-full aspect-[4/5] bg-gray-200 overflow-hidden">
        {/* Placeholder Text */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
          Image Placeholder
        </div>

        {/* Badges */}
        {badges.length > 0 && (
          <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
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

        {/* Hover / Mobile Persistent Button */}
        <div className="absolute bottom-0 left-0 w-full p-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button className="w-full bg-black text-white text-sm font-semibold uppercase py-3 hover:bg-gray-900">
            Choose Options
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="mt-3 flex flex-col">
        {/* Strictly lowercase title */}
        <Link href="#" className="text-sm font-bold text-black lowercase mb-1 hover:underline">
          {title}
        </Link>
        
        {/* Pricing & Rating Flexbox */}
        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-black">
              {salePrice}
            </span>
            {originalPrice && (
              <span className="text-xs text-gray-500 line-through">
                {originalPrice}
              </span>
            )}
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-black text-black" />
            <span className="text-xs font-semibold">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
