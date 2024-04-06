import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();

  const handleNavigate = (category) => {
    navigate(`${category}`);
  };

  return (
    <div className="bg-lime-200 text-black min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-xl font-bold mb-4">Select Product Category</h2>
      <div className="w-96 bg-lime-500 py-3 px-3 rounded-lg h-64 shadow-lg">
        <div className=" h-full flex flex-col justify-around ">
          <button
            onClick={() => handleNavigate("dairyProducts")}
            className="block bg-emerald-300 mt-3 text-black border rounded-md p-1 text-lg hover:bg-emerald-500 hover:text-white"
          >
            Dairy
          </button>
          <button
            onClick={() => handleNavigate("vegetable")}
            className="block bg-emerald-300 mt-3 text-black border rounded-md p-1 text-lg hover:bg-emerald-500 hover:text-white"
          >
            Vegetable
          </button>
          <button
            onClick={() => handleNavigate("fruits")}
            className="block bg-emerald-300 mt-3 text-black border rounded-md p-1 text-lg hover:bg-emerald-500 hover:text-white"
          >
            Fruit
          </button>
        </div>
      </div>
      <p className="text-sm">You will be directed to specific category</p>
    </div>
  );
};

export default AddProduct;
