const express = require("express");
const { check } = require("express-validator");

const priceController = require("../controllers/prices-controllers");

const router = express.Router();

router.get("/", priceController.getPrices);

// router.post("/", priceController.postPrices);

// router.patch("/", priceController.update);

module.exports = router;
