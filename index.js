require ("./models/mongodb.js");
const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");
const UserController = require("./controllers/user.controller");
const app = express();

const port = 3600;

console.log(config.get("felix"))

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.send("Hello world");
})
app.use("/users",UserController);

app.listen(port,()=>{
    console.log(`The server is running on port ${port}`);
})