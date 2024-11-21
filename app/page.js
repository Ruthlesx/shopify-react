
import React from 'react'
import Image from "next/image";
import axios from 'axios'


export async function Product() {
  
  const response = await axios.get('https://fakestoreapi.com/products');
  const products = response.data;

 

  return (
  <div>
    <h1>Product List</h1>
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  </div>
  );
}
