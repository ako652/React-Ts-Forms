import React, { useEffect, useState } from "react";
import {product} from '../../type/type'

type prop ={
    value:string
}

export default function SearchProducts({value}:prop) {
  const url = "https://fakestoreapi.com/products";

  const [products, setProducts] = useState<product[]>([]);
  
  const [filter, setFilter] = useState<product[]>(products);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);
  useEffect(()=>{
    const results=products.filter((product)=>product.title.toLowerCase().includes(value))
    setFilter(results)
  },[value,products])
  return <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr'}} >{filter.map((product)=>{
    return(
        <div style={{border:'1px solid blue', margin:'10px'}} >
            <p>{product.title}</p>
            <p>{product.description}</p>
            <img src={product.image} alt={product.title} style={{width:'200px'}}/>
        </div>
    )
  }

    )}</div>;
}
