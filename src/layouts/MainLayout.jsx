import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Scroll To Top */}
      <ScrollToTop />

      {/* Navbar (Fixed hai) */}
      <Navbar />

      {/* Main Content - pt-16 (padding-top) add kiya hai taaki content fixed navbar ke pichhe na chupe */}
      <main className="flex-grow pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;