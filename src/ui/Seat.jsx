import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Seat = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedSeats, setSelectedSeats] = useState([]);

 
  const seatRows = 7;
  const seatsPerRow = 7;
  const seatPrice = 200;
  const time = location.state?.selectedTime || 'Not specified';
  const datee = location.state?.selectedDate || 'Not specified';
  const title = location.state?.title || 'Untitled';
  const final = selectedSeats.length * seatPrice;
  const theater = location.state?.theater

  const handleSeatClick = (row, seat) => {
    const seatId = `${row}-${seat}`;
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seatId)) {
        return prevSelectedSeats.filter((id) => id !== seatId);
      } else {
        return [...prevSelectedSeats, seatId];
      }
    });
  };

  const isSeatSelected = (row, seat) => {
    return selectedSeats.includes(`${row}-${seat}`);
  };

  const handleBooking = () => {
    if (selectedSeats.length === 0) {
      alert('Please select at least one seat.');
      return;
    }
    navigate("/Payment", {
      state: {
        title: title,
        datee: datee,
        time: time,
        final: final,
        selectedSeats: selectedSeats,
        theater:theater
      }
    });
  };

  return (
    <div className="text-white p-4 min-h-screen bg-gray-800">
      <h1 className="text-2xl md:text-3xl font-bold pl-4 md:pl-10 pt-6 md:pt-10 pb-2">{title}</h1>
      <span className='block text-3xl font-semibold mb-2 text-yellow-400'>{theater}</span>
      <p className="text-lg md:text-xl pl-4 md:pl-10 mb-2">Time: {time}</p>
      <p className="text-lg md:text-xl pl-4 md:pl-10 mb-6">Date: {datee}</p>
      <div className="flex justify-center">
        <div className="bg-gray-700 p-4 rounded-lg shadow-lg max-w-full md:max-w-4xl w-full">
          <div className="text-center mb-4">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">Select Your Seats</h2>
            <p className="text-base md:text-lg">Click on the seats to select or deselect them.</p>
          </div>
          {Array.from({ length: seatRows }).map((_, rowIndex) => (
            <div key={rowIndex} className="flex flex-wrap justify-center mb-2">
              {Array.from({ length: seatsPerRow }).map((_, seatIndex) => (
                <div
                  key={seatIndex}
                  className={`w-8 h-8 md:w-12 md:h-12 m-1 flex items-center justify-center cursor-pointer rounded-lg text-xs md:text-sm font-medium ${
                    isSeatSelected(rowIndex, seatIndex)
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-400 text-gray-800'
                  }`}
                  onClick={() => handleSeatClick(rowIndex, seatIndex)}
                >
                  {rowIndex + 1}-{seatIndex + 1}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
        <button
          onClick={handleBooking}
          className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg transition duration-300 w-full md:w-auto"
        >
          Book Seats
        </button>
        <div className="text-center mt-4 md:mt-0">
          <p className="text-base md:text-lg">Price per seat: <span className="font-bold">{seatPrice} Rs</span></p>
          <p className="text-base md:text-lg">Total Price: <span className="font-bold">{selectedSeats.length * seatPrice} Rs</span></p>
        </div>
      </div>
    </div>
  );
};

export default Seat;
