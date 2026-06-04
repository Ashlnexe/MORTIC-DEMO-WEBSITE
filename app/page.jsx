"use client";
import { useState, useEffect } from "react";
import MorticLoader from "@/components/MorticLoader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const dummyProducts = [
  {
    title: "adults are talking oversized zip-up hoodie",
    salePrice: "₹ 1,699.00",
    originalPrice: "₹ 2,199.00",
    rating: "4.7",
    badges: ["NEW IN", "SAVE 20%"]
  },
  {
    title: "music money fashion waffle oversized full sleeve",
    salePrice: "₹ 1,299.00",
    originalPrice: "",
    rating: "4.5",
    badges: ["BESTSELLER"]
  },
  {
    title: "brain dead heavyweight oversized tee",
    salePrice: "₹ 999.00",
    originalPrice: "₹ 1,499.00",
    rating: "4.8",
    badges: ["LAST FEW SIZES"]
  },
  {
    title: "chaos theory distressed knit sweater",
    salePrice: "₹ 2,499.00",
    originalPrice: "",
    rating: "4.9",
    badges: ["NEW IN"]
  },
  {
    title: "no sleep club washed vintage tee",
    salePrice: "₹ 1,099.00",
    originalPrice: "₹ 1,599.00",
    rating: "4.6",
    badges: ["RESTOCKED"]
  },
  {
    title: "anti-social heavyweight cargo pants",
    salePrice: "₹ 2,899.00",
    originalPrice: "₹ 3,499.00",
    rating: "4.4",
    badges: []
  },
  {
    title: "street rat acid wash boxy tee",
    salePrice: "₹ 1,199.00",
    originalPrice: "",
    rating: "4.7",
    badges: ["BESTSELLER"]
  },
  {
    title: "underground culture zip hoodie",
    salePrice: "₹ 1,899.00",
    originalPrice: "₹ 2,499.00",
    rating: "4.9",
    badges: ["SAVE 25%"]
  }
];

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

  // Prevent hydration mismatch by not rendering anything until mounted
  if (!mounted) return null;

  return (
    <>
      {isFirstVisit && !loaded && <MorticLoader onDone={handleLoaderDone} />}
      <div 
        style={{ 
          opacity: loaded ? 1 : 0, 
          transition: "opacity 0.6s ease",
          pointerEvents: loaded ? "auto" : "none" 
        }}
        className="min-h-screen bg-white text-black"
      >
        <Navbar />
        <main>
          <Hero />
          <ProductSection title="New In" products={dummyProducts.slice(0, 4)} />
          <ProductSection title="Save on Bundles" products={dummyProducts.slice(4, 8)} />
          <ProductSection title="End of Season Sale" products={dummyProducts.slice(2, 6)} />
          <ProductSection title="Best Sellers" products={dummyProducts.slice(0, 8).reverse().slice(0, 4)} />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </>
  );
}
 