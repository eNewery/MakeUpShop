import React from 'react'
import Link from 'next/link'
import Cart from './Cart'
const Header = () => {
  return (
    <nav>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <div className="navigationLogo">      <div className="navigationArrow1"></div>
      <div className="navigationArrow2"></div>

  <Link href="/" className='navbarTitle navLink'>
    Maybelline
    </Link></div>
      <ul className='navigationBarContainer'>
        <li><Link className='navLink' href="/Products">Products</Link></li>
        </ul>
    <Cart/>
        </nav>
  )
}

export default Header