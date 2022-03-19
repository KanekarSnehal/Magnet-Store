import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "../reducer/cartReducer";

const CartContext = createContext();
const useCart = () => useContext(CartContext);
const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(CartReducer, { cart: [] });
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};
export { CartProvider, useCart };
