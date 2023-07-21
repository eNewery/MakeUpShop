import React, {useContext} from "react";
import Link from "next/link";
import BuyBtn from "@/app/Components/BuyBtn";
async function getData(id) {
  const res = await fetch(
    `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`
    );
    const data = await res.json();
    return data;
  }
  
  async function ProductDetail({ params }) {
    const data = await getData(params.id);

  return (
    <div className="productDetailContainer">
      
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <div className="productDetailImageContainer">
      <Link href="/Products">
      <span class="material-symbols-outlined spanArrow">
chevron_left
</span>
      </Link>
      <img className="productDetailImage" src={data.image_link} alt="" />
      </div>
      <div className="productDetailInfo">
      <p className="productDetailTitle">{data.name}</p>
      <p className="productDetailDescription">{data.description}</p>
      <div className="productDetailPriceContainer">
        <p className="productDetailPrice">
        {data.price}$
        </p>
        <BuyBtn data={data}/>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;
{
  /*    {data.product_colors.map(color => (
     <div>{color.colour_name}</div>
   ))} */
}
