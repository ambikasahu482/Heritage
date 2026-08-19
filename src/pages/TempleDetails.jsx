import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumb from "../components/Breadcrumb";
import { templeData } from "../data/data";

const TempleDetails = () => {
  const { id } = useParams();

  const temple = templeData.find(
    (item) => item.id === Number(id)
  );

  if (!temple) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-5">
        <h2 className="text-4xl font-bold text-red-600">
          Temple Not Found
        </h2>

        <p className="mt-4 text-gray-600">
          The requested temple could not be found.
        </p>

        <Link
          to="/temples"
          className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition"
        >
          Back to Temples
        </Link>
      </div>
    );
  }

  return (
    <>
      <Breadcrumb />

      <section className="min-h-screen bg-white py-16">
        <div className="max-w-7xl mx-auto px-5">

          {/* Temple Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl shadow-xl"
          >
            <img
              src={temple.image}
              alt={temple.name}
              className="w-full h-[500px] object-cover"
            />
          </motion.div>

          {/* Temple Information */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-10"
          >
            <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm">
              Sacred Temple
            </span>

            <h1 className="text-5xl font-bold text-gray-900 mt-6">
              {temple.name}
            </h1>

            <p className="text-xl text-orange-600 font-medium mt-3">
              📍 {temple.location}, {temple.state}
            </p>

            <p className="mt-4 text-lg text-gray-700">
              <strong>Deity:</strong> {temple.deity}
            </p>

            <p className="mt-8 text-gray-700 leading-8 text-lg">
              <strong>{temple.name}</strong> is one of India's most
              significant pilgrimage destinations. It is visited by
              thousands of devotees and tourists every year because of
              its spiritual importance, rich history, and remarkable
              architecture.
            </p>

            {/* Information Cards */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">

              <div className="bg-orange-50 rounded-2xl p-6 shadow">
                <h3 className="text-2xl font-bold mb-4">
                  Temple Information
                </h3>

                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>Name:</strong> {temple.name}
                  </li>

                  <li>
                    <strong>Location:</strong> {temple.location}
                  </li>

                  <li>
                    <strong>State:</strong> {temple.state}
                  </li>

                  <li>
                    <strong>Deity:</strong> {temple.deity}
                  </li>

                  <li>
                    <strong>Country:</strong> India
                  </li>
                </ul>
              </div>

              <div className="bg-gray-100 rounded-2xl p-6 shadow">
                <h3 className="text-2xl font-bold mb-4">
                  Why Visit?
                </h3>

                <p className="text-gray-700 leading-7">
                  Visit <strong>{temple.name}</strong> to experience
                  spirituality, peace, magnificent architecture, and
                  centuries-old traditions. It is an important religious
                  destination and a symbol of India's cultural heritage.
                </p>
              </div>

            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                to="/temples"
                className="bg-gray-900 hover:bg-black text-white px-8 py-3 rounded-lg transition"
              >
                ← Back to Temples
              </Link>

              <Link
                to="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg transition"
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

export default TempleDetails;