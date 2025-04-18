import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Components/Nav/Navbar";
import { Poppins } from "next/font/google";
import Footer from "./Components/Nav/Footer";
import { CartProvider } from "@/components/ui/CartContext"; // Import CartProvider

export const metadata: Metadata = {
  title: "Tadorado Fashion",
  description: "Generated by create next app",
};

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      <head>
        {/* Favicon using Firebase Storage Link */}
        <link
          rel="icon"
          type="image/png"
          href="https://firebasestorage.googleapis.com/v0/b/tadorado-tailors.firebasestorage.app/o/top%20site%20logo.png?alt=media&token=e20882bb-2c78-4d0a-bc2e-60983247da6e"
        />
      </head>
      <body className={`${poppins.className} text-slate-700`}>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}

