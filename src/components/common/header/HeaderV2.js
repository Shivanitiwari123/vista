import React from "react";

const HeaderV2 = ({ data }) => {
  return (
    <div className="bg-blue-400">
      {data?.menu?.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between px-8 py-2 text-white"
        >
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  );
};

export default HeaderV2;
