import axios from "axios";
import { cartActionsConstants } from "../reducer/index";

export const decrementCartItem = async (id, cartDispatch) => {
  const { DECREMENT_CART_ITEM, DECREMENT_CART_ITEM_FAILED } =
    cartActionsConstants;

  const config = {
    headers: { authorization: localStorage.getItem("token") },
  };
  try {
    const response = await axios.post(
      `/api/user/cart/${id}`,
      { action: { type: "decrement" } },
      config
    );
    cartDispatch({ type: DECREMENT_CART_ITEM, payload: response.data.cart });
  } catch (error) {
    cartDispatch({
      type: DECREMENT_CART_ITEM_FAILED,
      payload: `Failed to decrement cart item, please try again ${error.message}`,
    });
  }
};
