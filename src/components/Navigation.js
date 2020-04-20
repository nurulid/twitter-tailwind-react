import React from "react";
import { FaHashtag, FaRegEnvelope, FaRegBookmark, FaRegUser } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { IoMdNotificationsOutline, IoMdList } from "react-icons/io";
import { TiHomeOutline } from "react-icons/ti";

const Navigation = () => {
  return (
    <nav className="-ml-1">
      <ul>
        <li>
          <button className="bg-transparent animation hover:bg-gray-800 focus:outline-none text-white hover:text-blue-500 font-bold py-3 px-4 mb-1 rounded-full inline-flex items-center">
            <TiHomeOutline className="w-6 h-6 fill-current mr-4" />
            <span className="text-lg hidden md:hidden lg:block">Home</span>
          </button>
        </li>
        <li>
          <button className="bg-transparent animation hover:bg-gray-800 focus:outline-none text-white hover:text-blue-500 font-bold py-3 px-4 mb-1 rounded-full inline-flex items-center">
            <FaHashtag className="w-6 h-6 fill-current mr-4" />
            <span className="text-lg hidden md:hidden lg:block">Explore</span>
          </button>
        </li>
        <li>
          <button className="bg-transparent animation hover:bg-gray-800 focus:outline-none text-white hover:text-blue-500 font-bold py-3 px-4 mb-1 rounded-full inline-flex items-center">
            <IoMdNotificationsOutline className="w-6 h-6 fill-current mr-4" />
            <span className="text-lg hidden md:hidden lg:block">Notifications</span>
          </button>
        </li>
        <li>
          <button className="bg-transparent animation hover:bg-gray-800 focus:outline-none text-white hover:text-blue-500 font-bold py-3 px-4 mb-1 rounded-full inline-flex items-center">
            <FaRegEnvelope className="w-6 h-6 fill-current mr-4" />
            <span className="text-lg hidden md:hidden lg:block">Messages</span>
          </button>
        </li>
        <li>
          <button className="bg-transparent animation hover:bg-gray-800 focus:outline-none text-white hover:text-blue-500 font-bold py-3 px-4 mb-1 rounded-full inline-flex items-center">
            <FaRegBookmark className="w-6 h-6 fill-current mr-4" />
            <span className="text-lg hidden md:hidden lg:block">Bookmarks</span>
          </button>
        </li>
        <li>
          <button className="bg-transparent animation hover:bg-gray-800 focus:outline-none text-white hover:text-blue-500 font-bold py-3 px-4 mb-1 rounded-full inline-flex items-center">
            <IoMdList className="w-6 h-6 fill-current mr-4" />
            <span className="text-lg hidden md:hidden lg:block">Lists</span>
          </button>
        </li>
        <li>
          <button className="bg-transparent animation hover:bg-gray-800 focus:outline-none text-white hover:text-blue-500 font-bold py-3 px-4 mb-1 rounded-full inline-flex items-center">
            <FaRegUser className="w-6 h-6 fill-current mr-4" />
            <span className="text-lg hidden md:hidden lg:block">Profile</span>
          </button>
        </li>
        <li>
          <button className="bg-transparent animation hover:bg-gray-800 focus:outline-none text-white hover:text-blue-500 font-bold py-3 px-4 mb-1 rounded-full inline-flex items-center">
            <FiMoreHorizontal className="w-6 h-6 fill-current mr-4" />
            <span className="text-lg hidden md:hidden lg:block">More</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
