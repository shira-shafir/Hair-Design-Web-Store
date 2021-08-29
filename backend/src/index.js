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
const bcrypt = require("bcryptjs"); //ADDED

// constants
const port = process.env.PORT || 3009;
const app = express();
const salt = bcrypt.genSaltSync(10);// ADDED
const usersJson = "./usersDB.json";
const productsJson = "./productDB.json";
const session = require("express-session");
const sessionStore = require('express-session-rsdb');

// Importing file-store module
const filestore = require("session-file-store")(session)

// App uses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({
    origin: "http://localhost:3000",
    credential: true
}));
app.use(cookieParser());


app.use(session({
    store: new sessionStore(),
    name: "session-id",
    secret: "GFGEnter", // Secret key,
    saveUninitialized: false,
    resave: false,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 1000 * 60 * 30, // session max age in miliseconds
    }
}))


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
    if (req.session.user) {
        console.log("Already logged in");
        res.status(501);
        return;
    }
    const hash = bcrypt.hashSync("B4c0/\/", salt);

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
    if (user.username === undefined || user.password.valueOf() === undefined || user.username.length === 0 || user.password.length === 0) {
        console.log("error, invalid data");
        res.status(500).json("ERR");
        return;
    }
    // append the new user
    let data = await getData(usersJson);
    let usernames = data.map(obj => obj.username);
    if (usernames.indexOf(user.username) !== -1) {
        console.log("users exists");
        res.status(400).json("user exists");
        return;
    }

    data.push(user);
    await updateJSON(usersJson, data);
    // write the file back to users.json

    res.status(200).json(user);
});
/** Login
 *
 */
app.post(`/login`, async (req, res, next) => {
    if (req.session.user) {
        console.log("Already logged in");
        res.status(500);
        return;
    }
    let user = {username: req.body.username, password: req.body.password};
    if (user.username === undefined || user.password === undefined || user.username.length === 0 || user.password.length === 0) {
        console.log("error, invalid data");
        res.status(500).json("ERR");
        return;
    }
    let data = await getData(usersJson);
    let usernames = data.map(obj => obj.username);
    // console.log(usernames);
    let index = usernames.indexOf(user.username);
    // console.log(index);
    if (index === -1) {
        console.log("users not exists");
        res.status(500).json("user not exists");
        return;
    }
    let passes = data.map(obj => obj.password);
    if (!bcrypt.compareSync(user.password, passes[index])) { //edited
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
    req.session.user = userInFile.id;
    req.session.cart = userInFile.cart;
    if (req.body.rememberMe) {
        req.session.cookie.maxAge = Number.MAX_SAFE_INTEGER;
    }
    res.status(200).json(userInFile);
    console.log("user logged in");
});

app.get("/logout", async (req, res) => {
    // clear the cookie
    if (!req.session.user) {
        console.log("Not logged in");
        res.status(500);
        return;
    }
    let userID = req.session.user;
    let data = await getData(usersJson);
    let usernames = data.map(obj => obj.username);
    let index = usernames.indexOf(userID.id);
    let date = new Date().toUTCString();
    let userInFile = data[index];
    let temp;
    if (userInFile.session === undefined) {
        temp = [date];
    } else {
        userInFile.logouts.push(date);
        temp = userInFile.logouts;
    }
    await updateInJSON(usersJson, index, "logouts", temp);
    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
        }
    })
    res.clearCookie('connect.sid', {path: '/'}).status(200).send({message: "Logged Out Successfully"});
    // redirect to login
    return res.redirect("/login");
});

app.post("/admin/getcurrentcart/:username", async (req, res, next) => {

    /*
    TODO If user not connected
     */
    // if (isAdmin()){}

    let data = await getData(usersJson);
    let usernames = data.map(obj => obj.username);
    let username = req.params.username;
    let index = usernames.indexOf(username);
    if (index === -1) {
        res.status(500).json("invalid User");
        return;
    }
    res.status(200).json(data[index].cart);
});


