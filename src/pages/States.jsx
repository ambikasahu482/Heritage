import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumb from "../components/Breadcrumb";
import { states } from "../data/data";

const States = () => {
  return (
    <>
      <Breadcrumb />

      <section className="min-h-screen py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-5">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-blue-600 uppercase tracking-widest font-semibold">
              Incredible India
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
              Explore States
            </h1>

            <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-7">
              Discover India's diverse states, each known for its unique
              heritage, temples, traditions, festivals, cuisine, and natural
              beauty.
            </p>
          </motion.div>

          {/* States Grid */}
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {states.map((state, index) => (
              <motion.div
                key={state}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-8 text-center"
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-blue-100 flex items-center justify-center text-3xl">
                  🗺️
                </div>

                <h2 className="text-2xl font-bold text-gray-900">
                  {state}
                </h2>

                <p className="text-gray-600 mt-3">
                  Explore heritage sites, famous temples, culture,
                  festivals, and tourist attractions.
                </p>

                <Link
                  to={`/states/${encodeURIComponent(state)}`}
                  className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition"
                >
                  Explore State →
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default States;