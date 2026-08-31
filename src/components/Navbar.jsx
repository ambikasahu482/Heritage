import { useState, useEffect, useRef } from "react";
import {
  Link,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaSearch,
} from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Heritage", path: "/heritage" },
  { name: "Temples", path: "/temples" },
  { name: "Culture", path: "/culture" },
  { name: "Festivals", path: "/festivals" },
  { name: "Gallery", path: "/gallery" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    navigate(`/search?q=${encodeURIComponent(search)}`);
    setSearch("");
    setSearchOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-gradient-to-b from-black/70 to-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link
            to="/"
            className={`text-2xl font-bold tracking-wide transition ${
              scrolled ? "text-orange-600" : "text-white"
            }`}
          >
            Bharat<span className="text-yellow-500">Yatra</span>
          </Link>

          {/* Desktop & Laptop Menu (Hidden on small screens, visible from lg onwards) */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm xl:text-base font-medium transition-colors relative py-1 ${
                    isActive
                      ? "text-orange-500 font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-orange-500"
                      : scrolled
                      ? "text-gray-700 hover:text-orange-500"
                      : "text-white/90 hover:text-orange-400"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Actions (Search & Login) */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className={`text-lg p-2 transition ${
                scrolled ? "text-gray-700 hover:text-orange-500" : "text-white hover:text-orange-400"
              }`}
            >
              <FaSearch />
            </button>

            <Link
              to="/login"
              className="bg-orange-500 hover:bg-orange-600 text-white text-sm xl:text-base font-medium px-5 py-2 rounded-full shadow-sm transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center space-x-3 lg:hidden">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className={`text-lg p-1 ${
                scrolled ? "text-gray-700" : "text-white"
              }`}
            >
              <FaSearch />
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`text-2xl p-1 ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

        </div>

        {/* Search Bar Dropdown */}
        {searchOpen && (
          <form onSubmit={handleSearch} className="mt-3 pb-2">
            <div className="flex bg-white rounded-full shadow-lg overflow-hidden border border-gray-200">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search temples, heritage..."
                className="flex-1 px-4 py-2 text-sm text-gray-800 outline-none"
              />
              <button className="bg-orange-500 text-white px-5 py-2">
                <FaSearch />
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Mobile Menu Sidebar / Dropdown */}
      <div
        ref={menuRef}
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[500px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col space-y-3 px-6">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-base font-medium transition py-1 ${
                  isActive ? "text-orange-500 font-semibold" : "text-gray-700 hover:text-orange-500"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          {/* <div className="pt-3 border-t border-gray-100">
            <Link
              to="/login"
              className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center font-medium py-2.5 rounded-full transition"
            >
              Login
            </Link> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;