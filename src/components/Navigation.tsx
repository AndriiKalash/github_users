import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <div className="flex justify-between items-center h-[50px] shadow-md bg-gray-500 text-white px-5">
    <h3 className="font-bold">Github Search</h3>
    <span>
      <Link className="mr-5" to="/">
        Home
      </Link>
      <Link to="/favourites">Favourites</Link>
    </span>
  </div>
);

export default Navigation;
