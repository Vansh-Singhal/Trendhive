//Supplier Schema Defination
const mongoose = require("mongoose");

const supplierSchema = mongoose.Schema({
    fullname: {
        type: String,
        minLength: 3,
        trim: true
    },
    email: String,
    password: String,
    products: {
        type: Array,
        default: [],
    },
    contact: Number,
    picture: String,    
    gsin: String
});

module.exports = mongoose.model("owner",supplierSchema);