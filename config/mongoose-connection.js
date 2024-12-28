const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost:27017/Trendhive")
    .then(()=>{
        console.log("Connection successful");
    })
    .catch((err)=>{
        console.log(err);
    })

module.exports = mongoose.connection;