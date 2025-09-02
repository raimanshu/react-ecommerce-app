import React from 'react';

const CategoryCard = ({ title, image, description }) => {
    return (
        <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md bg-white transition">
            <img src={image} alt={title} className="w-full h-40 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <p className="text-sm text-gray-600 mt-1">{description}</p>
            </div>
        </div>
    );
};

export default CategoryCard;
