/* jshint esversion: 6 */
"use strict";

// imports
const express = require("express");
const {v4: uuidv4} = require('uuid');
const bodyParser = require('body-parser');
const cors = require('cors');
const json = require('json');
const fs = require('fs');
const path = require("path");
const cookieParser = require("cookie-parser");
const {logDOM} = require("@testing-library/react");
const bcrypt = require("bcryptjs"); //ADDED

// constants
const port = process.env.PORT || 3009;
const app = express();
const salt = bcrypt.genSaltSync(10);// ADDED
const usersJson = "./usersDB.json";
const productsJson = "./productDB.json";

// App uses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({
    origin: "http://localhost:3000",
    credential: true
}));
app.use(cookieParser());


/** get products
 *
 */
app.get("/products", (async (req, res) => {
    res.status(200).send(await getData(usersJson));
}))
/** get users
 *
 */
app.get('/users', async (req, res) => {
    res.status(200).json(await getData(usersJson));
});
/** Register
 *
 */
app.post(`/register`, async (req, res, next) => {
        /*
        TODO If logged in
         */const hash = bcrypt.hashSync("B4c0/\/", salt);

        let user = {
            id: generateUserId(),
            username: req.body.username,
            password: bcrypt.hashSync(req.body.password, salt), // edited
            cart: [],
            purchases: [],
            logins: [],
            logouts: [],
            sessions: [],
            isAdmin: false
        };
        // read current file contents
        if (user.username === undefined || user.password.valueOf() === undefined) {
            console.log("error, invalid data");
            res.status(500).json("ERR");
            return;
        }
        // append the new user
        let data = await getData(usersJson);
        let usernames = data.map(obj => obj.username);
        if (usernames.indexOf(user.username) !== -1) {
            console.log("users exists");
            res.status(500).json("user exists");
            return;
        }

        data.push(user);
        await updateJSON(usersJson, data);
        // write the file back to users.json

        res.status(200).json(user);
    }
);
/** Login
 *
 */
app.post(`/login`, async (req, res, next) => {
    let user = {username: req.body.username, password: req.body.password};
    if (user.username === undefined || user.password === undefined || user.username.length === 0 || user.password.length === 0) {
        console.log("error, invalid data");
        res.status(500).json("ERR");
        return;
    }
    let data = await getData(usersJson);
    let usernames = data.map(obj => obj.username);
    console.log(usernames);
    let index = usernames.indexOf(user.username);
    console.log(index);
    if (index === -1) {
        console.log("users not exists");
        res.status(500).json("user not exists");
        return;
    }
    if (isLoggedIn(data[index])) {
        // TODO : check log out status
        console.log("Already Logged");
        res.status(500).json("Already logged in");
        return;
    }
    let passes = data.map(obj => obj.password);
    if (!bcrypt.compareSync(user.password,passes[index])) { //edited
        console.log("wrong password");
        res.status(500).json("Wrong password");
        return;
    }
    let userInFile = data[index];
    let date = new Date().toUTCString();
    let temp;
    if (userInFile.logins === undefined) {
        temp = [date];
    } else {
        userInFile.logins.push(date);
        temp = userInFile.logins;
    }
    await updateInJSON(usersJson, index, "logins", temp);
    userInFile.password = undefined;
    res.status(200).json(userInFile);
    console.log("user logged in");
});

app.post("/admin/getcurrentcart/:username", async (req, res, next) => {
    /*
    TODO If user not connected
     */
    // if (isAdmin()){}
    let data = await getData(usersJson);
    let usernames = data.map(obj => obj.username);
    let username = req.params.username;
    let index = data.indexOf(username);
    if (index === -1) {
        res.status(500).json("invalid User");
        return;
    }
    res.status(200).json(data[index].cart);
});

app.post("/addtocart/:productname", async (req, res, next) => {
    /*
    TODO If user not connected
     */
    let products = await getData(productsJson);

    let names = products.map(obj => obj.name);
    let index = names.indexOf(req.params.productname);
    if (index === -1) {
        res.status(500).json("Product not found");
        return;
    }
    // get user by id (stored somewhere)
    let cart = users

});
app.post("/search/:query", async (req, res, next) => {
    /*
    TODO If user not connected
     */
    let products = await getData(productsJson);
    res.status(200).send(products.filter(obj => obj.name.startsWith(req.params.query)));
});
// app.post("/removefromcart", (req, res, next) => {
//     /*
//     TODO If user not connected
//      */
//
//
//
//
//
//
// });
// app.post("/getusercart/:userid", (req, res, next) => {
//     /*
//     TODO If user not connected
//      */
//
//
//
//
//
//
// });

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

const getData = async (fileJson) => {
    let filePath = path.join(process.cwd(), fileJson);
    let fileData = await fs.readFileSync(filePath);
    return JSON.parse(fileData);
};
// cookies and sessions
const isAdmin = async (username) => {
    let users = await getData(usersJson);
    let usernames = users.map(obj => obj.username);
    let index = usernames.indexOf(username);
    return users[index].isAdmin;
};
const generateUserId = async () => {
    let data = await getData(usersJson);
    let data1 = data.map(obj => obj.id);
    let temp = uuidv4();
    while (data1.indexOf(temp) !== -1) {
        temp = uuidv4();
    }
    return temp;
};
const updateInJSON = async (fileJson, index, field, value) => {
    let data = await getData(fileJson);
    let objToChange = data[index];
    objToChange[field] = value;
    data[index] = objToChange;
    let filePath = path.join(process.cwd(), fileJson);
    await fs.writeFileSync(filePath, JSON.stringify(data));
}

const updateJSON = async (fileJson, value) => {
    let filePath = path.join(process.cwd(), fileJson);
    await fs.writeFileSync(filePath, JSON.stringify(value));
}
const getUserByID = async (value) => {
    let data = await getData(usersJson);
    let data1 = data.filter(obj => obj["id"] === value);
    return data1[0];

}
const isLoggedIn = (user) => {
    // 0 -> Equal number of logins and logouts therefore out , 1 is logged in more is DOS
    // TODO ensure when cookie expired to add to logouts..
    let val = user.logins.length - user.logouts.length;
    if (val > 1) {
        // TODO force logout
    }
    // TODO ADD another condition with local storage
    return user.logins.length - user.logouts.length === 1
}
