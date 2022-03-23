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

        <p class="text-center">
          Total Items:{" "}
          <span class="secondary-text-color"> {wishlist.length} items</span>
        </p>

        <div class="flex-row">
          <WishlistItems />
        </div>
      </main>
    </>
  );
}
