"use client"

import React, {useContext, useEffect} from 'react'
import { MiContexto } from './CartContext';

const BuyBtn = ({data}) => {
    useEffect(() => {
document.title = `Maybelline | ${data.name}`
    }, [])
    
    const cart = useContext(MiContexto);
    function buyProduct(){
    cart.setCart([data, ...cart.cart])
    setTimeout(() => {
        console.log(cart.cart)
    }, 1000);
    }
  return (
    <div>
        <button className="productDetailBuyBtn" onClick={buyProduct}>Buy</button>
    </div>
  )
}

export default BuyBtn