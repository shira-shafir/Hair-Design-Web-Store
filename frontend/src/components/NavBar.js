import React from "react";
import {BrowserRouter as Router, useHistory, Link} from "react-router-dom";
// import AdminRoute from "./AdminRoute";
import './css/Navbar.css';
import {routes} from "../routes";
import {useUser} from "../hooks/useUser";


function NavBar() {

    const history = useHistory();
    const isLogged = useUser();

    const imgStyle = {
        width: "24px",
        height:"24px",
    }

    // const navBarStyles = {
    //     backgroundSize: "contain",
    //     display: "flex",
    //     justifyContent:"space-between",
    //     flexDirection: "row",
    //     backgroundColor: "lightblue",
    //     height: "100px",
    //     width:"100%",
    //     paddingLeft: "30px",
    //     boxSizing: "border-box",
    //     alignItems: "center",
    // }

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
        <nav className="navbar navbar-default">
            <div className="navbar-header">
                <ul className="nav navbar-nav">
                    <Link to={routes.home} style={linkStyles}>Home</Link>
                    <Link to={routes.store} style={linkStyles}>Store: Hair Care</Link>
                    <Link to={routes.quiz} style={linkStyles}>Quiz</Link>
                    <Link to={routes.stylist} style={linkStyles}>Find A Stylist</Link>
                    <Link to={routes.doYou} style={linkStyles}>Braid it like a Pro!</Link>
                    <Link to={routes.productsLiked} style={linkStyles}>Liked Products</Link>
                        <Link to={routes.readme} style={linkStyles}>About Us: Shira</Link>
                        <Link to={routes.readmeEitan} style={linkStyles}>About Us: Eitan</Link>
                    {isLogged && isLogged.isAdmin === true && <>
                    <Link to = {routes.admin} style={linkStyles}> Admin</Link>
                    </>}
                </ul>
            </div>
        </nav>
    );

}

export default NavBar;