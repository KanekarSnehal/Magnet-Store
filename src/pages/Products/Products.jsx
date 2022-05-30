import React, { useState, useEffect } from "react";
import "./products.css";
import ProductsCards from "../../components/Cards/ProductsCards";
import ProductsFilter from "../../components/ProductsFilter/ProductsFilter";
import { Header, Loader } from "../../components/index";
import { useFilter, useData } from "../../context/index";

export function Products() {
  const { finalFilteredProducts } = useFilter();
  const {
    productState: { loading },
  } = useData();
  const productsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (finalFilteredProducts.length > 0)
      setTotalPages(Math.ceil(finalFilteredProducts.length / productsPerPage));
    setCurrentPage(1);
  }, [finalFilteredProducts]);

  const endIndex = productsPerPage * currentPage;
  const startIndex = endIndex - productsPerPage;
  const paginatedProducts = finalFilteredProducts?.slice(startIndex, endIndex);

  return (
    <div className="products-page">
      <Header />
      <ProductsFilter />
      <main className="main-container">
        <div className="products-container">
          {loading ? (
            <Loader />
          ) : finalFilteredProducts.length === 0 ? (
            <h1>No Products Found</h1>
          ) : (
            paginatedProducts.map((product) => (
              <ProductsCards product={product} key={product._id} />
            ))
          )}
        </div>
        {totalPages > 1 ? (
          <div className="paginate-container">
            <button
              className={`my-8  paginate-btn primary-btn ${
                currentPage === 1 ? "disabled-cursor" : ""
              }`}
              onClick={() =>
                currentPage !== 1 &&
                setCurrentPage((currentPage) => currentPage - 1)
              }
            >
              Prev
            </button>
            {[...Array(totalPages)].map((page, index) => (
              <button
                key={index}
                className={`paginate-btn ${
                  currentPage === index + 1 ? "primary-btn" : "secondary-btn"
                }`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
              className={`my-8  paginate-btn primary-btn ${
                currentPage === totalPages ? "disabled-cursor" : ""
              }`}
              onClick={() =>
                currentPage !== totalPages &&
                setCurrentPage((currentPage) => currentPage + 1)
              }
            >
              Next
            </button>
          </div>
        ) : null}
      </main>
    </div>
  );
}
