import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

export const Products = () => {

    const [products, setProducts] = useState()

    const {cartData, addToCart} = useContext(CartContext)

    console.log("products is", products);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((data) => setProducts(data));

    }, [])

    // console.log(products)

    return (
        <section>
            <h1>Products</h1>
            {products &&
             products.products.map((item) =>{
                return(
                    <figure key={item.title}>
                        <h4>{item.title}</h4>
                        <p>{item.price} DKK</p>
                        <button onClick={() => addToCart(item)}>Add To Cart</button>
                    </figure>
                )
            })}

        </section>
    )
};