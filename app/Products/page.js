import React from 'react'
import axios from "axios"
import {Row, Col} from 'antd'
import Link from 'next/link';

export default async function Products() {
        const response = await axios.get('https://fakestoreapi.com/products')
        const products = response.data

        
    



    return (
    <>
    <h1>Product List</h1>
    <div>
        {products.map((product) => (
            
                
            <div key={product.id} className='p-5' style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap:'20px'  }} >

                <Link href={`/Details?id=${product.id}`}>
                    
                        <img className='w-80 h-80' src={product.image}  alt={product.title} />
                        <h3>{product.title}</h3>
                    
                </Link>
            
            <p>${product.price}</p>
            </div>
            
        ))}
    </div>
    </>
  )
}

