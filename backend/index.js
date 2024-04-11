// initialized backend and frontend
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const userRouter = require("./userRoutes/user");
const sellerRouter = require("./sellerRoutes/seller");
const transportRouter = require("./transportRoutes/transport");
const cartRouter = require("./Cart/cart")

app.use(express.json());

app.use("/user", userRouter);
app.use("/seller", sellerRouter);
app.use('/transporter' , transportRouter)
app.use('/cart' , cartRouter)

app.listen(3000, () => {
  console.log("on port 3000");
});
