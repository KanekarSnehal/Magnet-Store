import React from "react";
import "./cart.css";
import { CartItems, CartBillBoard, Header, Loader } from "../../components";
import { useUserData } from "../../context";

export function Cart() {
  const {
    userState: {
      userCart: { cart, loading },
    },
  } = useUserData();

  return (
    <>
      <Header />
      <main className="main-container">
        <h2 className="text-center secondary-text-color">My Cart</h2>
        <div className="title-underline"></div>
        {loading ? (
          <Loader />
        ) : cart.length === 0 ? (
          <h4 className="text-center">No products added...</h4>
        ) : (
          <div className="cart-container">
            <div className="cart-item-container mr-16">
              {cart.map((cartItem) => (
                <CartItems key={cartItem._id} cartItem={cartItem} />
              ))}
            </div>
            <CartBillBoard />
          </div>
        )}
      </main>
    </>
  );
}
