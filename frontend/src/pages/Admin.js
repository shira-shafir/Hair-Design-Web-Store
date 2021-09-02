import React, {useEffect, useState} from "react";
import User from "../components/User";
import {getUsers, searchProduct, searchUsersInAdmin} from "../utils/api";

function Admin() {
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


    return (
        <div style={centerDiv}>
            <div>
                <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Search.."/>
                <button onClick={searchUsersInAdminFunc}>Search</button>
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