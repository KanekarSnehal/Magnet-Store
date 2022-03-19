import React from "react";
import { useCart } from "../../context/index";

export function CartItems() {
  const { cartState, cartDispatch } = useCart();

  return (
    <>
      <div class="cart-item-container mr-16">
        <div class="horizontal-card-container">
          <img class="card-image" src="/assets/bowls.jpg" alt="card image" />
          <div class="card-content">
            <h6 class="card-title">Snack Bowl</h6>
            <p class="card-info p-sm">Nitori snack bowls that may be...</p>
            <p class="text-bold-weight p-sm">
              Rs.899
              <span class="text-light-weight">
                <span class="text-strike-through">Rs.999</span>
              </span>
              <span class="primary-text-color">10%</span>
            </p>
            <div class="badge   badge-number ">
              <a className="fa-solid fa-xmark number-badge-iframe badge-lg-size"></a>
            </div>
            <div class="btn-container p-sm">
              <button class="btn outline-secondary-btn">
                <i class="fas fa-minus"></i>
              </button>
              <span class="btn outline-secondary-btn">2</span>
              <button class="btn outline-secondary-btn">
                <i class="fas fa-plus"></i>
              </button>
            </div>
            <a href="">
              <button class="btn outline-secondary-btn">
                Move to wishlist
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
