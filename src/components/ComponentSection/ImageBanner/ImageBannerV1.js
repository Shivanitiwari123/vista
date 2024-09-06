import Image from "next/image";
import React from "react";

const ImageBannerV1 = () => {
  return (
    <div className="bg-emerald-800 text-white">
      <Image
        src={"https://picsum.photos/1920/300"}
        alt=""
        width={1920}
        height={1080}
      />
    </div>
  );
};

export default ImageBannerV1;
