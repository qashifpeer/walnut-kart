import React, { createContext, useEffect, useReducer, useState } from 'react';
import axios from "axios";
import reducer from "../../reducers/productReducer";


export const ProductContext = createContext();
const API = '/api/products';

const initialState = {
    isLoading: false,
    isError: false, 
    products: [],
   
}


const ProductContextProvider = ({children}) => {

    const [state,dispatch]=useReducer(reducer,initialState)
   
    // const [products,setProducts] = useState([])
    // console.log("pr",products)

    const displayData = async (url) =>{
        dispatch({type:"SET_LOADING"})
        try{
            const res = await  axios.get(url)
            const products = await res.data.products;
            dispatch({type: "API_DATA", payload: products})
        }catch(e){
            dispatch({type:"API_ERROR"});
        }
    }


    useEffect(() => {displayData(API)},[])
    
  return (
    <div>
        <ProductContext.Provider value={{...state}}>
            {children}
            </ProductContext.Provider> 
    </div>
  )
};

export default ProductContextProvider