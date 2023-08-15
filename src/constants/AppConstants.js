const AppConstants = {
    BASE_URL: "http://localhost:3000",
    API_URL: "http://localhost:4000/api",
    // Add other constants as needed

    APP_ROOT_PATH: {
        DASHBOARD: "dashboard",
        LOGIN: "login",
        REGISTER: "register",
        FORGOT_PASSWORD: "forgot-password",
        HOME: "home",
        PRODUCT_DETAIL: "product-detail",
        USER_PROFILE: "user-profile",
        PAGE_NOT_FOUND: "page-not-found",
        SEARCH_RESULT_CARD: "search-result-card",
        CATEGORY: "category",
        WISHLIST_ITEM: "wishlist-item",
        CART: "cart",
        CHECKOUT: "checkout",
        PAYMENT_SUCCESS: "payment-success",
        ORDER_RECEIPT: "order-reciept",
    },
    PAYMENT_PATHS: {
        STRIPE_CHECKOUT: "stripe-checkout",
        CHECKOUT_OPTIONS: "checkout-options",
        PAYPAL_CHECKOUT: "checkout/paypal",
        RAZORPAY_CHECKOUT: "checkout/razorpay",
    },
};

export default AppConstants;