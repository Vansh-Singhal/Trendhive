const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    try{
        res.render("index");
    }
    catch(err){
        res.send(err.message);
    }
});

module.exports = router;