/* jshint esversion: 6 */
"use strict";


const express = require("express");
// const redis = require('redis');
const {v4: uuidv4} = require('uuid');

const productFile = require("./productDB.json");

//cart
const bodyParser = require('body-parser');
const cors = require('cors');
const json = require('json');
const {logDOM} = require("@testing-library/react");
const {err_code, callback_or_emit} = require("redis/lib/utils");

// redis.createClient({host: "127.0.0.1", port: 6379});

const port = process.env.PORT || 3005;
const app = express();
// const client = redis.createClient({host: "127.0.0.1", port: 6379});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app."cors"
// app.use.cookies

app.use(express.json());


app.get("/products",((req, res) => {
    res.status(200).send(productFile);
}))
const fs = require('fs');
const path = require("path");



app.post(`/register`, async (req, res, next) => {
    let user = {id:genarateUuid(),username:req.body.username,password:req.body.password,cart:[],purchases:[],login:[],sessions:[],isAdmin: false};
    // read current file contents
    const filePath = path.join(process.cwd(), 'usersDB.json');
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    if (user.username.valueOf() === getUsers().username  ||user.password.valueOf() === undefined ){
        console.log("error, user exist");
        res.status(500).json("ERR");
        return;
    }
    // append the new user
    data.push(user);

    // write the file back to users.json
    fs.writeFileSync(filePath, JSON.stringify(data));

    res.status(200).json(user);
    }
);
app.get('/users', (req, res) => {

    // read current file contents
    const filePath = path.join(process.cwd(), 'usersDB.json');
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    res.status(200).json(data);
});


const getUsers = (filePath) => {
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);

    return data;
}

app.post(`/login`,async (req, res, next) => {
    let user = {username:req.body.username,password:req.body.password};
    if (user.username === "admin" && user.password === "admin"){
        getUsers().find(user => user.isAdmin === true);
        console.log("isAdmin");
    }

    // let rawdata = fs.readFileSync(path.resolve(__dirname, 'usersFB.json'));
    // JSON.parse(rawdata);
//     if ("user is connected"){
//         return " "
//     }
//     if ("user doesn't exist"){
//         return ""
//     }
//     if ("there is required data undefined"){
//         return ""
//     }
//     //check user info matches the one in db
//     if ("password incorrect"){
//         return "incorrect password"
//     }
//     // get to it -login data ix סעיף
})


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})


// cookies and sessions


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

