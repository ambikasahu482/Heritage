import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumb from "../components/Breadcrumb";

import {
  heritageData,
  templeData,
  destinationData,
  cultureData,
  pilgrimageData,
  festivalData,
} from "../data/data";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  // Combine All Data properly mapping names/titles
  const allData = [
    ...heritageData.map((item) => ({
      ...item,
      title: item.title,
      type: "Heritage",
      link: `/heritage/${item.id}`,
    })),

    ...templeData.map((item) => ({
      ...item,
      title: item.name, // templeData uses 'name'
      type: "Temple",
      link: `/temples/${item.id}`,
    })),

    ...destinationData.map((item) => ({
      ...item,
      title: item.title,
      type: "Destination",
      link: `/destinations`,
    })),

    ...pilgrimageData.map((item) => ({
      ...item,
      title: item.title || item.name, // pilgrimageData can have title or name
      type: "Pilgrimage",
      link: `/pilgrimage-routes`,
    })),

    ...cultureData.map((item) => ({
      ...item,
      title: item.title,
      type: "Culture",
      link: "/culture",
    })),

    ...festivalData.map((item) => ({
      ...item,
      title: item.name, // festivalData uses 'name'
      type: "Festival",
      link: "/festivals",
    })),
  ];

  const results = allData.filter((item) => {
    if (!item.title) return false;
    return item.title.toLowerCase().includes(query.toLowerCase().trim());
  });

  return (
    <>
      <Breadcrumb />

      <section className="min-h-screen py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-5">
          
          {/* Heading */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="text-center mb-12"
          >
            <p className="text-blue-600 uppercase tracking-widest font-semibold">
              Search India
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
              Search Results
            </h1>

            <p className="mt-4 text-gray-600">
              Showing results for:
              <span className="font-bold text-blue-600 ml-1">
                {query}
              </span>
            </p>
          </motion.div>

          {/* Results */}
          {results.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {results.map((item, index) => (
                <motion.div
                  key={`${item.type}-${item.id || index}`}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition flex flex-col justify-between"
                >
                  <div>
                    {/* Image */}
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-60 object-cover"
                      />
                    )}

                    {/* Content */}
                    <div className="p-6">
                      <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">
                        {item.type}
                      </span>

                      <h2 className="text-2xl font-bold mt-4 text-gray-900">
                        {item.title}
                      </h2>

                      {item.state && (
                        <p className="mt-2 text-gray-600">
                          📍 {item.state}
                        </p>
                      )}

                      {item.description && (
                        <p className="mt-2 text-gray-500 text-sm line-clamp-2">
                          {item.description}
                        </p>
                      )}

                      {item.month && (
                        <p className="mt-2 text-gray-500 text-sm">
                          🗓️ Month: {item.month}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      to={item.link}
                      className="inline-block w-full text-center mt-5 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition"
                    >
                      View Details →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h2 className="text-3xl font-bold text-gray-900">
                No Results Found
              </h2>

              <p className="text-gray-600 mt-4">
                Try searching with another keyword like Taj Mahal,
                Temple, Kerala, Rajasthan etc.
              </p>

              <Link
                to="/"
                className="inline-block mt-6 bg-blue-600 text-white px-7 py-3 rounded-full hover:bg-blue-700 transition"
              >
                Back Home
              </Link>
            </div>
          )}

        </div>
      </section>
    </>
  );
};

export default SearchResults;