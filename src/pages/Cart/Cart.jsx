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
        <div class="cart-container">
          {cart.length === 0 ? (
            <h1>No products added...</h1>
          ) : (
            <>
              <CartItems />
              <CartBillBoard />
            </>
          )}
        </div>
      </main>
    </>
  );
}
