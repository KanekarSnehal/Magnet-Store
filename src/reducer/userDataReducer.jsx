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
  CLEAR_CART,
} = cartConstants;

const {
  GET_ADDRESSES,
  ADD_ADDRESS,
  UPDATE_ADDRESS,
  REMOVE_ADDRESS,
  ADDRESS_LOADING,
} = addressConstants;

const { ORDER_LOADING, ADD_ORDER_ITEM, GET_ORDER_ITEMS } = orderConstants;

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
    case CLEAR_CART:
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

    case GET_ADDRESSES:
    case ADD_ADDRESS:
    case UPDATE_ADDRESS:
    case REMOVE_ADDRESS:
      return {
        ...userDataState,
        userAddress: { ...userDataState.userAddress, addresses: payload },
      };
    case ADDRESS_LOADING:
      return {
        ...userDataState,
        userAddress: {
          ...userDataState.userAddress,
          loading: !userDataState.userAddress.loading,
        },
      };
    case ADD_ORDER_ITEM:
    case GET_ORDER_ITEMS:
      return {
        ...userDataState,
        userOrders: { ...userDataState.userOrders, orders: payload },
      };
    case ORDER_LOADING:
      return {
        ...userDataState,
        userOrders: {
          ...userDataState.userOrders,
          loading: !userDataState.userOrders.loading,
        },
      };
  }
};
