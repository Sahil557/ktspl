'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when changing pages
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Function to determine if a link is active
  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <div className="sticky top-0 bg-primary z-50">
      <header className="mx-auto max-w-[1216px] w-full py-4 sm:py-6">
        <div className="flex items-center justify-between px-4">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={142} height={51} className="max-md:w-[80px]" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-12 ml-auto">
            <Link
              href="/"
              className={`transition-colors ${isActive('/') ? 'text-[#e6b800]' : 'text-white hover:text-[#e6b800]'}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`transition-colors ${isActive('/about') ? 'text-[#e6b800]' : 'text-white hover:text-[#e6b800]'}`}
            >
              About Us
            </Link>
            <Link
              href="/projects"
              className={`transition-colors ${isActive('/projects') ? 'text-[#e6b800]' : 'text-white hover:text-[#e6b800]'}`}
            >
              Key Projects
            </Link>
            <Link
              href="/services"
              className={`transition-colors ${isActive('/services') ? 'text-[#e6b800]' : 'text-white hover:text-[#e6b800]'}`}
            >
              Services
            </Link>
            <Link
              href="/products"
              className={`transition-colors ${isActive('/products') ? 'text-[#e6b800]' : 'text-white hover:text-[#e6b800]'}`}
            >
              Products
            </Link>
            <Link
              href="/testimonials"
              className={`transition-colors ${isActive('/testimonials') ? 'text-[#e6b800]' : 'text-white hover:text-[#e6b800]'}`}
            >
              Testimonials
            </Link>
            <Link
              href="/contact"
              className={`transition-colors ${isActive('/contact') ? 'text-[#e6b800]' : 'text-white hover:text-[#e6b800]'}`}
            >
              Contact Us
            </Link>
          </nav>
          <div className="block ml-auto xl:ml-8">
            <Link
              href="/get-started"
              className="bg-[#e6b800] hover:bg-[#d4a900] text-[#0a0a3c] font-medium px-4 py-2 rounded-md transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden ml-3">
            <button onClick={toggleMenu} className="text-white focus:outline-none p-1" aria-label="Toggle menu">
              {isMenuOpen ? (
                /* Close (X) icon when menu is open */
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                /* Hamburger icon when menu is closed */
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-14 md:top-20 w-full z-20 xl:hidden bg-[#0a0a3c] border-t border-gray-700 mt-2">
            <div className="container mx-auto px-4 py-3 space-y-2">
              <Link
                href="/"
                className={`block py-2 transition-colors ${isActive('/') ? 'text-[#e6b800]' : 'text-white hover:text-[#e6b800]'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`block py-2 transition-colors ${isActive('/about') ? 'text-[#e6b800]' : 'text-white hover:text-[#e6b800]'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/projects"
                className={`block py-2 transition-colors ${isActive('/projects') ? 'text-[#e6b800]' : 'text-white hover:text-[#e6b800]'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Key Projects
              </Link>
              <Link
                href="/services"
                className={`block py-2 transition-colors ${isActive('/services') ? 'text-[#e6b800]' : 'text-white hover:text-[#e6b800]'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/products"
                className={`block py-2 transition-colors ${isActive('/products') ? 'text-[#e6b800]' : 'text-white hover:text-[#e6b800]'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/testimonials"
                className={`block py-2 transition-colors ${isActive('/testimonials') ? 'text-[#e6b800]' : 'text-white hover:text-[#e6b800]'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="/contact"
                className={`block py-2 transition-colors ${isActive('/contact') ? 'text-[#e6b800]' : 'text-white hover:text-[#e6b800]'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}