import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { destinationData } from "../data/data"; // Path check kar lena

const PopularDestinations = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            Incredible India
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Popular Destinations
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover breathtaking destinations across India, from serene lakes
            and majestic monuments to scenic landscapes and vibrant cities.
          </p>
        </motion.div>

        {/* Destination Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {destinationData.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />

                <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                  Destination
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {destination.title}
                </h3>

                <p className="text-blue-600 font-medium mt-2">
                  📍 {destination.state}
                </p>

                <Link
                  to={`/destinations/${destination.id}`}
                  className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition"
                >
                  Explore Destination →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition"
          >
            View All Destinations
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;