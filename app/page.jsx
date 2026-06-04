"use client";
import { useState, useEffect } from "react";
import MorticLoader from "@/components/MorticLoader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import Newsletter from "@/components/Newsletter";
import { products } from "@/data/products";

export default function Page() {
  const [loaded, setLoaded] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hasVisited = sessionStorage.getItem("wearadhd_visited");
    if (hasVisited) {
      setLoaded(true);
    } else {
      setIsFirstVisit(true);
    }
  }, []);

  const handleLoaderDone = () => {
    sessionStorage.setItem("wearadhd_visited", "true");
    setLoaded(true);
  };

  if (!mounted) return null;

  // Pre-filter the products for the specific sections
  const ringProducts = products.filter(product => product.category === "rings");
  const keychainProducts = products.filter(product => product.category === "keychains");

  return (
    <>
      {isFirstVisit && !loaded && <MorticLoader onDone={handleLoaderDone} />}
      <div 
        style={{ 
          opacity: loaded ? 1 : 0, 
          transition: "opacity 0.6s ease",
          pointerEvents: loaded ? "auto" : "none" 
        }}
        className="min-h-screen bg-white text-black flex flex-col"
      >
        <Navbar />
        <main className="flex-grow">
          <Hero />
          
          {/* 1. New In Section */}
          <ProductSection title="New In" products={products} />

          {/* 2. Rings Section */}
          <ProductSection title="Rings" products={ringProducts} />

          {/* 3. Keychains Section */}
          <ProductSection title="Keychains" products={keychainProducts} />

          {/* 4. Best Sellers Section */}
          <ProductSection title="Best Sellers" products={products} />
          
          <Newsletter />
        </main>
      </div>
    </>
  );
}