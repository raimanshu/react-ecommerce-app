import React from "react";

const RatingStars = ({ rating }) => {
  return (
    <div className="flex items-center gap-1 text-yellow-400">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.562-.955L10 0l2.95 5.955 6.562.955-4.756 4.635 1.122 6.545z" />
        </svg>
      ))}
    </div>
  );
};

export default RatingStars;
