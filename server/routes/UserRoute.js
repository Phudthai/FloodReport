const express = require("express");
const router = express.Router();
const { signup,signin, checkAdmin } = require("../controllers/UserController");


router.post("/signup", signup);
router.post("/signin", signin);
router.post("/checkAdmin", checkAdmin);

module.exports = router;