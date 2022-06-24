import React from "react";
import { useUserData } from "../../context/index";
import { cartDetailsCalculator } from "./helper";
import { useNavigate } from "react-router-dom";

export function CartBillBoard() {
  const {
    userState: {
      userCart: { cart },
    },
  } = useUserData();
  const navigate = useNavigate();
  const { totalMRP, discountOnMRP, quantity } = cartDetailsCalculator(cart);
  const totalAmount = totalMRP - discountOnMRP;

  return (
    <>
      <div className="cart-price-container">
        <div className="text-bold-weight my-16 p-rg">
          PRICE DETAILS: ({quantity} items)
        </div>
        <div className="price-items">
          <p>Total MRP</p>
          <p>Rs.{totalMRP}</p>
        </div>
        <div className="price-items">
          <p>Discount on MRP</p>
          <p className="primary-text-color">-Rs.{discountOnMRP}</p>
        </div>
        <div className="price-items">
          <p>Convenience Fee</p>
          <p className="primary-text-color">
            <span className="text-strike-through mx-8">Rs.49</span>FREE
          </p>
        </div>
        <div className="filter-divider-line"></div>
        <div className="price-items text-bold-weight">
          <p>Total Amount</p>
          <p className="secondary-text-color">Rs.{totalAmount}</p>
        </div>
        <div className="btn-container">
          <button
            className="btn primary-btn"
            onClick={() => navigate("/checkout")}
          >
            CHECKOUT
          </button>
        </div>
      </div>
    </>
  );
}
