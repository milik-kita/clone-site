"use client";

import Image from "next/image";
import Link from "next/link";

interface FeatureProps {
  id: number;
  image: string;
  mobileImage: string;
  pretitle: string;
  title: string;
  description?: string;
  buttonText: string;
  buttonLink: string;
  position?: "left" | "right";
  bgColor?: string;
}

const features: FeatureProps[] = [
  {
    id: 1,
    image: "https://ext.same-assets.com/3111600215/2127034209.webp",
    mobileImage: "https://ext.same-assets.com/3111600215/2127034209.webp",
    pretitle: "Box & Tale's",
    title: "Eid Hampers Collection 2025",
    description: "Share blessings and reconnect with friends, family, and colleagues as we welcome the holy month of Ramadan with Box & Tales Eid Hampers 2025 Collection!",
    buttonText: "SEE THE PACKAGES",
    buttonLink: "/premade",
    position: "left",
    bgColor: "bg-gold/20"
  },
  {
    id: 2,
    image: "https://ext.same-assets.com/3111600215/3756995220.webp",
    mobileImage: "https://ext.same-assets.com/3111600215/3756995220.webp",
    pretitle: "Create Your Own",
    title: "Personalized Gift Box",
    description: "Custom your gifts according to your occassions from the box, to the items, to the cards! Whether it be birthdays, anniversaries, graduations, valentine's day, mother's day, father's day, and more. Box & Tale has everything for you!",
    buttonText: "BUILD A BOX",
    buttonLink: "/build-a-box",
    position: "right",
    bgColor: "bg-blue/10"
  },
  {
    id: 3,
    image: "https://ext.same-assets.com/3111600215/61242507.webp",
    mobileImage: "https://ext.same-assets.com/3111600215/61242507.webp",
    pretitle: "Need Some Inspirations?",
    title: "Premade Box",
    description: "When in doubt, choose one of our Premade Boxes. Box & Tale has created various gift packages based on occasions, interests, and colors!",
    buttonText: "PREMADE BOX",
    buttonLink: "/premade-box",
    position: "left",
    bgColor: "bg-brown/10"
  },
  {
    id: 4,
    image: "https://ext.same-assets.com/3111600215/2744494411.webp",
    mobileImage: "https://ext.same-assets.com/3111600215/2744494411.webp",
    pretitle: "Need Gifts in Big Batches?",
    title: "Corporate Gifts & Special Projects",
    description: "Box & Tale is here to help you celebrate your special moments, whether it's small or BIG ONE!",
    buttonText: "CORPORATE GIFTS",
    buttonLink: "/corporate-projects",
    position: "right",
    bgColor: "bg-navy/10"
  }
];

const FeaturedCategories = () => {
  return (
    <section className="py-16">
      <div className="container-box">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 last:mb-0 ${feature.bgColor} rounded-md overflow-hidden`}
          >
            <div className={`order-2 ${feature.position === 'right' ? 'md:order-1' : 'md:order-2'}`}>
              <div className="h-full relative">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className={`order-1 ${feature.position === 'right' ? 'md:order-2' : 'md:order-1'} flex items-center p-8`}>
              <div className={`max-w-md mx-auto ${feature.position === 'right' ? 'md:ml-0' : 'md:mr-0'}`}>
                <h4 className="text-sm md:text-base uppercase tracking-wide mb-2 text-brown font-medium">
                  {feature.pretitle}
                </h4>
                <h3 className="text-2xl md:text-3xl font-butler mb-4 text-navy">
                  {feature.title}
                </h3>
                {feature.description && (
                  <p className="mb-6 text-gray-dark">{feature.description}</p>
                )}
                <Link
                  href={feature.buttonLink}
                  className="inline-block border border-brown bg-transparent hover:bg-brown hover:text-white px-6 py-2 uppercase text-xs font-medium tracking-wider text-brown transition-all"
                >
                  {feature.buttonText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
