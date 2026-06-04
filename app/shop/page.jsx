"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import QuickViewModal from "@/components/QuickViewModal";
import { products as allProducts } from "@/data/products";

export default function ShopPage() {
  const [filter, setFilter] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts = filter === "all" ? allProducts : allProducts.filter(p => p.category === filter);

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header & Filters */}
      <div className="pt-24 pb-8 px-4 md:px-8 border-b border-gray-200 sticky top-0 bg-white z-30">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6 text-black">All Products</h1>
        <div className="flex gap-4">
          {["all", "rings", "keychains"].map((cat) => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs font-bold uppercase tracking-widest pb-1 border-b-2 transition-colors ${filter === cat ? "border-black text-black" : "border-transparent text-gray-400 hover:text-black"}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="px-4 md:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onQuickView={handleQuickView} />
          ))}
        </div>
      </div>

      <QuickViewModal product={selectedProduct} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}

// trigger rebuild
