import React, { useContext, useEffect, useState } from "react";
import "./productDetail.css"
import { useParams } from "react-router-dom";
import { ProductContext } from "../../../contexts/ProductContext";
import FormatPrice from "../../../helpers/FormatPrice";


const ProductDetail = () => {
  // const [productState, setProductState]= useState()
  const {  products,isLoading } =  useContext(ProductContext);
  
  const { id } = useParams();

  const filteredProduct = products.find(product=> product.id=== id)
  

  if(isLoading){
    return (
      <div>Loading</div>
    )
  }
 


  const {image,title,price,categoryName} =filteredProduct;
  return <div className="product-detail-container">
    <div className="image-container">
        <img className="product-image" src={image} alt="{title}" style={{width:"80%", height : "350px" }}  />
    </div>
    <div className="info-container">
        <div className="upper-info-container">
        <h1 className="image-info-title">{title}</h1>
        <h3 className="image-info-category">{categoryName}</h3>
        <h3 className="image-info-price">{<FormatPrice price={price} />}<del> {<FormatPrice price={Number(price+1000)}/>}</del></h3>
        </div>
        <div className="button-container">
            <button className="btn-primary">Buy Now</button>
            <button className="btn-secondary">Add To Wishlist</button>
        </div>
    </div>



  </div>;
};

export default ProductDetail;
