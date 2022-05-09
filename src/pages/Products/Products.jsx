import React from "react";
import "./products.css";
import ProductsCards from "../../components/Cards/ProductsCards";
import ProductsFilter from "../../components/ProductsFilter/ProductsFilter";
import { Header } from "../../components/index";

export function Products() {
  return (
    <div className="products-page">
      <Header />
      <ProductsFilter />
      <main class="main-container">
        <div class="products-container">
          <ProductsCards />
        </div>
      </main>
    </div>
  );
}
