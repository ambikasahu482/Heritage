import React from "react";
import { motion } from "framer-motion";
import Breadcrumb from "../components/Breadcrumb";

const About = () => {
  return (
    <>
      <Breadcrumb />

      <section className="min-h-screen py-16 bg-gradient-to-b from-orange-50 to-white">

        <div className="max-w-7xl mx-auto px-5">


          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >

            <p className="text-orange-600 uppercase tracking-widest font-semibold">
              About Incredible India
            </p>


            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
              Discover India's Heritage & Culture
            </h1>


            <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
              India Heritage Portal is a digital platform created to showcase
              India's magnificent heritage sites, sacred temples, cultural
              traditions, festivals, and beautiful travel destinations.
            </p>

          </motion.div>




          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-10 items-center">


            <motion.div
              initial={{ opacity:0, x:-50 }}
              whileInView={{ opacity:1, x:0 }}
              transition={{duration:0.6}}
              viewport={{once:true}}
            >

              <h2 className="text-3xl font-bold text-gray-900 mb-5">
                Our Vision
              </h2>


              <p className="text-gray-600 leading-8 mb-5">
                Our vision is to connect people with India's rich historical,
                spiritual, and cultural legacy through a modern digital
                experience.
              </p>


              <p className="text-gray-600 leading-8">
                From ancient monuments and royal forts to holy temples and
                vibrant festivals, this portal provides a complete journey
                through India's incredible diversity.
              </p>

            </motion.div>



            <motion.div
              initial={{opacity:0, x:50}}
              whileInView={{opacity:1, x:0}}
              transition={{duration:0.6}}
              viewport={{once:true}}
              className="bg-white rounded-3xl shadow-xl p-8"
            >

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What We Provide
              </h3>


              <ul className="space-y-4 text-gray-700">

                <li>
                  🏰 Heritage Sites Information
                </li>

                <li>
                  🛕 Sacred Temples & Pilgrimage Routes
                </li>

                <li>
                  🌄 Popular Tourist Destinations
                </li>

                <li>
                  🎭 Indian Culture & Traditions
                </li>

                <li>
                  🎉 Festivals & Celebrations
                </li>

                <li>
                  📸 Beautiful Image Gallery
                </li>

              </ul>

            </motion.div>


          </div>





          {/* Features Section */}

          <motion.div
            initial={{opacity:0, y:40}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.6}}
            viewport={{once:true}}
            className="mt-20"
          >

            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              Why Choose Our Portal?
            </h2>



            <div className="grid md:grid-cols-3 gap-8">


              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">

                <div className="text-5xl mb-4">
                  🏛️
                </div>

                <h3 className="text-xl font-bold">
                  Rich Heritage
                </h3>

                <p className="text-gray-600 mt-3">
                  Explore India's historical monuments and architectural
                  wonders.
                </p>

              </div>



              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">

                <div className="text-5xl mb-4">
                  🛕
                </div>

                <h3 className="text-xl font-bold">
                  Spiritual Journey
                </h3>

                <p className="text-gray-600 mt-3">
                  Discover sacred temples and important pilgrimage places.
                </p>

              </div>




              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">

                <div className="text-5xl mb-4">
                  🌏
                </div>

                <h3 className="text-xl font-bold">
                  Explore India
                </h3>

                <p className="text-gray-600 mt-3">
                  Experience India's culture, traditions and destinations.
                </p>

              </div>


            </div>

          </motion.div>





          {/* Mission Banner */}

          <div className="mt-20 bg-orange-600 rounded-3xl p-10 text-center text-white">


            <h2 className="text-3xl font-bold">
              Preserving India's Legacy Digitally
            </h2>


            <p className="mt-4 max-w-3xl mx-auto leading-8">
              Our mission is to make India's incredible heritage accessible
              worldwide and inspire travelers to explore the beauty,
              spirituality, and diversity of our nation.
            </p>


          </div>


        </div>

      </section>
    </>
  );
};


export default About;