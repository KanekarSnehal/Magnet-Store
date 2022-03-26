import React from "react";
import "./cart.css";
import { CartItems, CartBillBoard, Header } from "../../components/index";

export function Cart() {
  return (
    <>
      <Header />
      <main class="main-container">
        <h2 class="text-center secondary-text-color">My Cart</h2>
        <div class="title-underline"></div>
        <div class="cart-container">
          <CartItems />
          <CartBillBoard />
        </div>
      </main>
    </>
  );
}
