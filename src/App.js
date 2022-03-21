import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Products, Login, Signup, Whishlist, Cart } from "./pages/index";
import Mockman from "mockman-js";
import { GuestRoute, ProtectedRoute } from "./utilities/routes";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route element={<GuestRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
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
