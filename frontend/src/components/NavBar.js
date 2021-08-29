import React from "react";
import {BrowserRouter as Router, useHistory, Link} from "react-router-dom";
// import AdminRoute from "./AdminRoute";
import './css/Navbar.css';


function NavBar() {
    const imgStyle = {
        width: "24px",
        height:"24px",
    }

    const navBarStyles = {
        backgroundSize: "contain",
        display: "flex",
        justifyContent:"space-between",
        flexDirection: "row",
        backgroundColor: "lightblue",
        height: "100px",
        width:"100%",
        paddingLeft: "30px",
        boxSizing: "border-box",
        alignItems: "center",
    }

    const linkStyles = {
        textDecoration: "none",
        paddingLeft: "5px",
        paddingRight: "10px",
        fontWeight: "bold",
        fontSize: "20px"
    }

    function adminLink() {
        return (
           // <Link to="/admin" style={linkStyles}>Admin</Link>);
        <br/>);
    }

    return (
        <nav class="navbar navbar-default" s>
            <div className="navbar-header">
                <ul class="nav navbar-nav">
                    <Link to="/home" style={linkStyles}>Home</Link>
                    <Link to="/" style={linkStyles}>Hair Care</Link>
                    <Link to="/quiz" style={linkStyles}>Quiz</Link>
                    <Link to="/FindAStylist" style={linkStyles}>Find A Stylist</Link>
                    <Link to="/" style={linkStyles}>Do Your Own Style</Link>
                    <Link to="/" style={linkStyles}>Liked Products</Link>
                    <Link to="/ReadMe" style={linkStyles}>About Us: Shira</Link>
                    <Link to="/ReadMe" style={linkStyles}>About Us: Eitan</Link>
                    {/*<AdminRoute to="/" component={adminLink} />*/}
                </ul>
            </div>
        </nav>
    );

}

export default NavBar;