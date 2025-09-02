import React, { useState } from "react";

const ProductTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="mt-12">
      <div className="flex gap-4 border-b mb-4">
        {["description", "specs", "reviews"].map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 font-medium ${
              activeTab === tab
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab[0].toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="text-gray-700">
        {activeTab === "description" && (
          <p>{product.description}</p>
        )}
        {activeTab === "specs" && (
          <ul className="list-disc pl-5 space-y-1">
            {product.specs.map((spec, i) => (
              <li key={i}>{spec}</li>
            ))}
          </ul>
        )}
        {activeTab === "reviews" && (
          <div>
            <p className="text-sm">⭐️ {product.rating} / 5 from 12 reviews</p>
            <p className="mt-2 italic text-gray-500">
              Review system integration coming soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
