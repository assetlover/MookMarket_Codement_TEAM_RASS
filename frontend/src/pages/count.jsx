import React, { useState } from 'react';

const Count = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', quantity: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBtmIxDeWXMWdWaJpc1y3TKyD0ZyNJ6IV0FGVBUbIIlw&s' },
    { id: 2, name: 'Product 2', quantity: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkMebsKBqyoptvy_kYLR8l9V3FU5Hg2CWwcgBaWhtxECIR63vlFFW6zTqvToHWED-cLEc&usqp=CAU' },
    { id: 3, name: 'Product 2', quantity: 1, image: 'https://st2.depositphotos.com/1105977/8695/i/450/depositphotos_86959796-stock-photo-fresh-honey-with-dipper.jpg' }
    // Add more products as needed
  ]);

  const incrementQuantity = (index) => {
    const newProducts = [...products];
    newProducts[index].quantity++;
    setProducts(newProducts);
  };

  const decrementQuantity = (index) => {
    const newProducts = [...products];
    if (newProducts[index].quantity > 1) {
      newProducts[index].quantity--;
      setProducts(newProducts);
    }
  };

  const addToCart = (index) => {
    console.log('Added to cart:', products[index]);
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-semibold mb-4 text-center">Cart</h1>
      <table className="w-full bg-white rounded-lg shadow-lg mt-10">
        <thead>
          <tr>
            <th className="px-4 py-2">Product</th>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">
                <img src={product.image} alt={product.name} className="w-20 h-auto" />
              </td>
              <td className="border px-4 py-2">
                <button
                  className="bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8  justify-center items-center mr-2"
                  onClick={() => decrementQuantity(index)}
                >
                  -
                </button>
                <span className="text-xl">{product.quantity}</span>
                <button
                  className="bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 justify-center items-center ml-2"
                  onClick={() => incrementQuantity(index)}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Count;

