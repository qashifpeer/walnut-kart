import { useContext } from "react";
import "./productCard.css";
import { NavLink } from "react-router-dom";

import { CartContext } from "../../../contexts/CartContext";

const ProductCard = ({ product }) => {
  const { id,title, price, image ,categoryName} = product;
  const {handleCartUpdate} = useContext(CartContext)

  const percentageOff = price - 500;
  const rating = 4;
  return (
   
    <div className="card-container">
      <NavLink to={`/productdetail/${id}`}>
      <img
        className="card-img"
        src={image}
        alt="products"
        style={{ width: "100%", height: "200px", borderRadius: "1.5rem 1.5rem 0 0"}}
      />
       </NavLink>
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
      <button onClick={()=>handleCartUpdate(product)}  className="btn-product default add-cart">
        <i className="fa fa-shopping-cart"></i> Add to Cart
      </button>
      </div>
     
    
  );
};

export default ProductCard;
