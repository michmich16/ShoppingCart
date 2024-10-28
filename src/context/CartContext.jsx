import { useState, createContext } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cartData, setCartData] = useState([]);

    const addToCart = (item) => {
        let clone = [...cartData];

        let foundIndex = clone.findIndex((product) => product.id === item.id)
        
        if (foundIndex !== -1) {
            clone[foundIndex].quantity += 1;
            setCartData(clone);
        }
        else {
            setCartData([...cartData, { ...item, quantity: 1 }]);
        }

        clone.push(item);
        setCartData(clone);
    };

    const removeFromCart = (item) => {
        let clone = [...cartData]
        let foundIndex = clone.findIndex((product) => product.id === item.id)
        clone.splice(foundIndex, 1);
        setCartData(clone);
    }

    const clearCart = () => {
        setCartData([]);
    }

    const subtractFromCart = (item) => {
        let clone = [...cartData];

        let foundIndex = clone.findIndex((product) => product.id === item.id)
        if (foundIndex !== -1) {
            clone[foundIndex].quantity -= 1;

            if (clone[foundIndex <= 0]) {
                removeFromCart(item);
            } else {
                setCartData(clone);
            }

        }
    }


    return (
        <CartContext.Provider value={{ cartData, addToCart, clearCart, removeFromCart, subtractFromCart }}>
            {children}
        </CartContext.Provider>
    )
}