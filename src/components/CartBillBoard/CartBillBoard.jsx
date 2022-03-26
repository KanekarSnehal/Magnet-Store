import React from "react";
import { useCart } from "../../context/index";

export function CartBillBoard() {
  const { cart, cartDispatch } = useCart();

  const finalDiscountOnMRP = cart.reduce(
    (prevDiscount, currCartItem) =>
      prevDiscount +
      (Number(currCartItem.price) -
        (Number(currCartItem.price) * Number(currCartItem.discount)) / 100),
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
        <div class="cart-price-container">
          <p>COUPONS</p>
          <button class="btn outline-secondary-btn">
            <i class="fas fa-tag mr-16"></i>Apply Coupon
          </button>
          <div class="text-bold-weight my-16">
            PRICE DETAILS: ({cart.length} items)
          </div>
          <div class="price-items">
            <p>Total MRP</p>
            <p>Rs.{totalMRP}</p>
          </div>
          <div class="price-items">
            <p>Discount on MRP</p>
            <p class="primary-text-color">-Rs.{finalDiscountOnMRP}</p>
          </div>
          <div class="price-items">
            <p>Convenience Fee</p>
            <p class="primary-text-color">
              <span class="text-strike-through mx-8">Rs.49</span>FREE
            </p>
          </div>
          <div class="filter-divider-line"></div>
          <div class="price-items text-bold-weight">
            <p>Total Amount</p>
            <p class="secondary-text-color">Rs.{finalBillBoardAmount}</p>
          </div>
          <div class="btn-container">
            <button class="btn primary-btn">PLACE ORDER</button>
          </div>
        </div>
      )}
    </>
  );
}
