// components/HeroBanner.jsx
import React from "react";

const HeroBanner = () => {
    return (
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-6 text-center">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Discover Your Next Favorite Product
                </h1>
                <p className="text-lg md:text-xl mb-6">
                    Shop the latest trends, top brands, and best deals.
                </p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
                    Shop Now
                </button>
            </div>
        </section>
    );
};

export default HeroBanner;
