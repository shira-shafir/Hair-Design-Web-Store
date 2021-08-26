import React, {useEffect, useState} from "react";
import {FaTimes} from 'react-icons/fa';

function CartProduct(props) {
//TODO: add onclick remove function to Fatimes(x icon)

    return (
        <div >
            <p>

                <h3> {props.name} </h3>
                <FaTimes/>
                <p> price: {props.price}$
                    <br/>
                    amount:{props.amount}
                    <br/>
                    sub total price: {props.price*props.amount}$
                </p>

            </p>
        </div>
    );
}

// THIS IS A DESCRIPTION TAG:
// <details>
//     <summary> description </summary>
//     <p> {props.details} </p>
// </details>

export default CartProduct;