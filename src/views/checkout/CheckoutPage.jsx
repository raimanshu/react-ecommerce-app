import React from 'react';
import CheckoutForm from '../../components/checkout/CheckoutForm';
import OrderSummary from '../../components/checkout/OrderSummary';

const fakeCart = [
    { id: 1, title: 'Bluetooth Speaker', price: 49.99, quantity: 1 },
    { id: 2, title: 'Gaming Keyboard', price: 89.99, quantity: 2 },
];

const CheckoutPage = () => {
    const handleSubmit = (data) => {
        console.log('Order Placed:', data);
        alert('Order placed successfully!');
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
                <CheckoutForm onSubmit={handleSubmit} />
                <OrderSummary items={fakeCart} />
            </div>
        </div>
    );
};

export default CheckoutPage;
