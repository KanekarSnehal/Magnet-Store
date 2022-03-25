import axios from "axios";
import { cartActionsConstants } from "../reducer/index";

export const removeFromCart = async (id, cartDispatch) => {
  const { REMOVE_FROM_CART, REMOVE_FROM_CART_FAILED } = cartActionsConstants;
  try {
    const config = {
      headers: { authorization: localStorage.getItem("token") },
    };
    const response = await axios.delete(`/api/user/cart/${id}`, config);
    cartDispatch({ type: REMOVE_FROM_CART, payload: response.data.cart });
  } catch (error) {
    cartDispatch({
      type: REMOVE_FROM_CART_FAILED,
      payload: `Failed to remove from cart, please try again ${error.message}`,
    });
  }
};
