import React from "react";
import "./ProductsFilter.css";
import { useFilter, useData } from "../../context/index";

export default function ProductsFilter() {
  const { categoriesData, brandsData } = useData();
  const { filterState, filterDispatch } = useFilter();

  const {
    sortBy,
    includeOutOfStock,
    isFastDelivery,
    priceRange,
    ratings,
    categories,
    brands,
  } = filterState;

  const ratingsArray = [
    { ratingName: "4 Stars & above", ratingValue: 4 },
    { ratingName: "3 Stars & above", ratingValue: 3 },
    { ratingName: "2 Stars & above", ratingValue: 2 },
    { ratingName: "1 Stars & above", ratingValue: 1 },
  ];
  return (
    <div className="filter-container">
      <div className="filter-title">
        <p className="text-bold-weight">FILTERS</p>
        <a
          className=" link-btn"
          onClick={() => filterDispatch({ type: "CLEAR_ALL" })}
        >
          CLEAR ALL
        </a>
      </div>

      <div className="filter-divider-line"></div>
      <div className="filter-section">
        <p className="text-bold-weight filter-section-title">SORT</p>
        <label htmlFor="low-to-high" className="form-label">
          <input
            type="radio"
            id="low-to-high"
            name="sort"
            className="input-checkbox"
            checked={sortBy === "LOW_TO_HIGH"}
            onChange={() =>
              filterDispatch({ type: "SORT", payload: "LOW_TO_HIGH" })
            }
          />
          Price - Low to High
        </label>
        <label htmlFor="high-to-low" className="form-label">
          <input
            type="radio"
            id="high-to-low"
            name="sort"
            className="input-checkbox"
            checked={sortBy === "HIGH_TO_LOW"}
            onChange={() =>
              filterDispatch({ type: "SORT", payload: "HIGH_TO_LOW" })
            }
          />
          Price - High to Low
        </label>
      </div>

      <div className="filter-divider-line"></div>

      <div className="filter-section">
        <p className="text-bold-weight filter-section-title">PRICE</p>
        <input
          type="range"
          min="500"
          max="5000"
          step="500"
          className="slider"
          list="tickmarks"
          value={priceRange}
          onChange={(e) =>
            filterDispatch({ type: "RANGE", payload: e.target.value })
          }
        />

        <datalist id="tickmarks" className="slider-datalist">
          <option value="500" label="500"></option>
          <option value="1000" label="1K"></option>
          <option value="2000" label="2K"></option>
          <option value="3000" label="3K"></option>
          <option value="4000" label="4K"></option>
          <option value="5000" label="5K"></option>
        </datalist>
        <p>Price: {priceRange}</p>
      </div>

      <div className="filter-divider-line"></div>
      <div className="filter-section">
        <p className="text-bold-weight filter-section-title">CATEGORIES</p>
        {categoriesData.map((category) => (
          <label
            htmlFor={category.categoryName}
            className="form-label"
            key={category._id}
          >
            <input
              type="checkbox"
              id={category.categoryName}
              name="category"
              className="input-checkbox"
              checked={categories.includes(category.categoryName.toLowerCase())}
              onChange={() =>
                filterDispatch({
                  type: "CATEGORY",
                  payload: category.categoryName.toLowerCase(),
                })
              }
            />
            {category.categoryName}
          </label>
        ))}
      </div>

      <div className="filter-divider-line"></div>
      <div className="filter-section">
        <p className="text-bold-weight filter-section-title">BRANDS</p>

        {brandsData.map((brand) => (
          <label
            htmlFor={brand.brandName}
            className="form-label"
            key={brand._id}
          >
            <input
              type="checkbox"
              id={brand.brandName}
              name="brands"
              className="input-checkbox"
              checked={brands.includes(brand.brandName)}
              onChange={() =>
                filterDispatch({ type: "BRAND", payload: brand.brandName })
              }
            />
            {brand.brandName}
          </label>
        ))}
      </div>

      <div className="filter-divider-line"></div>
      <div className="filter-section">
        <p className="text-bold-weight filter-section-title">RATINGS</p>
        {ratingsArray.map((rating) => (
          <label
            htmlFor={rating.ratingName}
            className="form-label"
            key={rating.ratingValue}
          >
            <input
              type="radio"
              id={rating.ratingName}
              name="rating"
              className="input-checkbox"
              checked={ratings === rating.ratingValue}
              onChange={() =>
                filterDispatch({
                  type: "RATING",
                  payload: rating.ratingValue,
                })
              }
            />
            {rating.ratingName}
          </label>
        ))}
      </div>

      <div className="filter-divider-line"></div>
      <div className="filter-section">
        <p className="text-bold-weight filter-section-title">AVAIABILITY</p>
        <label htmlFor="availability" className="form-label">
          <input
            type="checkbox"
            id="availability"
            name="availability"
            className="input-checkbox"
            checked={includeOutOfStock}
            onChange={() => filterDispatch({ type: "INCLUDE_OUT_OF_STOCK" })}
          />
          Include Out Of Stock
        </label>
      </div>

      <div className="filter-divider-line"></div>
      <div className="filter-section">
        <p className="text-bold-weight filter-section-title">
          Fast Delivery Only
        </p>
        <label htmlFor="fast-delivery" className="form-label">
          <input
            type="checkbox"
            id="fast-delivery"
            name="fast-delivery"
            className="input-checkbox"
            checked={isFastDelivery}
            onChange={() => filterDispatch({ type: "FAST_DELIVERY_ONLY" })}
          />
          Fast Delivery Only
        </label>
      </div>
    </div>
  );
}
