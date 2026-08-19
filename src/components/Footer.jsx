import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">

        {/* About */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Incredible India
          </h2>

          <p className="leading-7 text-gray-400">
            Discover India's rich heritage, sacred temples, vibrant culture,
            breathtaking destinations, and unforgettable travel experiences in
            one place.
          </p>

          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="bg-orange-500 p-3 rounded-full hover:bg-orange-600 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="bg-orange-500 p-3 rounded-full hover:bg-orange-600 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="bg-orange-500 p-3 rounded-full hover:bg-orange-600 transition"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="bg-orange-500 p-3 rounded-full hover:bg-orange-600 transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3">
            <li><Link to="/" className="hover:text-orange-400">Home</Link></li>
            <li><Link to="/heritage" className="hover:text-orange-400">Heritage</Link></li>
            <li><Link to="/temples" className="hover:text-orange-400">Temples</Link></li>
            <li><Link to="/destinations" className="hover:text-orange-400">Destinations</Link></li>
            <li><Link to="/culture" className="hover:text-orange-400">Culture</Link></li>
            <li><Link to="/gallery" className="hover:text-orange-400">Gallery</Link></li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Explore
          </h3>

          <ul className="space-y-3">
            <li><Link to="/states" className="hover:text-orange-400">States</Link></li>
            <li><Link to="/pilgrimage-routes" className="hover:text-orange-400">Pilgrimage Routes</Link></li>
            <li><Link to="/festivals" className="hover:text-orange-400">Festivals</Link></li>
            <li><Link to="/about" className="hover:text-orange-400">About</Link></li>
            <li><Link to="/contact" className="hover:text-orange-400">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Contact Us
          </h3>

          <div className="space-y-4">

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-orange-500 mt-1" />
              <p>New Delhi, India</p>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-orange-500" />
              <p>+91 98765 43210</p>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-orange-500" />
              <p>info@incredibleindia.com</p>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

          <p>
            © {new Date().getFullYear()} Incredible India. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/" className="hover:text-orange-400">
              Privacy Policy
            </Link>

            <Link to="/" className="hover:text-orange-400">
              Terms & Conditions
            </Link>

            <Link to="/" className="hover:text-orange-400">
              Support
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;