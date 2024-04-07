import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css';

// Function to generate random pickup and destination locations
function generateRandomLocation() {
  const locations = [
    { name: 'Warehouse A', lat: 51.505, lon: -0.09 },
    { name: 'Warehouse B', lat: 51.515, lon: -0.1 },
    { name: 'Warehouse C', lat: 51.525, lon: -0.11 },
    { name: 'Warehouse D', lat: 51.535, lon: -0.12 },
    { name: 'Warehouse E', lat: 51.545, lon: -0.13 },
  ];
  const randomIndex = Math.floor(Math.random() * locations.length);
  return locations[randomIndex];
}

function App() {
  // State to hold orders data
  const [orders, setOrders] = useState([]);

  // Fetch random orders data on component mount
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const randomOrders = Array.from({ length: 10 }, (_, index) => ({
          id: index + 1,
          title: `Order ${index + 1}`,
          pickup: generateRandomLocation(),
          destination: generateRandomLocation()
        }));
        setOrders(randomOrders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Transporter Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Order History */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-3">Order History</h2>
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="py-2">Order ID</th>
                <th className="py-2">Title</th>
                <th className="py-2">Pickup</th>
                <th className="py-2">Destination</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id} className="border-b">
                  <td className="py-2">{order.id}</td>
                  <td className="py-2">{order.title}</td>
                  <td className="py-2">{order.pickup.name}</td>
                  <td className="py-2">{order.destination.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Maps */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          {/* Pickup Map */}
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-3">Pickup Locations</h2>
            <MapContainer center={[51.505, -0.09]} zoom={5} style={{ height: '400px' }}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {orders.map(order => (
                <Marker key={order.id} position={[order.pickup.lat, order.pickup.lon]}>
                  <Popup>{order.pickup.name}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
          {/* Destination Map */}
          <div>
            <h2 className="text-xl font-bold mb-3">Destination Locations</h2>
            <MapContainer center={[51.505, -0.09]} zoom={5} style={{ height: '400px' }}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {orders.map(order => (
                <Marker key={order.id} position={[order.destination.lat, order.destination.lon]}>
                  <Popup>{order.destination.name}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
