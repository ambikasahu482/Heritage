import React from "react";
import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 md:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div>
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Stay Connected
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Subscribe to Our Newsletter
              </h2>

              <p className="mt-5 text-orange-100 text-lg leading-8">
                Get the latest updates on India's heritage sites, temples,
                festivals, travel destinations, cultural events, and exclusive
                travel guides delivered directly to your inbox.
              </p>
            </div>

            {/* Right Form */}
            <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you for subscribing!");
                }}
                className="space-y-5"
              >
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-5 py-4 rounded-xl outline-none border border-white/30 bg-white text-gray-800 focus:ring-4 focus:ring-orange-300"
                />

                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-5 py-4 rounded-xl outline-none border border-white/30 bg-white text-gray-800 focus:ring-4 focus:ring-orange-300"
                />

                <button
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-black text-white py-4 rounded-xl font-semibold text-lg transition duration-300"
                >
                  Subscribe Now
                </button>
              </form>

              <p className="text-orange-100 text-sm mt-5 text-center">
                We respect your privacy. No spam, only travel inspiration and
                cultural updates.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;