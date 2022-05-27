import { useCart, useUserData } from "../../context/index";
import {
  addToCart,
  removeFromWishlist,
  incrementCartItem,
} from "../../services";

export const WishlistItems = ({ wishlistItem }) => {
  const {
    userState: {
      userCart: { cart },
    },
    userDispatch,
  } = useUserData();

  return (
    <div className="vertical-card-container card-hover" key={wishlistItem._id}>
      <img className="card-image" src={wishlistItem.img} />

      <div className="card-content">
        <h6 className="card-title">{wishlistItem.title}</h6>
        <p className="text-bold-weight p-sm">
          Rs.
          {Number(wishlistItem.price) -
            (Number(wishlistItem.price) * Number(wishlistItem.discount)) / 100}
          <span className="text-light-weight">
            <span className="text-strike-through mx-8">
              Rs.{wishlistItem.price}
            </span>
          </span>
          <span className="primary-text-color">{wishlistItem.discount}%</span>
          <span className="card-rating">
            {wishlistItem.ratings}
            <i className="fa-solid fa-star p-sm rating-icon"></i>
          </span>
        </p>
        <div className="btn-container p-sm">
          <a>
            {cart.find((cartItem) => cartItem._id === wishlistItem._id) ? (
              <button
                className="btn primary-btn"
                onClick={() =>
                  incrementCartItem(wishlistItem._id, userDispatch)
                }
              >
                <i className="fas fa-shopping-cart mr-16"></i>Add to cart
              </button>
            ) : (
              <button
                className="btn primary-btn"
                onClick={() => addToCart(wishlistItem, userDispatch)}
              >
                <i className="fas fa-shopping-cart mr-16"></i>Add to cart
              </button>
            )}
          </a>
        </div>
        <a>
          <span
            className="card-badge-dismiss"
            onClick={() => removeFromWishlist(wishlistItem._id, userDispatch)}
          >
            <i className="fas fa-times"></i>
          </span>
        </a>
      </div>
    </div>
  );
};
