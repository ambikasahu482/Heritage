import React from "react";
import { motion } from "framer-motion";
import Breadcrumb from "../components/Breadcrumb";
import { festivalData } from "../data/data";

const Festivals = () => {
  return (
    <>
      <Breadcrumb />

      <section className="min-h-screen py-16 bg-gradient-to-b from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto px-5">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-orange-600 uppercase tracking-widest font-semibold">
              Celebrate India
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
              Indian Festivals
            </h1>

            <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-7">
              Experience India's vibrant festivals that showcase traditions,
              spirituality, colors, celebrations, and the cultural diversity
              of the nation.
            </p>
          </motion.div>


          {/* Festival Cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {festivalData.map((festival, index) => (

              <motion.div
                key={festival.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-8 text-center"
              >

                {/* Icon */}
                <div className="w-20 h-20 mx-auto rounded-full bg-orange-100 flex items-center justify-center text-4xl mb-5">
                  🎉
                </div>


                <h2 className="text-2xl font-bold text-gray-900">
                  {festival.name}
                </h2>


                <p className="mt-3 text-orange-600 font-medium">
                  📅 Celebrated: {festival.month}
                </p>


                <p className="mt-4 text-gray-600 leading-7">
                  {festival.name} is one of India's most celebrated festivals,
                  representing the country's rich traditions, cultural values,
                  and community spirit.
                </p>

              </motion.div>

            ))}

          </div>


          {/* Festival Experience Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 bg-orange-100 rounded-3xl p-10 text-center"
          >

            <h2 className="text-3xl font-bold text-gray-900">
              Celebrate India's Colorful Traditions
            </h2>


            <p className="mt-4 max-w-3xl mx-auto text-gray-700 leading-8">
              From the lights of Diwali and colors of Holi to the devotion of
              Durga Puja and Rath Yatra, Indian festivals bring people together
              and represent the country's incredible cultural diversity.
            </p>

          </motion.div>


        </div>
      </section>
    </>
  );
};

export default Festivals;