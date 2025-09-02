import React from 'react';
// import { Link } from 'react-router-dom';

const fakeOrder = {
    id: 'ORD-20230818-7890',
    date: 'August 18, 2025',
    customer: {
        name: 'John Doe',
        email: 'john@example.com',
        address: '123 Main St, Springfield, IL, USA',
    },
    items: [
        { id: 1, title: 'Wireless Headphones', price: 89.99, quantity: 1 },
        { id: 2, title: 'Gaming Mouse', price: 59.99, quantity: 2 },
    ],
    shipping: 10.0,
    paymentMethod: 'Visa ending in 1234',
};

const OrderReceiptPage = () => {
    const { id, date, customer, items, shipping, paymentMethod } = fakeOrder;
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const total = subtotal + shipping;

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white p-8 shadow rounded">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Order Receipt</h1>

                <div className="text-sm text-gray-600 mb-6">
                    <p><strong>Order ID:</strong> {id}</p>
                    <p><strong>Order Date:</strong> {date}</p>
                </div>

                <div className="mb-6">
                    <h2 className="text-lg font-semibold text-gray-700">Customer Details</h2>
                    <p className="text-sm text-gray-600 mt-2">{customer.name}</p>
                    <p className="text-sm text-gray-600">{customer.email}</p>
                    <p className="text-sm text-gray-600">{customer.address}</p>
                </div>

                <div className="mb-6">
                    <h2 className="text-lg font-semibold text-gray-700">Purchased Items</h2>
                    <div className="mt-2 space-y-2">
                        {items.map(item => (
                            <div key={item.id} className="flex justify-between text-sm border-b py-2">
                                <span>{item.title} x {item.quantity}</span>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-6">
                    <h2 className="text-lg font-semibold text-gray-700">Payment Summary</h2>
                    <div className="text-sm text-gray-600 mt-2 space-y-1">
                        <div className="flex justify-between">
                            <span>Subtotal:</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping:</span>
                            <span>${shipping.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between font-medium text-gray-800">
                            <span>Total:</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <div className="mt-2 text-sm">
                            <strong>Payment Method:</strong> {paymentMethod}
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 mt-8">
                    {/* <Link
                        to="/"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                        Back to Home
                    </Link> */}
                    <button
                        onClick={() => window.print()}
                        className="border border-gray-400 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 transition"
                    >
                        Print Receipt
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderReceiptPage;
