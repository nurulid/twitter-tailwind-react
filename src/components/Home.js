import React from "react";
import logo from "../logo.svg";
import {
  FaTwitter,
  FaPollH,
  FaRegSmile,
  FaHashtag,
  FaRegEnvelope,
  FaRegBookmark,
  FaRegUser,
  FaRegComment,
} from "react-icons/fa";
import {
  FiStar,
  FiImage,
  FiMoreHorizontal,
  FiSearch,
  FiUpload,
  FiHeart,
  FiShare2,
} from "react-icons/fi";
import { IoIosImages, IoMdNotificationsOutline, IoMdList, IoIosArrowDown } from "react-icons/io";
import { TiHomeOutline } from "react-icons/ti";
import { AiOutlineRetweet, AiOutlineSetting } from "react-icons/ai";

const Home = () => {
  return (
    <div>
      <div className="flex">
        {/* left */}
        <div className="left-sidebar w-1/4 hidden sm:block">
          <header className="fixed h-full">
            <div className="flex md:pl-10 lg:pl-16 pr-4 py-3 flex-col h-full">
              {/* twitter logo */}
              <div className="logo">
                <button className="bg-transparent hover:bg-gray-800 focus:outline-none font-bold p-3 rounded-circle inline-flex items-center">
                  <FaTwitter className="w-6 h-6 fill-current" />
                </button>
              </div>
              {/* navigation */}
              <nav className="-ml-1">
                <ul>
                  <li>
                    <button className="bg-transparent hover:bg-gray-800 focus:outline-none text-white hover:text-blue-500 font-bold py-3 px-4 mb-1 rounded-full inline-flex items-center">
                      <TiHomeOutline className="w-6 h-6 fill-current mr-4" />
                      <span className="text-lg hidden md:hidden lg:block">Home</span>
                    </button>
                  </li>
                  <li>
                    <button className="bg-transparent hover:bg-gray-800 focus:outline-none text-white hover:text-blue-500 font-bold py-3 px-4 mb-1 rounded-full inline-flex items-center">
                      <FaHashtag className="w-6 h-6 fill-current mr-4" />
                      <span className="text-lg hidden md:hidden lg:block">Explore</span>
                    </button>
                  </li>
                  <li>
                    <button className="bg-transparent hover:bg-gray-800 focus:outline-none text-white hover:text-blue-500 font-bold py-3 px-4 mb-1 rounded-full inline-flex items-center">
                      <IoMdNotificationsOutline className="w-6 h-6 fill-current mr-4" />
                      <span className="text-lg hidden md:hidden lg:block">Notifications</span>
                    </button>
                  </li>
                  <li>
                    <button className="bg-transparent hover:bg-gray-800 focus:outline-none text-white hover:text-blue-500 font-bold py-3 px-4 mb-1 rounded-full inline-flex items-center">
                      <FaRegEnvelope className="w-6 h-6 fill-current mr-4" />
                      <span className="text-lg hidden md:hidden lg:block">Messages</span>
                    </button>
                  </li>
                  <li>
                    <button className="bg-transparent hover:bg-gray-800 focus:outline-none text-white hover:text-blue-500 font-bold py-3 px-4 mb-1 rounded-full inline-flex items-center">
                      <FaRegBookmark className="w-6 h-6 fill-current mr-4" />
                      <span className="text-lg hidden md:hidden lg:block">Bookmarks</span>
                    </button>
                  </li>
                  <li>
                    <button className="bg-transparent hover:bg-gray-800 focus:outline-none text-white hover:text-blue-500 font-bold py-3 px-4 mb-1 rounded-full inline-flex items-center">
                      <IoMdList className="w-6 h-6 fill-current mr-4" />
                      <span className="text-lg hidden md:hidden lg:block">Lists</span>
                    </button>
                  </li>
                  <li>
                    <button className="bg-transparent hover:bg-gray-800 focus:outline-none text-white hover:text-blue-500 font-bold py-3 px-4 mb-1 rounded-full inline-flex items-center">
                      <FaRegUser className="w-6 h-6 fill-current mr-4" />
                      <span className="text-lg hidden md:hidden lg:block">Profile</span>
                    </button>
                  </li>
                  <li>
                    <button className="bg-transparent hover:bg-gray-800 focus:outline-none text-white hover:text-blue-500 font-bold py-3 px-4 mb-1 rounded-full inline-flex items-center">
                      <FiMoreHorizontal className="w-6 h-6 fill-current mr-4" />
                      <span className="text-lg hidden md:hidden lg:block">More</span>
                    </button>
                  </li>
                </ul>
              </nav>
              {/* new tweet button */}
              <button className="bg-blue-600 hover:bg-blue-700 focus:outline-none py-4 my-3 rounded-full font-bold w-full">
                Tweet
              </button>
              {/* username */}
              <div className="flex items-center hover:bg-gray-800 rounded-full px-3 py-3 mt-auto">
                <div className="flex-initial w-1/5 m">
                  <img className="w-10 h-10 rounded-circle bg-green-500" src={logo} alt="Avatar" />
                </div>
                <div className="flex-initial w-3/5 mx-2">
                  <div className="text-base font-bold truncate">Nurul Insani Dewi</div>
                  <div className="text-sm text-gray-600">@noe__rule</div>
                </div>
                <div className="flex-initial w-4 ml-auto">
                  <IoIosArrowDown className="w-5 h-5" />
                </div>
              </div>
            </div>
          </header>
        </div>

        {/* center */}
        <div className="w-full sm:w-2/4 border-l border-r border-solid border-gray-800 h-full">
          <div className="header-sticky flex sticky top-0 bg-gray-900 py-1 px-3 justify-between items-center border-b border-solid border-gray-800">
            <div className="text-xl font-bold">Home</div>
            <button className="bg-transparent hover:bg-gray-800 focus:outline-none p-2 rounded-full">
              <FiStar className="text-2xl text-blue-500" />
            </button>
          </div>
          {/* new tweet */}
          <div className="new-tweet flex w-full border-b-8 border-gray-800 p-3">
            <div className="flex-initial">
              <img
                className="w-12 h-12 rounded-circle bg-green-500 mr-5"
                src={logo}
                alt="Your Avatar"
              />
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
          {/* tweet list */}
          <div className="tweet-list">
            <div className="tweet-item flex w-full border-b border-gray-800 p-3">
              <div className="flex-initial">
                <img
                  className="w-12 h-12 rounded-circle bg-gray-200 mr-5"
                  src={logo}
                  alt="Your Avatar"
                />
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
          </div>
        </div>

        {/* right */}
        <div className="right-sidebar w-1/4 hidden sm:block">
          {/* search header */}
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
          {/* Trends For You */}
          <div className="more-box-wrapper bg-gray-800 rounded-lg ml-8 mr-10 mb-4">
            <div className="flex items-center justify-between p-3 py-1 border-b border-solid border-gray-800">
              <h2 className="text-xl font-bold">Trends for you</h2>
              <button className="bg-transparent hover:bg-gray-700 focus:outline-none rounded-circle p-2">
                <AiOutlineSetting className="text-xl text-blue-500" />
              </button>
            </div>
            <ul className="trends-list">
              <li className="trends-item py-2 px-3 border-b border-solid border-gray-800">
                <div className="bg-white-200">
                  <div className="text-gray-600 text-sm">Trending in Indonesia</div>
                  <div className="font-bold text-md">Apanih</div>
                  <div className="text-gray-600 text-sm">32.3K Tweets</div>
                </div>
              </li>
              <li className="trends-item py-2 px-3 border-b border-solid border-gray-800 hover:bg-gray-700">
                <div className="text-gray-600 text-sm">Trending in Indonesia</div>
                <div className="font-bold text-md">Itaewon Class</div>
                <div className="text-gray-600 text-sm">102.1K Tweets</div>
              </li>
              <li className="trends-item py-2 px-3 border-b border-solid border-gray-800 hover:bg-gray-700">
                <div className="text-gray-600 text-sm">Trending in Indonesia</div>
                <div className="font-bold text-md">Kim Da Mi</div>
                <div className="text-gray-600 text-sm">55.1K Tweets</div>
              </li>
              <li className="trends-item py-2 px-3 border-b border-solid border-gray-800 hover:bg-gray-700">
                <div className="text-gray-600 text-sm">Trending in Indonesia</div>
                <div className="font-bold text-md">The Witch Part 2</div>
                <div className="text-gray-600 text-sm">100.3K Tweets</div>
              </li>
              <li className="trends-item py-2 px-3 border-b border-solid border-gray-800 hover:bg-gray-700">
                <div className="text-gray-600 text-sm">Trending in Indonesia</div>
                <div className="font-bold text-md">Start Now</div>
                <div className="text-gray-600 text-sm">12.3K Tweets</div>
              </li>
            </ul>
            <div className="more-box__link text-blue-500 p-3 hover:bg-gray-700 rounded-lg rounded-t-none">
              Show More
            </div>
          </div>
          {/* Who To Follow */}
          <div className="more-box-wrapper bg-gray-800 rounded-lg ml-8 mr-10 mb-4">
            <div className="flex items-center justify-between p-3 border-b border-solid border-gray-800">
              <h2 className="text-xl font-bold">Who To Follow</h2>
            </div>
            <ul className="trends-list">
              <li className="trends-item py-2 px-3 border-b border-solid border-gray-800 hover:bg-gray-700">
                <div className="flex items-center">
                  <img
                    src={logo}
                    className="who-avatar w-12 h-12 mr-2 rounded-circle bg-red-400"
                    alt="Avatar"
                  />
                  <div className="who-user">
                    <div className="font-bold text-md">Nurul Insani Dewi</div>
                    <div className="text-gray-600 text-sm">@noe__rule</div>
                  </div>
                  <button className="bg-transparent border border-blue-600 rounded-full px-4 py-1 text-blue-500 ml-auto">
                    Follow
                  </button>
                </div>
              </li>
            </ul>
            <div className="more-box__link text-blue-500 p-3 hover:bg-gray-700 rounded-lg rounded-t-none">
              Show More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
