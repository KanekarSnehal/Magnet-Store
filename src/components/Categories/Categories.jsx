import React from "react";
import { useCategoriesAndBrands } from "../../Hooks/useCategoriesAndBrands";

export function Categories() {
  const { categories } = useCategoriesAndBrands();
  return (
    <div>
      <h2 className="text-center secondary-text-color">Featured Categories</h2>
      <div className="title-underline"></div>
      <div className="spacer-1rem "></div>

      <div className="flex-row">
        {categories.map((category) => {
          return (
            <div
              className="featured-card-size card-hover position-relative"
              key={category._id}
            >
              <div>
                <img
                  className="card-image"
                  src={category.img}
                  alt="card image"
                />
              </div>
              <div className="text-bottom text-bold-weight">
                {category.categoryName}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
