import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PilgrimageSection = ({ pilgrimage }) => {

  // Safety check
  if (!pilgrimage) {
    return null;
  }

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
    >

      {/* Image */}
      <div className="relative overflow-hidden">

        <img
          src={pilgrimage.image}
          alt={pilgrimage.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
        />

        <span className="absolute top-4 left-4 bg-orange-600 text-white text-xs px-3 py-1 rounded-full">
          Pilgrimage
        </span>

      </div>


      {/* Content */}
      <div className="p-6">

        <h3 className="text-2xl font-bold text-gray-900">
          {pilgrimage.name}
        </h3>


        <p className="text-orange-600 font-medium mt-2">
          📍 {pilgrimage.location}, {pilgrimage.state}
        </p>


        <p className="mt-3 text-gray-600">
          {pilgrimage.description}
        </p>


        <Link
          to={`/pilgrimage/${pilgrimage.id}`}
          className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition"
        >
          View Details →
        </Link>

      </div>

    </motion.div>
  );
};

export default PilgrimageSection;