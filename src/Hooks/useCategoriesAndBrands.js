import { useState, useEffect } from "react";
import axios from "axios";

const useCategoriesAndBrands = () => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/categories");

        setCategories(data.categories);
      } catch (error) {
        console.log(error);
      }
    })();
    (async () => {
      try {
        const { data } = await axios.get("/api/brands");

        setBrands(data.brands);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return { categories, brands };
};
export { useCategoriesAndBrands };
