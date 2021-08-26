import React, {useEffect, useState} from "react";


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

        //todo: handle response status code


    }

    return (
        <div >
            <h1> Reigster form </h1>
            <input type="text"
                   placeholder="userName"
                   onChange={(username) => setUserName(username.target.value)}
            />
            <input type="password"
                   placeholder="Password"
                   onChange={(password) => setPassword(password.target.value)}
            />

            <button type="button" onClick={register}> register</button>
        </div>
    );
}
export default Register;