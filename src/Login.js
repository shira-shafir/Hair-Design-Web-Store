import React, {useEffect, useState} from "react";


function Login() {

    const [username, setUserName] = useState(undefined);
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
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(user)
            });

            //todo: handle response status code
            // for example, if user is connected we want to change the current page from login to home(?)


    }

    return (
        <div >
            <h1> login form </h1>
            <input type="text"
                   placeholder="userName"
                   onChange={(username) => setUserName(username.target.value)}
            />
            <input type="password"
                   placeholder="Password"
                   onChange={(password) => setPassword(password.target.value)}
            />
            <input type="checkbox"
                   onChange={() => setRememberMe(!rememberMe)}
            />
            <text >Remember Me</text>
            <button type="button" onClick={login}> login</button>
        </div>
    );
}
export default Login;