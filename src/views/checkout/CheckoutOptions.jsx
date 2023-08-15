import React, { useState } from "react";
import {
    FaPaypal,
    FaStripe,
    FaCreditCard,
    FaGooglePay,
    FaApplePay,
} from "react-icons/fa";
import { SiRazorpay } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const paymentMethods = [
    {
        id: "stripe",
        name: "Stripe",
        icon: <FaStripe className="text-indigo-600 text-2xl" />,
        path: "/checkout/stripe-checkout"
    },
    {
        id: "paypal",
        name: "PayPal",
        icon: <FaPaypal className="text-blue-500 text-2xl" />,
    },
    {
        id: "razorpay",
        name: "Razorpay",
        icon: <SiRazorpay className="text-blue-600 text-2xl" />,
    },
    {
        id: "applepay",
        name: "Apple Pay",
        icon: <FaApplePay className="text-black text-2xl" />,
    },
    {
        id: "googlepay",
        name: "Google Pay",
        icon: <FaGooglePay className="text-gray-700 text-2xl" />,
    },
    {
        id: "creditcard",
        name: "Credit / Debit Card",
        icon: <FaCreditCard className="text-green-600 text-2xl" />,
    },
];

const CheckoutOptions = () => {
    const [selected, setSelected] = useState(null);
    const navigator = useNavigate();

    const handleSelect = (merchant) => {
        setSelected(merchant);
    };

    const handleContinue = () => {
        if (!selected) {
            alert("Please select a payment method.");
            return;
        }

        console.log(`Proceeding with: ${selected}`);

        navigator(selected.path, { replace: true });
    };

    return (
        <div className="max-w-3xl mx-auto px-6 py-10 bg-white rounded-xl shadow-xl">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                Choose Your Payment Method
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {paymentMethods.map((method) => (
                    <button
                        key={method.id}
                        onClick={() => handleSelect(method)}
                        className={`flex items-center gap-4 p-4 rounded-lg border transition-all duration-300 ${selected?.id === method.id
                            ? "border-indigo-600 bg-indigo-50 shadow-md"
                            : "border-gray-200 hover:border-indigo-400 hover:bg-gray-50"
                            }`}
                    >
                        {method.icon}
                        <span className="text-gray-800 font-medium">{method.name}</span>
                    </button>
                ))}
            </div>

            <div className="mt-8 text-center">
                <button
                    onClick={handleContinue}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300"
                >
                    Continue to Payment
                </button>
            </div>
        </div>
    );
};

export default CheckoutOptions;
