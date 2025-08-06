const express = require("express");
const router = express.Router();
// const { signup } = require("../controllers/auth.controller.js"); 
// const { signin } = require("../controllers/auth.controller.js"); 
// const { google } = require("../controllers/auth.controller.js");
const { signup, signin, google } = require("../controllers/auth.controller.js");
router.post("/signup", signup); 
router.post("/signin", signin); 
router.post("/google",google)
module.exports = router;
