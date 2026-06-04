import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-[calc(100vh-64px)] flex items-center justify-center bg-gray-200">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm md:text-base">
        Image Placeholder (Hero)
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-white text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8 lowercase">
          spring/summer
        </h1>
        <Link 
          href="#"
          className="bg-transparent border border-white text-white px-8 py-3 text-sm font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300"
        >
          Shop Collection
        </Link>
      </div>
    </section>
  );
}
