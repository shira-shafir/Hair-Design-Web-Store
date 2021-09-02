import React from "react";

function User(props) {


    return (
        <div>
            <h1> {props.username}</h1>
            <details>
                <summary> login history:</summary>
                <p> {props.logins} </p>
            </details>
            <details>
                <summary> logout history:</summary>
                <p> {props.logouts} </p>
            </details>
            <details>
                <summary> add to cart:</summary>
                <p> {props.cart} </p>
            </details>

        </div>
    );
}

// THIS IS A DESCRIPTION TAG:
// <details>
//     <summary> description </summary>
//     <p> {props.details} </p>
// </details>

export default User;