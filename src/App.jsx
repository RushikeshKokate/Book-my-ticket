import { useEffect, useState } from 'react';
import Navbar from './ui/Navbar';
import './App.css';
import Home from './ui/Home';
import { Route, Routes } from 'react-router-dom';
import TheaterPage from './ui/TheaterPage';
import ContactUsPage from './ui/ContactUsPage';
import MovieCard from './ui/MovieCard';
import Seat from './ui/Seat';
import Payment from './ui/Payment';
import Sucess from './ui/Sucess';


function App() {
  const [search, setSearch] = useState('');
  const [itemInCart, setItemInCart] = useState(0);
  const [trigger, setTrigger] = useState()

  const takeSearchInput = (inputs) => {
    setSearch(inputs);
  };

  const itemCount = (count) => {
    setItemInCart(count);
  };

  

  return (
    <div>
      <Navbar itemInCart={itemInCart}  takeSearchInput={takeSearchInput} />
      <Routes>
        <Route path='/' element={<Home count={itemCount}  search={search} />} />
        <Route path='/Theater' element={<TheaterPage />} />
        <Route path='/ContactUs' element={<ContactUsPage />} />
        <Route path='/Movie' element={<MovieCard />} />
        <Route path='/Seat' element={<Seat />} />
        <Route path='/Payment' element={<Payment />} />
        <Route path='/Sucess' element={<Sucess />} />
        
      </Routes>
    </div>
  );
}

export default App;
