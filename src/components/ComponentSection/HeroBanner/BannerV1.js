import React from "react";

const BannerV1 = ({ data }) => {
  return (
    <div className="bg-orange-300 p-5">
      <h1>{data?.title}V1</h1>
      <p>{data?.description}</p>
    </div>
  );
};

export default BannerV1;
