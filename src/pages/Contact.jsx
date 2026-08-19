import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import Breadcrumb from "../components/Breadcrumb";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        "service_ju1gwmv",
        "template_9b0lrhb",
        form.current,
        {
          publicKey: "lD9fUfA6FmYg2n3cj",
        }
      );

      setStatus("success");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Breadcrumb />

      <section className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 py-10 sm:py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-10 max-w-3xl text-center sm:mb-14"
          >
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600 sm:text-base">
              Get In Touch
            </p>

            <h1 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Contact Us
            </h1>

            <p className="mt-4 text-sm leading-6 text-gray-600 sm:text-base md:text-lg">
              Have questions about India's heritage sites, temples,
              destinations, or travel information? Feel free to connect with us.
            </p>
          </motion.div>

          {/* Main Section */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white p-5 shadow-xl sm:p-8"
            >
              <div className="mb-8">
                <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
                  Contact Details
                </span>

                <h2 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                  Contact Information
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
                  We are here to help you explore India's rich heritage,
                  temples, culture, festivals and destinations.
                </p>
              </div>

              <div className="space-y-6">

                {/* Location */}
                <div className="group flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-gray-900 sm:text-lg">
                      Location
                    </h3>

                    <p className="mt-1 text-sm text-gray-600 sm:text-base">
                      India Heritage Portal
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="group flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <FaEnvelope className="text-xl" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-base font-bold text-gray-900 sm:text-lg">
                      Email
                    </h3>

                    <a
                      href="mailto:info@indiaheritageportal.com"
                      className="mt-1 block break-all text-sm text-gray-600 hover:text-blue-600 sm:text-base"
                    >
                      info@indiaheritageportal.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="group flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <FaPhoneAlt className="text-xl" />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-gray-900 sm:text-lg">
                      Phone
                    </h3>

                    <a
                      href="tel:+919876543210"
                      className="mt-1 block text-sm text-gray-600 hover:text-blue-600 sm:text-base"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="group flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <FaClock className="text-xl" />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-gray-900 sm:text-lg">
                      Working Hours
                    </h3>

                    <p className="mt-1 text-sm text-gray-600 sm:text-base">
                      Monday - Saturday
                    </p>

                    <p className="text-sm text-gray-600 sm:text-base">
                      9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Info Box */}
              <div className="mt-8 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-5 text-white sm:p-6">
                <h3 className="text-lg font-bold sm:text-xl">
                  Explore India's Heritage 🇮🇳
                </h3>

                <p className="mt-2 text-sm leading-6 text-blue-50">
                  Discover temples, historical monuments, festivals,
                  pilgrimage routes and beautiful destinations across India.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white p-5 shadow-xl sm:p-8"
            >
              <div className="mb-8">
                <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
                  Send Us a Message
                </span>

                <h2 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                  Send Message
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
                  Fill out the form below and we'll get back to you soon.
                </p>
              </div>

              {/* Success Message */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 flex gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-green-700"
                >
                  <FaCheckCircle className="mt-1 shrink-0" />

                  <div>
                    <p className="font-semibold">
                      Message sent successfully!
                    </p>

                    <p className="mt-1 text-sm">
                      Thank you for contacting us.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Error Message */}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 flex gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700"
                >
                  <FaExclamationCircle className="mt-1 shrink-0" />

                  <div>
                    <p className="font-semibold">
                      Failed to send message.
                    </p>

                    <p className="mt-1 text-sm">
                      Please try again later.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Form */}
              <form
                ref={form}
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* Name */}
                <div>
                  <label
                    htmlFor="user_name"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Your Name
                  </label>

                  <input
                    id="user_name"
                    type="text"
                    name="user_name"
                    placeholder="Enter your name"
                    required
                    minLength="2"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 sm:text-base"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="user_email"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Your Email
                  </label>

                  <input
                    id="user_email"
                    type="email"
                    name="user_email"
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 sm:text-base"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="Enter subject"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 sm:text-base"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Write your message..."
                    required
                    minLength="10"
                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 sm:text-base"
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-5 py-3.5 font-semibold text-white shadow-lg transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-10 overflow-hidden rounded-3xl bg-white shadow-xl sm:mt-14"
          >
            <div className="p-5 sm:p-6">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Find Us
              </h2>

              <p className="mt-2 text-sm text-gray-600 sm:text-base">
                Explore India on the map.
              </p>
            </div>

            <div className="h-64 w-full sm:h-80 md:h-96">
              <iframe
                title="India Heritage Portal Map"
                src="https://maps.google.com/maps?q=India&t=&z=4&ie=UTF8&iwloc=&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default Contact;