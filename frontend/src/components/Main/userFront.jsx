import React, { useEffect, useState } from "react";
import ProductCategory from "./scroll";
import Footer from "./footer";
import SearchBarandFilter from "../filter_searchbar";
import { useNavigate } from "react-router-dom";
import UserHeader from "./userHeader";
function UserFront() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/user/signup");
      return; // Exit early if token is not available
    }

    fetch("http://localhost:3000/user/getproducts", {
      headers: {
        Authorization: token, // Include token in the Authorization header
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => SetProduct(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const [productType, SetProductType] = useState("all");
  const [products, SetProduct] = useState([]);
  return (
    <div>
      <UserHeader />
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
