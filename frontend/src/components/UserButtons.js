import React from "react";
import {Link, useHistory} from "react-router-dom";
// import { useAlert } from "react-alert";
import shoppingCart from "../assets/shoppingCart.png";
import {routes} from "../routes";
import {useUser} from "../hooks/useUser";

function UserButtons() {

    const history = useHistory();
    const isLogged = useUser();

    // const alert = useAlert();
    if (isLogged === false)
        return null;

    const goToCart = () => {
        history.push(routes.cart);
    }

    const logout = async () => {
        try{
            let response = await fetch('http://localhost:3009/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                credentials: 'include',
            });

            if (response.status === 200) {
                alert("Goodbye!");
                history.push(routes.login);
            }

            if (response.status >= 400) {
                alert(await response.text());
            }
        }
        catch {
            alert("Unexpected Error, Please Try Again");
        }
    }

    const headerStyles = {
        color: "#081532",
        fontSize: "20px",
        fontWeight: "bold",
        marginTop: "auto",
        marginRight: "auto",
        position:"absolute",
        right:"0",
        marginLeft:"auto",
        padding:"30px"

    }
    const imgStyle = {
        width: "24px",
        height:"24px"
    }

    return (
        <p style={headerStyles}>
            <img src={shoppingCart} style={imgStyle} onClick={goToCart}/>
            <span> | </span>
            <button onClick={logout}>Log Out</button>
        </p>
    );
}

export default UserButtons;