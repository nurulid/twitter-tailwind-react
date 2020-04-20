import React from "react";
import { FiSearch } from "react-icons/fi";

const TopStickyBarSearch = () => {
  return (
    <div className="sticky top-0 bg-gray-900 py-1 mb-3">
      <div className="search-box relative ml-8 mr-10">
        <input
          type="search"
          className="search__input border border-gray-800 rounded-full py-3 pl-12 w-full focus:outline-none focus:bg-transparent focus:border focus:border-blue-500 focus:text-blue-500"
          placeholder="Search Twitter"
        />
        <div className="search__icon absolute top-0 left-0 mt-3 mr-4 pl-4 text-gray-500">
          <FiSearch className="text-lg" />
        </div>
      </div>
    </div>
  );
};

export default TopStickyBarSearch;
