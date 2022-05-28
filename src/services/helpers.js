export const getConfig = () => ({
  headers: { authorization: localStorage.getItem("magnetStoreToken") },
});

export const cartUrl = "/api/user/cart";
export const wishlistUrl = "/api/user/wishlist";
export const addressUrl = "/api/user/address";
