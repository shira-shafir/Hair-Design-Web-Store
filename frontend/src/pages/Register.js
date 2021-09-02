import React, {useState} from "react";
import '../components/css/login.css';
import {getRegister} from "../utils/api";
import {routes} from "../routes";
import {useHistory} from "react-router-dom";

function Register() {

    const [username, setUserName] = useState(undefined);
    const [password, setPassword] = useState(undefined);
    const history = useHistory();

    const register= async () => {
        let user = {
            username: username,
            password: password,
        };

        const response = await getRegister(user);
        if (response.status === 200) {
            alert("Registered Successfully");
            history.push(routes.login);
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