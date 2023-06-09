import FormatPrice from '../../../helpers/FormatPrice';
import { NavLink } from 'react-router-dom';

const Product = (currElem) => {
    const {id,title,image,price,categoryName} = currElem;
  return (
   <NavLink to={`/productdetail/${id}`}>
    <div className="product-card">
        <figure>
            <img src={image} alt={title} style={{width:"150px", height:"200px"}}/>
            <figcaption className='caption'>{categoryName}</figcaption>
        </figure>
        <div className="product-card-data">
            <div className="card-data-flex">
                <h3>{title}</h3>
                <p className="card-data--price">
                <FormatPrice price={price} />
                </p>
            </div>
        </div>
    </div>

   </NavLink>
  )
}

export default Product