import React from "react";
import soh3 from "./assets/soh3.png";
import {useHistory, Link} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import UserButtons from "./UserButtons";

function Header() {

    const headerStyles = {
        color: "#081532",
        fontSize: "20px",
        fontWeight: "bold",
        marginLeft: "auto"
    }
    const imgStyle = {
            width: "25%",
            marginLeft: "300px",
            marginRight: "200px"
        }

    return(
        <header style={headerStyles}>
            <img src={soh3} style={imgStyle}/>
            <ProtectedRoute path='/' component={UserButtons} />
        </header>
    );
    /*
            <Link to="/Login">Login</Link><text> </text>
            <Link to="/Register">Register</Link>*/
}

export default Header;