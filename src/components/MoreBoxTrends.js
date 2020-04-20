import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import BoxItemTrend from "./BoxItemTrend";

const MoreBox = () => {
  return (
    <div className="more-box-wrapper bg-gray-800 rounded-lg ml-8 mr-10 mb-4">
      <div className="flex items-center justify-between p-3 py-1 border-b border-solid border-gray-800">
        <h2 className="text-xl font-bold">Trends for you</h2>
        <button className="bg-transparent hover:bg-gray-800 focus:outline-none rounded-circle p-2">
          <AiOutlineSetting className="text-xl text-blue-500" />
        </button>
      </div>
      <ul className="more-box-list">
        <BoxItemTrend/>
        <li className="more-box__item py-2 px-3 border-b border-solid border-gray-800 hover:bg-gray-700">
          <div className="text-gray-600 text-sm">Trending in Indonesia</div>
          <div className="font-bold text-md">Itaewon Class</div>
          <div className="text-gray-600 text-sm">102.1K Tweets</div>
        </li>
        <li className="more-box__item py-2 px-3 border-b border-solid border-gray-800 hover:bg-gray-700">
          <div className="text-gray-600 text-sm">Trending in Indonesia</div>
          <div className="font-bold text-md">Kim Da Mi</div>
          <div className="text-gray-600 text-sm">55.1K Tweets</div>
        </li>
        <li className="more-box__item py-2 px-3 border-b border-solid border-gray-800 hover:bg-gray-700">
          <div className="text-gray-600 text-sm">Trending in Indonesia</div>
          <div className="font-bold text-md">The Witch Part 2</div>
          <div className="text-gray-600 text-sm">100.3K Tweets</div>
        </li>
        <li className="more-box__item py-2 px-3 border-b border-solid border-gray-800 hover:bg-gray-700">
          <div className="text-gray-600 text-sm">Trending in Indonesia</div>
          <div className="font-bold text-md">Start Now</div>
          <div className="text-gray-600 text-sm">12.3K Tweets</div>
        </li>
      </ul>
      <div className="more-box__link text-blue-500 p-3 hover:bg-gray-700 rounded-lg rounded-t-none">
        Show More
      </div>
    </div>
  );
};

export default MoreBox;
