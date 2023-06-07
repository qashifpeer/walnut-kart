import React, { useContext } from 'react'
import { WishListContext } from '../../contexts/WishListContext'
import WishlistCard from './components/WishlistCard';

const WishList = () => {
 const {wishList} = useContext(WishListContext);
 const wishlistHasItems = wishList.length > 0;
 
  return <>
  {wishList.map(currItem => <WishlistCard item={currItem} />)}
  </>
}

export default WishList