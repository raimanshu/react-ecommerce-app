// components/CategoryGrid.jsx
import React from "react";

const categories = [
    { name: "Electronics", image: "/images/electronics.jpg" },
    { name: "Fashion", image: "/images/fashion.jpg" },
    { name: "Home", image: "/images/home.jpg" },
    { name: "Beauty", image: "/images/beauty.jpg" },
];

const CategoryGrid = () => {
    return (
        <section className="py-12 px-6 max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6">Featured Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map((cat, idx) => (
                    <div
                        key={idx}
                        className="rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
                    >
                        <img
                            src={cat.image}
                            alt={cat.name}
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4 text-center font-medium">{cat.name}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CategoryGrid;
