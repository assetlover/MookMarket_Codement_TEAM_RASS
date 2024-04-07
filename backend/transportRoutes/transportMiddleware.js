const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");
const { TransportDb } = require("../db/db"); // Assuming you have a User model
const mongoose = require("mongoose")
const transportAuthMiddleware = async (req, res, next) => {
  // Extract token from request body
  const token = req.headers.authorization;
  // console.log(token);
  if (!token) {
    return res.status(401).json({ msg: "No token provided" });
  }

  try {
    console.log(token + "" + JWT_SECRET);
    const transportname = jwt.verify(token, JWT_SECRET);
    const transport = await TransportDb.findOne({
      username: sellername,
    }).select("username _id city district");
    if (!seller) {
      return res.status(401).json({ msg: "User does not exist" });
    }

    req.seller = seller;
    console.log(seller._id);
    next();
  } catch (err) {
    console.error("Error authorizing user:", err);
    return res.status(403).json({ msg: "Unauthorized" });
  }
};

module.exports = transportAuthMiddleware;