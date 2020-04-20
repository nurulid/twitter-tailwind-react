import React from "react";
import logo from "../../src/logo.svg";
import { FaRegComment } from "react-icons/fa";
import { FiUpload, FiHeart, FiShare2 } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineRetweet } from "react-icons/ai";

const TweetItem = () => {
  return (
    <div className="tweet-item flex w-full border-b border-gray-800 px-3 pt-2 pb-1">
      <div className="flex-initial">
        <img className="w-12 h-12 rounded-circle bg-gray-200 mr-5" src={logo} alt="Your Avatar" />
      </div>
      <div className="flex-initial w-full">
        <div className="flex items-start">
          <div className="mr-1 font-bold">nama</div>
          <div className="text-gray-600">@username</div>
          <div className="text-gray-600 ml-2">.</div>
          <div className="text-gray-600 ml-2">18m</div>
          <button className="bg-transparent hover:bg-gray-800 text-gray-600 hover:text-blue-600 focus:outline-none p-1 ml-auto rounded-full">
            <IoIosArrowDown className="w-4 h-4" />
          </button>
        </div>
        <div className="-mt-1">
          Shout out to the programmer
          <br />
          who haven't felt good lately,
          <br />
          but get up everyday
          <br />
          and refuse to quit.
        </div>
        <div className="flex justify-between items-center -ml-3">
          <button className="bg-transparent hover:bg-gray-800 text-gray-600 hover:text-blue-600 focus:outline-none p-2 rounded-full">
            <FaRegComment className="w-4 h-4" />
          </button>
          <button className="bg-transparent hover:bg-gray-800 text-gray-600 hover:text-green-600 focus:outline-none p-2 rounded-full">
            <AiOutlineRetweet className="w-4 h-4" />
          </button>
          <button className="bg-transparent hover:bg-gray-800 text-gray-600 hover:text-red-600 focus:outline-none p-2 rounded-full">
            <FiHeart className="w-4 h-4" />
          </button>
          <button className="bg-transparent hidden sm:block hover:bg-gray-800 text-gray-600 hover:text-blue-600 focus:outline-none p-2 rounded-full">
            <FiUpload className="w-4 h-4" />
          </button>
          <button className="bg-transparent block sm:hidden hover:bg-gray-800 text-gray-600 hover:text-blue-600 focus:outline-none p-2 rounded-full">
            <FiShare2 className="w-4 h-4" />
          </button>
          <div className="hidden sm:block"></div>
        </div>
      </div>
    </div>
  );
};

export default TweetItem;
