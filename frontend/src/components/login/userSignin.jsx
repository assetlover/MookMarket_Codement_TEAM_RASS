import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserSignIn = () => {
  const navigate = useNavigate();
  const sendToSignUp = () => {
    navigate("/user/signup");
  };
  const [formData, setFormData] = useState({
    username: "",
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
        const response = await fetch("http://localhost:3000/user/signin", {
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
        navigate("/user/getproducts");
      } catch (err) {
        console.error("Error:", err);
      }
    } else {
      console.log("Form has errors:", errors);
    }
  };

  return (
    <div className="bg-lime-200 min-h-screen flex justify-center items-center">
      <div className="border-inherit bg-lime-300  mt-10 mb-10">
        <div className="container mx-auto px-4 py-8  shadow-md rounded-xl min-h-96">
          <h2 className="text-xl font-bold mb-4">Customer Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col h-full justify-between items-around">
              <div className="py-2">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="rounded-sm w-full"
                />
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
                Sign In
              </button>
              <div className="flex w-full justify-center pt-3">
                <p>Don't have an account?</p>
                <a
                  onClick={sendToSignUp}
                  className="text-lg hover:underline pl-2"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserSignIn;
