// components/ProductCard.jsx
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-md transition bg-white">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-medium text-lg truncate">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{product.brand}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-blue-600">${product.price}</span>
          <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
