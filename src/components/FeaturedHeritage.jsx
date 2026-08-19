import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { heritageData } from "../data/data"; // apna path check kar lena

const FeaturedHeritage = () => {
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
            Incredible India
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Featured Heritage
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore India's most iconic heritage monuments that showcase the
            country's rich history, architecture, and cultural legacy.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {heritageData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group"
            >
              {/* Image */}
              <div className="overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />

                <span className="absolute top-4 left-4 bg-orange-600 text-white text-xs px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-orange-600 font-medium mt-1">
                  📍 {item.state}
                </p>

                <p className="text-gray-600 mt-4 line-clamp-3">
                  {item.description}
                </p>

                <Link
                  to={`/heritage/${item.id}`}
                  className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition"
                >
                  Explore More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <Link
            to="/heritage"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-orange-600 text-white px-8 py-3 rounded-full transition"
          >
            View All Heritage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedHeritage;