const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user.controller");
const validatePassword = require("../middleware/password-validator");
const validateEmail = require("../middleware/email-validator");

router.post("/signup", validateEmail, validatePassword, userCtrl.signup);
router.post("/login", userCtrl.login);

module.exports = router;
