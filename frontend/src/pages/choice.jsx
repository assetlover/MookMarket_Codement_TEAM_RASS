import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function ChoiceOption() {
  const navigate = useNavigate();
  const handleSelectRole = (selectedRole) => {
    if (selectedRole == "farmer") {
      navigate("/seller/signup");
    }
    if (selectedRole == "customer") {
      navigate("/user/signup");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black text-white">
      <div className="text-white mb-32 text-2xl">Lets Begin With Profile,</div>
      <div className="flex justify-center">
        <div
          className="border border-white p-4 flex items-center hover:bg-stone-300 rounded-sm ml-10"
          onClick={() => handleSelectRole("farmer")}
        >
          <button>I Am A Farmer</button>
        </div>
        <div
          className="border border-white p-4 flex items-center hover:bg-stone-300 rounded-sm ml-10"
          onClick={() => handleSelectRole("customer")}
        >
          <button>I Am A Customer</button>
        </div>
        <div
          className="border border-white p-4 flex items-center hover:bg-stone-300 rounded-sm ml-10"
          onClick={() => handleSelectRole("transporter")}
        >
          <button onClick={() => handleSelectRole("transporter")}>
            I Want To Be A Transporter
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChoiceOption;
