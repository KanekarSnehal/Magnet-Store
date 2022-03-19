import { createContext, useContext, useReducer } from "react";
import { FilterReducer } from "../reducer/index";
import {
  filtersInitialState,
  getFinalProducts,
  sortByPrice,
  filterProducts,
  filterByBrandsAndCategories,
  searchByKey,
} from "../utilities/index";
import { useCategoriesAndBrandsAndProducts } from "../Hooks/useCategoriesAndBrandsAndProducts";

const FilterContext = createContext();
const useFilter = () => useContext(FilterContext);

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(
    FilterReducer,
    filtersInitialState
  );

  const { products } = useCategoriesAndBrandsAndProducts();

  const finalFilteredProducts = getFinalProducts(
    sortByPrice,
    filterProducts,
    filterByBrandsAndCategories,
    searchByKey
  )(filterState, products);

  return (
    <FilterContext.Provider
      value={{ filterState, filterDispatch, finalFilteredProducts }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export { FilterProvider, useFilter };
