import React from "react";
import {Link, useHistory} from "react-router-dom";
import { useAlert } from "react-alert";
import shoppingCart from "./assets/shoping_cart.png";

function UserButtons() {

    const history = useHistory();
    const alert = useAlert();

    const goToCart = () => {
        history.push("/cart");
    }

    const signOut = async () => {
        let response = await fetch('/signout', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            credentials: 'include'
        });

        if (response.status === 204) {
            document.cookie = "sid= ; max-age=0; path=/ ";
            alert.success("Goodbye!")
            history.push("/login");
        }
        else if (response.status === 500) {
            alert.error("Unexpected Error, Please Try Again");
        }
        history.push("/login");
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
        height:"24px",
    }

    return (
        <p style={headerStyles}>
            <img src={shoppingCart} style={imgStyle}/>
            <text> | </text>
            <Link to="/Signout">Sign Out</Link>
        </p>
    );
}

export default UserButtons;