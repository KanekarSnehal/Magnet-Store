import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import {
  FilterProvider,
  CartProvider,
  AuthProvider,
  WishlistProvider,
} from "./context/index";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <WishlistProvider>
        <CartProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </CartProvider>
      </WishlistProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
