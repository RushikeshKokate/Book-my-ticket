import React from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
  const location = useLocation();
  const { title = 'Event Title', datee = 'Date', time = 'Time', final = 0, selectedSeats = [], theater  } = location.state || {};

  return (
    <div className="text-white p-6 min-h-screen bg-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-green-800">Booking Success</h1>
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Booking Details</h2>
        <p className="text-lg mb-2"><strong>Theater:</strong> {theater}</p>
        <p className="text-lg mb-2"><strong>Event Title:</strong> {title}</p>
        <p className="text-lg mb-2"><strong>Date:</strong> {datee}</p>
        <p className="text-lg mb-2"><strong>Time:</strong> {time}</p>
        <p className="text-lg mb-2"><strong>Final Amount:</strong> {final} Rs</p>
        <p className="text-lg mb-2">
          <strong>Seats:</strong> {selectedSeats.length > 0 ? selectedSeats.join(', ') : 'No seats selected'}
        </p>
        <p className="text-lg font-bold mt-4 text-green-700">Thank you for booking with us!</p>
      </div>
    </div>
  );
};

export default Success;
