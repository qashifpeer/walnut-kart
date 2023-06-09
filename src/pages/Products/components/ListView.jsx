import FormatPrice from "../../../helpers/FormatPrice";
import "./listView.css";

const ListView = ({products}) => {
  return (
    <div className='section'>
        <div className="container">
            {
                products.map((currElem)=>{
                    const {id,title,image,price,categoryName} = currElem;
                    return <div className='grid grid-2-cols product-wrapper'> 
                        <div className="image-wrapper">
                            <img src={image} alt={title} style={{width:"100%", height:"200px"}} />
                        </div>
                        <div className="card-data">
                            <h3 className="product-title">{title}</h3>
                            <p>{categoryName}</p>
                            <p className="product-price"> <FormatPrice price={price} /> </p>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default ListView