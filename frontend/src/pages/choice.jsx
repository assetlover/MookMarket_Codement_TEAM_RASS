import React, { useState } from 'react';

function App() {
  const [role, setRole] = useState(null);

  const handleSelectRole = (selectedRole) => {
    setRole(selectedRole);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black text-white">
      <div className='text-white mb-32 text-2xl'>Lets Begin With Profile,</div>
      <div className="flex justify-center">
        <div className="border border-white p-4 flex items-center hover:bg-stone-300 rounded-sm ml-10">
          <button 
            className={`btn ${role === 'farmer' ? 'selected' : ''}`} 
            onClick={() => handleSelectRole('farmer')}
          >
            I Am A Farmer
          </button>
        </div>
        <div className="border border-white p-4 flex items-center hover:bg-stone-300 rounded-sm ml-10">
          <button 
            className={`btn ${role === 'customer' ? 'selected' : ''}`} 
            onClick={() => handleSelectRole('customer')}
          >
            I Am A Customer
          </button>
        </div>
        <div className="border border-white p-4 flex items-center hover:bg-stone-300 rounded-sm ml-10">
          <button 
            className={`btn ${role === 'transporter' ? 'selected' : ''}`} 
            onClick={() => handleSelectRole('transporter')}
          >
            I Want To Be A Transporter
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
