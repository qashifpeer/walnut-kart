import "./products.css"
import FilterSection from "./components/FilterSection";
import Sort from "./components/Sort";
import ProductList from "./components/ProductList";
import { useFilterContext } from "../../contexts/FilterContext";

const Products = () => {
    // const {filter_products} = useFilterContext();
    
  return (
    <div>
        <div className="grid grid-filter-cols">
            <div>
                <FilterSection />
            </div>
            <div className="product-display">
                <div className="sort-filter">
                    <Sort />
                </div>
                <div className="main-products-display">
                    <ProductList />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products