app.post("/addtocart/:productname", async (req, res, next) => {
    if (!req.session.user) {
        console.log("Not logged in");
        res.status(500);
        return;
    }
    let products = await getData(productsJson);

    let names = products.map(obj => obj.name);
    let index = names.indexOf(req.params.productname);
    if (index === -1) {
        res.status(500).json("Product not found");
        return;
    }
    // get user by id (stored somewhere)
    let userID = req.session.user;
    let data = await getData(usersJson);
    let userIds = data.map(obj => obj.id);
    let index2 = userIds.indexOf(userID);
    let userData = data[index2];
    let temp;
    if (userData.cart === undefined) {
        temp = [{product: products[index], amount: 1}];
    } else {
        let productName = products[index].name;
        let prodInCart = userData.cart.map(obj => obj.product.name);
        let indexincart = prodInCart.indexOf(productName);
        if (indexincart !== -1) {
            console.log("found");
            let temp1 = userData.cart[indexincart];
            temp1.amount += 1
            userData.cart[indexincart] = temp1;
            temp = userData.cart;

        } else {
            console.log("not found");
            userData.cart.push({product: products[index], amount: 1});
            temp = userData.cart;
        }
    }
    await updateInJSON(usersJson, index2, "cart", temp);
    req.session.cart = temp;
    res.status(200).send(temp);
});


app.post("/search/productquery", async (req, res, next) => {
    if (!req.session.user) {
        console.log("Not logged in");
        res.status(500);
        return;
    }
    let query = req.body.query;
    let products = await getData(productsJson);
    res.status(200).json(products.filter(obj => obj.name.startsWith(query)));
});


app.post("/removefromcart", async (req, res, next) => {
    if (!req.session.user) {
        console.log("Not logged in");
        res.status(500);
        return;
    }
    let cart = req.session.cart;
    let names = cart.map(obj => obj.name);
    let index = names.indexOf(req.params.cart);
    if (index === -1) {
        res.status(500).json("Product not found");
        return;
    }
    // // get user by id (stored somewhere)
    let userID = req.session.user;
    let data = await getData(usersJson);
    let userIds = data.map(obj => obj.id);
    let index2 = userIds.indexOf(userID);
    let userData = data[index2];
    let temp;
    if (userData.cart === undefined) {
        console.log("Error,empty cart")
    } else if (cart.length === 1) {
        userID.cart = [];
    } else {
        let productName = products[index].name;
        let prodInCart = cart.map(obj => obj.product.name);
        let indexincart = prodInCart.indexOf(productName);
        if ({product: cart[index], amount: 1}) {
            cart.filter(obj => obj.product.name !== req.params.product);
        }
        if (indexincart !== -1) {
            console.log("found");
            let temp1 = userData.cart[indexincart];
            temp1.amount -= 1
            userData.cart[indexincart] = temp1;
            temp = userData.cart;

        } else {
            console.log("not found");
            userData.cart.push({product: cart[index], amount: 1});
            temp = userData.cart;
        }
    }
    await updateInJSON(usersJson, index2, "cart", temp);
    req.session.cart = temp;
    res.status(200).send(temp);
});

app.post("/cart/checkout", async (req, res, next) => {
    if (!req.session.user) {
        console.log("Not logged in");
        res.status(500);
        return;
    }
    let userID = req.session.user;
    let cart = req.session.cart;
    let data = await getData(usersJson);
    let userIds = data.map(obj => obj.id);
    let index2 = userIds.indexOf(userID);
    let userData = data[index2];
    let checkOne = cart.filter(obj => obj.amount <= 0);
    let checkTwo = cart.filter(obj => obj.product.price <= 0);
    if (checkOne !== [] || checkTwo !== []) {
        console.log("Error, invalid arguments in cart");
    }
    let sum = cart.map(obj => obj.product.price * obj.amount).reduce((total, current) => total + current, 0);
    let temp;
    if (userData.purchases === undefined) {
        temp = [cart, sum];
    } else {
        userData.purchases.push({cart: cart, sum: sum});
        temp = userData.purchases;
    }
    await updateInJSON(usersJson, index2, "purchases", temp);
    await updateInJSON(usersJson, index2, "cart", [])
    req.session.cart = [];
    res.status(200).send("Purchase complete!");
});

app.post("/admin/searchUser", async (req, res, next) => {
    if (!req.session.user) {
        console.log("Not logged in");
        res.status(500);
        return;
    }
    let userID = req.session.user;
    if (!(await isAdmin(userID))) {
        console.log("Not admin");
        res.status(500).json("user not ");
        return;
    }
    let userFinder = req.body.query;
    let usergetData = await getData(usersJson);
    res.status(200).json(usergetData.filter(obj => obj.username.startsWith(userFinder)));
})

app.post("/admin/usersData", async (req, res, next) => {
    if (!req.session.user) {
        console.log("Not logged in");
        res.status(500);
        return;
    }
    let userID = req.session.user;
    if (!(await isAdmin(userID))) {
        console.log("Not admin");
        res.status(500);
        return;
    }
    let usergetData = await getData(usersJson);
    res.status(200).json(usergetData.map(obj => [obj.username, obj.logins, obj.logouts, obj.cart]));
})


