import React from "react";
import { motion } from "framer-motion";
import Breadcrumb from "../components/Breadcrumb";
import { cultureData } from "../data/data";

const Culture = () => {
  return (
    <>
      <Breadcrumb />

      <section className="min-h-screen py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-5">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-orange-600 uppercase tracking-widest font-semibold">
              Incredible India
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
              Indian Culture
            </h1>

            <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-7">
              India is known for its rich traditions, vibrant festivals,
              classical arts, colorful attire, music, dance, and centuries-old
              cultural heritage that reflects the unity in diversity of the
              nation.
            </p>
          </motion.div>

          {/* Culture Cards */}
          <div className="grid gap-8 md:grid-cols-2">
            {cultureData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-3xl font-bold text-gray-900">
                    {item.title}
                  </h2>

                  <p className="text-orange-600 font-medium mt-2">
                    📍 {item.state}
                  </p>

                  <p className="mt-4 text-gray-600 leading-7">
                    {item.title === "Theyyam"
                      ? "Theyyam is one of Kerala's oldest ritual art forms, combining dance, music, and devotion. It is performed in temples and sacred groves and represents the rich spiritual traditions of North Kerala."
                      : "Indian traditions reflect centuries of history through festivals, clothing, cuisine, architecture, rituals, and performing arts. Every region of India has its own unique cultural identity."}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Information */}
          <div className="mt-16 bg-orange-100 rounded-3xl p-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Experience India's Cultural Diversity
            </h2>

            <p className="mt-4 text-gray-700 leading-8 max-w-3xl mx-auto">
              From classical dance forms and traditional music to colorful
              festivals and local customs, India's cultural heritage offers a
              unique experience that attracts visitors from around the world.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default Culture;