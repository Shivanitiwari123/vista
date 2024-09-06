import React from "react";

const BannerV2 = ({ data }) => {
  return (
    <div className="bg-green-300 p-5">
      <h1>{data?.title}v2</h1>
      <p>{data?.description}</p>
    </div>
  );
};

export default BannerV2;
