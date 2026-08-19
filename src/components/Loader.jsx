import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center">

        {/* Animated Circle */}
        <motion.div
          className="w-20 h-20 border-4 border-orange-200 border-t-orange-600 rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
        />

        {/* Text */}
        <motion.h2
          className="mt-6 text-2xl font-bold text-gray-800"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
        >
          Incredible India
        </motion.h2>

        <motion.p
          className="text-gray-500 mt-2"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            delay: 0.2,
          }}
        >
          Loading amazing destinations...
        </motion.p>
      </div>
    </div>
  );
};

export default Loader;