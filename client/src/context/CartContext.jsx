import React, { useState, createContext, useContext, useEffect } from 'react'
import { useAuth } from './AuthContext';

//creating the context box
const CartContext = createContext();

{/* the provider component(actual code in the box/ context) */ }

//the children prop represents anything that will be in it later
export const CartProvider = ({ children }) => {

    /* get the currently logged in user from AuthContext, so we know when
    someone logs out and can react to it */
    const { user } = useAuth();

    //create the tracker for what's in the cart, starts as an empty array
    const [cartItems, setCartItems] = useState([]);

    /* whenever user changes; if there's no user,
    clear the cart. this stops one person's cart from getting into the
    next person's session on the same browser */
    useEffect(() => {
        if (!user) {
            setCartItems([]);
        }
    }, [user]);

    //takes one param: the product being added (no quantity yet, it's fresh from the page)
    const addToCart = (product) => {

        /* setCartitems to have the function that checks if the item is in cart or not*/
        setCartItems((prevItems) => {

            /* does this product already exist in the cart?
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
                return [...prevItems, { ...product, quantity: 1 }] //list of products arrays and then the new product is spread and guven the quantity of 1
            }
        })
    }

    /* takes the item's id and the new quantity typed into the input, and
    updates just that one item quantity, leaving everything else like that */
    const updateQuantity = (id, newQuantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    //removing an item from cart using fiter - it takes what is true and drops what is false
    const removeFromCart = (id) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.id !== id) //keeps any item that is not equal w[to what is being removed
        );
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

//this is how it will be used in the components that need it using the useContext
export const useCart = () => {
    return useContext(CartContext)
}