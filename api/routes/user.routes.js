const express = require("express");
const router = express.Router();

const { test, updateUser, deleteUser } = require("../controllers/user.controller");
const verifyToken = require("../utils/verifyUser");

router.get("/test", test);
router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);

module.exports = verifyToken;
