import React from "react";
import { useCategoriesAndBrandsAndProducts } from "../../Hooks/useCategoriesAndBrandsAndProducts";
import { useFilter } from "../../context/index";
export default function ProductsCards() {
  const { finalFilteredProducts } = useFilter();

  return (
    <>
      {finalFilteredProducts.length === 0 ? (
        <h1>No Products Available</h1>
      ) : (
        finalFilteredProducts.map((product) => {
          return (
            <div class="vertical-card-container profile-badge">
              <img class="card-image" src={product.img} alt="card image" />

              <div class="badge   badge-number ">
                <a className="far fa-heart number-badge-iframe badge-lg-size"></a>
              </div>

              <div class="card-content">
                <h6 class="card-title">{product.title}</h6>
                <p class="card-info p-sm">{product.description}</p>
                <p class="text-bold-weight">
                  Rs. {product.price}
                  <span class="text-light-weight">
                    <span class="text-strike-through mx-8">Rs.999</span>
                  </span>
                  <span class="primary-text-color">
                    {product.discount}% OFF
                  </span>
                  <span className="card-rating">
                    {product.ratings}
                    <i className="fa-solid fa-star p-sm rating-icon"></i>
                  </span>
                </p>

                <div class="btn-container p-sm">
                  <a href="#" class="mr-16 ">
                    <button class="btn primary-btn">
                      <i class="fas fa-shopping-cart mr-16 "></i>Add to cart
                    </button>
                  </a>
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
}
