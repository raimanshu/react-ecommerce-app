// pages/ProductDetail.jsx
import React, { useState } from "react";
import ProductGallery from "../../components/productDetail/ProductGallery";
import ProductInfo from "../../components/productDetail/ProductInfo";
import ProductTabs from "../../components/productDetail/ProductTabs";

// const dummyProduct = {
//   name: "Wireless Noise Cancelling Headphones",
//   brand: "Sony",
//   price: 149.99,
//   discountPrice: 199.99,
//   rating: 4,
//   shortDescription:
//     "Experience premium sound quality with active noise cancellation.",
//   description:
//     "These Sony headphones offer premium comfort, immersive sound, and long-lasting battery life. Ideal for music lovers and professionals.",
//   specs: [
//     "Bluetooth 5.0",
//     "Battery life: 30 hours",
//     "Quick charge",
//     "Built-in mic",
//   ],
//   images: [
//     "/images/product1.jpg",
//     "/images/product2.jpg",
//     "/images/product3.jpg",
//   ],
// };

const ProductDetail = () => {
  const [qty, setQty] = useState(1);

  const product = {
    id: 1,
    title: "Wireless Noise Cancelling Headphones",
    price: 199.99,
    description:
      "Experience premium sound with our Wireless Noise Cancelling Headphones. Designed for comfort and long-lasting use, perfect for travel, work, and entertainment.",
    features: [
      "Bluetooth 5.2",
      "Active Noise Cancelling",
      "30 hrs battery life",
      "Fast charging support",
    ],
    images: [
      "https://source.unsplash.com/500x500/?headphones",
      "https://source.unsplash.com/500x500/?music",
      "https://source.unsplash.com/500x500/?sound",
    ],
    rating: 4.5,
    reviews: 128,
  };

  const relatedProducts = Array.from({ length: 4 }).map((_, i) => ({
    id: i,
    title: `Related Product ${i + 1}`,
    price: (i + 1) * 50,
    image: `https://source.unsplash.com/300x300/?product,${i}`,
  }));
  return (
    // <div className="bg-white text-gray-900 min-h-screen">
    //     <div className="max-w-6xl mx-auto py-12 px-4 md:flex md:gap-10">
    //         <ProductGallery images={dummyProduct.images} />
    //         <ProductInfo product={dummyProduct} />
    //     </div>

    //     <div className="max-w-4xl mx-auto px-4">
    //         <ProductTabs product={dummyProduct} />
    //     </div>
    // </div>

    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl w-full bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
        {/* Left: Image Gallery */}
        <div className="p-8 flex flex-col items-center justify-center bg-gradient-to-b from-black/30 to-black/10">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-80 h-80 object-cover rounded-2xl shadow-xl transform hover:scale-105 transition duration-500"
          />
          <div className="flex space-x-4 mt-6">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="thumbnail"
                className="w-20 h-20 object-cover rounded-lg shadow-md cursor-pointer hover:scale-110 transition"
              />
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="p-10 flex flex-col justify-center text-white">
          <h1 className="text-4xl font-extrabold mb-4 drop-shadow-lg">
            {product.title}
          </h1>
          <div className="flex items-center mb-6">
            <span className="text-yellow-400 text-2xl">★</span>
            <span className="ml-2 text-lg">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          <p className="text-lg mb-6 text-gray-200">{product.description}</p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {product.features.map((f, i) => (
              <div
                key={i}
                className="flex items-center bg-white/20 rounded-xl px-4 py-3 hover:bg-white/30 transition"
              >
                <span className="text-2xl mr-3">{f.icon}</span>
                <p className="text-sm">{f.text}</p>
              </div>
            ))}
          </div>

          {/* Floating Card: Price + Actions */}
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-lg w-full">
            <p className="text-3xl font-bold text-yellow-300 mb-6">
              ${product.price}
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center mb-6">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="px-3 py-2 bg-white/30 rounded-l-lg hover:bg-white/50 transition"
              >
                -
              </button>
              <span className="px-6 py-2 bg-white/20">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="px-3 py-2 bg-white/30 rounded-r-lg hover:bg-white/50 transition"
              >
                +
              </button>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4">
              <button className="flex-1 bg-yellow-400 text-black py-3 rounded-lg font-bold hover:scale-105 transition shadow-lg">
                Add to Cart
              </button>
              <button className="flex-1 bg-indigo-600 text-white py-3 rounded-lg font-bold hover:scale-105 transition shadow-lg">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
