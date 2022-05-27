import axios from "axios";
import { getConfig, wishlistUrl } from "./helpers";
import { wishlistConstants } from "../reducer";

export const getWishlist = (userDispatch) => {
  try {
    userDispatch({ type: wishlistConstants.WISHLIST_LOADING });
    const { data } = axios.get(wishlistUrl, getConfig());
    userDispatch({
      type: wishlistConstants.GET_WISHLIST,
      payload: data.wishlist,
    });
    userDispatch({ type: wishlistConstants.WISHLIST_LOADING });
  } catch (e) {
    console.log(e);
  }
};

export const addToWishlist = async (product, userDispatch) => {
  try {
    const { data } = await axios.post(wishlistUrl, { product }, getConfig());
    userDispatch({
      type: wishlistConstants.ADD_TO_WISHLIST,
      payload: data.wishlist,
    });
  } catch (e) {
    console.log(e);
  }
};

export const removeFromWishlist = async (id, userDispatch) => {
  try {
    const { data } = await axios.delete(`${wishlistUrl}/${id}`, getConfig());
    userDispatch({
      type: wishlistConstants.REMOVE_FROM_WISHLIST,
      payload: data.wishlist,
    });
  } catch (e) {
    console.log(e);
  }
};
