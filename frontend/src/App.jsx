import "./App.css";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import SellerAccount from "./components/buy_sell/seller_account";
import SellerSignIn from "./components/buy_sell/seller_signin";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/seller/signup" element={<SellerAccount />}></Route>
        <Route path="/seller/signin" element={<SellerSignIn />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;