import React from "react";
import { WishlistItems, Header } from "../../components/index";
import { useWishlist } from "../../context/index";

export function Whishlist() {
  const { wishlist } = useWishlist();

  return (
    <>
      <Header />
      <main class="main-container">
        <h2 class="text-center secondary-text-color">My Wishlist</h2>
        <div class="title-underline"></div>
        <div class="flex-row">
          <WishlistItems />
        </div>
      </main>
    </>
  );
}
