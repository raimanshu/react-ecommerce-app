import React, { useState } from 'react';
import CartItem from '../../components/cart/CartItem';

const initialCart = [
    {
        id: 1,
        title: 'Bluetooth Speaker',
        price: 49.99,
        quantity: 1,
        image: 'https://source.unsplash.com/160x160/?speaker',
    },
    {
        id: 2,
        title: 'Gaming Keyboard',
        price: 89.99,
        quantity: 2,
        image: 'https://source.unsplash.com/160x160/?keyboard',
    },
];

const CartPage = () => {
    const [cartItems, setCartItems] = useState(initialCart);

    const handleIncrease = (id) => {
        setCartItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const handleDecrease = (id) => {
        setCartItems((items) =>
            items.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const handleRemove = (id) => {
        setCartItems((items) => items.filter((item) => item.id !== id));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h1>

                {cartItems.length === 0 ? (
                    <p className="text-gray-600">Your cart is empty.</p>
                ) : (
                    <>
                        <div className="space-y-4">
                            {cartItems.map((item) => (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    onIncrease={handleIncrease}
                                    onDecrease={handleDecrease}
                                    onRemove={handleRemove}
                                />
                            ))}
                        </div>

                        <div className="mt-8 p-4 bg-white rounded shadow-sm">
                            <div className="flex justify-between items-center text-lg font-medium">
                                <span>Subtotal:</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <button
                                className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CartPage;
