import React from "react";
import "./cart.css";
import { CartItems, CartBillBoard, Header } from "../../components/index";
import { useCart } from "../../context/index";

export function Cart() {
  const { cart, cartDispatch } = useCart();

  return (
    <>
      <Header />
      <main className="main-container">
        <h2 className="text-center secondary-text-color">My Cart</h2>
        <div className="title-underline"></div>
        {cart.length === 0 ? (
          <h1 className="text-center">No products added...</h1>
        ) : (
          <>
            <div className="cart-container">
              <CartItems />
              <CartBillBoard />
            </div>
          </>
        )}
      </main>
    </>
  );
}
