import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SellerDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('orders');

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-semibold mb-4 text-center">Seller Dashboard</h1>
      <div className="flex justify-center mb-4">
        <button
          className={`px-4 py-2 mr-4 ${selectedTab === 'orders' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => handleTabChange('orders')}
        >
          Orders
        </button>
        <button
          className={`px-4 py-2 mr-4 ${selectedTab === 'products' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => handleTabChange('products')}
        >
          Products
        </button>
      </div>
      <div className="bg-stone-200 p-8 rounded-lg shadow-md">
        {selectedTab === 'orders' && <OrdersTab />}
        {selectedTab === 'products' && <ProductsTab />}
      </div>
    </div>
  );
};

const OrdersTab = () => {
  const orders = [
    { id: 1, customer: 'John Doe', total: 50.25, status: 'Delivered' },
    { id: 2, customer: 'Jane Smith', total: 30.75, status: 'Pending' },
    { id: 3, customer: 'Bob Johnson', total: 80.00, status: 'In Progress' },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Orders</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {orders.map(order => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

const OrderCard = ({ order }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">Order ID: {order.id}</h3>
      <p>Customer: {order.customer}</p>
      <p>Total: ₹{order.total.toFixed(2)}</p> {/* Display price in rupees */}
      <p>Status: {order.status}</p>
    </div>
  );
};

OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    customer: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

const ProductsTab = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 20.99, quantity: 50 },
    { id: 2, name: 'Product 2', price: 15.50, quantity: 30 },
    { id: 3, name: 'Product 3', price: 10.75, quantity: 25 },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p>Price: ₹{product.price.toFixed(2)}</p> {/* Display price in rupees */}
      <p>Quantity: {product.quantity}</p>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default SellerDashboard;
