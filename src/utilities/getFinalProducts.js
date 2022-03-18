const getFinalProducts =
  (...filterFunctions) =>
  (filterState, products) =>
    filterFunctions.reduce(
      (prevVal, currVal) => currVal(filterState, prevVal),
      products
    );
export { getFinalProducts };
