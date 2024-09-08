import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [paymentMethod, setPaymentMethod] = useState('card');  
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [upiId, setUpiId] = useState('');

  const time = location.state?.time || 'Not specified';
  const datee = location.state?.datee || 'Not specified';
  const title = location.state?.title || 'Untitled';
  const final = location.state?.final || 0;
  const theater = location.state?.theater

  console.log(theater);
  
 
  const selectedSeats = location.state?.selectedSeats || [];

  console.log('payment' , time);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (paymentMethod === 'card') {
     
      alert('Card payment details submitted.');
      navigate("/Sucess", { state: { title, datee, time, final, selectedSeats , theater} });
    } else if (paymentMethod === 'upi') {
       
      alert('UPI payment details submitted.');
      navigate("/Sucess", { state: { title, datee, time, final, selectedSeats, theater} });
    }
  };

  return (
    <div className="text-white p-6 min-h-screen bg-gray-800">
      <h1 className="text-3xl font-bold mb-4">Payment Details</h1>
      <span className='block text-xl font-semibold mb-2 text-yellow-400'>{theater}</span>
      <h2 className="text-xl font-bold mb-4">Final Amount: {final} Rs</h2>
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-lg mb-2">Payment Method</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full p-2 rounded-md border border-gray-600 bg-gray-800 text-white"
            >
              <option value="card">Credit/Debit Card</option>
              <option value="upi">UPI</option>
            </select>
          </div>

          {paymentMethod === 'card' && (
            <>
              <div>
                <label className="block text-lg mb-2" htmlFor="nameOnCard">Name on Card</label>
                <input
                  type="text"
                  id="nameOnCard"
                  value={nameOnCard}
                  onChange={(e) => setNameOnCard(e.target.value)}
                  className="w-full p-2 rounded-md border border-gray-600 bg-gray-800 text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-lg mb-2" htmlFor="cardNumber">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="w-full p-2 rounded-md border border-gray-600 bg-gray-800 text-white"
                  required
                  pattern="\d{16}"  
                  title="Enter a valid 16-digit card number"
                />
              </div>

              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-lg mb-2" htmlFor="expiryDate">Expiry Date (MM/YY)</label>
                  <input
                    type="text"
                    id="expiryDate"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    className="w-full p-2 rounded-md border border-gray-600 bg-gray-800 text-white"
                    required
                    pattern="\d{2}/\d{2}" 
                    title="Enter a valid expiry date in MM/YY format"
                  />
                </div>

                <div className="w-1/2">
                  <label className="block text-lg mb-2" htmlFor="cvv">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    className="w-full p-2 rounded-md border border-gray-600 bg-gray-800 text-white"
                    required
                    pattern="\d{3,4}"  
                    title="Enter a valid CVV"
                  />
                </div>
              </div>

              <div>
                <label className="block text-lg mb-2" htmlFor="billingAddress">Billing Address</label>
                <textarea
                  id="billingAddress"
                  value={billingAddress}
                  onChange={(e) => setBillingAddress(e.target.value)}
                  className="w-full p-2 rounded-md border border-gray-600 bg-gray-800 text-white"
                  rows="4"
                  required
                />
              </div>
            </>
          )}

          {paymentMethod === 'upi' && (
            <div>
              <label className="block text-lg mb-2" htmlFor="upiId">UPI ID</label>
              <input
                type="text"
                id="upiId"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                className="w-full p-2 rounded-md border border-gray-600 bg-gray-800 text-white"
                required
                pattern="[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,6}"  
                title="Enter a valid UPI ID"
              />
            </div>
          )}

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg transition duration-300 mt-4"
          >
            Submit Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
