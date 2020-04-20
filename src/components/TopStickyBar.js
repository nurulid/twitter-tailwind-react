import React from "react";
import { FiStar } from "react-icons/fi";

const TopStickyBar = () => {
  return (
    <div className="header-sticky flex sticky top-0 bg-gray-900 py-1 px-3 justify-between items-center border-b border-solid border-gray-800">
      <div className="text-xl font-bold">Home</div>
      <button className="bg-transparent hover:bg-gray-800 focus:outline-none p-2 rounded-full">
        <FiStar className="text-2xl text-blue-500" />
      </button>
    </div>
  );
};

export default TopStickyBar;
