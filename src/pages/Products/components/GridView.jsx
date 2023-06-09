import React from 'react'
import Product from '../../Home/components/Product'

const GridView = ({products}) => {
  return (
    <div className='section'>
        <div className="container grid grid-three-cols">
            {
                products.map((currElem) =>{

                    return <Product key={currElem.id} {...currElem} />
                })
            }
        </div>
    </div>
  )
}

export default GridView