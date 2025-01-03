const express = require("express");
const router = express.Router();
const {registerSupplier, loginSupplier} = require("../controllers/authController");

router.get("/", (req, res) => {
    res.send("supplier landing page");
});

router.get("/signup",(req,res)=>{
    try{
        res.render("supplierRegistration");
    }
    catch(err){
        res.send(err);
    }
});

router.get("/login",(req,res)=>{
    try{
        res.render("supplierLogin");
    }
    catch(err){
        res.send(err.message);
    }
});

router.post("/login",loginSupplier);

router.post("/register",registerSupplier);


module.exports = router;
