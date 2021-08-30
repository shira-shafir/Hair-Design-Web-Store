import React, {useEffect, useState} from "react";

import '../components/css/login.css';

function Login() {


    const [username, setUsername] = useState(undefined);
    const [password, setPassword] = useState(undefined);
    const [rememberMe, setRememberMe] = useState(false);


    const login = async () => {
        let user = {
            username: username,
            password: password,
            rememberMe: rememberMe
        };

        let response = await fetch('http://localhost:3009/login', {
            method: 'POST',
            // credentials: 'true',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        });

        if (response.status === 200) {
            alert("Success");
        } else if (response.status === 500) {
            alert("Unexpected Error,invalid data");
        }

    }

    return (
        <div id="main">
            <h1>Login Form</h1>
            <form>
                <div>
                    Username
                    <input type="text"
                           placeholder="Username"

                           onChange={(username) => setUsername(username.target.value)}/>
                </div>
                <div>
                    <br/>
                    Password
                    <input type="password"
                           placeholder="Password"
                           onChange={(password) => setPassword(password.target.value)}/>

                </div>
                <div>
                    <br/>
                    <input type="checkbox"
                           onChange={() => setRememberMe(!rememberMe)}/>
                    <text >Remember Me</text>
                </div>
                <div>
                    <button type="button" onClick={login}> login</button>
                </div>
            </form>
        </div>
    );
}
export default Login;