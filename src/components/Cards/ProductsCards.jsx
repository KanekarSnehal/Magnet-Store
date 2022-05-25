import React from "react";
import {
  useFilter,
  useCart,
  useWishlist,
  useAuthContext,
} from "../../context/index";
import {
  addToWishlist,
  removeFromWishlist,
  addToCart,
} from "../../api-calls/index";
import { useNavigate } from "react-router-dom";

export default function ProductsCards() {
  const { finalFilteredProducts } = useFilter();
  const { wishlist, wishlistDispatch } = useWishlist();
  const { isAuthenticated } = useAuthContext();
  const { cart, cartDispatch } = useCart();
  const navigate = useNavigate();
  return (
    <>
      {finalFilteredProducts.length === 0 ? (
        <h1>No Products Available</h1>
      ) : (
        finalFilteredProducts.map((product) => (
          <div
            className="vertical-card-container profile-badge"
            key={product._id}
          >
            <div className={!product.inStock ? "opacity" : ""}>
              <img class="card-image" src={product.img} alt="card image" />

              <div class="position-absolute pos-top-right   badge-number ">
                {wishlist.find(
                  (wishlistItem) => wishlistItem._id === product._id
                ) ? (
                  <i
                    className="fas fa-heart number-badge-iframe badge-lg-size"
                    onClick={() =>
                      removeFromWishlist(product._id, wishlistDispatch)
                    }
                  ></i>
                ) : (
                  <i
                    className="far fa-heart number-badge-iframe badge-lg-size"
                    onClick={() => {
                      isAuthenticated
                        ? addToWishlist(product, wishlistDispatch)
                        : navigate("/login");
                    }}
                  ></i>
                )}
              </div>

              <div class="card-content">
                <h6 class="card-title">{product.title}</h6>
                <p class="card-info p-sm">{product.description}</p>
                <p class="text-bold-weight">
                  Rs.
                  {Number(product.price) -
                    (Number(product.price) * Number(product.discount)) / 100}
                  <span class="text-light-weight">
                    <span class="text-strike-through mx-8">
                      Rs. {product.price}
                    </span>
                  </span>
                  <span class="primary-text-color">
                    {product.discount}% OFF
                  </span>
                  <span className="card-rating">
                    {product.ratings}
                    <i className="fa-solid fa-star p-sm rating-icon"></i>
                  </span>
                </p>

                <div class="btn-container p-sm">
                  <a class="mr-16 ">
                    {cart.find((cartItem) => cartItem._id === product._id) ? (
                      <button
                        class="btn primary-btn"
                        onClick={() => navigate("/cart")}
                      >
                        Go to Cart
                      </button>
                    ) : (
                      <button
                        class="btn primary-btn"
                        onClick={() => {
                          isAuthenticated
                            ? addToCart(product, cartDispatch)
                            : navigate("/login");
                        }}
                        disabled={!product.inStock}
                      >
                        <i class="fas fa-shopping-cart mr-16 "></i>Add to cart
                      </button>
                    )}
                  </a>
                </div>
              </div>
            </div>
            {!product.inStock && (
              <div className="card-text-overlay">Out Of Stock</div>
            )}
          </div>
        ))
      )}
    </>
  );
}
