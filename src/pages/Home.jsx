import React from "react";
import { useNavigate } from "react-router-dom";

import HeroSlider from "../components/HeroSlider";
import SearchBar from "../components/SearchBar";
import ExploreIndia from "../components/ExploreIndia";
import FeaturedHeritage from "../components/FeaturedHeritage";
import SacredTemples from "../components/SacredTemples";
import PopularDestinations from "../components/PopularDestinations";
import CultureSection from "../components/CultureSection";
import FestivalSection from "../components/FestivalSection";
import PilgrimageSection from "../components/PilgrimageSection";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";

const Home = () => {
  const navigate = useNavigate();

  const handleSearch = (query) => {
    if (!query.trim()) return;
    navigate(`/search?query=${encodeURIComponent(query)}`);
  };

  return (
    <main className="overflow-x-hidden">

      {/* Hero Section */}
      <HeroSlider />

      {/* Search */}
      <SearchBar onSearch={handleSearch} />

      {/* Explore India */}
      <ExploreIndia />

      {/* Heritage */}
      <FeaturedHeritage />

      {/* Temples */}
      <SacredTemples />

      {/* Destinations */}
      <PopularDestinations />

      {/* Culture */}
      <CultureSection />

      {/* Festivals */}
      <FestivalSection />

      {/* Pilgrimage */}
      <PilgrimageSection />

      {/* Gallery */}
      <Gallery />

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter */}
      <Newsletter />

    </main>
  );
};

export default Home;