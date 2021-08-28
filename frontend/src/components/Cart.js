import React, {useEffect, useState} from "react";
// import {FaTimes} from 'react-icons/fa';
import CartProduct from "./CartProduct";
// import imgSRC from "./assets/AGEbeautiful.jpg";

async function Cart(props) {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCart(props.user.cart.map(product => ({
                name: product.name,
                amount: product.amount,
                price: product.price,
            }))
        )
    }, [props.user]);

    const fetchFromServer = async () => {
        let response = await fetch('http://localhost:3009/cart/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            credentials: 'include',
        });
        if (response.status === 200) {
            setCart(await response.json());
        } else if (response.status === 500) {
            alert.error("Unexpected Error, Please Try Again");
        }
    }


    return (
        //todo: add checkout button
        //todo: check if cart empty, if working

        <div>
            <button type="button" onClick={console.log("checkout")}>Checkout</button>
            {cart.map(product => {
                return <CartProduct name={product.name}
                                    price={product.price}
                                    amount={product.amount}
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