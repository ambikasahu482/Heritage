import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    country: "New Delhi, India",
    image: "https://i.pravatar.cc/150?img=11",
    rating: 5,
    review:
      "The website made it easy to explore India's heritage and plan my trip. The information was detailed and the interface was beautiful.",
  },
  {
    id: 2,
    name: "Priya Verma",
    country: "Mumbai, India",
    image: "https://i.pravatar.cc/150?img=32",
    rating: 5,
    review:
      "I loved the temple and destination sections. The gallery and animations make the experience feel premium and engaging.",
  },
  {
    id: 3,
    name: "John Williams",
    country: "London, UK",
    image: "https://i.pravatar.cc/150?img=15",
    rating: 5,
    review:
      "A wonderful tourism portal. It helped me discover famous places, culture, and festivals before visiting India.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-orange-600 uppercase tracking-widest font-semibold">
            Visitor Reviews
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            What Our Visitors Say
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Hear from travelers who explored India's heritage, temples,
            culture, and destinations through our portal.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition"
            >
              {/* User */}
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-orange-100"
                />

                <div>
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <p className="text-gray-500 text-sm">{item.country}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="text-yellow-500 text-xl mb-4">
                {"⭐".repeat(item.rating)}
              </div>

              {/* Review */}
              <p className="text-gray-600 leading-7 italic">
                "{item.review}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;