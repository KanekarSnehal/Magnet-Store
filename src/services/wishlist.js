import axios from "axios";
import { getConfig, wishlistUrl } from "./helpers";
import { wishlistConstants } from "../reducer";
import toast from "react-hot-toast";

export const getWishlist = async (userDispatch) => {
  try {
    const { data } = await axios.get(wishlistUrl, getConfig());
    userDispatch({
      type: wishlistConstants.GET_WISHLIST,
      payload: data.wishlist,
    });
  } catch (e) {
    toast.error(e?.response?.data?.message);
  }
};

export const addToWishlist = async (product, userDispatch) => {
  try {
    const { data } = await axios.post(wishlistUrl, { product }, getConfig());
    userDispatch({
      type: wishlistConstants.ADD_TO_WISHLIST,
      payload: data.wishlist,
    });
    toast.success("Added to wishlist!");
  } catch (e) {
    toast.error(e?.response?.data?.message);
  }
};

export const removeFromWishlist = async (id, userDispatch) => {
  try {
    const { data } = await axios.delete(`${wishlistUrl}/${id}`, getConfig());
    userDispatch({
      type: wishlistConstants.REMOVE_FROM_WISHLIST,
      payload: data.wishlist,
    });
    toast.success("Removed from wishlist!");
  } catch (e) {
    toast.error(e?.response?.data?.message);
  }
};
