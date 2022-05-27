import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import {
  FilterProvider,
  AuthProvider,
  UserDataProvider,
} from "./context/index";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <UserDataProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </UserDataProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
