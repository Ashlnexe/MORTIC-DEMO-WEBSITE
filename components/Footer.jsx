"use client";
import Link from "next/link";
import Image from "next/image";
import { Play, MoreHorizontal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1a1a1a] text-white overflow-hidden flex flex-col mt-auto">
      
      {/* 1. Trust Signals Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-gray-800">
        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-800 flex flex-col items-center text-center justify-center">
          <h4 className="text-sm font-bold uppercase tracking-wider mb-2">Customer Service</h4>
          <p className="text-sm text-gray-400">we're real people. we reply. we care.</p>
        </div>
        <div className="p-8 md:p-12 border-b md:border-b-0 lg:border-r border-gray-800 flex flex-col items-center text-center justify-center">
          <h4 className="text-sm font-bold uppercase tracking-wider mb-2">Fast Dispatch</h4>
          <p className="text-sm text-gray-400">orders are packed and shipped within 24-48 hours.</p>
        </div>
        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-800 flex flex-col items-center text-center justify-center">
          <h4 className="text-sm font-bold uppercase tracking-wider mb-2">Trusted by 50K+</h4>
          <p className="text-sm text-gray-400">50,000 customers can't be wrong.</p>
        </div>
        <div className="p-8 md:p-12 flex flex-col items-center text-center justify-center">
          <h4 className="text-sm font-bold uppercase tracking-wider mb-2">Secure Payment</h4>
          <p className="text-sm text-gray-400">your payment information is processed securely.</p>
        </div>
      </div>

      {/* 2. Massive Typography Row */}
      <div className="w-full border-b border-gray-800 overflow-hidden flex items-center justify-center py-6 md:py-10">
        {/* text-[18vw] scales the text dynamically based on screen width */}
        <h1 className="text-[18vw] md:text-[15vw] font-black tracking-tighter leading-none whitespace-nowrap select-none">
          Mortic™
        </h1>
      </div>

      {/* 3. Main Footer Content */}
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 py-12 md:py-16 flex flex-col lg:flex-row gap-16 lg:gap-8 justify-between">
        
        {/* Left Side: Newsletter & Spotify */}
        <div className="w-full lg:w-[45%] flex flex-col gap-12">
          
          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-2">Newsletter</h4>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">Subscribe and get 20% off</h2>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input 
                type="email" 
                placeholder="E-MAIL" 
                className="flex-1 bg-white text-black px-4 py-3 rounded-md text-sm font-bold placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-gray-400"
              />
              <button 
                type="button" 
                className="bg-white text-black px-8 py-3 rounded-md text-sm font-bold uppercase hover:bg-gray-200 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4 max-w-sm">
              *cannot be combined with other promotions. minimum purchase amount (Rp 250.000)
            </p>
          </div>

          {/* Spotify "On Rotation" Widget */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
              <span className="text-xs font-bold uppercase tracking-widest">On Rotation</span>
            </div>
            
            <div className="bg-[#111] border border-gray-800 rounded-xl p-4 flex flex-col gap-4 max-w-sm w-full">
              <div className="flex gap-4 items-center">
                <div className="w-16 h-16 bg-gray-800 rounded relative shrink-0 overflow-hidden">
                   {/* Fallback gray box if image isn't ready */}
                  <div className="absolute inset-0 bg-gray-700 flex items-center justify-center text-[10px] text-gray-500">COVER</div>
                </div>
                <div className="flex-1 overflow-hidden">
                  <div className="flex justify-between items-start">
                    <h4 className="text-white font-bold text-sm truncate">Type Shit</h4>
                    {/* Spotify Logo Icon */}
                    <svg className="w-5 h-5 text-white shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.54.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15.001 10.62 18.661 12.9c.42.24.6.84.3 1.14zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.239.54-.959.72-1.56.3z"/>
                    </svg>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="bg-gray-300 text-black text-[9px] font-bold px-1 rounded-sm">E</span>
                    <p className="text-gray-400 text-xs truncate">Future, Metro Boomin, Travis Scott</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="h-1 bg-gray-600 rounded-full flex-1 relative">
                  <div className="absolute top-0 left-0 h-full w-1/3 bg-white rounded-full"></div>
                </div>
                <span className="text-xs text-gray-400 font-mono">03:48</span>
                <MoreHorizontal className="w-5 h-5 text-gray-400" />
                <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 hover:scale-105 transition-transform">
                  <Play className="w-4 h-4 text-black fill-black ml-1" />
                </button>
              </div>
            </div>
            
            <div className="flex gap-4 mt-3 text-xs text-gray-500 font-mono">
              <span>thu · jun 4 · 4:29 pm gmt+5:30</span>
              <Link href="#" className="underline hover:text-white transition-colors">full tape →</Link>
            </div>
          </div>
        </div>

        {/* Right Side: Link Columns */}
        <div className="w-full lg:w-[50%] grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors lowercase">home</Link>
            <Link href="/rings" className="text-sm font-medium text-gray-300 hover:text-white transition-colors lowercase">rings</Link>
            <Link href="/keychains" className="text-sm font-medium text-gray-300 hover:text-white transition-colors lowercase">keychains</Link>
            <Link href="/customs" className="text-sm font-medium text-gray-300 hover:text-white transition-colors lowercase">customs</Link>
            <Link href="/collections" className="text-sm font-medium text-gray-300 hover:text-white transition-colors lowercase">collections</Link>
            <Link href="/contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors lowercase">contact</Link>
          </div>
          <div className="flex flex-col gap-4">
            <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors lowercase">about us</Link>
            <Link href="/faq" className="text-sm font-medium text-gray-300 hover:text-white transition-colors lowercase">faq</Link>
            <Link href="/careers" className="text-sm font-medium text-gray-300 hover:text-white transition-colors lowercase">careers</Link>
            <Link href="/partnerships" className="text-sm font-medium text-gray-300 hover:text-white transition-colors lowercase">partnerships/licensing</Link>
            <Link href="/legal" className="text-sm font-medium text-gray-300 hover:text-white transition-colors lowercase">legal</Link>
            <Link href="/terms" className="text-sm font-medium text-gray-300 hover:text-white transition-colors lowercase">terms of service</Link>
            <Link href="/privacy" className="text-sm font-medium text-gray-300 hover:text-white transition-colors lowercase">privacy policy</Link>
            <Link href="/returns" className="text-sm font-medium text-gray-300 hover:text-white transition-colors lowercase">return policy</Link>
          </div>
          <div className="flex flex-col gap-4">
            <Link href="/helpdesk" className="text-sm font-medium text-gray-300 hover:text-white transition-colors lowercase">helpdesk</Link>
            <Link href="/track" className="text-sm font-medium text-gray-300 hover:text-white transition-colors lowercase">track order</Link>
            <Link href="/account" className="text-sm font-medium text-gray-300 hover:text-white transition-colors lowercase">your orders</Link>
            <Link href="/exchange" className="text-sm font-medium text-gray-300 hover:text-white transition-colors lowercase">exchange</Link>
          </div>
        </div>
      </div>

      {/* 4. Bottom Copyright Row */}
      <div className="w-full border-t border-gray-800 px-4 md:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-500 font-bold tracking-wider uppercase">
          © 2026 - mortic
        </p>
        <p className="text-xs text-gray-500 text-center md:text-right max-w-2xl">
          mortic and all related logos are trademarks or registered trademarks of mortic in indonesia and/or other countries. all other trademarks are the property of their respective owners.
        </p>
      </div>

    </footer>
  );
}
