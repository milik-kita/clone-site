"use client";

import Image from "next/image";
import Link from "next/link";

interface InstagramPost {
  id: number;
  image: string;
  link: string;
  caption: string;
}

const instagramPosts: InstagramPost[] = [
  {
    id: 1,
    image: "https://ext.same-assets.com/3111600215/485428815_18366042691192690_7479159957566150181_n.jpg.webp",
    link: "https://www.instagram.com/p/DHmtKzovBY8/",
    caption: "Masih ada waktu untuk kirim Hampers Lebaran, custom gift set ini bisa dikirim ke seluruh Indonesia. Pengiriman terakhir sebelum libur Lebaran tanggal 27 Maret 2025, dont miss it!"
  },
  {
    id: 2,
    image: "https://ext.same-assets.com/3111600215/485910883_18366024967192690_8024050807003752206_n.jpg.webp",
    link: "https://www.instagram.com/p/DHkU-ScPLtl/",
    caption: "Hari Kamis ini terakhir untuk pemesanan kado dan hampers custom sebelum libur lebaran Box & Tale, dont miss it! Buat kalian yang belum dapat slot Hampers Lebaran, kalian bisa membuat custom hampers dengan gift items yang ready di Box & Tale."
  },
  {
    id: 3,
    image: "https://ext.same-assets.com/3111600215/485248830_18365789224192690_8380403865573822838_n.jpg.webp",
    link: "https://www.instagram.com/p/DHfM6RYvGLI/",
    caption: "Our Eid Hampers are all officially sold out! Thank you all for ordering. Buat kalian yang masih cari hampers untuk dikirim Lebaran ini, we can help create custom ones as alternatives."
  },
  {
    id: 4,
    image: "https://ext.same-assets.com/3111600215/484837209_18364970203192690_8163667271683024912_n.jpg.webp",
    link: "https://www.instagram.com/p/DHNMJxsPHPh/",
    caption: "Thank you all for pre-ordering, 4 of our 6 Eid Gift Sets are already sold out!! Pengiriman Hampers Lebaran akan dimulai Senin, 17 Maret 2025. Cant wait for you all to receive them!"
  }
];

const InstagramFeed = () => {
  return (
    <section className="py-16 bg-cream/30">
      <div className="container-box">
        <h4 className="text-sm uppercase tracking-wide text-center mb-2 text-brown font-medium">
          Follow Our Social Media
        </h4>
        <h2 className="text-2xl md:text-3xl font-butler text-center mb-10">
          Custom Gift Hampers<br />by Box & Tale
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {instagramPosts.map((post) => (
            <div key={post.id} className="group relative overflow-hidden bg-white shadow-sm hover:shadow-md transition-all">
              <Link href={post.link} target="_blank" rel="noopener noreferrer">
                <div className="relative pt-[100%]">
                  <Image
                    src={post.image}
                    alt={`Instagram post ${post.id}`}
                    fill
                    className="object-cover"
                  />

                  {/* Caption Overlay */}
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white text-sm p-4 line-clamp-5">
                      {post.caption}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="https://www.instagram.com/boxandtale/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-brown bg-transparent hover:bg-brown hover:text-white px-8 py-3 uppercase text-sm font-medium tracking-wide text-brown transition-all"
          >
            View Instagram
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
