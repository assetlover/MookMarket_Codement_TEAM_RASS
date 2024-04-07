const mongoose = require("mongoose");
const z = require("zod");

const transportSignupSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  addressLine1: z.string(),
  password: z.string().min(8),
  city: z.string(),
  district: z.string(),
  currBalance: z.number(), // Assuming currBalance should be a number
});
const transportSigninSchema = z.object({
    username: z.string().min(3),
    password: z.string().min(8),
  });

module.exports = { transportSignupSchema , transportSigninSchema };
