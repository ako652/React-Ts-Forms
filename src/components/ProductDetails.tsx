import React from 'react'
import { product } from '../type/type'


type prop={
    product:product
}

export default function ProductDetails({product}:prop){
  return (
    <div style={{border:'1px solid blue', margin:'10px'}}>
     <p>{product.title}</p>
     <p>{product.description}</p>
     <img src={product.image} style={{width:'200px'}} />
    </div>
  );
}
