import React from "react";
import { WishlistItems, Header } from "../../components/index";
import { useWishlist } from "../../context/index";

export function Whishlist() {
  const { wishlist } = useWishlist();

  return (
    <>
      <Header />
      <main className="main-container">
        <h2 className="text-center secondary-text-color">My Wishlist</h2>
        <div className="title-underline"></div>
        <div className="flex-row">
          <WishlistItems />
        </div>
      </main>
    </>
  );
}
