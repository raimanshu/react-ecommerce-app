import React from 'react';
// import { Link } from 'react-router-dom';
// import { CheckCircleIcon } from '@heroicons/react/24/solid';

const PaymentSuccessPage = () => {
    const orderId = Math.floor(Math.random() * 1000000); // Simulated order ID

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
                {/* <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" /> */}
                <h1 className="text-2xl font-semibold text-gray-800 mb-2">Payment Successful</h1>
                <p className="text-gray-600 mb-4">
                    Thank you for your purchase! Your order <span className="font-medium">#{orderId}</span> has been placed successfully.
                </p>
                {/* <Link
                    to="/"
                    className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    Back to Home
                </Link>
                <Link
                    to="/orders"
                    className="ml-4 inline-block mt-4 px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"
                >
                    View Orders
                </Link> */}
            </div>
        </div>
    );
};

export default PaymentSuccessPage;
