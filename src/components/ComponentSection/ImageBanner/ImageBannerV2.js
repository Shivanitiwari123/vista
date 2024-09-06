import Image from "next/image";
import React from "react";

const ImageBannerV2 = () => {
  return (
    <div className="relative mb-6">
      <Image
        src={"https://picsum.photos/1920/500"}
        alt=""
        width={1920}
        height={600}
      />
      <div className="absolute top-[50%] left-0 right-0  bottom-[50%] flex flex-col justify-center items-center text-black bg-white">
        <h1 className="text-5xl font-bold">Image Banner V2</h1>
        <p className="text-xl">
          This is an example of a responsive image banner.
        </p>
      </div>
    </div>
  );
};

export default ImageBannerV2;
