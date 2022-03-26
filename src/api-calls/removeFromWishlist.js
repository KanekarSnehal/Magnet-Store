import axios from "axios";
import { wishlistActionsConstants } from "../reducer/index";

export const removeFromWishlist = async (id, wishlistDispatch) => {
  const { REMOVE_FROM_WISHLIST, REMOVE_FROM_WISHLIST_FAILED } =
    wishlistActionsConstants;

  try {
    const config = {
      headers: { authorization: localStorage.getItem("token") },
    };
    const response = await axios.delete(`/api/user/wishlist/${id}`, config);
    wishlistDispatch({
      type: REMOVE_FROM_WISHLIST,
      payload: response.data.wishlist,
    });
  } catch (error) {
    wishlistDispatch({
      type: REMOVE_FROM_WISHLIST_FAILED,
      payload: `Failed to add to wishlist, Please try again ${error.message}`,
    });
  }
};
