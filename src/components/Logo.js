import React from "react";
import { FaTwitter } from "react-icons/fa";

const Logo = () => {
  return (
    <div className="twitter-logo">
      <button className="bg-transparent hover:bg-gray-800 focus:outline-none font-bold p-3 rounded-circle inline-flex items-center">
        <FaTwitter className="w-6 h-6 fill-current" />
      </button>
    </div>
  );
};

export default Logo;
