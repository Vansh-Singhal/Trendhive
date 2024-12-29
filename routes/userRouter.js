const express = require("express");
const {registerUser} = require("../controllers/authController");
const router = express.Router();


router.get("/", (req, res) => {
    res.send("hey");
})

router.get("/signup", (req, res) => {
    try {
        res.render("userRegistration");
    }
    catch (err) {
        res.send(err);
    }
})

router.post("/register", registerUser);

module.exports = router;