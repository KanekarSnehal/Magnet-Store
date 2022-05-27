import React from "react";
import {
  addToWishlist,
  removeFromWishlist,
  removeFromCart,
  incrementCartItem,
  decrementCartItem,
} from "../../services";
import { useUserData } from "../../context/index";

export function CartItems({ cartItem }) {
  const {
    userState: {
      userWishlist: { wishlist },
    },
    userDispatch,
  } = useUserData();

  return (
    <div className="horizontal-card-container" key={cartItem._id}>
      <img className="card-image" src={cartItem.img} alt="card image" />
      <div className="card-content">
        <p className="card-title text-bold-weight">{cartItem.title}</p>

        <span className="text-bold-weight p-sm">
          Rs.
          {Number(cartItem.price) -
            (Number(cartItem.price) * Number(cartItem.discount)) / 100}
          <span className="text-light-weight">
            <span className="text-strike-through mx-8">
              Rs.{cartItem.price}
            </span>
          </span>
          <span className="primary-text-color">{cartItem.discount}%</span>
        </span>
        <div
          className="badge badge-number "
          onClick={() => removeFromCart(cartItem._id, userDispatch)}
        >
          <i className="fa-solid fa-xmark number-badge-iframe badge-lg-size"></i>
        </div>
        <div className="btn-container p-sm">
          {cartItem.qty <= 1 ? (
            <button
              className="btn outline-secondary-btn"
              onClick={() => removeFromCart(cartItem._id, userDispatch)}
            >
              <i className="fa-solid fa-trash-can"></i>{" "}
            </button>
          ) : (
            <button
              className="btn outline-secondary-btn"
              onClick={() => decrementCartItem(cartItem._id, userDispatch)}
            >
              <i className="fas fa-minus"></i>
            </button>
          )}

          <span className="btn outline-secondary-btn">{cartItem.qty}</span>

          <button
            className="btn outline-secondary-btn"
            onClick={() => incrementCartItem(cartItem._id, userDispatch)}
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>

        {wishlist.find((wishlistItem) => wishlistItem._id === cartItem._id) ? (
          <button
            className="btn outline-secondary-btn"
            onClick={() => {
              removeFromWishlist(cartItem._id, userDispatch);
            }}
          >
            Remove from wishlist
          </button>
        ) : (
          <button
            className="btn outline-secondary-btn"
            onClick={() => {
              addToWishlist(cartItem, userDispatch);
              removeFromCart(cartItem._id, userDispatch);
            }}
          >
            Move to wishlist
          </button>
        )}
      </div>
    </div>
  );
}
