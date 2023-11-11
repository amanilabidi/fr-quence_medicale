import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform search or any other action with the search term
    console.log("Search term:", searchTerm);
  };

  return (
    <div className="SearchBar">
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="rechercher"
        value={searchTerm}
        onChange={handleSearchChange}
        className="SearchInput px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
      />
      <button
        type="submit"
        className="search-btn  hover:bg-blue-700 text-white font-bold py-3 px-4 mr-5 rounded focus:outline-none focus:shadow-outline">
        <FaSearch />
      </button>
    </form>
    </div>
  );
};

export default SearchBar;


