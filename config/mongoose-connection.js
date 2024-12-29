const mongoose = require("mongoose");
const dbgr = require("debug")("development:mongoose");
const config = require("config");


// To set up an environment variable    :   $env:DEBUG="development:*"
// To remove an environment variable    :   Remove-Item Env:DEBUG
// To create a Node environment         :   $env:NODE_ENV="development"
// To check the Node environment        :   console.log(process.env.NODE_ENV);

mongoose
    .connect(`${config.get("MONGODB_URI")}/Trendhive`)
    .then(()=>{
        dbgr("Connection successful");
    })
    .catch((err)=>{
        dbgr(err);
        
    })

module.exports = mongoose.connection;