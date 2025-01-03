const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user");
const supplierModel = require("../models/supplier");
const {generateToken} = require("../utils/generateToken");
const cookieParser = require("cookie-parser");


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
        res.send(err.message);
    }
}

module.exports.loginUser = async(req,res) =>{
    let {email, password} = req.body;

    let user = await userModel.findOne({email:email});

    if (!user) return res.send("Email or Password incorrect");
    
    bcrypt.compare(password,user.password,(err,result)=>{
        if (!result) return res.send("Email or Password incorrect");

        let token = generateToken(user);
        res.cookie("token",token);
        res.send("You can login");
    });
}

module.exports.registerSupplier = async(req,res)=>{
    try {
        let { fullname, email, password, contact, picture, gsin } = req.body;

        let supplier = await supplierModel.findOne({email: email});

        if (supplier) return res.status(401).send("Supplier already exists");

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {
                if (err) return res.send(err.message);
                else {
                    user = await supplierModel.create({
                        fullname,
                        email,
                        password: hash,
                        contact,
                        picture,
                        gsin
                    });

                    let token = generateToken(user);
                    res.cookie("token", token);
                    res.send("Supplier created Successfully");
                }
            })
        })

    }
    catch (err) {
        res.send(err.message);
    }
}

module.exports.loginSupplier = async(req,res)=>{
    let {email, password} = req.body;

    let supplier = await supplierModel.findOne({email:email});

    if (!supplier) return res.send("Email or Password incorrect");
    
    bcrypt.compare(password,supplier.password,(err,result)=>{
        if (!result) return res.send("Email or Password incorrect");

        let token = generateToken(supplier);
        res.cookie("token",token);
        res.send("You can login");
    });
}