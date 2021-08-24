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
    // if (user.username === getUsers().username || user.username === undefined ||user.password === undefined ){
    //     console.log("error, user exist");
    // }
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

app.post(`/login`,(req, res, next) => {
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

// const getAllTypeAsObj = (type, callback) => {
//     // get all type from redis
//     return redisClient.hgetall(type, (err, results) => {
//         // results is built as user_key + JSON(object)
//         if (err) console.log(err);
//         else callback(getallType(results));// tranform into array of objects
//     });
// };

const getallType = (items) => {
    if (items === undefined || items === null) return items;
    return Object.values(items).map(i => JSON.parse(i));// object of object (key+value) -> array of objects values(JSON) -> array of objects values(OBJ)
};

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})


// cookies and sessions


//register
const genarateUuid = () => {
    return uuidv4();
}

