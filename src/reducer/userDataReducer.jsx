import {
  wishlistConstants,
  cartConstants,
  addressConstants,
  orderConstants,
} from "./userDataConstants";

const {
  GET_WISHLIST,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  WISHLIST_LOADING,
} = wishlistConstants;

const {
  GET_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DECREMENT_CART_ITEM,
  INCREMENT_CART_ITEM,
  CART_LOADING,
} = cartConstants;

export const UserDataReducer = (userDataState, userDataAction) => {
  const { type, payload } = userDataAction;
  switch (type) {
    case GET_WISHLIST:
    case ADD_TO_WISHLIST:
    case REMOVE_FROM_WISHLIST:
      return {
        ...userDataState,
        userWishlist: { ...userDataState.userWishlist, wishlist: payload },
      };
    case WISHLIST_LOADING:
      return {
        ...userDataState,
        userWishlist: {
          ...userDataState.userWishlist,
          loading: !userDataState.userWishlist.loading,
        },
      };

    case GET_CART:
    case ADD_TO_CART:
    case REMOVE_FROM_CART:
    case DECREMENT_CART_ITEM:
    case INCREMENT_CART_ITEM:
      return {
        ...userDataState,
        userCart: { ...userDataState.userCart, cart: payload },
      };
    case CART_LOADING:
      return {
        ...userDataState,
        userCart: {
          ...userDataState.userCart,
          loading: !userDataState.userCart.loading,
        },
      };
  }
};
