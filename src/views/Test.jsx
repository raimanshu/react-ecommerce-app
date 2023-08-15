// pages/Test.jsx
import React, { } from "react";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from "./CheckoutForm";


const Test = () => {
    const stripePromise = loadStripe("pk_test_51KsRVuSAEtAwXZDCWvV0wJLlZnNPFt19Q9L9sUgdkYZNuekdY6mSA5vCW4eC2eJziOU7sEa7i71k9xwgRW3xOAeF00ZSQmwBj2"); // <-- Your Stripe public key



    return (
        <>
            <Elements stripe={stripePromise}>
                <div>
                    <h2>Stripe React Checkout</h2>
                    <CheckoutForm />
                </div>
            </Elements>
        </>

    );
};

export default Test;
