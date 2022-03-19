import React from "react";

export function CartPrice() {
  return (
    <>
      <div class="cart-price-container">
        <p>COUPONS</p>
        <button class="btn outline-secondary-btn">
          <i class="fas fa-tag mr-16"></i>Apply Coupon
        </button>
        <div class="text-bold-weight my-16">PRICE DETAILS: (1 items)</div>
        <div class="price-items">
          <p>Total MRP</p>
          <p>Rs.3398</p>
        </div>
        <div class="price-items">
          <p>Discount on MRP</p>
          <p class="primary-text-color">-Rs.1700</p>
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
          <p class="secondary-text-color">Rs.1448</p>
        </div>
        <div class="btn-container">
          <button class="btn primary-btn">PLACE ORDER</button>
        </div>
      </div>
    </>
  );
}
