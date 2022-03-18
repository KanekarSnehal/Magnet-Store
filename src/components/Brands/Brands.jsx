import React from "react";
import { useCategoriesAndBrandsAndProducts } from "../../Hooks/useCategoriesAndBrandsAndProducts";

export function Brands() {
  const { brandsData } = useCategoriesAndBrandsAndProducts();
  return (
    <div>
      <h2 className="text-center secondary-text-color">Featured Brands</h2>
      <div className="title-underline"></div>
      <div className="spacer-1rem "></div>
      <div className="flex-row">
        {brandsData.map((brand) => {
          return (
            <div className="featured-brand-size card-hover">
              <img className="card-image" src={brand.img} alt="card image" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
