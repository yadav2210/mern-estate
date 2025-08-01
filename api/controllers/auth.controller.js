const bcryptjs = require("bcryptjs");
const User = require("../models/user.model"); 
const { errorHandler } = require("../utils/error.js");
const jwt = require("jsonwebtoken"); 

const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
                                                                                                                                     
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return next(errorHandler(400, "User already exists"));

    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });

    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    next(err);
  }
};


const signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found"));

    const isPasswordValid = bcryptjs.compareSync(password, validUser.password);
    if (!isPasswordValid) return next(errorHandler(400, "Invalid password"));

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET); 
    
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({
        message: "User logged in Successfully",
        user: {
          id: validUser._id,
          username: validUser.username,
          email: validUser.email,
        },
      });
  } catch (err) {
    next(err);
  }
};

module.exports = { signup, signin };
