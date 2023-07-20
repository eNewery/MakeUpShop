import React from 'react'
import ProductsList from '../Components/ProductsList';
async function fetchUsers() {
  const res = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
  const data = await res.json()
  return data;
  }

async function Products() {
  const data = await fetchUsers()
  console.log(data)
  return (
    <div><ProductsList data={data}/></div>
  )
}

export default Products;