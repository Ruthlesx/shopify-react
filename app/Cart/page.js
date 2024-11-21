'use client'
import React from 'react'
import { useCart } from '@/app/Context/CartContext'

export default function CartPage()  {

    const { cart, removeFromCart, clearCart } = useCart();


    if (cart.length === 0) {
        return <h2>Your cart is empty</h2>
    }

  return (
    <div>
        <h1>Shopping Cart</h1>
        <ul>
            {cart.map((item) => (
                <li key={item.id}>
                    <img src={item.image} alt={item.title} width={50} />
                    <div>
                        <h3>{item.title}</h3>
                        <p>Price: ${item.price}</p>
                        <button onClick={() => removeFromCart(item.id)}> Remove Item</button>
                    </div>
                </li>
            ))  }
        </ul>

        <button onClick={clearCart}>Clear Cart</button>
        <p>Total: ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
        
    </div>
  )
}
