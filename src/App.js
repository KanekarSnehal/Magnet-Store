import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  Products,
  Login,
  Signup,
  Whishlist,
  Cart,
  SingleProductPage,
  Profile,
  ProfileDetails,
  Address,
  Orders,
  Checkout,
} from "./pages/index";
import Mockman from "mockman-js";
import { ProtectedRoute } from "./utilities/routes";
import { Toaster } from "react-hot-toast";
import { ScrollToTop } from "./components";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Toaster
          position="bottom-center"
          gutter={10}
          toastOptions={{
            style: {
              color: "#fff",
            },
            success: {
              iconTheme: {
                primary: "green",
              },
              style: {
                background: "#22DD22",
              },
            },
            error: {
              style: {
                background: "red",
              },
            },
          }}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="/product/:productId" element={<SingleProductPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Whishlist />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/profile" element={<Profile />}>
              <Route path="/profile" element={<ProfileDetails />} />
              <Route path="/profile/address" element={<Address />} />
              <Route path="/profile/orders" element={<Orders />} />
            </Route>
          </Route>
          <Route path="/mockman" element={<Mockman />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
