const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltrounds = 11;
const mongoose = require("mongoose")
const {TransportDB} = require("../db/db")
const router = express.Router();
const JWT_SECRET = require("../config")
const { transportSignupSchema , transportSigninSchema } = require("./transportSchema");
function generateRandomBalance() {
    return (Math.floor(Math.random() * (1000000 - 1000 + 1)) + 1000).toFixed(2);
  }
router.post("/signup", async (req, res) => {
    const transporterSignupData = req.body;
    console.log(transporterSignupData);
    transporterSignupData.currBalance = parseInt(generateRandomBalance());
    console.log(typeof(transporterSignupData.currBalance))
    const parsedPayload = transportSignupSchema.safeParse(transporterSignupData);
    console.log(transporterSignupData)
    console.log(parsedPayload.success);

    let isTransporterPresent= null;
    try {
        isTransporterPresent = await TransportDB.find({
            $or: [
                { username: parsedPayload.data.username },
                { email: parsedPayload.data.email },
            ],
        });
    } catch (err) {
        console.log(err);
    }
    if (parsedPayload.success) {
        if (isTransporterPresent.length>0 ) {
            res.status(403).json({ msg: "Transporter exists in db" });
        } else {
            let hashedPassword;
            try {
                let unhashedTransporterData = parsedPayload.data;
                try {
                    hashedPassword = await bcrypt.hash(
                        parsedPayload.data.password,
                        saltrounds
                    );
                } catch (err) {
                    console.log(err);
                    res.status(400).json({ msg: "Error signing up" });
                }
                const finalTransporterData = {
                    ...unhashedTransporterData,
                    password: hashedPassword,
                };
                await TransportDB.create(finalTransporterData);
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
    const transportSigninData = req.body;
    const parsedPayload = transportSigninSchema.safeParse(transportSigninData);
    if (!parsedPayload.success) {
      res.status(400).json({ msg: "Invalid Credentials" });
      return;
    }
    try {
      const transport = await TransportDB.findOne({
        $or: [{ username: username }, { email: username }],
      });
  
      if (!transport) {
        return res.status(401).json({ msg: "Invalid username or password" });
      }
  
      // Compare hashed password with provided password
      const passwordMatch = await bcrypt.compare(password, transport.password);
      if (!passwordMatch) {
        // Passwords don't match
        return res.status(401).json({ msg: "Invalid username or password" });
      }
  
      // Passwords match, generate JWT token
      const token = jwt.sign({ username: transport.username }, JWT_SECRET);
      return res.status(200).json({ token });
    } catch (err) {
      console.error("Error signing in:", err);
      return res.status(500).json({ msg: "Internal Server Error" });
    }
  });

module.exports = router;
