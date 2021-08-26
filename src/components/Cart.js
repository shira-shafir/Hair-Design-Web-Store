import React, {useEffect, useState} from "react";
import {FaTimes} from 'react-icons/fa';
import CartProduct from "./CartProduct";
import imgSRC from "./assets/AGEbeautiful.jpg";

function Cart(props) {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCart(props.user.cart.map(product => ({
                name: product.name,
                amount: product.amount,
                price: product.price,
            }))
        )
    }, [props.user]);


    return (
        //todo: add checkout button
        //todo: check if cart empty, if working

        <div >
            <button type="button"  onClick={console.log("checkout")}>Checkout</button>
            {cart.map(product => {
                return <CartProduct  name={product.name}
                                     price = {product.price}
                                     amount = {product.amount}
                />
            })}

        </div>
    );
}

// THIS IS A DESCRIPTION TAG:
// <details>
//     <summary> description </summary>
//     <p> {props.details} </p>
// </details>

export default Cart;