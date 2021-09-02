import React from "react";
import {useHistory} from "react-router-dom";
import shoppingCart from "../assets/shoppingCart.png";
import {routes} from "../routes";
import {useUser} from "../hooks/useUser";
import {getLogout} from "../utils/api";

function UserButtons() {

    const history = useHistory();
    const isLogged = useUser();

    if (isLogged === false)
        return null;

    const goToCart = () => {
        history.push(routes.cart);
    }

    const logout = async () => {
        try{
            const ans = await getLogout();

            if (ans.status === 200) {
                alert("Goodbye!");
                history.push(routes.login);
                window.location.reload(true);
            }

            if (ans.status >= 400) {
                alert(await ans.text());
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