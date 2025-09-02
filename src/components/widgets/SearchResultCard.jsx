import React from 'react';

const SearchResultCard = ({ title, description }) => {
    return (
        <div className="border p-4 rounded shadow-sm hover:shadow-md transition bg-white">
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <p className="text-gray-600 text-sm mt-1">{description}</p>
        </div>
    );
};

export default SearchResultCard;
