import { productUrl, categoriesUrl, brandsUrl } from "./helpers";
import axios from "axios";

export const getProducts = async (productState, setProducts) => {
  try {
    setProducts({ ...productState, loading: true });
    const { data } = await axios.get(productUrl);
    setProducts({ ...productState, products: data.products, loading: false });
  } catch (error) {
    setProducts({ ...productState, loading: false });
    console.log(error);
  }
};

export const getCategories = async (setCategoriesData) => {
  try {
    const { data } = await axios.get(categoriesUrl);
    setCategoriesData(data.categories);
  } catch (error) {
    console.log(error);
  }
};

export const getBrands = async (setBrandsData) => {
  try {
    const { data } = await axios.get(brandsUrl);
    setBrandsData(data.brands);
  } catch (error) {
    console.log(error);
  }
};
