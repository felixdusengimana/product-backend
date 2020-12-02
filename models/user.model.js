const mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    },
    isAdmin:{
        type: Boolean,
        default: false
    }
})

const User = mongoose.model("User",UserSchema);
module.exports.User = User;