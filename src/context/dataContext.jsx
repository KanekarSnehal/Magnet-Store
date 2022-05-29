import { createContext, useContext, useState, useEffect } from "react";
import { getBrands, getCategories, getProducts } from "../services";

const DataContext = createContext();

const useData = () => useContext(DataContext);

const DataProvider = ({ children }) => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [brandsData, setBrandsData] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(setProducts);
    getCategories(setCategoriesData);
    getBrands(setBrandsData);
  }, []);

  return (
    <DataContext.Provider value={{ categoriesData, brandsData, products }}>
      {children}
    </DataContext.Provider>
  );
};

export { useData, DataProvider };
