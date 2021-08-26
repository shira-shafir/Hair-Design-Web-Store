import React, {useEffect, useState} from "react";

import './login.css';

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

        let response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        });

        //todo: handle response status code
        // for example, if user is connected we want to change the current page from login to home(?)


    }

    return (
        <div id="main">
            <h1>Login Form</h1>
            <form>
                <div>
                    <input type="text"
                           placeholder="Username"
                           onChange={(username) => setUsername(username.target.value)}/>
                </div>
                <div>
                    <br/>
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