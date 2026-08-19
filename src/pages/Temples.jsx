import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { templeData } from "../data/data";
import Breadcrumb from "../components/Breadcrumb";

const Temples = () => {
  return (
    <>
      <Breadcrumb />

      <section className="min-h-screen py-16 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-5">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-orange-600 uppercase tracking-widest font-semibold">
              Spiritual India
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
              Sacred Temples
            </h1>

            <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-7">
              Explore India's most revered temples that reflect centuries of
              faith, devotion, spirituality, and remarkable architecture.
            </p>
          </motion.div>

          {/* Temple Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {templeData.map((temple, index) => (
              <motion.div
                key={temple.id}
                initial={{ opacity: 0, y: 50 }}
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
                <div className="relative overflow-hidden">
                  <img
                    src={temple.image}
                    alt={temple.name}
                    className="w-full h-64 object-cover hover:scale-110 transition duration-500"
                  />

                  <span className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs">
                    Temple
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {temple.name}
                  </h2>

                  <p className="text-orange-600 mt-2">
                    📍 {temple.location}, {temple.state}
                  </p>

                  <p className="mt-4 text-gray-600">
                    <strong>Deity:</strong> {temple.deity}
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

        </div>
      </section>
    </>
  );
};

export default Temples;