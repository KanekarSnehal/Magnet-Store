import React from "react";
import "./cart.css";
import { CartItems, CartPrice, Header } from "../../components/index";

export function Cart() {
  return (
    <>
      <Header />
      <main class="main-container">
        <h2 class="text-center secondary-text-color">My Cart</h2>
        <div class="title-underline"></div>

        {/* <p class="text-center p-md">
          Total Items: <span class="secondary-text-color"> 8 items</span>
        </p> */}

        <div class="cart-container">
          <CartItems />
          <CartPrice />
        </div>
      </main>
    </>
  );
}
