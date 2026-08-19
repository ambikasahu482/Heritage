import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

// Pages
import Home from "./pages/Home";

import Heritage from "./pages/Heritage";
import HeritageDetails from "./pages/HeritageDetails";

import Temples from "./pages/Temples";
import TempleDetails from "./pages/TempleDetails";

import States from "./pages/States";
import StateDetails from "./pages/StateDetails";

import PilgrimageRoutes from "./pages/PilgrimageRoutes";

import Culture from "./pages/Culture";
import Festivals from "./pages/Festivals";

import Destinations from "./pages/Destinations";
import GalleryPage from "./pages/GalleryPage";

import About from "./pages/About";
import Contact from "./pages/Contact";

import SearchResults from "./pages/SearchResults";


const App = () => {
  return (
    <Routes>

      <Route path="/" element={<MainLayout />}>

        {/* Home */}
        <Route index element={<Home />} />


        {/* Heritage */}
        <Route path="heritage" element={<Heritage />} />

        <Route 
          path="heritage/:id" 
          element={<HeritageDetails />} 
        />


        {/* Temples */}
        <Route path="temples" element={<Temples />} />

        <Route 
          path="temples/:id" 
          element={<TempleDetails />} 
        />


        {/* States */}
        <Route path="states" element={<States />} />

        <Route
          path="states/:stateName"
          element={<StateDetails />}
        />


        {/* Pilgrimage */}
        <Route
          path="pilgrimage-routes"
          element={<PilgrimageRoutes />}
        />


        {/* Culture */}
        <Route
          path="culture"
          element={<Culture />}
        />


        {/* Festivals */}
        <Route
          path="festivals"
          element={<Festivals />}
        />


        {/* Destinations */}
        <Route
          path="destinations"
          element={<Destinations />}
        />


        {/* Gallery */}
        <Route
          path="gallery"
          element={<GalleryPage />}
        />


        {/* About */}
        <Route
          path="about"
          element={<About />}
        />


        {/* Contact */}
        <Route
          path="contact"
          element={<Contact />}
        />


        {/* Search */}
        <Route
          path="search"
          element={<SearchResults />}
        />

      </Route>

    </Routes>
  );
};

export default App;