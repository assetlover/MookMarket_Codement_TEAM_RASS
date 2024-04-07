import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  const handleFilter = async (category) => {
    onFilter(category);
    if (category === "dairy") {
      await fetchAndSearch("https://api.example.com/dairy");
    } else if (category === "fruits") {
      await fetchAndSearch("https://api.example.com/fruits");
    } else if (category === "vegetables") {
      await fetchAndSearch("https://api.example.com/vegetables");
    }
  };

  const fetchAndSearch = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${url}`);
      }
      const data = await response.json();
      console.log(`${url} Data:`, data);
      // Handle the fetched data as needed
      onSearch(searchTerm); // Trigger search with the updated data
    } catch (error) {
      console.error(`Error fetching ${url}:`, error);
    }
  };

  return (
    <div>
      <form
        className="flex items-center justify-center mb-4 mt-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
          className="px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring focus:border-blue-300 w-64 md:w-96"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-r-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Search
        </button>
      </form>

      <div className="flex justify-center mr-2">
        <button
          onClick={() => handleFilter("dairy")}
          className="px-4 py-2 mr-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 focus:outline-none"
        >
          Dairy
        </button>
        <button
          onClick={() => handleFilter("fruits")}
          className="px-4 py-2 mr-2 ml-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 focus:outline-none"
        >
          Fruits
        </button>
        <button
          onClick={() => handleFilter("vegetables")}
          className="px-4 py-2 ml-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 focus:outline-none"
        >
          Vegetables
        </button>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default SearchBar;
