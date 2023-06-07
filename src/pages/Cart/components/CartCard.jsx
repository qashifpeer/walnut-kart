import React, { useContext } from 'react'
import "./cartCard.css";

import FormatPrice from '../../../helpers/FormatPrice'
import { CartContext } from '../../../contexts/CartContext';
import { WishListContext } from '../../../contexts/WishListContext';

const CartCard = ({data} ) => {
  const {ItemIncreaseCount ,handleCount ,itemCount, ItemDecreaseCount,  removeItem,moveToWishListHandler} = useContext(CartContext)
   const  { id, title, price, image, categoryName, } = data
  return (
    <div className='cart-card'>
      <div className='cart-upper-side'>
        <div className="image-container">
              <img
                src={image}
                alt="product"
                style={{ width: "80%", height: "200px" }}
              />
            </div>
            <div className="info-container">
              <h2>{title}</h2>
              <p>{categoryName}</p>
              <FormatPrice price={price} />
              <div className="cart-count-box">
                <button onClick={ItemDecreaseCount} className="cart-increase-count">-</button>
                <p onChange={handleCount} className="cart-display-count">{itemCount }</p>
                <button onClick={ItemIncreaseCount} className="cart-decrease-count">+</button>
              </div>
              
            </div>
            </div>
            <hr />
            <div className='cart-lower-side'>
              
                <button onClick={()=>removeItem(id)}>Remove</button>
                <h3 onClick={()=>moveToWishListHandler(data)}>move to wishlist</h3>
              </div>
    </div>
  )
}

export default CartCard