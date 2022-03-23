import { wishlistActionsConstants } from "./wishlistActionsConstants";
const {
  ADD_TO_WISHLIST,
  ADD_TO_WISHLIST_FAILED,
  REMOVE_FROM_WISHLIST,
  REMOVE_FROM_WISHLIST_FAILED,
} = wishlistActionsConstants;

export const WishlistReducer = (wishlistState, wishlistAction) => {
  switch (wishlistAction.type) {
    case ADD_TO_WISHLIST:
      return {
        ...wishlistState,
        wishlist: wishlistAction.payload,
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...wishlistState,
        wishlist: wishlistAction.payload,
      };
    case ADD_TO_WISHLIST_FAILED:
      return { ...wishlistState, error: wishlistAction.payload };
    case REMOVE_FROM_WISHLIST_FAILED:
      return { ...wishlistState, error: wishlistAction.payload };
    default:
      return wishlistState;
  }
};
