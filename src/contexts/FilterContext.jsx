import React, { createContext, useContext } from "react";
import { useProductContext } from "./ProductContext";

export const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext;
  // console.log("prFilter",products)
  return <FilterContext.Provider value={{}}>{children}</FilterContext.Provider>;
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};

export default FilterContextProvider;
