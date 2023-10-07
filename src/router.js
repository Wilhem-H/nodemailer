const express = require("express");

const router = express.Router();

const mailControllers = require("./controllers/mailControllers");

router.post("/contact/etsi", mailControllers.sendContactMail);

module.exports = router;
