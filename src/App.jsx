// import './App.css'
import "./assets/input.css";
// import Home from '../src/views/home/Home'
import ProductDetail from "../src/views/productDetail/productDetail";
import UserProfile from "./views/account/UserProfile";
import Home from "./views/Home/Home";
import PageNotFound from "./views/support/PageNotFound";
import SearchResultCard from "./components/widgets/SearchResultCard";
import CategoryPage from "./views/category/CategoryPage";
import WishlistItem from "./components/widgets/WishlistItem";
import CartPage from "./views/cart/CartPage";
import CheckoutPage from "./views/checkout/CheckoutPage";
import PaymentSuccessPage from "./views/support/PaymentSuccessPage";
import OrderReceiptPage from "./views/support/OrderReceiptPage";
import AppButton from "./components/widgets/AppButton";
import Login from "./views/authentication/Login";
import Register from "./views/authentication/Register";
import ForgetPassword from "./views/authentication/ForgetPassword";
import CheckoutRoutes from "./routes/CheckoutRoutes";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Test from "./views/Test";
import AppConstants from "./constants/AppConstants";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to={`/${AppConstants.APP_ROOT_PATH.LOGIN}`} replace />} />
          <Route path={`/${AppConstants.APP_ROOT_PATH.CHECKOUT}/*`} element={<CheckoutRoutes />} />


          <Route path={`/${AppConstants.APP_ROOT_PATH.LOGIN}`} element={<Login />}></Route>
          <Route path={`/${AppConstants.APP_ROOT_PATH.REGISTER}`} element={<Register />}></Route>
          <Route path={`/${AppConstants.APP_ROOT_PATH.FORGOT_PASSWORD}`} element={<ForgetPassword />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/product-detail" element={<ProductDetail />}></Route>
          <Route path="/user-profile" element={<UserProfile />}></Route>
          <Route path="/page-not-found" element={<PageNotFound />}></Route>
          <Route path="/search-result-card" element={<SearchResultCard />}></Route>
          <Route path="/category" element={<CategoryPage />}></Route>
          <Route path="/wishlist-item" element={<WishlistItem />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/checkout" element={<CheckoutPage />}></Route>
          <Route path="/payment-success" element={<PaymentSuccessPage />}></Route>
          <Route path="/order-reciept" element={<OrderReceiptPage />}></Route>
          <Route path="/test" element={<Test />}></Route>
        </Routes>
      </Router>

      {/* <Login />
      <Register />
      <ForgetPassword />
      <AppButton variant="primary" size="lg">
        Hello
      </AppButton>
      <Home />
      <ProductDetail />
      <UserProfile />
      <PageNotFound />
      <SearchResultCard />
      <CategoryPage />
      <WishlistItem />
      <CartPage />
      <CheckoutPage />
      <PaymentSuccessPage />
      <OrderReceiptPage /> */}
    </>
  );
}

export default App;
