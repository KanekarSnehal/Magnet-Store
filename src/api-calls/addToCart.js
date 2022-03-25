import axios from "axios";
import { cartActionsConstants } from "../reducer/index";

export const addToCart = async (product, cartDispatch) => {
  const { ADD_TO_CART, ADD_TO_CART_FAILED } = cartActionsConstants;

  try {
    const config = {
      headers: { authorization: localStorage.getItem("token") },
    };
    const response = await axios.post("/api/user/cart", { product }, config);
    cartDispatch({ type: ADD_TO_CART, payload: response.data.cart });
  } catch (error) {
    cartDispatch({
      type: ADD_TO_CART_FAILED,
      payload: `Failed to add product to the cart, please try again ${error.message}`,
    });
  }
};
