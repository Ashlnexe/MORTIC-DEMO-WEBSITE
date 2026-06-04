"use client";
import { useState, useEffect, useRef } from "react";
import { Menu, Search, ShoppingBag, User, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef(null);
  
  const pathname = usePathname();
  const { toggleCart, cartCount } = useCart();
  
  const isHome = pathname === "/";
  const shouldBeSolid = isScrolled || !isHome;

  // Track scroll position for navbar color change
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when ANY modal is open
  useEffect(() => {
    if (isMobileMenuOpen || isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen, isSearchOpen]);

  // Autofocus the search input when it opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current.focus(), 100);
    }
  }, [isSearchOpen]);

  const openSearch = () => {
    setIsMobileMenuOpen(false); // Close mobile menu if it was open
    setIsSearchOpen(true);
  };

  return (
    <>
      {/* ========================================== */}
      {/* MAIN NAVBAR                                */}
      {/* ========================================== */}
      <header className={`fixed top-0 left-0 w-full z-40 transition-colors duration-300 ${
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
          </div>

          <div className="flex items-center justify-end gap-5 flex-shrink-0 w-[80px] md:w-auto">
            <User className="w-5 h-5 cursor-pointer hidden md:block hover:opacity-60 transition-opacity" />
            <Search onClick={openSearch} className="w-5 h-5 cursor-pointer hidden sm:block hover:opacity-60 transition-opacity" />
            
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

      {/* ========================================== */}
      {/* MOBILE MENU DRAWER                         */}
      {/* ========================================== */}
      <div 
        className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
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
          <button className="flex flex-col items-center gap-2 text-xs font-bold uppercase text-black hover:opacity-60 transition-opacity">
            <User className="w-5 h-5" /> Account
          </button>
          <button onClick={openSearch} className="flex flex-col items-center gap-2 text-xs font-bold uppercase text-black hover:opacity-60 transition-opacity">
            <Search className="w-5 h-5" /> Search
          </button>
        </div>
      </div>

      {/* ========================================== */}
      {/* FULL SCREEN SEARCH TAKEOVER                */}
      {/* ========================================== */}
      <div 
        className={`fixed inset-0 bg-white z-[100] transform transition-transform duration-500 ease-in-out flex flex-col ${
          isSearchOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Search Header */}
        <div className="flex justify-between items-center p-4 md:p-8">
          <span className="text-xl md:text-2xl font-black uppercase tracking-tighter text-black">Search</span>
          <button onClick={() => setIsSearchOpen(false)} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
            <X className="w-6 h-6 text-black" />
          </button>
        </div>

        {/* Search Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-8 max-w-5xl mx-auto w-full -mt-20">
          
          <form 
            className="w-full relative group" 
            onSubmit={(e) => { e.preventDefault(); /* Handle search logic here */ }}
          >
            <input
              ref={searchInputRef}
              type="text"
              placeholder="WHAT ARE YOU LOOKING FOR?"
              className="w-full text-2xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-black border-b-[3px] border-gray-300 focus:border-black py-4 bg-transparent outline-none placeholder:text-gray-300 transition-colors"
            />
            <button type="submit" className="absolute right-0 bottom-4 md:bottom-6 text-gray-300 group-focus-within:text-black transition-colors hover:scale-110 transform duration-200">
               <ArrowRight className="w-8 h-8 md:w-12 md:h-12" />
            </button>
          </form>

          {/* Popular Searches */}
          <div className="w-full mt-16 flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Popular Searches</span>
            <div className="flex flex-wrap gap-3">
              {['blond ring', 'audi quattro', 'porsche 911', 'skyline gtr', 'deadpool combo'].map((term) => (
                <button 
                  key={term} 
                  onClick={() => {
                    if(searchInputRef.current) {
                       searchInputRef.current.value = term;
                       searchInputRef.current.focus();
                    }
                  }}
                  className="px-6 py-3 border border-gray-200 text-xs md:text-sm font-bold uppercase text-black hover:border-black hover:bg-gray-50 transition-colors rounded-full"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
