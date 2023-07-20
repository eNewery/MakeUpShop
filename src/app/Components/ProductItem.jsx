import React from 'react'

const ProductItem = ({data}) => {
    console.log(data)
  return (
    <div className='productItemCard'>
        <p className='productItemTitle'>{data.name}</p>
        <p className='productItemBrand'>{data.brand}</p>
        <img className='productItemImage' src={data.image_link} alt="" />
        <p className='productItemPrice'>${data.price}</p>
    </div>
  )
}

export default ProductItem