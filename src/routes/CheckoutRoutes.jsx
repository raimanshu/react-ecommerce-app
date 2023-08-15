import React from "react";
import CheckoutOptions from "../views/checkout/CheckoutOptions";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import StripeCheckout from "../views/checkout/stripe/StripeCheckout";
import AppConstants from "../constants/AppConstants";




const CheckoutRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={`/${AppConstants.PAYMENT_PATHS.CHECKOUT_OPTIONS}`} replace />} />
            <Route path={`/${AppConstants.PAYMENT_PATHS.CHECKOUT_OPTIONS}`} element={<CheckoutOptions />} />
            <Route path={`/${AppConstants.PAYMENT_PATHS.STRIPE_CHECKOUT}`} element={<StripeCheckout />} />
        </Routes>
    );
};

export default CheckoutRoutes;