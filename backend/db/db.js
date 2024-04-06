const mongoose = require("mongoose");
require("dotenv").config();
const DatabaseUrl = process.env.DATABASE_URL;
console.log(DatabaseUrl);
mongoose.connect(DatabaseUrl).then(() => {
  console.log("Db connected");
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // Assuming you want to validate email format
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  addressLine1: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  currBalance: {
    type: Number,
    required: true,
  },
});
const sellerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // Assuming you want to validate email format
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  addressLine1: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  currBalance: {
    type: Number,
    required: true,
  },
});

const dairyProductSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  itemDescription: {
    type: String,
    required: true,
  },

  currentQuantity: {
    type: Number,
    required: true,
  },
  animalOrigin: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  sellername: {
    type: String,
    required: true,
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Seller",
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});
const vegetableSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  itemDescription: {
    type: String,
    required: true,
  },

  currentQuantity: {
    type: Number,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  sellername: {
    type: String,
    required: true,
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Seller",
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});
const FruitSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  itemDescription: {
    type: String,
    required: true,
  },

  currentQuantity: {
    type: Number,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  sellername: {
    type: String,
    required: true,
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Seller",
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  season: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
    required: true,
  },
});
const UserDB = mongoose.model("User", userSchema);
const SellerDb = mongoose.model("Seller", sellerSchema);
const DairyProductsDb = mongoose.model("DairyProduct", dairyProductSchema);
const VegetableDb = mongoose.model("Vegetable", vegetableSchema);
const FruitsDB = mongoose.model("Fruits", FruitSchema);
module.exports = { UserDB, SellerDb, DairyProductsDb, VegetableDb, FruitsDB };
