import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartCard from "./components/CartCard";
import "./cart.css";
import FormatPrice from "../../helpers/FormatPrice";
import PriceDetails from "./components/PriceDetails";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const cartHasItems = cart.length > 0;

  return (
    <div className="cart-page-container">
      <div className="cart-card-container">
        {/* <h1>My Cart : ({cart.length})</h1> */}
        {cartHasItems ? (
          cart.map((currItem) => <CartCard data={currItem} />)
        ) : (
          <h1 className="text-center"> Your Cart is empty ! </h1>
        )}
      </div>
      <PriceDetails />
     
    </div>
  );
};

export default Cart;
