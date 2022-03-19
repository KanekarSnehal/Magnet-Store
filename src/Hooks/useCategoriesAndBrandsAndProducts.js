import { useState, useEffect } from "react";
import axios from "axios";

const useCategoriesAndBrandsAndProducts = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [brandsData, setBrandsData] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/categories");

        setCategoriesData(data.categories);
      } catch (error) {
        console.log(error);
      }
    })();
    (async () => {
      try {
        const { data } = await axios.get("/api/brands");
        setBrandsData(data.brands);
      } catch (error) {
        console.log(error);
      }
    })();
    (async () => {
      try {
        const { data } = await axios.get("/api/products");
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return { categoriesData, brandsData, products };
};
export { useCategoriesAndBrandsAndProducts };
