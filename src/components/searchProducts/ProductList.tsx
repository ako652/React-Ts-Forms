import React from "react";

import ProductDetails from '../ProductDetails'
import { product } from "../../type/type";

type prop ={
  filter:product[]
}

export default function ProductList({filter}:prop) {
  return <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr'}}>{filter.map((product:product)=> <ProductDetails product={product} key={product.id}/>)}</div>;
}
