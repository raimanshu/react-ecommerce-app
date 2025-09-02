import React from "react";

const ProductGallery = ({ images }) => {
  return (
    <div className="w-full md:w-1/2">
      <img
        src={images[0]}
        alt="Product Main"
        className="w-full h-96 object-cover rounded"
      />
      <div className="flex gap-2 mt-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Thumbnail ${i}`}
            className="w-20 h-20 object-cover rounded border hover:border-blue-500 cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
