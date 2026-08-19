import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaLandmark,
  FaPlaceOfWorship,
  FaTheaterMasks,
  FaMapMarkedAlt,
  FaRoute,
} from "react-icons/fa";
import { GiPartyFlags } from "react-icons/gi";

const exploreItems = [
  {
    id: 1,
    title: "Heritage",
    description: "Explore UNESCO heritage sites and historical monuments.",
    icon: <FaLandmark />,
    link: "/heritage",
    color: "bg-orange-500",
  },
  {
    id: 2,
    title: "Temples",
    description: "Visit India's most sacred temples and pilgrimage places.",
    icon: <FaPlaceOfWorship />,
    link: "/temples",
    color: "bg-red-500",
  },
  {
    id: 3,
    title: "Culture",
    description: "Experience India's rich traditions, arts and lifestyle.",
    icon: <FaTheaterMasks />,
    link: "/culture",
    color: "bg-purple-500",
  },
  {
    id: 4,
    title: "Festivals",
    description: "Celebrate vibrant festivals across every state.",
    icon: <GiPartyFlags />,
    link: "/festivals",
    color: "bg-green-500",
  },
  {
    id: 5,
    title: "Destinations",
    description: "Discover breathtaking destinations throughout India.",
    icon: <FaMapMarkedAlt />,
    link: "/destinations",
    color: "bg-blue-500",
  },
  {
    id: 6,
    title: "Pilgrimage",
    description: "Plan your spiritual journey with famous pilgrimage routes.",
    icon: <FaRoute />,
    link: "/pilgrimage",
    color: "bg-yellow-500",
  },
];

const ExploreIndia = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-orange-500 uppercase tracking-widest font-semibold">
            Explore India
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900">
            Discover India's Rich Heritage
          </h2>

          <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8">
            Explore ancient temples, majestic forts, beautiful destinations,
            colorful festivals, and timeless traditions that make India truly incredible.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {exploreItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={item.link}>
                <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden">

                  <div
                    className={`${item.color} h-28 flex items-center justify-center text-white text-5xl group-hover:scale-110 transition duration-300`}
                  >
                    {item.icon}
                  </div>

                  <div className="p-8">

                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 leading-7">
                      {item.description}
                    </p>

                    <button className="mt-6 text-orange-500 font-semibold group-hover:translate-x-2 transition">
                      Explore →
                    </button>

                  </div>

                </div>
              </Link>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ExploreIndia;