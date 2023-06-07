import React from 'react'

const WishlistCard = ({item}) => {
    const  { id, title, price, image, categoryName, } = item
  return (
    <div>WishlistCard: {title}</div>
  )
}

export default WishlistCard