import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumb from "../components/Breadcrumb";
import { pilgrimageData } from "../data/data"; // yahan templeData ki jagah pilgrimageData import kiya hai

const PilgrimageRoutes = () => {
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
              Spiritual Journey
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
              Pilgrimage Routes
            </h1>

            <p className="mt-5 max-w-3xl mx-auto text-gray-600 leading-7">
              Discover India's sacred pilgrimage destinations where millions of
              devotees visit every year. Experience spirituality, history,
              devotion, and magnificent architecture across the country.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pilgrimageData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition flex flex-col justify-between"
              >
                <div>
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title || item.name}
                      className="w-full h-64 object-cover hover:scale-110 transition duration-500"
                    />

                    <span className="absolute top-4 left-4 bg-orange-600 text-white text-xs px-3 py-1 rounded-full">
                      Pilgrimage
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {item.title || item.name}
                    </h2>

                    <p className="text-orange-600 mt-2">
                      📍 {item.location}, {item.state}
                    </p>

                    {item.description && (
                      <p className="mt-3 text-gray-600 text-sm line-clamp-2">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to={`/pilgrimage-routes`}
                    className="inline-block w-full text-center mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition font-semibold"
                  >
                    View Route →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-20 bg-orange-100 rounded-3xl p-10 text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Begin Your Spiritual Journey
            </h2>

            <p className="mt-4 text-gray-700 max-w-3xl mx-auto leading-7">
              Explore India's sacred pilgrimage destinations and immerse
              yourself in centuries-old traditions, divine architecture, and
              peaceful surroundings. Every journey is an opportunity to connect
              with India's rich spiritual heritage.
            </p>

            <Link
              to="/contact"
              className="inline-block mt-8 bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full transition font-semibold"
            >
              Plan Your Pilgrimage
            </Link>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default PilgrimageRoutes;