export const getConfig = () => ({
  headers: { authorization: localStorage.getItem("magnetStoreToken") },
});

export const cartUrl = "/api/user/cart";
export const wishlistUrl = "/api/user/wishlist";
export const addressUrl = "/api/user/address";
export const productUrl = "/api/products";
export const categoriesUrl = "/api/categories";
export const brandsUrl = "/api/brands";
export const ordersUrl = "/api/user/orders";
