import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useProductContext } from "../../../contexts/ProductContext";

const API = "/api/products"

const SingleProduct = () => {
    const {getSingleProduct, isSingleError,isSingleLoading,singleProduct} = useProductContext();
    console.log("sn",singleProduct)
    const {id} = useParams();
    useEffect(()=>{
        getSingleProduct(`${API}/${id}`);

    },[]);
  return (
    <div>SingleProduct</div>
  )
}

export default SingleProduct
