import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <nav>
      <div className="navigationLogo">      <div className="navigationArrow1"></div>
      <div className="navigationArrow2"></div>

  <Link href="/" className='navbarTitle navLink'>
    Maybelline
    </Link></div>
    <div className='searchBarContainer'><input className='searchBar' type="text" /></div>
      <ul className='navigationBarContainer'>
        <li><Link className='navLink' href="/Products">Products</Link></li>
        </ul>
        </nav>
  )
}

export default Header