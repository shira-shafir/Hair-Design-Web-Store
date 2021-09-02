import React from "react";

function User(props) {
    const divStyle = {
        fontSize: "1rem",
        margin: "7em auto",
        // border:"blue",
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        width: "50%",
        background:"#8aaabf",
        borderRadius:"10px",
        position:"relative"
    }
    const detStyle = {
        cursor:"pointer",
        marginBottom:"15px"
    }
    const sumStyle ={
        fontSize: "22px",
        fontFamily:"Trebuchet MS",
        textDecoration: "underline"
    }
    const h1Style = {
        fontSize:"25px",
        textDecoration: "underline dotted  #733F82FF"
    }

    return (
        <div  style={divStyle}>
            <h1 style={h1Style}> {props.username}</h1>
            <details style={detStyle}>
                <summary style={sumStyle}> login history:</summary>
                <p> {props.logins} +<br/></p>
            </details>
            <details style={detStyle}>
                <summary style={sumStyle}> logout history:</summary>
                <p> {props.logouts} </p>
            </details>
            <details style={detStyle}>
                <summary style={sumStyle}> add to cart (current cart):</summary>
                <p> {props.cart} <br/></p>
                <br/>
            </details>

        </div>
    );
}


export default User;