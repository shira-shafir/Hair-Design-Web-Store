import React, {useEffect, useState} from "react";
import './css/login.css';
import { useAlert } from "react-alert";

function Register() {

    const [username, setUserName] = useState(undefined);
    const [password, setPassword] = useState(undefined);


    const register= async () => {
        let user = {
            username: username,
            password: password,
        };

        let response = await fetch('http://localhost:3009/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        });
        if (response.status === 200) {
            alert("Registered Successfully");
        } else if (response.status === 500 ) {
            alert("Unexpected Error, Please Try Again");
        }
        else if (response.status === 501){
            alert("User logged in");
        }
        else if (response.status === 400){
            alert("users exists");
        }

    }

    return (
        <div id="main">
            <h1> Register form </h1>
            Username
            <input type="text"
                   placeholder="userName"
                   onChange={(username) => setUserName(username.target.value)}
            />
            <br/>
            Password
            <input type="password"
                   placeholder="Password"
                   onChange={(password) => setPassword(password.target.value)}
            />
            <br/>
            <button type="button" onClick={register}> register</button>
        </div>
    );
}
export default Register;