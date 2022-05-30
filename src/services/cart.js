import { cartUrl, getConfig } from "./helpers";
import { cartConstants } from "../reducer";
import axios from "axios";

export const addToCart = async (product, userDispatch) => {
  try {
    const { data } = await axios.post(cartUrl, { product }, getConfig());
    userDispatch({
      type: cartConstants.ADD_TO_CART,
      payload: data.cart,
    });
  } catch (e) {
    console.log(e);
  }
};

export const removeFromCart = async (id, userDispatch) => {
  try {
    const { data } = await axios.delete(`${cartUrl}/${id}`, getConfig());
    userDispatch({
      type: cartConstants.REMOVE_FROM_CART,
      payload: data.cart,
    });
  } catch (e) {
    console.log(e);
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
    console.log(e);
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
  } catch (error) {}
};

export const clearCart = async (userDispatch) => {
  try {
    const { data } = await axios.post(`${cartUrl}/clearCart`, {}, getConfig());
    userDispatch({
      type: cartConstants.CLEAR_CART,
      payload: data.cart,
    });
  } catch (e) {
    console.log(e);
  }
};
