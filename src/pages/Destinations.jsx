import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumb from "../components/Breadcrumb";
import { destinationData } from "../data/data";

const Destinations = () => {
  return (
    <>
      <Breadcrumb />

      <section className="min-h-screen py-16 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-7xl mx-auto px-5">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-blue-600 uppercase tracking-widest font-semibold">
              Explore India
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
              Popular Destinations
            </h1>

            <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-7">
              Discover India's most beautiful destinations, from historical
              monuments and peaceful lakes to scenic landscapes and vibrant
              cities.
            </p>
          </motion.div>


          {/* Destination Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {destinationData.map((destination, index) => (

              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >

                {/* Image */}
                <div className="relative overflow-hidden">

                  <img
                    src={destination.image}
                    alt={destination.title}
                    className="w-full h-72 object-cover hover:scale-110 transition duration-500"
                  />


                  <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                    Destination
                  </span>

                </div>


                {/* Content */}
                <div className="p-6">

                  <h2 className="text-2xl font-bold text-gray-900">
                    {destination.title}
                  </h2>


                  <p className="text-blue-600 font-medium mt-2">
                    📍 {destination.state}
                  </p>


                  <p className="mt-4 text-gray-600 leading-7">
                    Explore the beauty, culture, history, and unique
                    experiences of {destination.title}.
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

        </div>
      </section>
    </>
  );
};

export default Destinations;