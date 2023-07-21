"use client"
import React, {useContext} from 'react'
import { MiContexto } from './CartContext';
import Link from 'next/link';

 function Cart(){
  const cart = useContext(MiContexto);
  return (
    <Link href="/Cart" className='cartContainer'><span className="material-symbols-outlined spanCart">
shopping_cart
</span> <span className='cartLength'>{cart.cart.length}</span></Link>
  )
}
Cart
export default Cart