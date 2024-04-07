import React, { useEffect, useState } from "react";
import Header from "./header";
import ProductCategory from "./scroll";
import SliderComp from "./slider";
import Footer from "./footer";
import SearchBarandFilter from "../filter_searchbar";
import { useNavigate } from "react-router-dom";
function UserFront() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem(token)) {
      navigate("/user/signup");
    }
    fetch("http://localhost:3000/user/getproducts")
      .then((response) => response.json())
      .then((data) => SetProduct(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
  const [productType, SetProductType] = useState("all");
  const [products, SetProduct] = useState([]);
  return (
    <div>
      <Header />
      <SearchBarandFilter SetProductType={SetProductType}></SearchBarandFilter>
      <ProductCategory
        currentProductType={productType}
        products={products}
      ></ProductCategory>
      <Footer />
    </div>
  );
}
export default UserFront;
