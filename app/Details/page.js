'use client'
import React from 'react'
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { useCart } from '@/app/Context/CartContext'

export default async function Details() {

  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const { addToCart } = useCart()


  const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
  const product = response.data



  return (
    <div className=' p-5 flex flex-col self-center justify-center'>
      <h1 className=''>{product.title}</h1>
      <img src={product.image} alt={product.title} className='w-80 h-80'/>
      <p>{product.description}</p>
      <p> Price: ${product.price}</p>
      <button onClick={() => addToCart(products)} className='bg-pink-600 w-40 h-30'> Add to Cart </button>
    </div>
  )
}