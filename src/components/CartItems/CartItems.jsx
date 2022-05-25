import React from "react";
import {
  addToWishlist,
  removeFromWishlist,
  removeFromCart,
  incrementCartItem,
  decrementCartItem,
} from "../../api-calls/index";
import { useCart, useWishlist } from "../../context/index";

export function CartItems() {
  const { cart, cartDispatch } = useCart();
  const { wishlist, wishlistDispatch } = useWishlist();

  return (
    <div class="cart-item-container mr-16">
      {cart.length !== 0 &&
        cart.map((cartItem) => (
          <div class="horizontal-card-container" key={cartItem._id}>
            <img class="card-image" src={cartItem.img} alt="card image" />
            <div class="card-content">
              <p class="card-title text-bold-weight">{cartItem.title}</p>

              <span class="text-bold-weight p-sm">
                Rs.
                {Number(cartItem.price) -
                  (Number(cartItem.price) * Number(cartItem.discount)) / 100}
                <span class="text-light-weight">
                  <span class="text-strike-through mx-8">
                    Rs.{cartItem.price}
                  </span>
                </span>
                <span class="primary-text-color">{cartItem.discount}%</span>
              </span>
              <div
                class="badge badge-number "
                onClick={() => removeFromCart(cartItem._id, cartDispatch)}
              >
                <i className="fa-solid fa-xmark number-badge-iframe badge-lg-size"></i>
              </div>
              <div class="btn-container p-sm">
                {cartItem.qty <= 1 ? (
                  <button
                    class="btn outline-secondary-btn"
                    onClick={() => removeFromCart(cartItem._id, cartDispatch)}
                  >
                    <i class="fa-solid fa-trash-can"></i>{" "}
                  </button>
                ) : (
                  <button
                    class="btn outline-secondary-btn"
                    onClick={() =>
                      decrementCartItem(cartItem._id, cartDispatch)
                    }
                  >
                    <i class="fas fa-minus"></i>
                  </button>
                )}

                <span class="btn outline-secondary-btn">{cartItem.qty}</span>

                <button
                  class="btn outline-secondary-btn"
                  onClick={() => incrementCartItem(cartItem._id, cartDispatch)}
                >
                  <i class="fas fa-plus"></i>
                </button>
              </div>

              {wishlist.find(
                (wishlistItem) => wishlistItem._id === cartItem._id
              ) ? (
                <button
                  class="btn outline-secondary-btn"
                  onClick={() => {
                    removeFromWishlist(cartItem._id, wishlistDispatch);
                  }}
                >
                  Remove from wishlist
                </button>
              ) : (
                <button
                  class="btn outline-secondary-btn"
                  onClick={() => {
                    addToWishlist(cartItem, wishlistDispatch);
                    removeFromCart(cartItem._id, cartDispatch);
                  }}
                >
                  Move to wishlist
                </button>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}
