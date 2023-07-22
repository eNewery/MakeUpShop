"use client"
import React, { useContext, useEffect } from 'react'
import Head from 'next/head'

import { MiContexto } from '../Components/CartContext'
import cartLogo from "../Components/images/cart.svg"
import { useRouter } from 'next/navigation'
const Cart = () => {
    const router = useRouter()
  const cart = useContext(MiContexto)
  useEffect(() => {
    document.title = `Maybelline | Cart (${cart.cart.length})`
    }, [])
  return (
        <div className='cartPageContainer'>
 
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
{cart.cart.length > 0 ? <button className='cleanCartButton' onClick={cart.cleanCart}>Limpiar Carrito</button> : console.log("El carrito está vacío, es innecesario que el botón se visualice.")}
    
    <div className='cartCards'>{cart.cart.length > 0 ? cart.cart.map(item => (<div className='cartCardContainer'><div className='cartCard'><div className="cartCardTitleContainer"><p className='cartCardTitle'>{item.name}</p><p className='cartCardPrice'>{item.price}$</p></div><div onClick={() => router.push(`/ProductDetail/${item.id}`)} className="cartCardImage"><img src={item.image_link} alt="" /></div></div></div>))  : <div className='emptyCartContainer'> <span class="material-symbols-outlined cartIcon">remove_shopping_cart</span><span>No hay productos en el carro.</span></div>}</div>
{cart.cart.length > 0 ?   <button onClick={() => router.push("/BuyForm")} className="finishBuy">Finalizar Compra</button> : console.log("El carrito está vacío, es innecesario que el botón se visualice.")}
 

  </div>
  )
}

export default Cart;