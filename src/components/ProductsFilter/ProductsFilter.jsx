import React from "react";
import { useCategoriesAndBrandsAndProducts } from "../../Hooks/useCategoriesAndBrandsAndProducts";
import "./ProductsFilter.css";
import { useFilter } from "../../context/index";

export default function ProductsFilter() {
  const { categoriesData, brandsData } = useCategoriesAndBrandsAndProducts();
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
    <div class="filter-container">
      <div class="filter-title">
        <p class="text-bold-weight">FILTERS</p>
        <a
          class=" link-btn"
          onClick={() => filterDispatch({ type: "CLEAR_ALL" })}
        >
          CLEAR ALL
        </a>
      </div>

      <div class="filter-divider-line"></div>
      <div class="filter-section">
        <p class="text-bold-weight filter-section-title">SORT</p>
        <label for="low-to-high" class="form-label">
          <input
            type="radio"
            id="low-to-high"
            name="sort"
            class="input-checkbox"
            checked={sortBy === "LOW_TO_HIGH"}
            onChange={() =>
              filterDispatch({ type: "SORT", payload: "LOW_TO_HIGH" })
            }
          />
          Price - Low to High
        </label>
        <label for="high-to-low" class="form-label">
          <input
            type="radio"
            id="high-to-low"
            name="sort"
            class="input-checkbox"
            checked={sortBy === "HIGH_TO_LOW"}
            onChange={() =>
              filterDispatch({ type: "SORT", payload: "HIGH_TO_LOW" })
            }
          />
          Price - High to Low
        </label>
      </div>

      <div class="filter-divider-line"></div>

      <div class="filter-section">
        <p class="text-bold-weight filter-section-title">PRICE</p>
        <input
          type="range"
          min="500"
          max="5000"
          step="500"
          class="slider"
          list="tickmarks"
          value={priceRange}
          onChange={(e) =>
            filterDispatch({ type: "RANGE", payload: e.target.value })
          }
        />

        <datalist id="tickmarks" class="slider-datalist">
          <option value="500" label="500"></option>
          <option value="1000" label="1K"></option>
          <option value="2000" label="2K"></option>
          <option value="3000" label="3K"></option>
          <option value="4000" label="4K"></option>
          <option value="5000" label="5K"></option>
        </datalist>
        <p>Price: {priceRange}</p>
      </div>

      <div class="filter-divider-line"></div>
      <div class="filter-section">
        <p class="text-bold-weight filter-section-title">CATEGORIES</p>
        {categoriesData.map((category) => {
          return (
            <label for={category.categoryName} class="form-label">
              <input
                type="checkbox"
                id={category.categoryName}
                name="category"
                class="input-checkbox"
                checked={categories.includes(
                  category.categoryName.toLowerCase()
                )}
                onChange={() =>
                  filterDispatch({
                    type: "CATEGORY",
                    payload: category.categoryName.toLowerCase(),
                  })
                }
              />
              {category.categoryName}
            </label>
          );
        })}
      </div>

      <div class="filter-divider-line"></div>
      <div class="filter-section">
        <p class="text-bold-weight filter-section-title">BRANDS</p>

        {brandsData.map((brand) => {
          return (
            <label for={brand.brandName} class="form-label">
              <input
                type="checkbox"
                id={brand.brandName}
                name="brands"
                class="input-checkbox"
                checked={brands.includes(brand.brandName)}
                onChange={() =>
                  filterDispatch({ type: "BRAND", payload: brand.brandName })
                }
              />
              {brand.brandName}
            </label>
          );
        })}
      </div>

      <div class="filter-divider-line"></div>
      <div class="filter-section">
        <p class="text-bold-weight filter-section-title">RATINGS</p>
        {ratingsArray.map((rating) => {
          return (
            <label for={rating.ratingName} class="form-label">
              <input
                type="radio"
                id={rating.ratingName}
                name="rating"
                class="input-checkbox"
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
          );
        })}
      </div>

      <div class="filter-divider-line"></div>
      <div class="filter-section">
        <p class="text-bold-weight filter-section-title">AVAIABILITY</p>
        <label for="availability" class="form-label">
          <input
            type="checkbox"
            id="availability"
            name="availability"
            class="input-checkbox"
            checked={includeOutOfStock}
            onChange={() => filterDispatch({ type: "INCLUDE_OUT_OF_STOCK" })}
          />
          Include Out Of Stock
        </label>
      </div>

      <div class="filter-divider-line"></div>
      <div class="filter-section">
        <p class="text-bold-weight filter-section-title">Fast Delivery Only</p>
        <label for="fast-delivery" class="form-label">
          <input
            type="checkbox"
            id="fast-delivery"
            name="fast-delivery"
            class="input-checkbox"
            checked={isFastDelivery}
            onChange={() => filterDispatch({ type: "FAST_DELIVERY_ONLY" })}
          />
          Fast Delivery Only
        </label>
      </div>
    </div>
  );
}
