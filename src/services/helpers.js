export const getConfig = () => ({
  headers: { authorization: localStorage.getItem("token") },
});

export const cartUrl = "/api/user/cart";
export const wishlistUrl = "/api/user/wishlist";
