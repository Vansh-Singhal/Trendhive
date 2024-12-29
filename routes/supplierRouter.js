const express = require("express");
const router = express.Router();
const supplierModel = require("../models/supplier");
const config = require("config");

if (process.env.NODE_ENV === "development") {
    router.post("/create", async (req, res) => {
        let suppliers = await supplierModel.find();
        if (suppliers.length > 0) {
            return res.status(503).send("Supplier already exists");
        }

        let { fullname, email, password, contact, gstin } = req.body;

        let createdSupplier = await supplierModel.create({
            fullname,
            email,
            password,
            contact,
            gstin,
        });

        res.status(201).send(createdSupplier);
    });
}

router.get("/", (req, res) => {
    res.send("hey");
});

module.exports = router;
