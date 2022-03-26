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
    <>
      {cart.length !== 0 &&
        cart.map((cartItem) => (
          <div class="cart-item-container mr-16">
            <div class="horizontal-card-container">
              <img class="card-image" src={cartItem.img} alt="card image" />
              <div class="card-content">
                <h6 class="card-title">{cartItem.title}</h6>

                <p class="text-bold-weight p-sm">
                  Rs.
                  {Number(cartItem.price) -
                    (Number(cartItem.price) * Number(cartItem.discount)) / 100}
                  <span class="text-light-weight">
                    <span class="text-strike-through mx-8">
                      Rs.{cartItem.price}
                    </span>
                  </span>
                  <span class="primary-text-color">{cartItem.discount}%</span>
                </p>
                <div
                  class="badge   badge-number "
                  onClick={() => removeFromCart(cartItem._id, cartDispatch)}
                >
                  <a className="fa-solid fa-xmark number-badge-iframe badge-lg-size"></a>
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
                    onClick={() =>
                      incrementCartItem(cartItem._id, cartDispatch)
                    }
                  >
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
                <a>
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
                </a>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
