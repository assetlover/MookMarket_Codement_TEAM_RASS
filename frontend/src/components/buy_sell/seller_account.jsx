import React from 'react';

const SellerAccount = () => {
  return (
    <div className='bg-lime-200 min-h-screen flex'>
      <div className='border-inherit bg-lime-300 ml-72 mt-10 mb-10'>
        <div className="container mx-auto px-4 py-8 ">
          <h2 className="text-xl font-bold mb-4">Seller Account</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className='block'>Name</label>
              <input type="text" id="name" placeholder='Name' name='name' className='block rounded-sm w-full'/>
            </div>
            <div>
              <label htmlFor="city" className='block'>City</label>
              <input type='text' id="city" placeholder='City' name='city' className='block rounded-sm w-full'/>
            </div>
            <div>
              <label htmlFor="district" className='block'>District</label>
              <input type='text' id="district" placeholder='District' name='district' className='block rounded-sm w-full'/>
            </div>

            <div>
              <label htmlFor="email" className='block'>Email</label>
              <input type='text' id="email" placeholder='Email' name='mail' className='block rounded-sm w-full'/>
            </div>

            <div>
              <label htmlFor="district" className='block'>District</label>
              <input type='text' id="district" placeholder='District' name='district' className='block rounded-sm w-full'/>
            </div>

            <div>
              <label htmlFor="price" className='block'>Price of Product(per Kg/Liter)</label>
              <input type='number' id="price" placeholder='Price' name='price' className='block rounded-sm w-full'/>
            </div>


            
            <div>
              <label htmlFor="dairy" className='block'>Dairy</label>
              <select id="dairy" name="dairy" className='block'>
                <option value="cow_milk">Cow Milk</option>
                <option value="buffalo_milk">Buffalo Milk</option>
              </select>
            </div>
            <div>
              <label htmlFor="vegetables" className='block'>Vegetables</label>
              <select id="vegetables" name="vegetables" className='block'>
                <option value="tomato">Tomato</option>
                <option value="onion">Onion</option>
                <option value="potato">Potato</option>
                <option value="brinjal">Brinjal</option>
                <option value="cabbage">Cabbage</option>
                <option value="spinach">Spinach</option>
              </select>
            </div>
            <div>
              <label htmlFor="fruits" className='block'>Fruits</label>
              <select id="fruits" name="fruits" className='block'>
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
                <option value="pomogranate">Pomogranate</option>
                <option value="oranges">Oranges</option>
                <option value="mangoes">Mangoes</option>
                <option value="watermelon">Watermelon</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerAccount;
