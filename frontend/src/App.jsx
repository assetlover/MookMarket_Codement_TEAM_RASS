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
import UserFront from "./components/Main/userFront";
import UserAccount from "./components/login/userSignup";
import UserSignIn from "./components/login/userSignin";
import ChoiceOption from "./pages/choice";
import SellerDashboard from "./pages/sellers_dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Front />}></Route>
        <Route path="/choice" element={<ChoiceOption />}></Route>

        <Route path="/user" element={<UserFront />}></Route>
        <Route path="/user/signup" element={<UserAccount />}></Route>
        <Route path="/user/signin" element={<UserSignIn />}></Route>

        <Route path="/seller/signup" element={<SellerAccount />}></Route>
        <Route path="/seller/signin" element={<SellerSignIn />}></Route>
        <Route path="/seller" element={<SellerDashboard />}></Route>

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
