import { useWishlist } from "../../context/index";
import { removeFromWishlist } from "../../ApiCalls/index";

export const WishlistItems = () => {
  const { wishlist, wishlistDispatch } = useWishlist();

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
              {/* <p class="card-info p-sm">Nitori snack bowls that may be...</p> */}
              <p class="text-bold-weight p-sm">
                Rs.{wishlistItem.price}
                <span class="text-light-weight">
                  <span class="text-strike-through">Rs.999</span>
                </span>
                <span class="primary-text-color">{wishlistItem.discount}%</span>
                <span className="card-rating">
                  {wishlistItem.ratings}
                  <i className="fa-solid fa-star p-sm rating-icon"></i>
                </span>
              </p>
              <div class="btn-container p-sm">
                <a href="#">
                  <button class="btn primary-btn">
                    <i class="fas fa-shopping-cart mr-16"></i>Add to cart
                  </button>
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
