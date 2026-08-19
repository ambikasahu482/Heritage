import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Explore India's Heritage",
    subtitle: "Discover ancient temples, monuments and cultural treasures.",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada",
  },
  {
    id: 2,
    title: "Sacred Temples of India",
    subtitle: "Experience spirituality and architectural wonders.",
    image:
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b",
  },
  {
    id: 3,
    title: "Journey Through Culture",
    subtitle: "Explore festivals, traditions and beautiful destinations.",
    image:
      "https://images.unsplash.com/photo-1524498250077-390f9e378fc0",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[80vh] overflow-hidden">

      <AnimatePresence mode="wait">

        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >

          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />


          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>


          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center text-white px-5">

            <div>

              <motion.h1
                initial={{ y:40, opacity:0 }}
                animate={{ y:0, opacity:1 }}
                transition={{delay:0.2}}
                className="text-4xl md:text-6xl font-bold"
              >
                {slides[current].title}
              </motion.h1>


              <motion.p
                initial={{ y:30, opacity:0 }}
                animate={{ y:0, opacity:1 }}
                transition={{delay:0.4}}
                className="mt-5 text-lg md:text-xl"
              >
                {slides[current].subtitle}
              </motion.p>


              <button className="mt-8 bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full">
                Explore Now
              </button>

            </div>

          </div>

        </motion.div>

      </AnimatePresence>


      {/* Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3">

        {slides.map((slide,index)=>(
          <button
            key={slide.id}
            onClick={()=>setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current===index
              ? "bg-orange-500"
              : "bg-white"
            }`}
          ></button>
        ))}

      </div>


    </section>
  );
};


export default HeroSlider;