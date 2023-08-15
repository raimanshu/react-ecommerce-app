// CheckoutForm.jsx
import React, { useState } from 'react';
import {
    CardElement,
    useStripe,
    useElements
} from '@stripe/react-stripe-js';

const StripePaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        setLoading(true);
        setMessage('');

        const res = await fetch('http://127.0.0.1:5001/payment/create-payment-intent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: 1000 }) // $10
        });

        const response = await res.json();

        const result = await stripe.confirmCardPayment(response.data.payment_intent, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: "John Doe",
                    address: {
                        line1: "123 Main Street",
                        city: "New York",
                        state: "NY",
                        postal_code: "10001",
                        country: "US"
                    }
                }
            }
        });

        if (result.error) {
            setMessage(result.error.message);
        } else {
            if (result.paymentIntent.status === 'succeeded') {
                setMessage('✅ Payment successful! 🎉');
            }
        }

        setLoading(false);
    };

    const CARD_ELEMENT_OPTIONS = {
        style: {
            base: {
                color: '#32325d',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': { color: '#a0aec0' },
            },
            invalid: { color: '#fa755a', iconColor: '#fa755a' },
        },
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Checkout</h2>
                <p className="text-gray-500 mb-6 text-center">Enter your card details to complete the payment.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="border border-gray-300 rounded-md p-3 shadow-sm bg-gray-50">
                        <CardElement options={CARD_ELEMENT_OPTIONS} />
                    </div>

                    <button
                        type="submit"
                        disabled={!stripe || loading}
                        className={`w-full py-2 px-4 rounded-md text-white font-semibold transition ${loading || !stripe
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-indigo-600 hover:bg-indigo-700'
                            }`}
                    >
                        {loading ? 'Processing...' : 'Pay $10.00'}
                    </button>
                </form>

                {message && (
                    <div className="mt-4 text-center text-sm text-green-600 font-medium">
                        {message}
                    </div>
                )}
            </div>
        </div>
    );
};

export default StripePaymentForm;
