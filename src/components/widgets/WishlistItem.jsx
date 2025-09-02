import React from 'react';

const WishlistItem = ({ title, price, image, onRemove }) => {
    return (
        <div className="flex items-center gap-4 border p-4 rounded bg-white shadow-sm hover:shadow-md transition">
            <img src={image} alt={title} className="w-24 h-24 object-cover rounded" />
            <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <p className="text-gray-600">${price?.toFixed(2)}</p>
            </div>
            <button
                onClick={onRemove}
                className="text-red-600 hover:text-red-800 font-semibold transition"
            >
                Remove
            </button>
        </div>
    );
};

export default WishlistItem;
