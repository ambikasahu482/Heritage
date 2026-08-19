import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { festivalData } from "../data/data";

const FestivalSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-yellow-50 to-white">
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
            Festivals of India
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Celebrate Indian Festivals
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Experience the vibrant spirit of India through its colorful
            festivals that unite people with joy, devotion, music, dance,
            traditions, and celebrations.
          </p>
        </motion.div>

        {/* Festival Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {festivalData.map((festival, index) => (
            <motion.div
              key={festival.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-orange-500 hover:shadow-2xl transition"
            >
              <div className="text-5xl mb-4 text-center">🎉</div>

              <h3 className="text-2xl font-bold text-center text-gray-900">
                {festival.name}
              </h3>

              <p className="text-center text-orange-600 font-semibold mt-3">
                📅 {festival.month}
              </p>

              <div className="text-center mt-6">
                <Link
                  to="/festivals"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition"
                >
                  Explore Festival →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-14">
          <Link
            to="/festivals"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-orange-600 text-white px-8 py-3 rounded-full transition"
          >
            View All Festivals
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FestivalSection;