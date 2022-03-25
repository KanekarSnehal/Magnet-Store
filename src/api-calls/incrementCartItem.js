import axios from "axios";
import { cartActionsConstants } from "../reducer/index";

export const incrementCartItem = async (id, cartDispatch) => {
  const { INCREMENT_CART_ITEM, INCREMENT_CART_ITEM_FAILED } =
    cartActionsConstants;
  try {
    const config = {
      headers: { authorization: localStorage.getItem("token") },
    };
    const response = await axios.post(
      `/api/user/cart/${id}`,
      { action: { type: "increment" } },
      config
    );
    cartDispatch({ type: INCREMENT_CART_ITEM, payload: response.data.cart });
  } catch (error) {
    cartDispatch({
      type: INCREMENT_CART_ITEM_FAILED,
      payload: `Failed to remove from cart, please try again ${error.message}`,
    });
  }
};
