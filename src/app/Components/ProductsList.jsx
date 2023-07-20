import React from 'react'
import ProductItem from './ProductItem'

const ProductsList = ({data}) => {
  console.log(data)
    return (
    <div className='productList'>{data.map(makeup => (
        <ProductItem data={makeup}/>
    ))}</div>
  )
}

export default ProductsList