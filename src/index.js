import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import {
  FilterProvider,
  AuthProvider,
  UserDataProvider,
  AddressProvider,
  DataProvider,
} from "./context/index";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <DataProvider>
        <UserDataProvider>
          <AddressProvider>
            <FilterProvider>
              <App />
            </FilterProvider>
          </AddressProvider>
        </UserDataProvider>
      </DataProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
