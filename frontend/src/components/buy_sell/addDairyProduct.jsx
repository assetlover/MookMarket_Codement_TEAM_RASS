import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const AddDairyProduct = () => {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const navigate = useNavigate();
  //   useEffect(() => {
  //     try {
  //       const token = localStorage.getItem("token");
  //       if (!token) {
  //         console.error("Token not found in localStorage.");
  //         navigate("/seller/signin");
  //       }
  //     } catch (err) {
  //       console.error("Token not found in localStorage.");
  //       navigate("/seller/signin");
  //     }
  //   }, []);
  const [formData, setFormData] = useState({
    itemName: "",
    itemDescription: "",
    currentQuantity: "",
    animalOrigin: "",
    price: "",
    category: "dairy", // Set the category to "dairy"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    // Check if the token is available
    if (!token) {
      console.error("Token not found in localStorage.");
      navigate("/seller/signin");
    } else {
      // Define the request body
      const requestBody = {
        itemName: "Fresh Ghee",
        itemDescription: "Organic Ghee",
        currentQuantity: 100,
        price: 50,
        animalOrigin: "Buffalo",
      };

      // Send the POST request
      fetch("http://localhost:3000/seller/dairyProducts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token, // Include the token in the Authorization header
        },
        body: JSON.stringify(requestBody),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          setIsOrderPlaced(true);
          delay(1000).then(() => {
            // This code will execute after one second
            setIsOrderPlaced(false);
            navigate("/seller/dashboard");
          });
          return response.json();
        })
        .then((data) => {
          console.log("Success:", data);
          // Handle success response
        })
        .catch((error) => {
          console.error("Error:", error);
          // Handle error
        });
    }
    console.log("Form data:", formData);
    // Handle form submission here
  };

  return (
    <div className="bg-lime-200 text-black min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-xl font-bold mb-4">Add Dairy Products</h2>
      <div className="w-96 bg-lime-500 py-3 px-3 rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="itemName" className="block mt-3">
              Item Name
            </label>
            <input
              type="text"
              id="itemName"
              placeholder="Item Name"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
              className="block mt-1 rounded-sm w-full border-none text-black"
            />
            <label htmlFor="itemDescription" className="block mt-3">
              Item Description
            </label>
            <input
              type="text"
              id="itemDescription"
              placeholder="Item Description"
              name="itemDescription"
              value={formData.itemDescription}
              onChange={handleChange}
              className="block mt-1 rounded-sm w-full border-none text-black"
            />
            <label htmlFor="currentQuantity" className="block mt-3">
              Current Quantity
            </label>
            <input
              type="number"
              id="currentQuantity"
              placeholder="Current Quantity"
              name="currentQuantity"
              value={formData.currentQuantity}
              onChange={handleChange}
              className="block mt-1 rounded-sm w-full border-none text-black"
            />
            <label htmlFor="animalOrigin" className="block mt-3">
              Animal Origin
            </label>
            <select
              id="animalOrigin"
              name="animalOrigin"
              value={formData.animalOrigin}
              onChange={handleChange}
              className="block mt-1 rounded-sm w-full border-none text-black"
            >
              <option value="">Select Animal Origin</option>
              <option value="Cow">Cow</option>
              <option value="Buffalo">Buffalo</option>
              <option value="Goat">Goat</option>
            </select>
            <label htmlFor="price" className="block mt-3">
              Price
            </label>
            <input
              type="number"
              id="price"
              placeholder="Price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="block mt-1 rounded-sm w-full border-none text-black"
              min="0"
            />
          </div>
          {!isOrderPlaced && (
            <button
              type="submit"
              className="w-full bg-lime-100 hover:bg-lime-300 text-black font-bold py-2 px-4 rounded-md mt-3"
            >
              Add Product
            </button>
          )}
        </form>
      </div>
      {isOrderPlaced && (
        <p className="text-sm text-zinc-700 font-semibold">
          Product Placed Successfully
        </p>
      )}
    </div>
  );
};

export default AddDairyProduct;
