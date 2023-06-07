import React from 'react';
import {  createContext , useState} from 'react';

export const CartContext = createContext();
const CartContextProvider = ({children}) => {

   
    const [cart,setCart] =useState([]);
    const [itemCount, setItemCount] = useState(1);
    // console.log("cart",cart)

    const handleCartUpdate = (item) =>{
        setCart(()=>[...cart, item])

    }
    // Item decrease count
    const ItemIncreaseCount = () =>{
      setItemCount(itemCount+1)

    }
     // Item  decrease count
     const ItemDecreaseCount = () =>{
      setItemCount( itemCount >1 ? itemCount-1 : itemCount)

    }
    //remove item
    const removeItem = (id) =>{
      const filteredArray = cart.filter(currItem=> currItem.id !== id)
      setCart(filteredArray);
    }

return <CartContext.Provider value ={{cart,handleCartUpdate ,ItemIncreaseCount,itemCount , ItemDecreaseCount,removeItem}}>

    {children}
  </CartContext.Provider>
}

export default CartContextProvider