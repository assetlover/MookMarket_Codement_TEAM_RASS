import React,{ useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className="flex items-center justify-center mb-4 mt-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        className="px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring focus:border-blue-300 w-64 md:w-96" 
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-r-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Search</button>
    </form>
  );
};

export default SearchBar;
