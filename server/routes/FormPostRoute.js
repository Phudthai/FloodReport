const express = require("express");
const router = express.Router();
const { sendRequest } = require("../controllers/FormPostController")


router.post("/formpost", sendRequest);

module.exports = router;