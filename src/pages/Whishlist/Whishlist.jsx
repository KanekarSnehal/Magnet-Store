import React from "react";
import { ProductsCards, Header, Loader } from "../../components";
import { useUserData } from "../../context";

export function Whishlist() {
  const {
    userState: { userWishlist },
  } = useUserData();
  const { loading, wishlist } = userWishlist;

  return (
    <>
      <Header />
      <main className="main-container">
        <h2 className="text-center secondary-text-color">My Wishlist</h2>
        <div className="title-underline"></div>
        {loading ? (
          <Loader />
        ) : wishlist.length == 0 ? (
          <h4 className="text-center">No products added...</h4>
        ) : (
          <div className="products-container">
            {wishlist.map((wishlistItem) => (
              <ProductsCards key={wishlistItem._id} product={wishlistItem} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
