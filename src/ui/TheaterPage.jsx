import React from 'react';
import { movies } from '../data.json';
import { useNavigate } from 'react-router-dom';
 

const TheaterPage = () => {
 const navigate = useNavigate()
  const formatDate = (isoDate) => {
    const dateObject = new Date(isoDate);
    return dateObject.toLocaleString('en-US', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleClick =(title)=>{
    navigate('/Movie', {state:{title:title }})
  }

  return (
    <div className='text-white p-6 bg-black min-h-screen' >
      <h1 className='text-3xl font-bold mb-10'>Theater and Movies</h1>
      {movies && movies.map((movie) => (
        <div key={movie.id}
        onClick={()=>handleClick(movie.title)}
         className='mb-8 p-6 bg-gray-800 rounded-lg shadow-lg'>
          <span className='block text-3xl font-semibold mb-2 text-yellow-400'>{movie.theatres[0].name}</span>
          <span className='text-2xl font-bold mb-4'>{movie.title}</span>
        </div>
      ))}
    </div>
  );
};

export default TheaterPage;
