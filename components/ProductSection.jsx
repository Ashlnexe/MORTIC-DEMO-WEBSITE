"use client";
import Link from "next/link";
import { useState } from "react";
import ProductCard from "./ProductCard";
import QuickViewModal from "./QuickViewModal";

export default function ProductSection({ title, products }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <section className="w-full py-12 px-4 md:px-8 border-b border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-black">{title}</h2>
        <Link href="#" className="text-sm font-bold underline underline-offset-4 hover:text-gray-600 text-black">
          View all
        </Link>
      </div>

      <div className="flex md:grid md:grid-cols-4 gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 -mx-4 px-4 md:px-0 md:mx-0">
        {products.map((product, idx) => (
          <ProductCard 
            key={idx} 
            product={product} 
            onQuickView={handleQuickView} 
          />
        ))}
      </div>

      <QuickViewModal 
        product={selectedProduct} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}
