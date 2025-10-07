// src/app/layout.tsx
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Primary fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Surosh Travels Ltd",
  description: "Your journey, our priority.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="scroll-smooth antialiased transition-colors duration-500 text-dark-gray bg-white dark:text-white dark:bg-navy"
    >
      <body
        className={`${inter.variable} ${poppins.variable} font-sans min-h-screen flex flex-col`}
      >
        {/* Global Navbar */}
        <header className="w-full z-50 sticky top-0 bg-navy dark:bg-dark-gray shadow-md">
          <Navbar />
        </header>

        {/* Main content */}
        <main className="flex-1 w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 transition-colors duration-300">
          {children}
        </main>

        {/* Footer */}
        <footer className="w-full bg-navy dark:bg-dark-gray text-white dark:text-silver-gray border-t border-silver-gray/20">
          <Footer />
        </footer>

        {/* Portal root for modals, notifications, etc. */}
        <div id="portal-root" />
      </body>
    </html>
  );
}
