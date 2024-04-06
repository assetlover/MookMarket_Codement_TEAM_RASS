const express = require("express");
const z = require("zod");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltrounds = 11;
router = express.Router();
const JWT_SECRET = require("../config");
const { sellerSignupSchema, sellerSigninSchema } = require("./sellerSchema");
const {
  SellerDb,
  DairyProductsDb,
  VegetableDb,
  FruitsDB,
} = require("../db/db");
const sellerAuthMiddleware = require("./sellerMiddleware");
const { DairyProductSchema } = require("../productsRoutes/dairyProductSchema");
const { parse } = require("dotenv");
const { VegetableSchema } = require("../productsRoutes/vegetableSchema");
const { FruitsSchema } = require("../productsRoutes/fruitsSchema");
function generateRandomBalance() {
  return (Math.floor(Math.random() * (1000000 - 1000 + 1)) + 1000).toFixed(2);
}
router.post("/signup", async (req, res) => {
  const sellerSignupData = req.body;
  console.log(sellerSignupData);
  sellerSignupData.currBalance = generateRandomBalance();
  const parsedPayload = sellerSignupSchema.safeParse(sellerSignupData);
  let isSellerPresent = null;
  try {
    isSellerPresent = await SellerDb.find({
      $or: [
        { username: parsedPayload.data.username },
        { email: parsedPayload.data.email },
      ],
    });
  } catch (err) {
    console.log(err);
  }
  if (parsedPayload.success) {
    if (isSellerPresent.length > 0) {
      res.status(403).json({ msg: "Seller exist in db" });
    } else {
      let hashedPassword;
      try {
        let unhashedSellerData = parsedPayload.data;
        try {
          hashedPassword = await bcrypt.hash(
            parsedPayload.data.password,
            saltrounds
          );
        } catch (err) {
          console.log(err);
          res.status(400).json({ msg: "Error signing up" });
        }
        const finalSellerData = {
          ...unhashedSellerData,
          password: hashedPassword,
        };
        await SellerDb.create(finalSellerData);
      } catch (err) {
        console.log(err);
        res.status(403).json({ msg: "Error signing in" });
        return;
      }
      const token = jwt.sign(parsedPayload.data.username, JWT_SECRET);
      res.status(200).json({ token: token });
      return;
    }
  }
});
router.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  const sellerSigninData = req.body;
  const parsedPayload = sellerSigninSchema.safeParse(sellerSigninData);
  if (!parsedPayload.success) {
    res.status(400).json({ msg: "Invalid Credentials" });
    return;
  }
  try {
    const seller = await SellerDb.findOne({
      $or: [{ username: username }, { email: username }],
    });

    if (!seller) {
      return res.status(401).json({ msg: "Invalid username or password" });
    }

    // Compare hashed password with provided password
    const passwordMatch = await bcrypt.compare(password, seller.password);
    if (!passwordMatch) {
      // Passwords don't match
      return res.status(401).json({ msg: "Invalid username or password" });
    }

    // Passwords match, generate JWT token
    const token = jwt.sign({ username: seller.username }, JWT_SECRET);
    return res.status(200).json({ token });
  } catch (err) {
    console.error("Error signing in:", err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});
router.post("/dairyProducts", sellerAuthMiddleware, async (req, res) => {
  try {
    const productDetail = req.body;
    const { _id, city, district, username } = req.seller;
    productDetail.city = city;
    productDetail.district = district;
    productDetail.sellername = username;
    productDetail.category = "dairy";
    // console.log(req.seller);
    // console.log(req.seller._id);
    productDetail.seller = _id;
    const parsedProductDetails = DairyProductSchema.safeParse(productDetail);
    if (!parsedProductDetails.success) {
      console.log(parsedProductDetails.error);
      return res.status(400).json({
        msg: "Invalid product details",
      });
    }
    try {
      console.log(parsedProductDetails.data);
      const isProductSaved = await DairyProductsDb.create(
        parsedProductDetails.data
      );
      if (isProductSaved) {
        res.status(201).json({ message: "Dairy product created successfully" });
        return;
      } else {
        res.status(400).json({ msg: "Could not add the product" });
        return;
      }
    } catch (err) {
      console.log(err);
      res.status(400).json({ msg: "Could not add the product" });
      return;
    }
  } catch (error) {
    console.error("Error creating dairy product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.post("/vegetable", sellerAuthMiddleware, async (req, res) => {
  try {
    const productDetail = req.body;
    const { _id, city, district, username } = req.seller;
    productDetail.city = city;
    productDetail.district = district;
    productDetail.sellername = username;
    productDetail.category = "vegetable";
    productDetail.seller = _id;
    const parsedProductDetails = VegetableSchema.safeParse(productDetail);
    if (!parsedProductDetails.success) {
      console.log(parsedProductDetails.error);
      return res.status(400).json({
        msg: "Invalid product details",
      });
    }
    try {
      console.log(parsedProductDetails.data);
      const isProductSaved = await VegetableDb.create(
        parsedProductDetails.data
      );
      console.log(isProductSaved);
      if (isProductSaved) {
        res
          .status(201)
          .json({ message: "Vegetable product created successfully" });
        return;
      } else {
        res.status(400).json({ msg: "Could not add the product" });
        return;
      }
    } catch (err) {
      console.log(err);
      res.status(400).json({ msg: "Could not add the product" });
      return;
    }
  } catch (error) {
    console.error("Error creating dairy product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.post("/fruit", sellerAuthMiddleware, async (req, res) => {
  try {
    const productDetail = req.body;
    const { _id, city, district, username } = req.seller;
    productDetail.city = city;
    productDetail.district = district;
    productDetail.sellername = username;
    productDetail.category = "fruit";
    productDetail.seller = _id;
    const parsedProductDetails = FruitsSchema.safeParse(productDetail);
    if (!parsedProductDetails.success) {
      console.log(parsedProductDetails.error);
      return res.status(400).json({
        msg: "Invalid product details",
      });
    }
    try {
      const isProductSaved = await FruitsDB.create(parsedProductDetails.data);
      console.log(isProductSaved);
      if (isProductSaved) {
        res.status(201).json({ message: "Fruit product created successfully" });
        return;
      } else {
        res.status(400).json({ msg: "Could not add the product" });
        return;
      }
    } catch (err) {
      console.log(err);
      res.status(400).json({ msg: "Could not add the product" });
      return;
    }
  } catch (error) {
    console.error("Error creating dairy product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
module.exports = router;
