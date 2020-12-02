const express = require("express");
const {User} = require("../models/user.model");
var router = express.Router();

router.get("/",async (req,res)=>{
    const users = await User.find().sort({name: 1});
    return res.send(users);
})

router.post("/",async (req,res)=>{
    user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.email,
        isAdmin: req.body.isAdmin
    })
    await user.save();

    return res.send(user).status(201);
})

module.exports = router;