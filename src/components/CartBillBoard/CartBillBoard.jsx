import React from "react";
import { useCart } from "../../context/index";

export function CartBillBoard() {
  const { cart, cartDispatch } = useCart();

  const finalDiscountOnMRP = cart.reduce(
    (prevDiscount, currCartItem) =>
      prevDiscount +
      (Number(currCartItem.price) * Number(currCartItem.discount)) / 100,
    0
  );
  const totalMRP = cart.reduce(
    (prevMRP, currCartItem) =>
      prevMRP + Number(currCartItem.price) * Number(currCartItem.qty),
    0
  );

  const finalBillBoardAmount = totalMRP - finalDiscountOnMRP;

  return (
    <>
      {cart.length !== 0 && (
        <div className="cart-price-container">
          <p>COUPONS</p>
          <button className="btn outline-secondary-btn">
            <i className="fas fa-tag mr-16"></i>Apply Coupon
          </button>
          <div className="text-bold-weight my-16">
            PRICE DETAILS: ({cart.length} items)
          </div>
          <div className="price-items">
            <p>Total MRP</p>
            <p>Rs.{totalMRP}</p>
          </div>
          <div className="price-items">
            <p>Discount on MRP</p>
            <p className="primary-text-color">-Rs.{finalDiscountOnMRP}</p>
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
            <p className="secondary-text-color">Rs.{finalBillBoardAmount}</p>
          </div>
          <div className="btn-container">
            <button className="btn primary-btn">PLACE ORDER</button>
          </div>
        </div>
      )}
    </>
  );
}
