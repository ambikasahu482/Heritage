import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { templeData } from "../data/data"; // Path check kar lena

const SacredTemples = () => {
  return (
    <section className="py-20 bg-white">
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
            Spiritual India
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Sacred Temples
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Experience the divine beauty of India's most famous temples,
            representing centuries of faith, devotion, and architectural
            excellence.
          </p>
        </motion.div>

        {/* Temple Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {templeData.map((temple, index) => (
            <motion.div
              key={temple.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={temple.image}
                  alt={temple.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />

                <span className="absolute top-4 left-4 bg-orange-600 text-white text-xs px-3 py-1 rounded-full">
                  Temple
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {temple.name}
                </h3>

                <p className="text-orange-600 mt-2 font-medium">
                  📍 {temple.location}, {temple.state}
                </p>

                <p className="text-gray-600 mt-4">
                  <span className="font-semibold">Deity:</span>{" "}
                  {temple.deity}
                </p>

                <Link
                  to={`/temples/${temple.id}`}
                  className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition"
                >
                  View Details →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/temples"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-orange-600 text-white px-8 py-3 rounded-full transition"
          >
            View All Temples
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SacredTemples;