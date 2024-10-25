import { useState, createContext } from "react";

export const CartContext = createContext() 

export const CartContextProvider = ({children}) => {

    //all this 
    const [cartData, setCartData] = useState([]);

    return(
        <CartContext.Provider value={{cartData}}> 
            {children}
        </CartContext.Provider>
    )
}