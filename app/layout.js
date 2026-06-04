import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";

import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mortic™",
  description: "Streetwear brand.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="flex flex-col min-h-screen bg-white text-black font-sans">
        <CartProvider>
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}

