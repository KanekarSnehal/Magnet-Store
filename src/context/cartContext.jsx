import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "../reducer/cartReducer";

const CartContext = createContext();
const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(CartReducer, {
    cart: [],
    error: null,
  });
  return (
    <CartContext.Provider value={{ cart: cartState.cart, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};
export { CartProvider, useCart };
