"use client";

import Link from "next/link";
import Image from "next/image";

const ShippingPromo = () => {
  return (
    <section className="bg-navy py-16">
      <div className="container-box grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <div className="text-white max-w-xl">
            <h4 className="text-sm md:text-base uppercase tracking-wide mb-2 font-medium text-gold">
              Welcome to Box & Tale!
            </h4>
            <h2 className="text-3xl md:text-4xl font-butler mb-4">
              Get Free Shipping<br />for Your First Order
            </h2>
            <p className="mb-6 text-sm md:text-base">
              Use Promo Code <span className="font-medium">MYFIRSTORDER</span>
            </p>
            <Link
              href="/build-a-box"
              className="inline-block border border-white bg-transparent hover:bg-white hover:text-navy px-6 py-2 uppercase text-sm font-medium tracking-wide transition-all"
            >
              Custom a Gift
            </Link>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <Image
            src="https://ext.same-assets.com/3111600215/1986866030.webp"
            alt="Box & Tale Free Shipping Promo"
            width={600}
            height={400}
            className="rounded-md shadow-lg w-full h-auto max-h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ShippingPromo;
