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
} from "./pages/index";
import Mockman from "mockman-js";
import { ProtectedRoute } from "./utilities/routes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="/product/:productId" element={<SingleProductPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Whishlist />} />
        </Route>
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </Router>
  );
}

export default App;
