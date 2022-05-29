import React from "react";
import { useNavigate } from "react-router-dom";
import { useFilter, useData } from "../../context/index";

export function Categories() {
  const { categoriesData } = useData();
  const navigate = useNavigate();
  const { filterState, filterDispatch } = useFilter();

  return (
    <div>
      <h2 className="text-center secondary-text-color">Featured Categories</h2>
      <div className="title-underline"></div>
      <div className="spacer-1rem "></div>

      <div className="flex-row">
        {categoriesData.map((category) => (
          <li
            className="featured-card-size card-hover position-relative"
            key={category._id}
            onClick={() => {
              filterDispatch({
                type: "CATEGORY",
                payload: category.categoryName.toLowerCase(),
              });
              navigate("/products");
            }}
          >
            <div>
              <img className="card-image" src={category.img} alt="card image" />
            </div>
            <div className="text-bottom text-bold-weight">
              {category.categoryName}
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}
