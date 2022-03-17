import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Products, Login, Signup, Whishlist } from "./pages/index";
import Cart from "./pages/cart/Cart";
import { Header } from "./components/index";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/whishlist" element={<Whishlist />} />
        </Routes>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
