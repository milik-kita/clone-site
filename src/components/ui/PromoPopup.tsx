"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

const PromoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Show popup after 3 seconds of page load
  useEffect(() => {
    const timer = setTimeout(() => {
      // Check if user has already closed the popup in this session
      if (!sessionStorage.getItem("popup_closed")) {
        setIsOpen(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    // Set a session storage flag to keep popup closed
    sessionStorage.setItem("popup_closed", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
      <div className="bg-white max-w-4xl w-full rounded-sm shadow-lg relative animate-fadeIn">
        {/* Close button */}
        <button
          onClick={closePopup}
          className="absolute top-2 right-2 p-1 text-gray-500 hover:text-gray-700 z-10"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Popup Header */}
          <div className="p-6 md:p-8 text-center md:text-left">
            <h3 className="font-butler text-lg text-navy">The Easiest Way to Custom a Gift</h3>
            <h2 className="font-butler text-2xl md:text-3xl mb-4 text-navy">Get Free Shipping for Your First Order!</h2>

            <div className="flex flex-col md:flex-row gap-3 mt-6">
              <Link
                href="/build-a-box"
                className="flex flex-col items-center border border-brown hover:bg-brown hover:text-white text-brown p-4 transition-colors rounded-sm"
                onClick={closePopup}
              >
                <Image
                  src="https://ext.same-assets.com/3111600215/3263479327.webp"
                  alt="Build a Box - Custom Gift"
                  width={200}
                  height={150}
                  className="h-24 object-contain mb-2"
                />
                <span className="text-sm font-medium">Custom a Gift</span>
              </Link>

              <Link
                href="/premade"
                className="flex flex-col items-center border border-brown hover:bg-brown hover:text-white text-brown p-4 transition-colors rounded-sm"
                onClick={closePopup}
              >
                <Image
                  src="https://ext.same-assets.com/3111600215/2657943788.webp"
                  alt="Premade Box - Lihat Gift Box dan Kado Pilihan Kami"
                  width={200}
                  height={150}
                  className="h-24 object-contain mb-2"
                />
                <span className="text-sm font-medium">Shop Ready-Made</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;
