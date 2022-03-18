const sortByPrice = (filterState, products) => {
  if (filterState.sortBy === "LOW_TO_HIGH")
    return [...products].sort(
      (productOne, productTwo) => productOne.price - productTwo.price
    );
  else if (filterState.sortBy === "HIGH_TO_LOW")
    return [...products].sort(
      (productOne, productTwo) => productTwo.price - productOne.price
    );
  else return products;
};

const filterProducts = (filterState, products) => {
  const { includeOutOfStock, isFastDelivery, priceRange, ratings } =
    filterState;
  return products
    .filter((product) => (includeOutOfStock ? product.inStock : product))
    .filter((product) => (isFastDelivery ? product.fastDelivery : product))
    .filter((product) => Number(priceRange) >= Number(product.price))
    .filter((product) => Number(ratings) <= Number(product.ratings));
};

const filterByBrandsAndCategories = (filterState, products) => {
  const { categories, brands } = filterState;
  const categoriesProduct =
    categories.length === 0
      ? products
      : products.filter((product) =>
          categories.includes(product.categoryName.toLowerCase())
        );
  const brandsProduct =
    brands.length === 0
      ? categoriesProduct
      : categoriesProduct.filter((product) =>
          brands.includes(product.brandName)
        );

  return brandsProduct;
};
export { sortByPrice, filterProducts, filterByBrandsAndCategories };
