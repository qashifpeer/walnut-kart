import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../reducers/filterReducer"

export const FilterContext = createContext();

const initialState ={
  filter_products : [],
  all_products : [],
  grid_view : true,
  sortingOnSelect : "lowest",
  filters:{ text: "",
  categoryName: "all",
  maxPrice : 0,
  price:0,
  minPrice:0
}
}

const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  
  const [state,dispatch] = useReducer(reducer,initialState);
  
  const setGridView = () =>{
    return dispatch({type : "SET_GRID_VIEW"})
  }

  const setListView = () =>{
    return dispatch({type : "SET_LIST_VIEW"})
  }

  // sorting on select
  const sortingOnSelect = (event) =>{
    let userSelectedOption = event.target.value;
    dispatch({type : "GET_SORTING_ON_SELECT", payload: userSelectedOption});

  }
  // update the filter values
  const updateFilterValue = (event) =>{
    let name = event.target.name;
    let value = event.target.value;

    dispatch({type : "UPDATE_FILTER_VALUE", payload:{name,value}});
  }
  // to sort the products
  useEffect(()=>{
    dispatch({type : "FILTER_PRODUCTS"});
    dispatch({type : "SORTING_PRODUCTS"});
  },[products,state.sortingOnSelect,state.filters])

  useEffect(()=>{
    dispatch({type: "LOAD_FILTER_PRODUCTS",payload: products})
  },[products])
  
  return <FilterContext.Provider value={{...state, setGridView, setListView, sortingOnSelect,updateFilterValue,}}>{children}</FilterContext.Provider>;
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};

export default FilterContextProvider;
