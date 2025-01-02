const express = require("express");
const {registerUser, loginUser} = require("../controllers/authController");
const router = express.Router();


router.get("/", (req, res) => {
    res.send("hey");
});

router.get("/signup", (req, res) => {
    try {
        res.render("userRegistration");
    }
    catch (err) {
        res.send(err.message);
    }
});

router.get("/login",(req,res)=>{
    try{
        res.render("userLogin");
    }
    catch(err){
        res.send(err.message);
    }
});

router.post("/register", registerUser);

router.post("/login",loginUser);

module.exports = router;