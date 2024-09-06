import Image from "next/image";
import React from "react";

const Header = ({ data }) => {
  return (
    <div className="bg-green-400">
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

export default Header;
