import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchBarandFilter = ({ SetProductType }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  const handleFilter = async (category) => {
    if (category === "dairy") {
      SetProductType("dairy");
    } else if (category === "fruits") {
      SetProductType("fruit");
    } else if (category === "vegetables") {
      SetProductType("vegetable");
    } else if (category === "all") {
      SetProductType("all");
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
        <button
          onClick={() => handleFilter("all")}
          className="px-4 py-2 ml-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 focus:outline-none"
        >
          All
        </button>
      </div>
    </div>
  );
};

export default SearchBarandFilter;
