"use client"
import React, {useEffect} from 'react'
import ProductItem from './ProductItem'
import Link from 'next/link'

const ProductsList = ({data}) => {
  useEffect(() => {
    document.title = `Maybelline | Products`
  }, [])
  
  console.log(data)
    return (
    <div className='productList'>{data.map(makeup => (
        <Link href={`ProductDetail/${makeup.id} `}><ProductItem data={makeup}/></Link>
    ))}</div>
  )
}

export default ProductsList