app.post("/getusercart/:userid", async (req, res, next) => {
    if (!req.session.user) {
        console.log("Not logged in");
        res.status(500);
        return;
    }
    let data = await getData(usersJson);
    let userIds = data.map(obj => obj.id);
    let userid = req.params.userid;
    let index = userIds.indexOf(userid);
    if (index === -1) {
        res.status(500).json("invalid User");
        return;
    }
    res.status(200).json(data[index].cart);
});

app.get("/cart/:userId", (async (req, res) => {
    let response = await fetch(`http://localhost:3009/getusercart/${req.params.userId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': 'http://localhost:3000'
        },
        credentials: 'include',
    }).then(response => response.json())
        .then(data1 => {
            res.status(200).json(data1);
        })
        .catch((error) => {
            // console.error('Error:', error);
            res.status(500).json(error);
        });
    console.log(response);
}));


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});


const getData = async (fileJson) => {
    let filePath = path.join(__dirname, fileJson);
    let fileData = await fs.readFileSync(filePath);
    return await JSON.parse(fileData);
};

// cookies and sessions
const isAdmin = async (userID) => {
    let users = await getData(usersJson);
    let userIds = users.map(obj => obj.id);
    let index = userIds.indexOf(userID);
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
    let filePath = path.join(__dirname, fileJson);
    await fs.writeFileSync(filePath, JSON.stringify(data));
}

app.post("/quiz", async (req, res) => {
    if (!req.session.user) {
        console.log("Not logged in");
        res.status(500).send("User not logged in!");
        return;
    }
    let quizAnswer = {
        hairColor: req.body.hairColor,
        hairLength: req.body.hairLength,
        hairTexture: req.body.hairTexture
    };
    let result = await recommend_and_similar_to(quizAnswer);
    res.status(200).json(result);
});

const updateJSON = async (fileJson, value) => {
    let filePath = path.join(__dirname, fileJson);
    await fs.writeFileSync(filePath, JSON.stringify(value));
}


const hamming = async (data, quizAnswer) => {
    let products = data.map(obj => [obj.hairColor, obj.hairLength, obj.hairTexture]);
    let hamming_map = [];
    for (let i = 0; i < products.length; i++) {
        let count = 0;
        if (quizAnswer.hairColor === products[i][0]) {
            count += 1;
        }
        if (quizAnswer.hairLength === products[i][1]) {
            count += 1;
        }
        if (quizAnswer.hairTexture === products[i][2]) {
            count += 1;
        }
        hamming_map[i] = count;
    }
    return hamming_map;
}
const recommend_and_similar_to = async (quizAnswer) => {
    let products = await getData(productsJson);
    let hamming_map = await hamming(products, quizAnswer);
    let index = hamming_map.indexOf(0);
    let reccomended_product = products[index];
    let similar_products = [];
    for (let i = 0; i < products.length; i++) {
        if (hamming_map[i] === 1) {
            similar_products.push(products[i]);
        }
    }
    return {reccomended_product: reccomended_product, similar_products: similar_products};
};

app.post("/likeorunlike", async (req, res, next) => {
    if (!req.session.user) {
        console.log("Not logged in");
        res.status(500).send("User not logged in!");
        return;
    }
    let userid = req.session.user;
    let users = await (getData(usersJson));
    let userIds = users.map(obj => obj.id);
    let userIndex = userIds.indexOf(userid);
    let user = users[userIndex];
    let productsLiked = user.products_liked;
    let productName = req.body.productname;
    let temp;
    if (productsLiked.map(obj => obj.name).indexOf(productName) !== -1) {
        temp = productsLiked.filter(obj => obj.name !== productName);
    } else {
        let products = await (getData(productsJson));
        let productsnames = products.map(obj => obj.name);
        let prodIndex = productsnames.indexOf(productName);
        let product = products[prodIndex];
        productsLiked.push(product);
        temp = productsLiked;
    }
    await updateInJSON(usersJson, userIndex, "products_liked", temp);
    res.status(200).json(temp);
});

app.get("/likedproducts", async(req, res, next)=>{
    if (!req.session.user) {
        console.log("Not logged in");
        res.status(500).send("User not logged in!");
        return;
    }
    let userid = req.session.user;
    let users = await (getData(usersJson));
    let userIds = users.map(obj => obj.id);
    let userIndex = userIds.indexOf(userid);
    let user = users[userIndex];
    res.status(200).json(user.products_liked);
});