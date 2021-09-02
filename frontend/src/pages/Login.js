import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import '../components/css/login.css';
import {useUser} from "../hooks/useUser";
import {routes} from "../routes";
import {getLogin} from "../utils/api";

function Login() {
    const history = useHistory();
    const isLogged = useUser();

    const [username, setUsername] = useState(undefined);
    const [password, setPassword] = useState(undefined);
    const [rememberMe, setRememberMe] = useState(false);

    if (isLogged) {
        return (<div>
            <h1>You are already logged in</h1>
        </div>)
    }

    const login = async () => {

        const user = {
            username: username,
            password: password,
            rememberMe: rememberMe
        };
        try {
            const ans = await getLogin(user);
            if (ans.status === 200) {
                alert("Success");
                history.push(routes.home);
            }

            if (ans.status >= 400) {
                alert(await ans.text());
            }
        } catch (e) {
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