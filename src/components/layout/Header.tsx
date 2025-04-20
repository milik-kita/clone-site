"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ShoppingCart, ChevronDown, ChevronRight } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!aboutDropdownOpen);
  };

  return (
    <header className="w-full">
      {/* Top announcements */}
      <div className="bg-cream text-navy text-center py-1 text-sm">
        <p>FREE SHIPPING FOR YOUR FIRST ORDER!</p>
      </div>

      {/* Secondary announcement */}
      <div className="bg-brown text-white text-center py-2 text-sm">
        <p>CHOOSE THE BOX, GIFT ITEMS, & CARD | <Link href="/build-a-box" className="underline font-medium">BUILD A BOX</Link></p>
      </div>

      {/* Holiday announcement */}
      <div className="bg-navy text-white text-center py-2 text-sm">
        <p>EID HOLIDAY OFF 28 MAR - 6 APR 2025 | NEXT SHIPPING 7 APR 2025</p>
      </div>

      {/* Main navigation */}
      <div className="border-b border-gray-200 py-4">
        <div className="container-box flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="block w-28">
            <Image
              src="/images/logo.png"
              alt="Box and Tale - Logo"
              width={112}
              height={70}
              className="h-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/build-a-box" className="uppercase text-sm font-medium tracking-wide hover:text-brown">
              BUILD A BOX
            </Link>
            <Link href="/premade" className="uppercase text-sm font-medium tracking-wide hover:text-brown">
              PREMADE
            </Link>
            <Link href="/corporate-gifts" className="uppercase text-sm font-medium tracking-wide hover:text-brown">
              CORPORATE GIFTS
            </Link>
            <Link href="/blog" className="uppercase text-sm font-medium tracking-wide hover:text-brown">
              BLOG
            </Link>
            <div className="relative">
              <button
                onClick={toggleAboutDropdown}
                className="flex items-center uppercase text-sm font-medium tracking-wide hover:text-brown focus:outline-none"
              >
                ABOUT US {aboutDropdownOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </button>

              {aboutDropdownOpen && (
                <div className="absolute z-10 mt-2 w-48 bg-white shadow-lg rounded-sm border border-gray-100">
                  <Link href="/about-us" className="block px-4 py-2 text-sm hover:bg-cream">
                    About Us
                  </Link>
                  <Link href="/contact-us" className="block px-4 py-2 text-sm hover:bg-cream">
                    Contact Us
                  </Link>
                  <Link href="/faq" className="block px-4 py-2 text-sm hover:bg-cream">
                    FAQ
                  </Link>
                  <Link href="/privacy-policy" className="block px-4 py-2 text-sm hover:bg-cream">
                    Privacy Policy
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <Link href="/login" className="hidden md:block text-sm hover:text-brown">
              Login
            </Link>
            <Link href="/register" className="hidden md:block text-sm hover:text-brown">
              Register
            </Link>
            <Link href="/cart" className="text-navy hover:text-brown">
              <ShoppingCart size={20} />
            </Link>

            {/* Mobile menu button */}
            <button className="md:hidden" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col py-4">
            <Link
              href="/build-a-box"
              className="px-6 py-2 text-sm font-medium hover:bg-cream"
              onClick={() => setMobileMenuOpen(false)}
            >
              BUILD A BOX
            </Link>
            <Link
              href="/premade"
              className="px-6 py-2 text-sm font-medium hover:bg-cream"
              onClick={() => setMobileMenuOpen(false)}
            >
              PREMADE
            </Link>
            <Link
              href="/corporate-gifts"
              className="px-6 py-2 text-sm font-medium hover:bg-cream"
              onClick={() => setMobileMenuOpen(false)}
            >
              CORPORATE GIFTS
            </Link>
            <Link
              href="/blog"
              className="px-6 py-2 text-sm font-medium hover:bg-cream"
              onClick={() => setMobileMenuOpen(false)}
            >
              BLOG
            </Link>

            <div className="px-6 py-2">
              <button
                onClick={toggleAboutDropdown}
                className="flex items-center text-sm font-medium focus:outline-none"
              >
                ABOUT US {aboutDropdownOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </button>

              {aboutDropdownOpen && (
                <div className="ml-4 mt-2 border-l border-gray-200 pl-4">
                  <Link
                    href="/about-us"
                    className="block py-2 text-sm hover:text-brown"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/contact-us"
                    className="block py-2 text-sm hover:text-brown"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/faq"
                    className="block py-2 text-sm hover:text-brown"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    FAQ
                  </Link>
                  <Link
                    href="/privacy-policy"
                    className="block py-2 text-sm hover:text-brown"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Privacy Policy
                  </Link>
                </div>
              )}
            </div>

            <div className="mt-4 px-6 py-2 border-t border-gray-100 flex space-x-4">
              <Link
                href="/login"
                className="text-sm hover:text-brown"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/register"
                className="text-sm hover:text-brown"
                onClick={() => setMobileMenuOpen(false)}
              >
                Register
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
