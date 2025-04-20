"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  id: number;
  image: string;
  mobileImage: string;
  title: string;
  subtitle: string;
  description?: string;
  buttonText: string;
  buttonLink: string;
  position?: "left" | "right" | "center";
  textColor?: string;
  overlayColor?: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "https://ext.same-assets.com/3111600215/1051603606.webp",
    mobileImage: "https://ext.same-assets.com/3111600215/3748035858.webp",
    title: "Create Your Own",
    subtitle: "Personalized Gift Box",
    description: "Choose The Box, Gift Items, and Card",
    buttonText: "Click Here",
    buttonLink: "/build-a-box",
    position: "right",
    textColor: "white",
    overlayColor: "bg-black/30"
  },
  {
    id: 2,
    image: "https://ext.same-assets.com/3111600215/2076982172.webp",
    mobileImage: "https://ext.same-assets.com/3111600215/2083113273.webp",
    title: "Box & Tale's",
    subtitle: "Eid Holiday Off",
    description: "Next Shipping on Monday, 7 April 2025",
    buttonText: "Custom A Gift",
    buttonLink: "/build-a-box",
    position: "left",
    textColor: "white",
    overlayColor: "bg-black/40"
  },
  {
    id: 3,
    image: "https://ext.same-assets.com/3111600215/1986866030.webp",
    mobileImage: "https://ext.same-assets.com/3111600215/4221246099.webp",
    title: "Welcome to Box & Tale!",
    subtitle: "Get Free Shipping for Your First Order",
    description: "Use Promo Code MYFIRSTORDER",
    buttonText: "Custom a Gift",
    buttonLink: "/build-a-box",
    position: "left",
    textColor: "white",
    overlayColor: "bg-black/30"
  },
  {
    id: 4,
    image: "https://ext.same-assets.com/3111600215/3681298214.webp",
    mobileImage: "https://ext.same-assets.com/3111600215/553069683.webp",
    title: "Custom a Gift,",
    subtitle: "Delivery on The Same Day",
    description: "Choose The Box, Gift Items, & Card, Place Your Orders Before 14.00 WIB.",
    buttonText: "Build a Box",
    buttonLink: "/build-a-box",
    position: "left",
    textColor: "white",
    overlayColor: "bg-black/30"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNextSlide = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  }, [isTransitioning]);

  const goToPrevSlide = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  }, [isTransitioning]);

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;

    setIsTransitioning(true);
    setCurrentSlide(index);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [goToNextSlide]);

  const slide = slides[currentSlide];

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Desktop Image */}
      <div className="hidden md:block w-full h-full">
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          priority
          sizes="100vw"
          className={`object-cover transition-all duration-700 ease-in-out ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}
        />
      </div>

      {/* Mobile Image */}
      <div className="block md:hidden w-full h-full">
        <Image
          src={slide.mobileImage || slide.image}
          alt={slide.title}
          fill
          priority
          sizes="100vw"
          className={`object-cover transition-all duration-700 ease-in-out ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}
        />
      </div>

      {/* Overlay */}
      <div className={`absolute inset-0 ${slide.overlayColor || 'bg-black/20'}`} />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className={`container-box ${
          slide.position === 'right'
            ? 'text-right flex justify-end'
            : slide.position === 'center'
              ? 'text-center flex justify-center'
              : 'text-left flex justify-start'
        }`}>
          <div className="max-w-xl p-6 sm:p-8">
            <div className={`text-${slide.textColor || 'white'}`}>
              <h3 className="text-lg md:text-xl font-light mb-2">{slide.title}</h3>
              <h2 className="text-3xl md:text-5xl font-butler mb-4">{slide.subtitle}</h2>
              {slide.description && (
                <p className="mb-6 font-light text-sm md:text-base">{slide.description}</p>
              )}
              <Link
                href={slide.buttonLink}
                className="inline-block border border-white bg-transparent hover:bg-white hover:text-navy px-6 py-2 uppercase text-sm font-medium tracking-wide transition-all"
              >
                {slide.buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 w-10 h-10 rounded-full flex items-center justify-center text-white transition"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 w-10 h-10 rounded-full flex items-center justify-center text-white transition"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-0 right-0">
        <div className="flex justify-center gap-2">
          {slides.map((slide) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(slide.id - 1)}
              className={`w-2 h-2 rounded-full transition-all ${
                slide.id - 1 === currentSlide ? 'bg-white w-6' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${slide.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
