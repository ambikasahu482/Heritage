import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaSearch,
  FaArrowDown,
} from "react-icons/fa";

import hero1 from "../assets/images/tajmahal.jpg";
import hero2 from "../assets/images/kedarnath.jpg";
import hero3 from "../assets/images/hawa-mahal.jpg";

const images = [hero1, hero2, hero3];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // 4 सेकंड का समय स्लाइड बदलने के लिए

    return () => clearInterval(timer);
  }, []);
  

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">

      {/* Background Slider Container with Solid Black Base */}
      <div className="absolute inset-0 bg-black">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Incredible India Slide"
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
              current === index
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-110 z-0"
            }`}
          />
        ))}
      </div>

      {/* Dark Overlay Gradient to Prevent White Flashes and Improve Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-20"></div>

      {/* Content Container */}
      <div className="relative z-30 flex items-center h-full">
        <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12">

          <div className="max-w-3xl">

            {/* Tag */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-orange-400 uppercase tracking-widest text-xs sm:text-sm md:text-base font-semibold"
            >
              <FaMapMarkerAlt />
              Incredible India
            </motion.p>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-5 font-extrabold text-white leading-tight
              text-3xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl"
            >
              Explore India's
              <span className="block text-orange-400">
                Heritage & Temples
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 sm:mt-6 text-gray-200
              text-xs
              sm:text-base
              md:text-lg
              leading-6 sm:leading-7
              max-w-2xl"
            >
              Experience UNESCO World Heritage Sites,
              sacred temples, breathtaking landscapes,
              spiritual journeys and colorful festivals
              across every corner of India.
            </motion.p>

            {/* Search Box */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-6 sm:mt-8"
            >
              <div className="bg-white rounded-full shadow-xl flex items-center overflow-hidden">
                <input
                  type="text"
                  placeholder="Search temples, heritage, states..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-base outline-none text-gray-800 bg-transparent"
                />
                <button className="bg-orange-500 hover:bg-orange-600 transition duration-300 text-white px-5 sm:px-8 py-3 sm:py-4">
                  <FaSearch />
                </button>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8"
            >
              <Link
                to="/heritage"
                className="bg-orange-500 hover:bg-orange-600 transition text-center text-white font-semibold rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base shadow-md"
              >
                Explore Heritage
              </Link>

              <Link
                to="/temples"
                className="border-2 border-white hover:bg-white hover:text-black transition text-center text-white font-semibold rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base"
              >
                Discover Temples
              </Link>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-3 gap-4 sm:gap-8 mt-10 sm:mt-16 text-white"
            >
              <div>
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-orange-400">
                  40+
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-gray-300">
                  UNESCO Sites
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-orange-400">
                  5000+
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-gray-300">
                  Temples
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-orange-400">
                  28
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-gray-300">
                  States
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>

      {/* Scroll Down Bounce Icon */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-white animate-bounce z-30 pointer-events-none">
        <FaArrowDown className="text-lg sm:text-2xl" />
      </div>
    </section>
  );
};

export default Hero;