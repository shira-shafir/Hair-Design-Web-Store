import React, {useEffect, useState} from "react";
import CartProduct from "../components/CartProduct";
import {getUserCart, removeFromCart, checkout} from "../utils/api";

function Cart() {
    const [cart, setCart] = useState([]);

    const getUserCartFunc = async () => {
        try {
            const ans = await getUserCart();

            if (ans.status === 200) {
                setCart(await ans.json());
            }
        } catch (e) {
            alert(e);
            alert("Could not reach server");
        }
    }

    useEffect(getUserCartFunc, []);

    const removeFromCartFunc = async (name) => {
        try {
            const ans = await removeFromCart(name);

            if (ans.status === 200) {
                setCart(await ans.json());
            }
        } catch (e) {
            alert(e);
            alert("Could not reach server");
        }
    }

    const checkoutFunc = async () => {
        try {
            const ans = await checkout();

            if (ans.status === 200) {
                alert("checkout complete");
                window.location.reload(true);
            }
        } catch (e) {
            alert(e);
            alert("Could not reach server");
        }
    }



    return (
        <div>
            {cart ?
                <div>
                    <button type="button" onClick={checkoutFunc}>Checkout</button>
                    <div>
                        {cart.map(cartItem => <CartProduct name={cartItem.product.name}
                                                           price={cartItem.product.price}
                                                           amount={cartItem.amount}
                                                           key={cartItem.product.name}
                                                           removeCallback={() => removeFromCartFunc(cartItem.product.name)}
                            />
                        )}
                    </div>

                </div> :
                <div>
                    <h1>Cart is empty</h1>
                </div>
            }
        </div>
    );
}

// THIS IS A DESCRIPTION TAG:
// <details>
//     <summary> description </summary>
//     <p> {props.details} </p>
// </details>

export default Cart;