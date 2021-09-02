import React, {useEffect, useState} from "react";
import {Link } from "react-router-dom";
import '../components/css/login.css';

function Login() {

    const [username, setUsername] = useState(undefined);
    const [password, setPassword] = useState(undefined);
    const [rememberMe, setRememberMe] = useState(false);


    const login = async () => {

        const user = {
            username: username,
            password: password,
            rememberMe: rememberMe
        };
        try{
            let response = await fetch('http://localhost:3009/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                credentials: 'include',
                body: JSON.stringify(user)
            });

            if( response.status === 200){
                alert("Success")
            }

            if( response.status >= 400){
                alert(await response.text());
            }
        }
        catch (e)  {
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
                    <span>Remember Me</span>
                </div>
                <div>
                    <button type="button" onClick={login}> login</button>
                    <Link to="/register">
                        <button type="button">
                            Go to register
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default Login;