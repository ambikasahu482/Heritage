import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onSearch) {
      onSearch(query);
    }

    console.log("Searching:", query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-4xl mx-auto"
    >
      <div className="bg-white/90 backdrop-blur-md rounded-full shadow-2xl p-2 flex flex-col md:flex-row items-center gap-2">

        {/* Search Input */}
        <div className="flex items-center w-full px-5">
          <FaSearch className="text-orange-500 text-lg mr-3" />

          <input
            type="text"
            placeholder="Search temples, heritage sites, states..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent outline-none py-3 text-gray-700 placeholder-gray-500"
          />
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition duration-300 w-full md:w-auto"
        >
          Search
        </button>

      </div>
    </form>
  );
};

export default SearchBar;