import { createContext, useContext, useReducer } from "react";
import { WishlistReducer } from "../reducer/index";

const WishlistContext = createContext();
const useWishlist = () => useContext(WishlistContext);

const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(WishlistReducer, {
    wishlist: [],
    error: null,
  });
  // console.log(wishlist);
  return (
    <WishlistContext.Provider
      value={{ wishlist: wishlistState.wishlist, wishlistDispatch }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
export { WishlistProvider, useWishlist };
