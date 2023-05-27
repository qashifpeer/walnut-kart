import React from "react";
import "./productCard.css";
import { NavLink } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id,title, price, image ,categoryName} = product;

  const percentageOff = price - 500;
  const rating = 4;
  return (
    <NavLink to={`/productdetail/${id}`}>
    <div className="card-container">
     
      <img
        className="card-img"
        src={image}
        alt="products"
        style={{ width: "100%", height: "200px", borderRadius: "1.5rem 1.5rem 0 0"}}
      />
      <div className="card-info">
        <div className="">
          <div className="card-title">
            <h5 className="card-category-name">{categoryName}</h5>
            <h3 className="card-title-header" title={title}>  {title}</h3>
          </div>
        </div>
        <div className="price">
          <p className="disc-price">₹{price}</p>
          <p className="actual-price">₹{price}</p>
        </div>
      </div>
      <button className="btn default add-cart">
        <i className="fa fa-shopping-cart"></i> Add to Cart
      </button>
      </div>
      </NavLink>
    
  );
};

export default ProductCard;
