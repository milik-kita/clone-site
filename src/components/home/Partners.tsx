"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

interface Partner {
  id: number;
  name: string;
  logo: string;
}

const partners: Partner[] = [
  {
    id: 1,
    name: "Fujifilm",
    logo: "https://ext.same-assets.com/3111600215/1041457790.png"
  },
  {
    id: 2,
    name: "Corkcicle",
    logo: "https://ext.same-assets.com/3111600215/1911294031.png"
  },
  {
    id: 3,
    name: "The Face Shop",
    logo: "https://ext.same-assets.com/3111600215/3481581361.png"
  },
  {
    id: 4,
    name: "Sony",
    logo: "https://ext.same-assets.com/3111600215/3101512369.png"
  },
  {
    id: 5,
    name: "Erajaya",
    logo: "https://ext.same-assets.com/3111600215/3889961782.png"
  },
  {
    id: 6,
    name: "Parker",
    logo: "https://ext.same-assets.com/3111600215/4123215276.png"
  },
  {
    id: 7,
    name: "Partner 7",
    logo: "https://ext.same-assets.com/3111600215/222665517.png"
  },
  {
    id: 8,
    name: "Partner 8",
    logo: "https://ext.same-assets.com/3111600215/2720756095.png"
  },
  {
    id: 9,
    name: "Partner 9",
    logo: "https://ext.same-assets.com/3111600215/2115351364.png"
  },
  {
    id: 10,
    name: "Partner 10",
    logo: "https://ext.same-assets.com/3111600215/97105461.png"
  },
  {
    id: 11,
    name: "Partner 11",
    logo: "https://ext.same-assets.com/3111600215/1152598838.png"
  }
];

const Partners = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll effect for partners
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;

    const scroll = () => {
      if (!scrollContainer) return;

      scrollPosition += 0.5;

      // Reset scroll position when it reaches the end to create a continuous loop
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container-box">
        <h2 className="text-2xl font-butler text-center mb-12">Our Partners</h2>

        <div className="relative overflow-hidden">
          {/* Gradient overlay on left */}
          <div className="absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-white to-transparent" />

          {/* Scrolling partners container */}
          <div
            ref={scrollRef}
            className="flex items-center space-x-12 overflow-x-auto pb-6 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Duplicate partners for continuous scrolling effect */}
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 w-32 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="h-12 object-contain"
                />
              </div>
            ))}
          </div>

          {/* Gradient overlay on right */}
          <div className="absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-white to-transparent" />
        </div>

        <p className="text-center mt-6 text-gray-dark text-sm">and more...</p>
      </div>
    </section>
  );
};

export default Partners;
