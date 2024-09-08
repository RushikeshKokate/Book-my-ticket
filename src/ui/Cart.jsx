import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const Cart = ({ }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromCart = (movieId) => {
    dispatch(removeFromCart(movieId));
  };

  const handleNavigate = (title) => {
    navigate('/Movie', { state: { title: title } });
  };

 

  return (
    <div className='p-9'>
      <h2 className='font-bold text-xl text-white'>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className='text-gray-400 mt-2'>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {cartItems.map((movie) => (
            <div key={movie.id} className='border-2 border-gray-700 rounded-lg overflow-hidden bg-gray-800 shadow-lg'>
              <img
                src={movie.poster_url}
                alt={movie.title}
                className='h-64 w-full object-cover'
              />
              <div className='p-4'>
                <h3 className='text-white font-bold text-lg mb-2'>{movie.title}</h3>
                <p className='text-gray-400 text-sm'>{movie.description}</p>
                <p className='text-gray-400 text-sm mt-2'>Duration: {movie.duration}</p>
                <p className='text-gray-400 text-sm'>Genre: {movie.genre.join(', ')}</p>
                <div className=''>
                <button onClick={() => handleRemoveFromCart(movie.id)} className='p-1 mt-2 border rounded-md text-white font-bold'>
                  Remove from Cart
                </button>
                <button onClick={() => handleNavigate(movie.title)} className='bg-yellow-400 p-1 mt-2 border rounded-md text-white font-bold'>
                  Book Now
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
