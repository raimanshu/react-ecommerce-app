import React from 'react';

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
    const { id, title, price, image, quantity } = item;

    return (
        <div className="flex items-center gap-4 border p-4 rounded bg-white shadow-sm">
            <img src={image} alt={title} className="w-24 h-24 object-cover rounded" />
            <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <p className="text-gray-600">${price.toFixed(2)}</p>
                <div className="flex items-center gap-2 mt-2">
                    <button
                        onClick={() => onDecrease(id)}
                        className="px-2 py-1 border rounded text-gray-700 hover:bg-gray-100"
                    >
                        −
                    </button>
                    <span>{quantity}</span>
                    <button
                        onClick={() => onIncrease(id)}
                        className="px-2 py-1 border rounded text-gray-700 hover:bg-gray-100"
                    >
                        +
                    </button>
                </div>
            </div>
            <button
                onClick={() => onRemove(id)}
                className="text-red-600 hover:text-red-800 font-medium"
            >
                Remove
            </button>
        </div>
    );
};

export default CartItem;
