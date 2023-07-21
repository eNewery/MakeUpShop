"use client"
import React, {useContext} from 'react'
import { MiContexto } from './CartContext';

const BuyBtn = ({data}) => {
    const cart = useContext(MiContexto);
    function buyProduct(){
    cart.setCart([data, ...cart.cart])
    setTimeout(() => {
        console.log(cart.cart)
    }, 1000);
    }
  return (
    <button className="productDetailBuyBtn" onClick={buyProduct}>Buy</button>
  )
}

export default BuyBtn