import React from "react";
import RatingStars from "./RatingStars";

const ProductInfo = ({ product }) => {
  return (
    <div className="w-full md:w-1/2 px-4">
      <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>
      <p className="text-sm text-gray-600 mb-2">Brand: {product.brand}</p>
      <RatingStars rating={product.rating} />
      <p className="text-2xl font-bold text-blue-600 mt-4">
        ${product.price.toFixed(2)}
      </p>

      {product.discountPrice && (
        <p className="text-sm line-through text-gray-400">
          ${product.discountPrice.toFixed(2)}
        </p>
      )}

      <p className="mt-4 text-gray-700">{product.shortDescription}</p>

      <div className="mt-6">
        <label htmlFor="qty" className="block mb-1 font-medium">
          Quantity:
        </label>
        <input
          type="number"
          min={1}
          defaultValue={1}
          className="w-20 px-3 py-2 border rounded focus:outline-none focus:ring"
        />
      </div>

      <button className="mt-6 w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded transition">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductInfo;
