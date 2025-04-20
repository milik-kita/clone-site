"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
    // Show success message or toast notification
  };

  return (
    <footer className="bg-gray-light pt-12 pb-6">
      <div className="container-box">
        {/* Contact Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-navy mb-4">For assistance, please contact us through</h4>
            <a
              href="https://api.whatsapp.com/send?phone=6281311033691&text=Hi%20Box%20and%20Tale,%20my%20special%20day%20is%20coming.%20Please%20help%20me%20create%20a%20gift.%20:%29%20"
              className="flex items-center text-gray-dark hover:text-brown"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="font-medium">081311033691</span>
            </a>
            <a
              href="http://line.me/ti/p/@boxandtale"
              className="flex items-center text-gray-dark hover:text-brown"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="font-medium">@boxandtale</span>
            </a>

            <h4 className="text-lg font-medium text-navy mt-6 mb-4">Follow our social media</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/boxandtale"
                className="text-gray-dark hover:text-brown"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/Box-and-Tale-824210911112610"
                className="text-gray-dark hover:text-brown"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCB7uv1TyPsTl9iOdcXXmaLw"
                className="text-gray-dark hover:text-brown"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/pt-kisah-menara-abadi-box-and-tale/"
                className="text-gray-dark hover:text-brown"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              <Link href="/build-a-box" className="text-navy font-medium hover:text-brown">
                BUILD A BOX
              </Link>
              <Link href="/premade" className="text-navy font-medium hover:text-brown">
                PREMADE
              </Link>
              <Link href="/corporate-gifts" className="text-navy font-medium hover:text-brown">
                CORPORATE
              </Link>
            </div>

            <div className="flex flex-col space-y-2 mt-6">
              <Link href="/faq" className="text-navy font-medium hover:text-brown">
                FAQ
              </Link>
              <Link href="/privacy-policy" className="text-navy font-medium hover:text-brown">
                PRIVACY POLICY
              </Link>
            </div>

            <div className="flex space-x-4 mt-6">
              <Link href="/en" className="text-navy font-medium hover:text-brown">
                EN
              </Link>
              <span className="text-navy">|</span>
              <Link href="/id" className="text-navy font-medium hover:text-brown">
                ID
              </Link>
            </div>
          </div>

          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <div className="w-32">
              <Image
                src="/images/logo.png"
                alt="Box and Tale - Logo"
                width={130}
                height={81}
                className="h-auto"
              />
              <p className="text-sm text-center mt-2 text-gray-dark">
                by <strong>PT KISAH MENARA ABADI</strong>
              </p>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-lg font-medium text-navy mb-4">JOIN OUR MAILING LIST</h4>
            <p className="text-sm text-gray-dark mb-4">
              Get News and Updates<br />
              from Box & Tale
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex flex-col">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="px-3 py-2 border border-gray rounded-sm focus:outline-none focus:border-brown text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brown text-white py-2 text-sm font-medium uppercase hover:bg-brown-dark transition-colors"
              >
                JOIN
              </button>
            </form>
          </div>
        </div>

        {/* Mobile Chat Button */}
        <div className="fixed bottom-4 right-4 z-50 md:hidden">
          <a
            href="https://boxandtale.com/whatsapp-form"
            className="bg-teal text-white rounded-full px-4 py-2 flex items-center justify-center shadow-lg"
          >
            Chat
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
