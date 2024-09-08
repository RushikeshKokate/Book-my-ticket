import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import { movies } from '../data.json';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';

const Home = ({ search }) => {
  const navigate = useNavigate();
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();

  const handleClick = (title) => {
    navigate("/Movie", { state: { title: title } });
  };

  const handleAddToCart = (movie) => {
    dispatch(addToCart(movie));
    setShowPopup(true);   
    setTimeout(() => setShowPopup(false), 2000);  
  };

  useEffect(() => {
    if (search) {
      const newMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredMovies(newMovies);
    } else {
      setFilteredMovies(movies);
    }
  }, [search]);

  return (
    <div className='mt-2 z-1'>
   
      {showPopup && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50">
          Item added to cart successfully!
        </div>
      )}
      
      <div className='m-3 z-1'>
        <Carousel autoplay className='z-1'>
         
          <div className='w-full z-0'>
            <img className='w-full z-1' src={card1} alt="Slide 1" />
          </div>
          <div className='w-full z-1'>
            <img className='w-full z-1' src={card2} alt="Slide 2" />
          </div>
          <div className='w-full z-1'>
            <img className='w-full z-1' src={card3} alt="Slide 3" />
          </div>
        </Carousel>
      </div>

      <div className='p-9'>
        <div>
          <span className='font-bold mt-10 text-xl text-white'>
            Recommended Movies
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {filteredMovies.map((movie) => (
            <div
              key={movie.id}
              className='border-2 border-gray-700 rounded-lg overflow-hidden bg-gray-800 shadow-lg'
            >
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
                <div className='flex gap-2'>
                  <button onClick={() => handleAddToCart(movie)} className=' p-1 mt-2 border text-sm rounded-md text-white'>
                    Add to Cart
                  </button>
                  <button 
                    onClick={() => handleClick(movie.title)}
                    className='bg-yellow-400 p-1 mt-2 border rounded-md text-black font-bold'>
                    Book now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
