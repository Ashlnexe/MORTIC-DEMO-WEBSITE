"use client";
import { useState, useEffect } from "react";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { toggleCart, cartCount } = useCart();
  
  const isHome = pathname === "/";
  const shouldBeSolid = isScrolled || !isHome;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          shouldBeSolid ? "bg-white text-black border-b border-gray-200 shadow-sm" : "bg-transparent text-white"
        }`}
      >
        <div className={`w-full bg-[#1a1a1a] text-white text-xs overflow-hidden whitespace-nowrap uppercase tracking-widest flex items-center transition-all duration-300 ${
            isScrolled ? "h-0 opacity-0" : "h-10 opacity-100"
          }`}
        >
          <div className="animate-marquee inline-block w-full font-medium">
            cash on delivery available • Free shipping on orders above Rp 500.000 • cash on delivery available • Free shipping on orders above Rp 500.000
          </div>
        </div>

        <nav className="flex items-center justify-between px-4 py-4 md:px-8">
          {/* Mobile Hamburger */}
          <div className="flex md:hidden flex-shrink-0 w-[80px]">
            <Menu onClick={() => setIsMobileMenuOpen(true)} className="w-6 h-6 cursor-pointer hover:opacity-60 transition-opacity" />
          </div>

          <div className="text-xl md:text-2xl font-black uppercase tracking-tighter flex-shrink-0 flex-1 md:flex-none text-center md:text-left">
            <Link href="/">Mortic™</Link>
          </div>

          <div className="hidden md:flex items-center justify-center gap-6 md:gap-8 text-sm font-bold uppercase flex-1">
            <Link href="/shop" className="hover:opacity-60 transition-opacity">Shop</Link>
            <Link href="/customs" className="hover:opacity-60 transition-opacity">Customs</Link>
            <Link href="/collections" className="hover:opacity-60 transition-opacity">Collections</Link>
            <Link href="/about" className="hover:opacity-60 transition-opacity">About Us</Link>
            <Link href="/faqs" className="hover:opacity-60 transition-opacity">FAQs</Link>
          </div>

          <div className="flex items-center justify-end gap-5 flex-shrink-0 w-[80px] md:w-auto">
            <User className="w-5 h-5 cursor-pointer hidden md:block hover:opacity-60 transition-opacity" />
            <Search className="w-5 h-5 cursor-pointer hidden sm:block hover:opacity-60 transition-opacity" />
            
            {/* Kept original Cart logic intact */}
            <div className="relative cursor-pointer hover:opacity-60 transition-opacity" onClick={toggleCart}>
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-[100] transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <span className="text-xl font-black uppercase tracking-tighter text-black">Menu</span>
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
            <X className="w-6 h-6 text-black" />
          </button>
        </div>
        
        <div className="flex flex-col p-6 gap-6 text-3xl font-black uppercase tracking-tighter text-black">
          <Link href="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
          <Link href="/customs" onClick={() => setIsMobileMenuOpen(false)}>Customs</Link>
          <Link href="/collections" onClick={() => setIsMobileMenuOpen(false)}>Collections</Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <Link href="/faqs" onClick={() => setIsMobileMenuOpen(false)}>FAQs</Link>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 bg-gray-50 border-t border-gray-200 flex justify-around">
          <button className="flex flex-col items-center gap-2 text-xs font-bold uppercase text-black">
            <User className="w-5 h-5" /> Account
          </button>
          <button className="flex flex-col items-center gap-2 text-xs font-bold uppercase text-black">
            <Search className="w-5 h-5" /> Search
          </button>
        </div>
      </div>
    </>
  );
}
