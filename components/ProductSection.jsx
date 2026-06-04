import Link from "next/link";
import ProductCard from "./ProductCard";

export default function ProductSection({ title, products }) {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
      {/* Section Header */}
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight">
          {title}
        </h2>
        <Link 
          href="#" 
          className="text-sm font-semibold uppercase hover:underline underline-offset-4"
        >
          View all
        </Link>
      </div>

      {/* Product Grid / Carousel */}
      <div className="flex md:grid md:grid-cols-4 gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar pb-4 -mx-4 px-4 md:px-0 md:mx-0">
        {products.map((product, idx) => (
          <div key={idx} className="w-[65vw] md:w-auto shrink-0 snap-start">
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </section>
  );
}
