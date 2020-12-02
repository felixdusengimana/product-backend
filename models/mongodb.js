const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/product",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("Connection to db successfully");
})
.catch(err=>{
    console.log("Error message: "+err);
})

require("./user.model")