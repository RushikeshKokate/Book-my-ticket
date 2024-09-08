import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { movies } from '../data.json';

const MovieCard = () => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  

  useEffect(() => {
    if (location.state?.title) {
      const newMovies = movies.filter((item) =>
        item.title.toLowerCase().includes(location.state.title.toLowerCase())
      );
      setFilteredMovies(newMovies);
    }
  }, [location.state]);

  const handleTimeClick = (time, index) => {
    setSelectedTime(time);
    setSelectedTimeIndex(index);
    console.log(`Selected time: ${time}`);
  };

  const onSubmit = (movie) => {
    if(selectedDate && selectedTime){
    navigate('/Seat', {
      state: { 
        selectedTime: selectedTime,
         selectedDate: selectedDate, 
         title: movie.title,
         theater:movie.theatres[0].name
         },
    });
  }else{
    alert('Fill the details')
  }
  };

  return (
    <div className="text-white p-6 min-h-screen">
      {filteredMovies.length > 0 ? (
        filteredMovies.map((movie) => (
          <div key={movie.id} className="bg-gray-800 p-4 rounded-lg mb-6 shadow-lg">
           <span className='block text-3xl font-semibold mb-2 text-yellow-400'>{movie.theatres[0].name}</span>
            <h1 className="text-2xl font-bold mb-2">{movie.title}</h1>
            <p className="text-gray-300 mb-4">{movie.description}</p>
            <h2 className="text-xl font-semibold mb-2">Watch Trailer</h2>
            {movie.trailerUrl ? (
              <div className="mb-4 flex flex-col md:flex-row">
                <iframe
                  className="w-full md:w-1/2 h-64 md:h-72"
                  src={movie.trailerUrl}
                  title={`Trailer for ${movie.title}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <div className="mt-4 md:ml-10 md:mt-2 w-full md:w-1/2">
                  <div className="w-full sm:w-1/2 ">
                      <label htmlFor="dateInput" className="block text-lg font-medium mb-2 text-gray-300">
                        Select Date
                      </label>
                      <input
                        type="date"
                        id="dateInput"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full p-3 rounded-md border-2 border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-600"
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 items-center mt-4">
                      <h1>Select Time</h1>
                      {movie.showtimes.map((time, index) => {
                        const timeOnly = time.split('T')[1];
                        return (
                          <div
                            key={index}
                            className={`cursor-pointer p-2 border rounded-md mb-2 sm:mb-0 ${selectedTimeIndex === index ? 'bg-gray-900' : 'bg-gray-700'}`}
                            onClick={() => handleTimeClick(timeOnly, index)}
                          >
                            {timeOnly}
                          </div>
                        );
                      })}
                    </div>
                    <div className="mt-4">
                      <button
                        onClick={() => onSubmit(movie)}
                        className="border rounded-md p-4 bg-green-700 w-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        Book Tickets
                      </button>
                    </div>
                  </div>
                </div>
            ) : (
              <p className="text-red-500">Trailer not available.</p>
            )}
          </div>
        ))
      ) : (
        <p className="text-red-500">No movies found matching the criteria.</p>
      )}
    </div>
  );
};

export default MovieCard;
