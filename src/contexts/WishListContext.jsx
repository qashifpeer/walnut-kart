import { createContext } from "react";
import { useState } from "react";

export const WishListContext = createContext();

const WishListContextProvider = ({children}) =>{
    const [wishList,setWishList] =useState([]);
    
   

    const moveToWishListHandler = (item) =>{
        setWishList(()=>[...wishList, item])

    }
    // console.log("wl",wishList)
    

    return <WishListContext.Provider value={{wishList, moveToWishListHandler}}>
        {children}
    </WishListContext.Provider>

}
export default WishListContextProvider;