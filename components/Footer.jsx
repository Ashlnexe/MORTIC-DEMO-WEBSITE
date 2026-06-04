import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-black pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        {/* Brand Info */}
        <div className="flex flex-col">
          <h3 className="font-bold text-2xl uppercase tracking-tighter mb-4">WearADHD</h3>
          <p className="text-sm text-gray-600 max-w-xs">
            A streetwear brutalism concept. Challenging the norms of fashion through pure monochrome aesthetics, sharp corners, and unapologetic design.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col">
          <h4 className="font-bold uppercase tracking-widest mb-4 text-sm">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm font-medium">
            <Link href="#" className="hover:underline w-fit">Shop</Link>
            <Link href="#" className="hover:underline w-fit">Women</Link>
            <Link href="#" className="hover:underline w-fit">Basics</Link>
          </div>
        </div>

        {/* Help & Policies */}
        <div className="flex flex-col">
          <h4 className="font-bold uppercase tracking-widest mb-4 text-sm">Help</h4>
          <div className="flex flex-col gap-2 text-sm font-medium">
            <Link href="#" className="hover:underline w-fit">Return Policy</Link>
            <Link href="#" className="hover:underline w-fit">FAQs</Link>
            <Link href="#" className="hover:underline w-fit">Contact Us</Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-gray-500 uppercase">
        <p>© {new Date().getFullYear()} WearADHD Clone. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-black">Privacy</Link>
          <Link href="#" className="hover:text-black">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
