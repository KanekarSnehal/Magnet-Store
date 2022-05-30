import React from "react";
import { useUserData, useAuthContext } from "../../context/index";
import { addToWishlist, removeFromWishlist, addToCart } from "../../services";
import { useNavigate } from "react-router-dom";

export default function ProductsCards({ product }) {
  const {
    userState: {
      userWishlist: { wishlist },
      userCart: { cart },
    },
    userDispatch,
  } = useUserData();
  const {
    authState: { authToken },
  } = useAuthContext();
  const navigate = useNavigate();

  return (
    <div className="vertical-card-container profile-badge" key={product._id}>
      <div className={!product.inStock ? "opacity" : ""}>
        <img
          className="card-image cursor-pointer"
          src={product.img}
          alt="card image"
          onClick={() => navigate(`/product/${product._id}`)}
        />

        <div className="position-absolute pos-top-right badge-number ">
          {wishlist?.find(
            (wishlistItem) => wishlistItem._id === product._id
          ) ? (
            <i
              className="fas fa-heart number-badge-iframe badge-lg-size cursor-pointer"
              onClick={() => removeFromWishlist(product._id, userDispatch)}
            ></i>
          ) : (
            <i
              className="far fa-heart number-badge-iframe badge-lg-size cursor-pointer"
              onClick={() => {
                authToken
                  ? addToWishlist(product, userDispatch)
                  : navigate("/login");
              }}
            ></i>
          )}
        </div>

        <div className="card-content">
          <h6
            className="card-title cursor-pointer"
            onClick={() => navigate(`/product/${product._id}`)}
          >
            {product.title}
          </h6>
          <p className="text-bold-weight">
            Rs.
            {Number(product.price) -
              (Number(product.price) * Number(product.discount)) / 100}
            <span className="text-light-weight">
              <span className="text-strike-through mx-8">
                Rs. {product.price}
              </span>
            </span>
            <span className="primary-text-color">{product.discount}% OFF</span>
            <span className="card-rating">
              {product.ratings}
              <i className="fa-solid fa-star p-sm rating-icon"></i>
            </span>
          </p>

          <div className="btn-container p-sm">
            {cart.find((cartItem) => cartItem._id === product._id) ? (
              <button
                className="btn primary-btn mr-16"
                onClick={() => navigate("/cart")}
              >
                Go to Cart
              </button>
            ) : (
              <button
                className="btn primary-btn mr-16"
                onClick={() => {
                  authToken
                    ? addToCart(product, userDispatch)
                    : navigate("/login");
                }}
                disabled={!product.inStock}
              >
                <i className="fas fa-shopping-cart mr-16 "></i>Add to cart
              </button>
            )}
          </div>
        </div>
      </div>
      {!product.inStock && (
        <div className="card-text-overlay">Out Of Stock</div>
      )}
    </div>
  );
}
