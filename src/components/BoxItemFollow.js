import React from "react";
import logo from "../../src/logo.svg";

const BoxItemFollow = () => {
  return (
    <li className="more-box__item py-2 px-3 border-b border-solid border-gray-800 hover:bg-gray-700">
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
  );
};

export default BoxItemFollow;
