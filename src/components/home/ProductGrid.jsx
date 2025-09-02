// components/ProductGrid.jsx
import React from "react";
import ProductCard from "./ProductCard";

const mockProducts = [
  {
    name: "Wireless Headphones",
    brand: "Sony",
    price: 99.99,
    image: "/images/product1.jpg",
  },
  {
    name: "Smartwatch Series 6",
    brand: "Apple",
    price: 299.99,
    image: "/images/product2.jpg",
  },
  {
    name: "Running Shoes",
    brand: "Nike",
    price: 89.99,
    image: "/images/product3.jpg",
  },
  {
    name: "Coffee Maker",
    brand: "Philips",
    price: 49.99,
    image: "/images/product4.jpg",
  },
];

const ProductGrid = () => {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Trending Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {mockProducts.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
