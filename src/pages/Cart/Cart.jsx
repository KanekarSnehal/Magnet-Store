import React from "react";
import "./cart.css";
import { CartItems, CartBillBoard, Header } from "../../components/index";
import { useCart } from "../../context/index";

export function Cart() {
  const { cart, cartDispatch } = useCart();

  return (
    <>
      <Header />
      <main class="main-container">
        <h2 class="text-center secondary-text-color">My Cart</h2>
        <div class="title-underline"></div>
        {cart.length === 0 ? (
          <h1 class="text-center">No products added...</h1>
        ) : (
          <>
            <div class="cart-container">
              <CartItems />
              <CartBillBoard />
            </div>
          </>
        )}
      </main>
    </>
  );
}
