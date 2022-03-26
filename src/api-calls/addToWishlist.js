import axios from "axios";
import { wishlistActionsConstants } from "../reducer/index";

export const addToWishlist = async (product, wishlistDispatch) => {
  const { ADD_TO_WISHLIST, ADD_TO_WISHLIST_FAILED } = wishlistActionsConstants;

  try {
    const config = {
      headers: { authorization: localStorage.getItem("token") },
    };
    const response = await axios.post(
      "/api/user/wishlist",
      { product },
      config
    );
    wishlistDispatch({
      type: ADD_TO_WISHLIST,
      payload: response.data.wishlist,
    });
  } catch (error) {
    wishlistDispatch({
      type: ADD_TO_WISHLIST_FAILED,
      payload: `Failed to add to wishlist, Please try again ${error.message}`,
    });
  }
};
