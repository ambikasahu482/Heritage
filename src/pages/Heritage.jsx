import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { heritageData } from "../data/data";
import Breadcrumb from "../components/Breadcrumb";

const Heritage = () => {
  return (
    <>
      <Breadcrumb />

      <section className="py-16 bg-gradient-to-b from-orange-50 to-white min-h-screen">
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
              Heritage Sites
            </h1>

            <p className="text-gray-600 max-w-3xl mx-auto mt-5">
              Explore India's magnificent UNESCO World Heritage Sites, ancient
              forts, royal palaces, and historical monuments that reflect the
              country's rich architectural and cultural legacy.
            </p>
          </motion.div>

          {/* Heritage Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {heritageData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                {/* Image */}
                <div className="overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover hover:scale-110 transition duration-500"
                  />

                  <span className="absolute top-4 left-4 bg-orange-600 text-white text-xs px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {item.title}
                  </h2>

                  <p className="text-orange-600 font-medium mt-2">
                    📍 {item.state}
                  </p>

                  <p className="mt-4 text-gray-600 leading-7">
                    {item.description}
                  </p>

                  <Link
                    to={`/heritage/${item.id}`}
                    className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition"
                  >
                    View Details →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Heritage;