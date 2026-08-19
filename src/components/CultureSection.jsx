import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cultureData } from "../data/data";

const CultureSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-orange-600 font-semibold uppercase tracking-widest">
            Culture & Traditions
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Discover Indian Culture
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            India is a land of vibrant traditions, colorful festivals,
            classical arts, folk dances, and diverse cultural heritage passed
            down through generations.
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
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
            >
              {/* Image */}
              <div className="overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
                />

                <span className="absolute top-4 left-4 bg-orange-600 text-white text-xs px-3 py-1 rounded-full">
                  Culture
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-3xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-orange-600 font-medium mt-2">
                  📍 {item.state}
                </p>

                <Link
                  to="/culture"
                  className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition"
                >
                  Explore Culture →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <Link
            to="/culture"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-orange-600 text-white px-8 py-3 rounded-full transition"
          >
            View All Culture
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;