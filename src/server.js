/* jshint esversion: 6 */
"use strict";


const express = require("express");
// const redis = require('redis');
const {v4: uuidv4} = require('uuid');
const loginPage = require('./loginPage');
const productFile = require("./productDB.json");

//cart
const bodyParser = require('body-parser');
const cors = require('cors');
const json = require('json');
const {logDOM} = require("@testing-library/react");
const fs = require('fs');
const path = require("path");

const port = process.env.PORT || 3005;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app."cors"
// app.use.cookies

app.use(express.json());

/** get products
 *
 */
app.get("/products", ((req, res) => {
    res.status(200).send(productFile);
}))
/** get users
 *
 */
app.get('/users', (req, res) => {
    // read current file contents
    const filePath = path.join(process.cwd(), 'usersDB.json');
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    res.status(200).json(data);
});
/** Register
 *
 */
app.post(`/register`, async (req, res, next) => {
        /*
        TODO If logged in
         */
        let user = {
            id: genarateUuid(),
            username: req.body.username,
            password: req.body.password,
            cart: [],
            purchases: [],
            login: [],
            sessions: [],
            isAdmin: false
        };
        // read current file contents
        if (user.username === undefined || user.password.valueOf() === undefined) {
            console.log("error, invalid data");
            res.status(500).json("ERR");
            return;
        }
        let filePath = path.join(process.cwd(), 'usersDB.json');
        let fileData = await fs.readFileSync(filePath);
        let data = JSON.parse(fileData);
        let usernames = data.map(obj => obj.username);
        if (usernames.indexOf(user.username) !== -1) {
            console.log("users exists");
            res.status(500).json("user exists");
            return;
        }
        // TODO encrypt?
        // append the new user
        data.push(user);

        // write the file back to users.json
        fs.writeFileSync(filePath, JSON.stringify(data));

        res.status(200).json(user);
    }
);
/** Login
 *
 */
app.post(`/login`, async (req, res, next) => {
//     if ("user is connected"){
//         return " "
//     }
    let user = {username: req.body.username, password: req.body.password};
    if (user.username === undefined ||user.password === undefined || user.username.length === 0 || user.password.length ===  0) {
        console.log("error, invalid data");
        res.status(500).json("ERR");
        return;
    }
    let filePath = path.join(process.cwd(), 'usersDB.json');
    // TODO func map field user? (username, supposed Result)
    let fileData = await fs.readFileSync(filePath);
    let data = JSON.parse(fileData);
    let usernames = data.map(obj => obj.username);
    let index = usernames.indexOf(user.username);
    if (index === -1) {
        console.log("users not exists");
        res.status(500).json("user not exists");
        return;
    }
    let passes = data.map(obj => obj.password);
    if (passes[index]!== user.password){ // decrypt
        console.log("wrong password");
        res.status(500).json("Wrong password");
        return;
    }
    let userInFile = data[index];

    let date = new Date().toUTCString();
    if (userInFile.logins === undefined){
        userInFile.logins = [date];
    } else {
        userInFile.logins.push(date);
    }
    userInFile.logins = userInFile.logins.push(date);

    data[index] = userInFile;
    fs.writeFileSync(filePath,JSON.stringify(date));
    userInFile.password = undefined;
    res.status(200).json(userInFile);
    console.log("user logged in");
    // let rawdata = fs.readFileSync(path.resolve(__dirname, 'usersFB.json'));
    // JSON.parse(rawdata);

//     // get to it -login data ix סעיף
})


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})


const getUsers = (filePath) => {
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);

    return data;
}
// cookies and sessions

const admin = (user) => {
    getUsers().find(user => user.isAdmin === true);
}
//register
const genarateUuid = () => {
    /*
    temp = uuid4()
    check if exists
    if does -> temp = uuid4()
    else -> return temp
     */
    return uuidv4();
}

