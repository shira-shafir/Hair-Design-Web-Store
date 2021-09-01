import React from "react";
import soh3 from "../assets/SoH3.png";
// import {useHistory, Link} from "react-router-dom";
// import ProtectedRoute from "./ProtectedRoute";
import UserButtons from "./UserButtons";
import shoppingCart from "../assets/shoppingCart.png";

function Header() {

    const headerStyles = {
        color: "#081532",
        fontSize: "20px",
        fontWeight: "bold",
        display: "flex",
        marginLeft: "auto"
    }
    const imgStyle = {
        width: "25%",
        // position: "absolute",
        // left: "40%",
        marginLeft: "700px",
        marginRight: "200px"
    }

    return (
        <header style={headerStyles}>
            <img src={soh3} style={imgStyle}/>
            <br/>
            <br/>
            <br/>
            {/*<ProtectedRoute path='/' component={UserButtons} />*/}
            {/*<button onClick={() => this.constructor(super)}/>*/}
            {/*<tag ></tag>*/}
            <UserButtons/>
        </header>

    );
    // <Link to="/Login">Login</Link><text> </text>
    // <Link to="/Register">Register</Link>*/
}

export default Header;