import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { TiThMenu } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const Navbar = ({ takeSearchInput, itemInCart  }) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState('');

  const handleChange = (inputs) => {
    setData(inputs);
    takeSearchInput(inputs);
  };

  

  return (
    <>
      <nav className="p-4 bg-black sticky top-0 z-50">
        <div className="hidden lg:flex items-center">
          <h2 className="text-gray-100 font-bold text-2xl">TicketsFORyou</h2>
          <ul className="gap-6 ml-8 flex">
            <li className="text-gray-100 font-semibold cursor-pointer hover:text-gray-400">
              <Link to="/">Home</Link>
            </li>
            <li className="text-gray-100 font-semibold cursor-pointer hover:text-gray-400">
              <Link to="/Theater">Book your theater</Link>
            </li>
            <li className="text-gray-100 font-semibold cursor-pointer hover:text-gray-400">
              <Link to="/ContactUs">Contact Us</Link>
            </li>
          </ul>
          <Link className="flex ml-auto text-gray-100 cursor-pointer hover:text-gray-400" to="/Cart">
            <FaShoppingCart className="text-gray-100 cursor-pointer hover:text-gray-400" aria-label="Shopping Cart" />
            
          </Link>
          <input
            type="text"
            placeholder="Search movies here..."
            className="ml-4 w-1/4 h-10 border border-gray-600 rounded-md p-2 bg-gray-800 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-gray-400"
            value={data}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>

        <div className="flex lg:hidden justify-between items-center">
          <h2 className="text-gray-100 font-bold text-lg">TicketsFORyou</h2>
          <div className="flex gap-4">
            <Link className="ml-auto text-gray-100 cursor-pointer hover:text-gray-400" to="/Cart">
              <FaShoppingCart className="text-gray-100 cursor-pointer hover:text-gray-400" aria-label="Shopping Cart" />
               
            </Link>
            <button onClick={() => setOpen(!open)}>
              <TiThMenu className="text-gray-100 cursor-pointer hover:text-gray-400" aria-label="menu" />
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div className="h-auto py-28 w-full flex flex-col justify-center items-center bg-black text-gray-100 space-y-6 gap-10">
          <Link to="/" onClick={() => setOpen(!open)} className="text-xl font-bold hover:text-gray-400 transition duration-300">
            Home
          </Link>
          <Link to="/Theater" onClick={() => setOpen(!open)} className="text-xl font-bold hover:text-gray-400 transition duration-300">
            Book your theater
          </Link>
          <Link to="/contact" onClick={() => setOpen(!open)} className="text-xl font-bold hover:text-gray-400 transition duration-300">
            Contact Us
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
