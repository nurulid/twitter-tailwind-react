import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../../src/logo.svg";

const UserMenu = () => {
  return (
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
  );
};

export default UserMenu;
