import { CartContext } from "../../context/CartContext";
import { useContext, useState  } from "react";

export const Cart = () => {
    const { cartData, clearCart, removeFromCart, subtractFromCart, addToCart } = useContext(CartContext);



    return (
        <>
            <h5>Cart</h5>
            <div>
                {cartData?.map((item) => {
                    return (
                        <div style={{
                            display: "flex",
                            flexDirection: "column"
                        }}>
                            <h5>{item.title}</h5>
                            <p>Price: {item.price} DKK</p>
                            <div>
                                <button onClick={() => subtractFromCart(item)}>-</button>
                                <p>{item.quantity}</p>
                                <button onClick={() => addToCart(item)}>+</button>
                            </div>
                            <p>Total: {item.price * item.quantity} DKK</p>
                            <button onClick={() => removeFromCart(item)}>Delete Item</button>
                        </div>
                    )
                })}
            </div>
                <button onClick={() => clearCart()}>Empty Cart</button>
        </>
    )
}