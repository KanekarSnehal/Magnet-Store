import { cartUrl, getConfig } from "./helpers";
import { cartConstants } from "../reducer";
import axios from "axios";
import toast from "react-hot-toast";

export const addToCart = async (product, userDispatch) => {
  try {
    const { data } = await axios.post(cartUrl, { product }, getConfig());
    userDispatch({
      type: cartConstants.ADD_TO_CART,
      payload: data.cart,
    });
    toast.success("Added to cart!");
  } catch (e) {
    toast.error(e?.response?.data?.message);
  }
};

export const removeFromCart = async (id, userDispatch) => {
  try {
    const { data } = await axios.delete(`${cartUrl}/${id}`, getConfig());
    userDispatch({
      type: cartConstants.REMOVE_FROM_CART,
      payload: data.cart,
    });
    toast.success("Removed to cart!");
  } catch (e) {
    toast.error(e?.response?.data?.message);
  }
};

export const incrementCartItem = async (id, userDispatch) => {
  try {
    const { data } = await axios.post(
      `${cartUrl}/${id}`,
      { action: { type: "increment" } },
      getConfig()
    );
    userDispatch({
      type: cartConstants.INCREMENT_CART_ITEM,
      payload: data.cart,
    });
  } catch (e) {
    toast.error(e?.response?.data?.message);
  }
};

export const decrementCartItem = async (id, userDispatch) => {
  try {
    const { data } = await axios.post(
      `${cartUrl}/${id}`,
      { action: { type: "decrement" } },
      getConfig()
    );
    userDispatch({
      type: cartConstants.DECREMENT_CART_ITEM,
      payload: data.cart,
    });
  } catch (e) {
    toast.error(e?.response?.data?.message);
  }
};

export const clearCart = async (userDispatch) => {
  try {
    const { data } = await axios.post(`${cartUrl}/clearCart`, {}, getConfig());
    userDispatch({
      type: cartConstants.CLEAR_CART,
      payload: data.cart,
    });
    toast.success("Cleared cart!");
  } catch (e) {
    toast.error(e?.response?.data?.message);
  }
};

export const getCart = async (userDispatch) => {
  try {
    const { data } = await axios.post(`${cartUrl}`, getConfig());
    userDispatch({
      type: cartConstants.GET_CART,
      payload: data.cart,
    });
  } catch (e) {
    toast.error(e?.response?.data?.message);
  }
};
