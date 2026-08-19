import React from 'react'
import  { useState } from "react";
import { motion } from "framer-motion";
import Breadcrumb from "../components/Breadcrumb";

import tajmahal from "../assets/images/tajmahal.jpg";
import redfort from "../assets/images/redfortdelhi.jpg";
import amerfort from "../assets/images/Amer Fortjaipur.jpg";
import bhadrafort from "../assets/images/Bhadra Fortahmadabad.jpg";
import gateway from "../assets/images/gatewayindiamumbai.jpg";
import indiagate from "../assets/images/India Gatedelhi.jpg";
import mysorepalace from "../assets/images/Mysore Palace karnatak.jpg";
import dallake from "../assets/images/Dal Lake shrinagar.jpg";
import lakepichola from "../assets/images/Lake Pichola udaypur.jpg";
import backwaters from "../assets/images/Backwaters keral.jpg";
import goldentemple from "../assets/images/the golden temple.jfif";
import vaishnodevi from "../assets/images/vaishnodevi katra jammu.jfif";
import jagannath from "../assets/images/shri jaggannath odisha.jfif";
import theyyam from "../assets/images/Theyyam.jpg";
import tradition from "../assets/images/tredition.jpg";
import dhuandhar from "../assets/images/dhuwandhar jbp.jfif";


const galleryData = [
  {
    id: 1,
    title: "Taj Mahal",
    category: "Heritage",
    image: tajmahal,
  },
  {
    id: 2,
    title: "Red Fort",
    category: "Heritage",
    image: redfort,
  },
  {
    id: 3,
    title: "Amer Fort",
    category: "Heritage",
    image: amerfort,
  },
  {
    id: 4,
    title: "Bhadra Fort",
    category: "Heritage",
    image: bhadrafort,
  },
  {
    id: 5,
    title: "Gateway of India",
    category: "Destination",
    image: gateway,
  },
  {
    id: 6,
    title: "India Gate",
    category: "Destination",
    image: indiagate,
  },
  {
    id: 7,
    title: "Mysore Palace",
    category: "Heritage",
    image: mysorepalace,
  },
  {
    id: 8,
    title: "Dal Lake",
    category: "Destination",
    image: dallake,
  },
  {
    id: 9,
    title: "Lake Pichola",
    category: "Destination",
    image: lakepichola,
  },
  {
    id: 10,
    title: "Kerala Backwaters",
    category: "Nature",
    image: backwaters,
  },
  {
    id: 11,
    title: "Golden Temple",
    category: "Temple",
    image: goldentemple,
  },
  {
    id: 12,
    title: "Vaishno Devi",
    category: "Temple",
    image: vaishnodevi,
  },
  {
    id: 13,
    title: "Jagannath Temple",
    category: "Temple",
    image: jagannath,
  },
  {
    id: 14,
    title: "Theyyam",
    category: "Culture",
    image: theyyam,
  },
  {
    id: 15,
    title: "Indian Tradition",
    category: "Culture",
    image: tradition,
  },
  {
    id: 16,
    title: "Dhuandhar Falls",
    category: "Nature",
    image: dhuandhar,
  },
];


const GalleryPage = () => {

  const [selectedImage, setSelectedImage] = useState(null);


  return (
    <>
      <Breadcrumb />

      <section className="min-h-screen py-16 bg-gradient-to-b from-gray-50 to-white">

        <div className="max-w-7xl mx-auto px-5">


          {/* Heading */}
          <motion.div
            initial={{ opacity:0, y:40 }}
            animate={{ opacity:1, y:0 }}
            transition={{duration:0.6}}
            className="text-center mb-14"
          >

            <p className="text-orange-600 uppercase tracking-widest font-semibold">
              Visual Journey
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
              India Gallery
            </h1>

            <p className="max-w-3xl mx-auto mt-5 text-gray-600">
              Explore India's heritage monuments, temples, destinations,
              nature and cultural beauty through amazing visuals.
            </p>

          </motion.div>



          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">


            {galleryData.map((item,index)=>(

              <motion.div
                key={item.id}
                initial={{
                  opacity:0,
                  scale:0.9
                }}
                whileInView={{
                  opacity:1,
                  scale:1
                }}
                transition={{
                  duration:0.5,
                  delay:index*0.05
                }}
                viewport={{once:true}}

                onClick={()=>setSelectedImage(item)}

                className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
              >


                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />


                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center">

                  <h3 className="text-white text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="text-orange-300 mt-2">
                    {item.category}
                  </p>

                </div>


              </motion.div>

            ))}


          </div>

        </div>

      </section>



      {/* Lightbox */}

      {selectedImage && (

        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-5"
          onClick={()=>setSelectedImage(null)}
        >

          <img
            src={selectedImage.image}
            alt={selectedImage.title}
            className="max-h-[90vh] max-w-5xl rounded-2xl"
          />

        </div>

      )}

    </>
  );
};


export default GalleryPage;