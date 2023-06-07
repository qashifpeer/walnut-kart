import { useProductContext } from "../../contexts/ProductContext";
import Product from "../../pages/Home/components/Product";

import "./featuredProducts.css"



const FeaturedProducts = () => {
    const {isLoading , featuredProducts} = useProductContext();

    if(isLoading){
        return <div>......Loading</div>
    }
  return (
    <>
    <section className="featured-section">
        <div className="container">
            <div className="feature-intro">Check Now</div>
            <div className="feature-heading">Our Featured Products</div>
            <div className="grid grid-three-cols">
                {
                    featuredProducts.map((currElem)=>{
                        return <Product  key={currElem.id} {...currElem}/>
                    })
                }
            </div>
        </div>
    </section>
    
    </>
  )
}

export default FeaturedProducts