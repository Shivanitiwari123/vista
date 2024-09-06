import React from "react";

const FeaturedProductsV1 = ({ data }) => {
  return (
    <div className="bg-red-950 text-white">
      {data?.products?.map((product) => (
        <div
          key={product.id}
          className="flex items-center justify-between p-4 "
        >
          <img
            className="w-20 h-20 object-cover"
            src={product.image}
            alt={product.name}
          />
          <div className="flex flex-col">
            <h3 className="text-xl font-bold">{product.name}</h3>
            <p>{product.description}</p>
            <span className="text-sm text-gray-400">
              Price: ${product.price}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProductsV1;
