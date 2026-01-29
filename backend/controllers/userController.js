const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const AppError = require("../utils/AppError");

function generateToken(userObj) {
  return jwt.sign(userObj, process.env.JWT_TOKEN, {
    expiresIn: process.env.JWT_EXPIRES_AT,
  });
}

exports.signUp = async (req, res, next) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password)
      return next(new AppError("Missing required fields", 400));

    const user = await User.findOne({ email });

    if (user) return next(new AppError("Email already in use", 400));

    const newUser = await User.create({ fullName, email, password });

    const userObj = {
      name: newUser.fullName,
      id: newUser._id,
      email: newUser.email,
    };

    const token = generateToken(userObj);

    res.status(201).json({
      status: "Success",
      message: "User created",
      token,
    });
  } catch (error) {
    console.error(error);
    return next(new AppError("Failed to create user", 404));
  }
};

exports.logIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return next(new AppError("Missing required fields", 400));

    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.comparePassword(password, user.password)))
      return next(new AppError("Invalid credentials", 400));

    const userObj = {
      name: user.fullName,
      id: user._id,
      email: user.email,
    };

    const token = generateToken(userObj);

    res.status(200).json({
      status: "Success",
      message: "Logged in",
      token,
    });
  } catch (error) {
    console.error(error);
    return next(new AppError("Authentication failed", 404));
  }
};
