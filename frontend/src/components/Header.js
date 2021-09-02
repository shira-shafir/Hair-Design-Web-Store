import React from "react"
import soh3 from "../assets/SoH3.png";

import UserButtons from "./UserButtons";

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
        marginLeft: "700px",
        marginRight: "200px"
    }

    return (
        <header style={headerStyles}>
            <img src={soh3} style={imgStyle}/>
            <br/>
            <br/>
            <br/>
            <UserButtons/>
        </header>

    );
}

export default Header;