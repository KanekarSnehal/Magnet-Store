import { cartActionsConstants } from "./cartActionsConstants";
const {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_TO_CART_FAILED,
  REMOVE_FROM_CART_FAILED,
  INCREMENT_CART_ITEM,
  DECREMENT_CART_ITEM,
} = cartActionsConstants;

const CartReducer = (cartState, cartAction) => {
  switch (cartAction.type) {
    case ADD_TO_CART:
      return { ...cartState, cart: cartAction.payload };
    case REMOVE_FROM_CART:
      return { ...cartState, cart: cartAction.payload };
    case ADD_TO_CART_FAILED:
      return { ...cartState, error: cartAction.payload };
    case REMOVE_FROM_CART_FAILED:
      return { ...cartState, error: cartAction.payload };
    case INCREMENT_CART_ITEM:
      return { ...cartState, cart: cartAction.payload };
    case DECREMENT_CART_ITEM:
      return { ...cartState, cart: cartAction.payload };
    default:
      return cartState;
  }
};

export { CartReducer };
