const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const { errorHandler } = require("../utils/error");

// Just to test route
const test = (req, res) => {
  res.send("User route working");
};

// Update user
const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return res.status(403).json({ message: "You can only update your own account" });
  }

  try {
    const updates = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };

    if (req.body.password) {
      updates.password = bcrypt.hashSync(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: updates }, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};


const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(403, "You can only delete your own account"));
  }

  try {
   await User.findByIdAndDelete(req.params.id);
    res.clearCookie("access_token");
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    next(error);
  }
};



module.exports = { test, updateUser, deleteUser };
