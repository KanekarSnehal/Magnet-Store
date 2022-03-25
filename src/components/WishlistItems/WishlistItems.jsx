import { useCart, useWishlist } from "../../context/index";
import {
  addToCart,
  removeFromWishlist,
  incrementCartItem,
} from "../../api-calls/index";

export const WishlistItems = () => {
  const { wishlist, wishlistDispatch } = useWishlist();
  const { cart, cartDispatch } = useCart();
  console.log(cart);
  return (
    <>
      {wishlist.length === 0 ? (
        <h1>No products added</h1>
      ) : (
        wishlist.map((wishlistItem) => (
          <div class="vertical-card-container card-hover">
            <img class="card-image" src={wishlistItem.img} />

            <div class="card-content">
              <h6 class="card-title">{wishlistItem.title}</h6>
              <p class="text-bold-weight p-sm">
                Rs.
                {Number(wishlistItem.price) -
                  (Number(wishlistItem.price) * Number(wishlistItem.discount)) /
                    100}
                <span class="text-light-weight">
                  <span class="text-strike-through mx-8">
                    Rs.{wishlistItem.price}
                  </span>
                </span>
                <span class="primary-text-color">{wishlistItem.discount}%</span>
                <span className="card-rating">
                  {wishlistItem.ratings}
                  <i className="fa-solid fa-star p-sm rating-icon"></i>
                </span>
              </p>
              <div class="btn-container p-sm">
                <a>
                  {cart.find(
                    (cartItem) => cartItem._id === wishlistItem._id
                  ) ? (
                    <button
                      class="btn primary-btn"
                      onClick={() =>
                        incrementCartItem(wishlistItem._id, cartDispatch)
                      }
                    >
                      <i class="fas fa-shopping-cart mr-16"></i>Add to cart
                    </button>
                  ) : (
                    <button
                      class="btn primary-btn"
                      onClick={() => addToCart(wishlistItem, cartDispatch)}
                    >
                      <i class="fas fa-shopping-cart mr-16"></i>Add to cart
                    </button>
                  )}
                </a>
              </div>
              <a>
                <span
                  class="card-badge-dismiss"
                  onClick={() =>
                    removeFromWishlist(wishlistItem._id, wishlistDispatch)
                  }
                >
                  <i class="fas fa-times"></i>
                </span>
              </a>
            </div>
          </div>
        ))
      )}
    </>
  );
};
