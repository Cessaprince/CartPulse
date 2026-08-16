import React, { useState, createContext, useContext, useEffect } from 'react'
import { useAuth } from './AuthContext';

//creating the context box
const CartContext = createContext();

{/* the provider component(actual code in the box/ context) */ }

//the children prop represents anything that will be in it later
export const CartProvider = ({ children }) => {

    /*get the currently logged in user from AuthContext, so we know when
    someone logs out and can react to it
    */
    const { user } = useAuth();

    //create the tracker for what's in the cart, starts as an empty array
    const [cartItems, setCartItems] = useState([]);

    /* whenever user changes (login, logout, or the initial null while
    firebase figures out who's logged in), check: if there's no user,
    clear the cart. this stops one person's cart leaking into the
    next person's session on the same browser */
    useEffect(() => {
        if (!user) {
            setCartItems([]);
        }
    }, [user]);

    //takes one param: the product being added (no quantity yet, it's fresh from the page)
    const addToCart = (product) => {

        /* using the updater form (prevItems => ...) instead of reading cartItems
        directly, so we always work with the latest state, even if this fires
        twice quickly (e.g. double-click) */
        setCartItems((prevItems) => {

            /*the core question: does this product already exist in the cart?
            .some() just gives us true/false */
            const alreadyInCart = prevItems.some(
                (item) => item.id === product.id
            )

            if (alreadyInCart) {
                /* it exists already, so don't add a new row.
                .map() walks every item and returns a NEW array:
                if the id matches, return a NEW object (spread the old item,
                then override quantity with +1)
                -otherwise, return that item completely unchanged */

                return prevItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            } else {
                /*it doesn't exist yet, so spread the existing array and append
                the new product, but give it quantity: 1 since the incoming
                product object has no quantity field of its own */
                return [...prevItems, { ...product, quantity: 1 }]
            }
        })
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

//this is how it will be used in the components that need it using the useContext
export const useCart = () => {
    return useContext(CartContext)
}