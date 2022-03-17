import React from "react";
import { useCategoriesAndBrands } from "../../Hooks/useCategoriesAndBrands";

export function Brands() {
  const { brands } = useCategoriesAndBrands();
  return (
    <div>
      <h2 className="text-center secondary-text-color">Featured Brands</h2>
      <div className="title-underline"></div>
      <div className="spacer-1rem "></div>
      <div className="flex-row">
        {brands.map((brand) => {
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
