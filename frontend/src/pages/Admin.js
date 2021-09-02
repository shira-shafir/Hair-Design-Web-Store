import React, {useEffect, useState} from "react";
import User from "../components/User";
import {getUsers, searchUsersInAdmin} from "../utils/api";
import {useHistory} from "react-router-dom";
import {useUser} from "../hooks/useUser";
import {routes} from "../routes";
import searchIcon from '../assets/searchIcon.jpg'

function Admin() {
    const history = useHistory();
    const isLogged = useUser();

    if (isLogged === false) {
        console.log("User not logged in");
        history.push(routes.login);
    }

    if (isLogged && isLogged.isAdmin !== true) {
        console.log("User not admin");
        history.push(routes.home);
    }

    const [users, setUsers] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const getUsersFunc = async () => {
        try {
            const ans = await getUsers();

            if (ans.status === 200) {
                await setUsers(await ans.json());
            }
        } catch (e) {
            alert(e);
            alert("Could not reach server");
        }
    }

    const searchUsersInAdminFunc = async () => {
        try {
            const ans = await searchUsersInAdmin(searchValue);
            if (ans.status === 200) {
                setUsers(await ans.json());
            }
            if (ans.status >= 400) {
                alert(await ans.text())
            }
        } catch (e) {
            alert("Could not reach server")
        }
    }

    const centerDiv = {
        textAlign: "center",
    }

    useEffect(getUsersFunc, []);

    const imgStyle = {
        width: "25px",
        backgroundColor: "lightblue"
    }
    const inputStyle ={
        fontWeight:"400",
        borderRadius:"25px",
        backgroundColor: "lightblue"
    }

    return (
        <div style={centerDiv}>
            <br/>
            <div className="search">
                <input value={searchValue} style={inputStyle} onChange={(e) => setSearchValue(e.target.value)} placeholder="Search.."/>
                <button onClick={searchUsersInAdminFunc} ><img src={searchIcon} style={imgStyle}/></button>
            </div>
            {users.map(user => <User username={user.username}
                                     logins={user.logins}
                                     logouts={user.logouts}
                                     key={user.id}
                                     cart={JSON.stringify(user.cart)}

                />
            )}
            <br/>

        </div>
    );
}

export default Admin;