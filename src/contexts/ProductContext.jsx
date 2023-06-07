import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";
import reducer from "../reducers/productReducer";

export const ProductContext = createContext();
const API = "/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featuredProducts: [],
  isSingleError: false,
  isSingleLoading :false,
  singleProduct: {},


};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  
 

  

  const displayData = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data.products;
      dispatch({ type: "API_DATA", payload: products });
    } catch (e) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // api call for single product
  const getSingleProduct = async(url) => {
    dispatch({ type: "SET_SINGLE_LOADING"})
    
    try{
      const res = await axios.get(url);
    const singleProduct = await res.data.products;
    dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct})


    }catch (e) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  }

  useEffect(() => {
    displayData(API);
  }, []);

  return (
    <div>
      <ProductContext.Provider value={{ ...state ,getSingleProduct }}>
        {children}
      </ProductContext.Provider>
    </div>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
export default ProductContextProvider;
