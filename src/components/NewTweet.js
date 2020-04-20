import React from "react";
import logo from "../../src/logo.svg";
import { FaPollH, FaRegSmile } from "react-icons/fa";
import { FiImage } from "react-icons/fi";
import { IoIosImages } from "react-icons/io";

const NewTweet = () => {
  return (
    <div className="new-tweet flex w-full border-b-8 border-gray-800 p-3">
      <div className="flex-initial">
        <img className="w-12 h-12 rounded-circle bg-green-500 mr-5" src={logo} alt="Your Avatar" />
      </div>
      <div className="flex-initial w-full">
        <div className="py-2">
          <textarea
            className="bg-transparent w-full focus:outline-none"
            rows="2"
            placeholder="What's happening?"
          ></textarea>
        </div>
        <div className="flex justify-between items-center -ml-3">
          <div>
            <button className="bg-transparent hover:bg-gray-800 focus:outline-none p-2 rounded-full">
              <FiImage className="w-6 h-6 text-blue-500" />
            </button>
            <button className="bg-transparent hover:bg-gray-800 focus:outline-none p-2 rounded-full">
              <IoIosImages className="w-6 h-6 text-blue-500" />
            </button>
            <button className="bg-transparent hover:bg-gray-800 focus:outline-none p-2 rounded-full">
              <FaPollH className="w-6 h-6 text-blue-500" />
            </button>
            <button className="bg-transparent hover:bg-gray-800 focus:outline-none p-2 rounded-full">
              <FaRegSmile className="w-6 h-6 text-blue-500" />
            </button>
          </div>
          <button className="bg-blue-600 mr-2 hover:bg-blue-700 focus:outline-none px-5 py-3 font-bold rounded-full">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTweet;
