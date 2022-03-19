import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { FilterProvider } from "./context/index";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <FilterProvider>
      <App />
    </FilterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
