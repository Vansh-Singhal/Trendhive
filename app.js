const cookieParser = require("cookie-parser");
const express = require("express");
const db = require("./config/mongoose-Connection");
const path = require("path");
const product = require("./models/product");
const userRouter = require("./routes/userRouter");
const supplierRouter = require("./routes/supplierRouter");
const productRouter = require("./routes/productRouter");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"/public")));
app.use(cookieParser());

app.use("/user", userRouter);
app.use("/supplier", supplierRouter);
app.use("/product", productRouter);

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    try{
        res.render("index");
    }
    catch(err){
        res.send(err);
    }
});

app.listen(3000);