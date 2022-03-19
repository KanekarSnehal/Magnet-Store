import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { FilterProvider, CartProvider } from "./context/index";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
