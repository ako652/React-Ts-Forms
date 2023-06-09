import React from "react";
import { product } from "../../type/type";

export default function Form({setValue,value,products,setFilter}:any) {
  const onChangeHandler=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setValue(event.target.value)
  }
  const OnsubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = products.filter((product: product) =>
      product.title.toLowerCase().includes(value)
    );
    setFilter(result);
  };
  return (
    <div style={{margin:'20px'}}>
      <form onSubmit={OnsubmitHandler}>
        <input type="text" onChange={onChangeHandler} placeholder="type your product here" value={value}/>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
