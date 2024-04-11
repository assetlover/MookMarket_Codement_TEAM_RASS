const express = require("express");
const router = express.Router();
const Cart = require("./cartSchema");
const { CartschemaDB } = require("../db/db");
const {Product} = require("../productsRoutes/dairyProductSchema");
const mongoose = require("mongoose")

// Add item to cart
router.post("/addcart", async (req, res) => {
    try {
        const { productId, quantity, price } = req.body;
        
        // console.log(productId, quantity, price);
        // Check if the product exists
        const product = await Product.findOne({_id : productId});
        console.log(product)
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        
        const cartItem = new Cart({
            productId: product._id,
            quantity,
            price
        });
        const validatedCartItem = CartschemaDB.validate(cartItem);
        await validatedCartItem.save();
        // console.log(validatedCartItem);
        res.status(201).json(validatedCartItem);
    } catch (err) {
        res.status(400).json({ message: "Failed to add item to cart", error: err.message });
    }
});

// Get all items in cart
router.get("/getcart", async (req, res) => {
    try {
        const cartItems = await Cart.find().populate('productId');
        res.status(200).json(cartItems);
    } catch (err) {
        res.status(400).json({ message: "Failed to get items from cart", error: err.message });
    }
});

// Remove item from cart
router.delete("/removecart/:id", async (req, res) => {
    try {
        const itemId = req.params.id;
        await Cart.findByIdAndDelete(itemId);
        res.status(204).end();
    } catch (err) {
        res.status(400).json({ message: "Failed to remove item from cart", error: err.message });
    }
});

// Update item quantity in cart
router.put("/upcart/:id", async (req, res) => {
    try {
        const itemId = req.params.id;
        const { quantity } = req.body;
        await Cart.findByIdAndUpdate(itemId, { quantity });
        res.status(204).end();
    } catch (err) {
        res.status(400).json({ message: "Failed to update item quantity in cart", error: err.message });
    }
});

module.exports = router;
