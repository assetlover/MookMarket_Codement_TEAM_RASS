import React from "react";

const Add_Product = () => {
  return (
    <div className="bg-white text-white min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-xl font-bold mb-4 text-black">Add Products</h2>
      <div className="w-96 bg-lime-500 py-3 px-3 rounded-lg">
        <div className="">
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="block mt-3 rounded-sm w-full border-none text-black"
          />
          <input
            type="text"
            placeholder="City"
            name="city"
            className="block mt-3 rounded-sm w-full border-none text-black"
          />
          <input
            type="text"
            placeholder="District"
            name="district"
            className="block mt-3 rounded-sm w-full border-none text-black"
          />
          <input
            type="text"
            placeholder="Address"
            name="address"
            className="block mt-3 rounded-sm w-full border-none text-black"
          />
          <div className="block">
            <label htmlFor="dairy" className="block mt-3">
              Dairy
            </label>
            <select id="dairy" name="dairy" className="block text-black ">
              <option value="cow_milk ">Cow Milk</option>
              <option value="buffalo_milk">Buffalo Milk</option>
            </select>
          </div>
          <div className="block">
            <label htmlFor="vegetables" className="block mt-3">
              Vegetables
            </label>
            <select
              id="vegetables"
              name="vegetables"
              className="block text-black"
            >
              <option value="tomato">Tomato</option>
              <option value="onion">Onion</option>
              <option value="potato">Potato</option>
              <option value="brinjal">Brinjal</option>
              <option value="cabbage">Cabbage</option>
              <option value="spinach">Spinach</option>
            </select>
          </div>
          <div className="block">
            <label htmlFor="fruits" className="block mt-3">
              Fruits
            </label>
            <select id="fruits" name="fruits" className="block text-black">
              <option value="apple">Apple</option>
              <option value="banana">Banana</option>
              <option value="pomogranate">Pomogranate</option>
              <option value="oranges">Oranges</option>
              <option value="mangoes">Mangoes</option>
              <option value="watermelon">Watermelon</option>
            </select>
          </div>
        </div>
        <button className="w-full bg-lime-100 hover:bg-lime-300 text-black font-bold py-2 px-4 rounded-md mt-3">
          Add Product
        </button>
      </div>
    </div>
  );
};
