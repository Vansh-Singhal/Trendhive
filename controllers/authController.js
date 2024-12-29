const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user");
const {generateToken} = require("../utils/generateToken")


module.exports.registerUser = async (req, res) => {
    try {
        let { fullname, email, password, contact, picture } = req.body;

        let user = await userModel.findOne({email: email});

        if (user) return res.status(401).send("User already exists");

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {
                if (err) return res.send(err.message());
                else {
                    user = await userModel.create({
                        fullname,
                        email,
                        password: hash,
                        contact,
                        picture
                    });

                    let token = generateToken(user);
                    res.cookie("token", token);
                    res.send("User created Successfully");
                }
            })
        })

    }
    catch (err) {

    }
}