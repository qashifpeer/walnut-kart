import {FaStar, FaStarHalfAlt} from "react-icons/fa"
import {AiOutlineStar} from "react-icons/ai"

import "./stars.css";

const Stars = ({stars}) => {
   const ratingStar =  Array.from({length:5},(elem,index) =>{
        let number = index + 0.5;

        return <span key = {index}>
            {
                stars >= index +1
                ? <FaStar className="star-icon" />
                : stars >= number
                ? <FaStarHalfAlt className="star-icon" />
                : <AiOutlineStar className="star-icon" />

            }
        </span>

    });
  
  return (
    <div>
        <div className="icon-style">
            {ratingStar}
        </div>
    </div>
  )
}

export default Stars