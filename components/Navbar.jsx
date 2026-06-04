import { Menu, Search, ShoppingBag, User } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white flex flex-col">
      {/* Announcement Bar */}
      <div className="bg-black text-white py-2 overflow-hidden whitespace-nowrap text-xs sm:text-sm font-medium tracking-wide uppercase">
        <div className="flex animate-marquee min-w-full">
          <span className="shrink-0 px-4">
            CASH ON DELIVERY AVAILABLE • FREE SHIPPING ON ORDERS ABOVE ₹2990
          </span>
          <span className="shrink-0 px-4">
            CASH ON DELIVERY AVAILABLE • FREE SHIPPING ON ORDERS ABOVE ₹2990
          </span>
          <span className="shrink-0 px-4">
            CASH ON DELIVERY AVAILABLE • FREE SHIPPING ON ORDERS ABOVE ₹2990
          </span>
          <span className="shrink-0 px-4">
            CASH ON DELIVERY AVAILABLE • FREE SHIPPING ON ORDERS ABOVE ₹2990
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 border-b border-gray-200">
        {/* Mobile Menu & Logo */}
        <div className="flex items-center gap-4 md:w-1/3">
          <button className="md:hidden p-1 -ml-1">
            <Menu className="w-6 h-6 text-black" />
          </button>
          <Link href="/" className="font-bold text-2xl sm:text-3xl tracking-tighter uppercase hidden md:block">
            WearADHD
          </Link>
        </div>

        {/* Mobile Logo */}
        <div className="md:hidden flex-1 text-center flex justify-center">
          <Link href="/" className="font-bold text-2xl tracking-tighter uppercase">
            WearADHD
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center justify-center gap-8 w-1/3 text-sm font-semibold uppercase tracking-wider">
          <Link href="#" className="hover:underline underline-offset-4">Shop</Link>
          <Link href="#" className="hover:underline underline-offset-4">Clothing</Link>
          <Link href="#" className="hover:underline underline-offset-4">Collections</Link>
          <Link href="#" className="hover:underline underline-offset-4">About Us</Link>
          <Link href="#" className="hover:underline underline-offset-4">FAQs</Link>
        </div>

        {/* Icons */}
        <div className="flex items-center justify-end gap-4 sm:gap-6 md:w-1/3">
          <button className="p-1 hidden sm:block">
            <User className="w-5 h-5 text-black" />
          </button>
          <button className="p-1">
            <Search className="w-5 h-5 text-black" />
          </button>
          <button className="p-1 relative">
            <ShoppingBag className="w-5 h-5 text-black" />
            <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
              0
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
