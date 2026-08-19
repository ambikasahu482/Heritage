import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Images
import tajmahal from "../assets/images/tajmahal.jpg";
import redfort from "../assets/images/redfortdelhi.jpg";
import amerfort from "../assets/images/Amer Fortjaipur.jpg";
import gateway from "../assets/images/gatewayindiamumbai.jpg";
import goldentemple from "../assets/images/the golden temple.jfif";
import dallake from "../assets/images/Dal Lake shrinagar.jpg";
import lakepichola from "../assets/images/Lake Pichola udaypur.jpg";
import backwaters from "../assets/images/Backwaters keral.jpg";
import auli from "../assets/images/auli.jpg";
import kedarnath from "../assets/images/kedarnath.jpg";
import rishikesh from "../assets/images/rishikesh.jpg";
import haridwar from "../assets/images/haridwar.jpg";
import amarnath from "../assets/images/amarnath.jpg";
import tirupati from "../assets/images/tirupati.jfif";

const galleryImages = [
  {
    id: 1,
    image: tajmahal,
    title: "Taj Mahal",
  },
  {
    id: 2,
    image: redfort,
    title: "Red Fort",
  },
  {
    id: 3,
    image: amerfort,
    title: "Amer Fort",
  },
  {
    id: 4,
    image: gateway,
    title: "Gateway of India",
  },
  {
    id: 5,
    image: goldentemple,
    title: "Golden Temple",
  },
  {
    id: 6,
    image: dallake,
    title: "Dal Lake",
  },
  {
    id: 7,
    image: lakepichola,
    title: "Lake Pichola",
  },
  {
    id: 8,
    image: backwaters,
    title: "Kerala Backwaters",
  },
  {
    id: 9,
    image: kedarnath,
    title: "Kedarnath",
  },
  {
    id: 10,
    image: rishikesh,
    title: "uttrakhand",
  },
  {
    id: 11,
    image: auli,
    title: "uttrakhand",
  },
  {
    id: 12,
    image: tirupati,
    title: "tirumala",
  },
  {
    id: 13,
    image: amarnath,
    title: "Amarnath Cave",
  },
  {
    id: 14,
    image: haridwar,
    title: "uttrakhand",
  },
];

const Gallery = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-orange-600 uppercase tracking-widest font-semibold">
            Explore India
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Photo Gallery
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover the beauty of India's heritage, temples, destinations,
            and culture through our curated gallery.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <h3 className="text-white text-xl font-bold text-center px-4">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <Link
            to="/gallery"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full transition"
          >
            View Full Gallery
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Gallery;