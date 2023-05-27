import React, { useContext } from "react";
import "./store.css";
import { ProductContext } from "../../contexts/AuthContexts/ProductContext";
import ProductCard from "./components/ProductCard";
import FilterSide from "./components/FilterSide";

const Store = () => {
  const { products, isLoading } = useContext(ProductContext);
  


  return (
    <div className="product-main-container">
     
      <div className="filter-container">
     
        <FilterSide />
      </div>

      <div className="product-list-container">
        <div className="product-list-header">
          <h3>Showing All Items</h3>
        </div>
        <p className="paragraph-sm">(5-items)</p>
        <div className="responsive-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
