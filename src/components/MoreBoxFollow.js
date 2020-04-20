import React from "react";
import BoxItemFollow from "./BoxItemFollow"

const MoreBoxFollow = () => {
  return (
    <div className="more-box-wrapper bg-gray-800 rounded-lg ml-8 mr-10 mb-4">
      <div className="flex items-center justify-between p-3 border-b border-solid border-gray-800">
        <h2 className="text-xl font-bold">Who To Follow</h2>
      </div>
      <ul className="more-box-list">
        <BoxItemFollow/>
        <BoxItemFollow/>
      </ul>
      <div className="more-box__link text-blue-500 p-3 hover:bg-gray-700 rounded-lg rounded-t-none">
        Show More
      </div>
    </div>
  );
};

export default MoreBoxFollow;
