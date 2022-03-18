import { filtersInitialState } from "../utilities/filtersInitialState";

const FilterReducer = (filterState, filterAction) => {
  switch (filterAction.type) {
    case "SORT":
      return { ...filterState, sortBy: filterAction.payload };
    case "RANGE":
      return { ...filterState, priceRange: filterAction.payload };
    case "CATEGORY":
      return {
        ...filterState,
        categories: filterState.categories.includes(filterAction.payload)
          ? filterState.categories.filter(
              (prevCategory) => prevCategory !== filterAction.payload
            )
          : filterState.categories.concat(filterAction.payload),
      };
    case "BRAND":
      return {
        ...filterState,
        brands: filterState.brands.includes(filterAction.payload)
          ? filterState["brands"].filter(
              (prevBrand) => prevBrand !== filterAction.payload
            )
          : filterState["brands"].concat(filterAction.payload),
      };
    case "RATING":
      return { ...filterState, ratings: filterAction.payload };
    case "INCLUDE_OUT_OF_STOCK":
      return {
        ...filterState,
        includeOutOfStock: !filterState.includeOutOfStock,
      };
    case "FAST_DELIVERY_ONLY":
      return { ...filterState, isFastDelivery: !filterState.isFastDelivery };
    case "CLEAR_ALL":
      return { ...filtersInitialState };
  }
};
export { FilterReducer };
