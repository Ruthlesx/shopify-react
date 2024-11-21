'use client'
import React,{ createContext, useContext, useState, useEffect} from 'react'

// Create context
const CartContext = createContext();


//Cart Provider

export function CartProvider({ children }) {
    const [ cart, setCart ] = useState([])

    //Load cart from local storage on mount
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, [])

    //Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    //Add item to cart 
    const addToCart = (product) => {
        setCart((prevCart) => {[...prevCart, product]})
    }

    //remove item from cart
    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id))
    } 


    //Clear Cart
    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart}}>
        {children}
        </CartContext.Provider>
    )

}

//Custom hook to use the CartContext

export function useCart() {
    return useContext(CartContext);
}