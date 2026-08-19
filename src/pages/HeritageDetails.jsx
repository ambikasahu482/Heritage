import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { heritageData } from "../data/data";
import Breadcrumb from "../components/Breadcrumb";

const HeritageDetails = () => {
  const { id } = useParams();

  const heritage = heritageData.find(
    (item) => item.id === Number(id)
  );

  if (!heritage) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-5">
        <h2 className="text-4xl font-bold text-red-600">
          Heritage Not Found
        </h2>

        <p className="mt-4 text-gray-600">
          The requested heritage site could not be found.
        </p>

        <Link
          to="/heritage"
          className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
        >
          Back to Heritage
        </Link>
      </div>
    );
  }

  return (
    <>
      <Breadcrumb />

      <section className="bg-white min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-5">

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl shadow-xl"
          >
            <img
              src={heritage.image}
              alt={heritage.title}
              className="w-full h-[500px] object-cover"
            />
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-10"
          >
            <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm">
              {heritage.category}
            </span>

            <h1 className="text-5xl font-bold text-gray-900 mt-6">
              {heritage.title}
            </h1>

            <p className="text-xl text-orange-600 font-medium mt-3">
              📍 {heritage.state}
            </p>

            <p className="mt-8 text-gray-700 leading-8 text-lg">
              {heritage.description}
            </p>

            {/* Information */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">

              <div className="bg-orange-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">
                  Quick Information
                </h3>

                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>Name:</strong> {heritage.title}
                  </li>

                  <li>
                    <strong>State:</strong> {heritage.state}
                  </li>

                  <li>
                    <strong>Category:</strong> {heritage.category}
                  </li>

                  <li>
                    <strong>Country:</strong> India
                  </li>
                </ul>
              </div>

              <div className="bg-gray-100 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">
                  Why Visit?
                </h3>

                <p className="text-gray-700 leading-7">
                  Explore the architectural beauty, historical importance,
                  and cultural heritage of{" "}
                  <strong>{heritage.title}</strong>. This destination
                  attracts millions of visitors every year and offers a
                  memorable travel experience.
                </p>
              </div>

            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                to="/heritage"
                className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-black transition"
              >
                ← Back to Heritage
              </Link>

              <Link
                to="/contact"
                className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition"
              >
                Plan Your Visit
              </Link>
            </div>

          </motion.div>

        </div>
      </section>
    </>
  );
};

export default HeritageDetails;