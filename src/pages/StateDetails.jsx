import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumb from "../components/Breadcrumb";

import {
  heritageData,
  templeData,
  destinationData,
  cultureData,
  pilgrimageData,
} from "../data/data";

const StateDetails = () => {
  const { stateName } = useParams();

  const state = decodeURIComponent(stateName);

  const heritage = heritageData.filter(
    (item) => item.state === state
  );

  const temples = templeData.filter(
    (item) => item.state === state
  );

  const destinations = destinationData.filter(
    (item) => item.state === state
  );

  const culture = cultureData.filter(
    (item) => item.state === state
  );
  const pilgrimage = pilgrimageData.filter(
    (item) => item.state === state
  );

  return (
    <>
      <Breadcrumb />

      <section className="min-h-screen py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-5">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-14"
          >
            <h1 className="text-5xl font-bold text-gray-900">
              {state}
            </h1>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Explore heritage monuments, temples, famous destinations,
              traditions and culture of {state}.
            </p>
          </motion.div>

          {/* Heritage */}
          {heritage.length > 0 && (
            <>
              <h2 className="text-3xl font-bold mb-8">
                Heritage Sites
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {heritage.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-60 w-full object-cover"
                    />

                    <div className="p-5">
                      <h3 className="text-2xl font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-gray-600">
                        {item.description}
                      </p>

                      <Link
                        to={`/heritage/${item.id}`}
                        className="inline-block mt-5 text-blue-600 font-semibold"
                      >
                        View Details →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Temples */}
          {temples.length > 0 && (
            <>
              <h2 className="text-3xl font-bold mb-8">
                Sacred Temples
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {temples.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-60 w-full object-cover"
                    />

                    <div className="p-5">
                      <h3 className="text-2xl font-bold">
                        {item.name}
                      </h3>

                      <p className="text-orange-600 mt-2">
                        {item.location}
                      </p>

                      <Link
                        to={`/temples/${item.id}`}
                        className="inline-block mt-5 text-orange-600 font-semibold"
                      >
                        View Details →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Destinations */}
          {destinations.length > 0 && (
            <>
              <h2 className="text-3xl font-bold mb-8">
                Popular Destinations
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {destinations.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-60 w-full object-cover"
                    />

                    <div className="p-5">
                      <h3 className="text-2xl font-bold">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Culture */}
          {culture.length > 0 && (
            <>
              <h2 className="text-3xl font-bold mb-8">
                Culture
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {culture.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-72 w-full object-cover"
                    />

                    <div className="p-5">
                      <h3 className="text-2xl font-bold">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
          
    {/* pilgrimage */}
    {pilgrimage.length > 0 && (
  <>
    <h2 className="text-3xl font-bold mb-8">
      Pilgrimage Sites
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {pilgrimage.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col justify-between"
        >
          <div>
            <img
              src={item.image}
              alt={item.title || item.name}
              className="h-60 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-2xl font-bold">
                {item.title || item.name}
              </h3>

              {item.location && (
                <p className="mt-2 text-orange-600 text-sm">
                  📍 {item.location}, {item.state}
                </p>
              )}

              <p className="mt-3 text-gray-600 line-clamp-2">
                {item.description}
              </p>
            </div>
          </div>

          <div className="p-5 pt-0">
            <Link
              to={`/pilgrimage-routes`}
              className="inline-block mt-5 text-blue-600 font-semibold hover:underline"
            >
              View Details →
            </Link>
          </div>
        </div>
      ))}
    </div>
  </>
)}

          {heritage.length === 0 &&
            temples.length === 0 &&
            destinations.length === 0 &&
            culture.length === 0 &&
            pilgrimageData.length === 0 && (
              <div className="text-center py-20">
                <h2 className="text-3xl font-bold">
                  No information available
                </h2>

                <p className="mt-4 text-gray-600">
                  Details for this state will be added soon.
                </p>
              </div>
            )}

        </div>
      </section>
    </>
  );
};

export default StateDetails;