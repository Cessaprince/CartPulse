import React, { useEffect, useState, createContext, useContext } from 'react'
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'

//creating the context box
const AuthContext = createContext();

{/* the provider component(actual code in the box/ context) */ }

//the children prop represents anything that will be in it later
export const AuthProvider = ({ children }) => {

    //create the traker for the user
    const [user, setUser] = useState(null);

    //takes two params: effect function to run and the dependencyList
    useEffect(() => {

        //onAuthStateChanged takes 2 params: auth and function firebase will always run
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })

        return () => unsubscribe()
    }, []) // [] is to run this function once

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}

//this is how it will be used in the components that need it using the useContext
export const useAuth = () => {
    return useContext(AuthContext)
}