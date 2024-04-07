import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const UserAccount = () => {
  const navigate = useNavigate();
  const sendToSignIn = async () => {
    navigate("/seller/signin");
  };
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    city: "",
    district: "",
    addressLine1: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation rules...

    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch("http://localhost:3000/user/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        console.log(response);
        const finalRes = await response.json();
        const token = finalRes.token;
        localStorage.setItem("token", token);
      } catch (err) {
        console.error("Error:", err);
      }
    } else {
      console.log("Form has errors:", errors);
    }
  };

  return (
    <div className="bg-lime-200 min-h-screen flex justify-center items-center">
      <div className="border-inherit bg-lime-300 ml-72 mt-10 mb-10">
        <div className="container mx-auto px-4 py-8  shadow-md rounded-xl min-h-96">
          <h2 className="text-xl font-bold mb-4">Seller Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col h-full justify-between items-around">
              <div className="py-2">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="rounded-sm w-full"
                />
                {errors.name && <p className="text-red-500">{errors.name}</p>}
              </div>
              <div className="py-2">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  placeholder="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="rounded-sm w-full"
                />
              </div>
              <div className="py-2">
                <label htmlFor="district">District</label>
                <input
                  type="text"
                  id="district"
                  placeholder="District"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  className="rounded-sm w-full"
                />
              </div>
              <div className="py-2">
                <label htmlFor="addressLine1">Address Line 1</label>
                <input
                  type="text"
                  id="addressLine1"
                  placeholder="Address Line 1"
                  name="addressLine1"
                  value={formData.addressLine1}
                  onChange={handleChange}
                  className="rounded-sm w-full"
                />
              </div>
              <div className="py-2">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="rounded-sm w-full"
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
              <div className="py-2">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="rounded-sm w-full"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-md"
              >
                Submit
              </button>
              <div className="flex w-full justify-center pt-3">
                <p>Already a user ?</p>
                <a
                  onClick={sendToSignIn}
                  className="text-lg hover:underline px-2"
                >
                  Sign in{" "}
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
