import Link from "next/link";
import React from "react";

const FeaturedProductsV2 = ({ data }) => {
  return (
    <div className="bg-emerald-700 text-white">
      <h2 className="text-2xl font-bold">{data?.title}</h2>
      <p>{data?.description}</p>
      {data?.products?.map((product) => (
        <div key={product.id} className="flex items-center gap-4 mb-4">
          <img
            className="w-16 h-16 object-cover"
            src={product.image}
            alt={product.name}
          />
          <div>
            <h3 className="text-sm font-bold">{product.name}</h3>
            <p className="text-xs">{product.description}</p>
            <span className="text-xs text-gray-500">${product.price}</span>
          </div>
        </div>
      ))}
      <Link href={data?.button?.link} alt="">
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
          {data?.button?.text}
        </button>
      </Link>
    </div>
  );
};

export default FeaturedProductsV2;
