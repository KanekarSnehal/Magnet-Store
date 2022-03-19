const CartReducer = (cartState, cartAction) => {
  switch (cartAction.type) {
    case "ADD_TO_CART":
      return { ...cartState, cart: [cartAction.payload] };
  }
};

export { CartReducer };
