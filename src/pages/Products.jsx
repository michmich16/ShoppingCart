import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

export const Products = () => {

    const [products, setProducts] = useState()

    const {cartData} = useContext(CartContext)

    console.log("CartData is", cartData);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((data) => setProducts(data));

    }, [])

    console.log(products)

    return (
        <section>
            <h1>Products</h1>
            {products &&
             products.products.map((item) =>{
                return(
                    <figure key={item.title}>
                        <h4>{item.title}</h4>
                        <p>{item.price}</p>
                        <button>Add To Cart</button>
                    </figure>
                )
            })}

        </section>
    )
};