import "./App.css";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import SellerAccount from "./components/buy_sell/seller_account";
import SellerSignIn from "./components/buy_sell/seller_signin";
import Front from "../src/components/Main/front";
import AddProduct from "./components/buy_sell/add_products";
import AddDairyProduct from "./components/buy_sell/addDairyProduct";
import AddVegetableProduct from "./components/buy_sell/addVegetables";
import AddFruits from "./components/buy_sell/addFruits";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Front />}></Route>
        <Route path="/seller/signup" element={<SellerAccount />}></Route>
        <Route path="/seller/signin" element={<SellerSignIn />}></Route>
        <Route path="/seller/addProducts" element={<AddProduct />}></Route>
        <Route
          path="/seller/addProducts/dairyProducts"
          element={<AddDairyProduct />}
        ></Route>
        <Route
          path="/seller/addProducts/vegetable"
          element={<AddVegetableProduct />}
        ></Route>
        <Route
          path="/seller/addProducts/fruits"
          element={<AddFruits />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
