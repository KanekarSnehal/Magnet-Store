import React from "react";
import { useNavigate } from "react-router-dom";
import { useFilter, useData } from "../../context";

export function Brands() {
  const { brandsData } = useData();
  const navigate = useNavigate();
  const { filterState, filterDispatch } = useFilter();

  return (
    <div>
      <h2 className="text-center secondary-text-color">Featured Brands</h2>
      <div className="title-underline"></div>
      <div className="spacer-1rem "></div>
      <div className="flex-row">
        {brandsData.map((brand) => {
          return (
            <li
              className="featured-brand-size card-hover"
              key={brand._id}
              onClick={() => {
                filterDispatch({ type: "BRAND", payload: brand.brandName });
                navigate("/products");
              }}
            >
              <img className="card-image" src={brand.img} alt="card image" />
            </li>
          );
        })}
      </div>
    </div>
  );
}
