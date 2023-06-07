import React from 'react'
import "./priceDetails.css"

const PriceDetails = () => {
  return (
    <div className="cart-price-container">
        <ul className="coupon">
          <p>Have a Coupon Code</p>
          <button className="coupon-btn">Apply</button>
        </ul>

        <div className="price-calculate-container">
          <li>
            <ul>
              <p>Price( 4 items)</p>
              <p>3000</p>
            </ul>
            <ul>
              <p>Discount</p>
              <p>6777</p>
            </ul>
            <ul>
              <p>Delivery Charges</p>
              <p>Fee</p>
            </ul>
            <ul>
              <p>Coupon Discount</p>
              <p>000</p>
            </ul>
          </li>
          <ul>
            <h4>Total Amount</h4>
            <h4>9000</h4>
          </ul>
          <div>
            <button>checkout</button>
          </div>
        </div>
    </div>
  )
}

export default PriceDetails